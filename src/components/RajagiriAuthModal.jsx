import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, X, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Official Google Logo SVG Component
const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

// Helper to decode JWT token returned by Google Identity Services
const decodeJwtPayload = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error('Failed to parse Google JWT token:', err);
    return null;
  }
};

export const RajagiriAuthModal = ({ onTriggerToast }) => {
  const { isAuthModalOpen, closeAuthModal, completeAuth } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const GOOGLE_CLIENT_ID =
    import.meta.env.VITE_GOOGLE_CLIENT_ID ||
    '666221517622-keeo45hfi0s0cv9vpde147aj91k8f88o.apps.googleusercontent.com';

  // Initialize official Google Identity Services SDK button
  useEffect(() => {
    if (!isAuthModalOpen) return;

    const initGoogleGSI = () => {
      if (window.google?.accounts?.id) {
        try {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleCredentialResponse,
            auto_select: false,
          });

          const btnContainer = document.getElementById('googleSignInBtnDiv');
          if (btnContainer) {
            btnContainer.innerHTML = '';
            window.google.accounts.id.renderButton(btnContainer, {
              theme: 'filled_blue',
              size: 'large',
              type: 'standard',
              shape: 'pill',
              text: 'signin_with',
              logo_alignment: 'left',
              width: 320,
            });
          }
        } catch (err) {
          console.warn('Google Identity Services initialization notice:', err);
        }
      }
    };

    const timer = setTimeout(initGoogleGSI, 200);
    return () => clearTimeout(timer);
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  // Process Google OAuth Credential Token
  const handleGoogleCredentialResponse = (response) => {
    if (!response?.credential) {
      setError('Google Sign-In failed. Please try again.');
      return;
    }

    const payload = decodeJwtPayload(response.credential);
    if (!payload || !payload.email) {
      setError('Could not retrieve email from Google Workspace credential.');
      return;
    }

    const authenticatedEmail = payload.email.toLowerCase();
    if (!authenticatedEmail.endsWith('@rajagiri.edu')) {
      setError(`Access Denied: ${authenticatedEmail} is not an authorized @rajagiri.edu Google Workspace account.`);
      return;
    }

    completeAuth(authenticatedEmail);
    if (onTriggerToast) {
      onTriggerToast({
        type: 'success',
        title: 'Google Workspace Verified!',
        message: `Welcome, ${authenticatedEmail}! Download access granted.`,
      });
    }
  };

  // Trigger Google Identity Services Token Client OAuth Flow
  const handleGoogleSSOClick = () => {
    setError('');

    if (window.google?.accounts?.oauth2) {
      try {
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: GOOGLE_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          hd: 'rajagiri.edu',
          callback: async (tokenResponse) => {
            if (tokenResponse && tokenResponse.access_token) {
              setLoading(true);
              try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });
                const userInfo = await res.json();
                setLoading(false);

                if (userInfo?.email) {
                  const userEmail = userInfo.email.toLowerCase();
                  if (userEmail.endsWith('@rajagiri.edu')) {
                    completeAuth(userEmail);
                    if (onTriggerToast) {
                      onTriggerToast({
                        type: 'success',
                        title: 'Google Account Verified!',
                        message: `Authenticated as ${userEmail} via Google Workspace.`,
                      });
                    }
                  } else {
                    setError(`Access Denied: ${userEmail} is not an authorized @rajagiri.edu account.`);
                  }
                } else {
                  setError('Could not retrieve email profile from Google OAuth.');
                }
              } catch (err) {
                setLoading(false);
                console.error('Google UserInfo API error:', err);
                setError('Failed to verify user profile with Google API.');
              }
            }
          },
        });
        client.requestAccessToken();
        return;
      } catch (err) {
        console.warn('Google Token Client notice:', err);
      }
    }

    // Fallback prompt using GIS One Tap / Standard Prompt
    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[var(--rl-bg)] border border-[#27a3ff]/30 shadow-[0_0_50px_rgba(39,163,255,0.2)] text-[var(--rl-heading)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--rl-muted)] hover:text-[var(--rl-heading)] hover:bg-[var(--rl-surface-hover)] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#27a3ff]/20 to-[#43ae47]/20 border border-[#27a3ff]/40 flex items-center justify-center mb-3 shadow-lg shadow-[#27a3ff]/10">
            <ShieldCheck className="w-7 h-7 text-[#27a3ff]" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#27a3ff]/10 border border-[#27a3ff]/30 text-[#27a3ff] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Lock className="w-3 h-3" />
            <span>Rajagiri Employee Authentication</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--rl-heading)]">
            Sign In with Rajagiri ID
          </h3>
          <p className="text-xs text-[var(--rl-muted)] mt-1 max-w-xs">
            Downloading official RLabZ brand assets requires sign-in with your official Rajagiri Google Workspace account (<code className="text-[#27a3ff]">@rajagiri.edu</code>).
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Single Primary Google Workspace SSO Action */}
        <div className="py-4 space-y-3 flex flex-col items-center">
          {/* Rendered Google Identity Services Button */}
          <div id="googleSignInBtnDiv" className="w-full flex justify-center py-1"></div>

          {/* Full-width Glass Button Trigger */}
          <button
            onClick={handleGoogleSSOClick}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-2xl bg-white text-slate-800 hover:bg-slate-100 font-extrabold text-xs shadow-xl transition border border-slate-200 disabled:opacity-50"
          >
            <GoogleIcon />
            <span>{loading ? 'Authenticating with Google...' : 'Sign in with Google (@rajagiri.edu)'}</span>
          </button>
        </div>

        {/* Footer Security Disclaimer */}
        <div className="mt-6 pt-4 border-t border-[var(--rl-surface-border)] text-center text-[10px] text-[var(--rl-muted)] flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#43ae47]" />
          <span>Rajagiri Educational Institutions Official Brand Security Portal</span>
        </div>

      </div>
    </div>
  );
};

export default RajagiriAuthModal;
