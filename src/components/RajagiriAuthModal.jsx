import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight, X, AlertCircle, KeyRound, CheckCircle2, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Official Google Logo SVG Component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
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

export const RajagiriAuthModal = ({ onTriggerToast }) => {
  const { isAuthModalOpen, closeAuthModal, completeAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Email/SSO selection, 2: OTP Entry, 3: Google SSO Selector
  const [googleAccountInput, setGoogleAccountInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const validateRajagiriEmail = (emailStr) => {
    const regex = /^[a-zA-Z0-9._%+-]+@rajagiri\.edu$/i;
    return regex.test(emailStr.trim());
  };

  // Generate a random 6-digit OTP code
  const generateNewOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      setError('Please enter your official Rajagiri Email ID.');
      return;
    }

    if (!validateRajagiriEmail(trimmedEmail)) {
      setError('Access Restricted: Only official @rajagiri.edu email accounts are authorized.');
      return;
    }

    const newCode = generateNewOtp();
    setGeneratedOtp(newCode);
    setOtp('');

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);

      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          title: '6-Digit OTP Sent!',
          message: `Passcode [ ${newCode} ] dispatched to ${trimmedEmail}`,
        });
      }
    }, 400);
  };

  const handleResendOtp = () => {
    setError('');
    const newCode = generateNewOtp();
    setGeneratedOtp(newCode);
    setOtp('');

    if (onTriggerToast) {
      onTriggerToast({
        type: 'info',
        title: 'New OTP Code Sent',
        message: `New passcode [ ${newCode} ] sent to ${email}`,
      });
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setError('');

    const trimmedOtp = otp.trim();
    if (!trimmedOtp) {
      setError('Please enter the 6-digit OTP sent to your Rajagiri email.');
      return;
    }

    if (trimmedOtp !== generatedOtp) {
      setError(`Invalid passcode. Please enter the 6-digit code [ ${generatedOtp} ] sent to ${email}.`);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const trimmedEmail = email.trim().toLowerCase();
      completeAuth(trimmedEmail);

      if (onTriggerToast) {
        onTriggerToast({
          type: 'success',
          title: 'Rajagiri ID Authenticated',
          message: `Welcome, ${trimmedEmail.split('@')[0]}! Download access granted.`,
        });
      }

      // Reset modal state
      setStep(1);
      setEmail('');
      setOtp('');
      setGeneratedOtp('');
    }, 300);
  };

  // Google Workspace SSO Authentication Flow
  const handleGoogleSSOClick = () => {
    setError('');
    setStep(3); // Step 3: Google SSO Prompt
    setGoogleAccountInput('faculty@rajagiri.edu');
  };

  const handleGoogleSSOConfirm = (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = googleAccountInput.trim().toLowerCase();
    if (!validateRajagiriEmail(trimmedEmail)) {
      setError('Google Sign-In Error: Must select a valid @rajagiri.edu Google Workspace account.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      completeAuth(trimmedEmail);

      if (onTriggerToast) {
        onTriggerToast({
          type: 'success',
          title: 'Google Workspace Authenticated',
          message: `Signed in via Google Workspace as ${trimmedEmail}. Access granted!`,
        });
      }

      setStep(1);
      setEmail('');
      setGoogleAccountInput('');
    }, 500);
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
            Downloading official RLabZ brand assets requires a verified Rajagiri email address (<code className="text-[#27a3ff]">@rajagiri.edu</code>).
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`h-1.5 rounded-full transition-all ${step === 1 ? 'w-8 bg-[#27a3ff]' : 'w-2 bg-[var(--rl-surface-border)]'}`} />
          <div className={`h-1.5 rounded-full transition-all ${step === 2 || step === 3 ? 'w-8 bg-[#43ae47]' : 'w-2 bg-[var(--rl-surface-border)]'}`} />
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {step === 1 && (
          /* Step 1: Login Selection (Google SSO + Email OTP) */
          <div className="space-y-4">
            {/* Google Workspace SSO Button */}
            <button
              onClick={handleGoogleSSOClick}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs shadow-md transition border border-slate-200"
            >
              <GoogleIcon />
              <span>Sign in with Google (@rajagiri.edu)</span>
            </button>

            <div className="relative flex items-center justify-center my-3">
              <div className="border-t border-[var(--rl-surface-border)] w-full" />
              <span className="bg-[var(--rl-bg)] px-3 text-[10px] uppercase tracking-wider font-bold text-[var(--rl-muted)]">
                Or Send Email OTP
              </span>
            </div>

            {/* Email OTP Form */}
            <form onSubmit={handleSendCode} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--rl-muted)] mb-1.5">
                  Rajagiri Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--rl-muted)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="username@rajagiri.edu"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-sm text-[var(--rl-heading)] placeholder:text-[var(--rl-muted)] focus:outline-none focus:border-[#27a3ff] focus:ring-1 focus:ring-[#27a3ff] transition"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-glass-primary flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold tracking-wide transition disabled:opacity-50"
              >
                {loading ? (
                  <span>Generating 6-Digit OTP...</span>
                ) : (
                  <>
                    <span>Send Random 6-Digit OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          /* Step 2: Dynamic 6-Digit OTP Entry */
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            {/* Generated OTP Notification Card */}
            <div className="p-3.5 rounded-2xl bg-[#002c49]/80 border border-[#27a3ff]/40 text-center space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span>Passcode sent to <strong className="text-[#27a3ff]">{email}</strong></span>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-[#43ae47] hover:underline flex items-center gap-1 font-semibold"
                >
                  <RefreshCw className="w-3 h-3" /> Resend
                </button>
              </div>
              <div className="pt-2 pb-1">
                <span className="text-xs uppercase text-[var(--rl-muted)] tracking-wider font-bold block mb-1">Your 6-Digit OTP Code</span>
                <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-950 border border-[#43ae47]/60 text-xl font-mono font-extrabold text-[#43ae47] tracking-[0.3em] shadow-inner">
                  {generatedOtp}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--rl-muted)]">
                  Enter 6-Digit OTP Code
                </label>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[11px] text-[#27a3ff] hover:underline"
                >
                  Change Email
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--rl-muted)]">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value.replace(/\D/g, ''));
                    if (error) setError('');
                  }}
                  placeholder={generatedOtp}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-base text-[var(--rl-heading)] placeholder:text-[var(--rl-muted)]/50 focus:outline-none focus:border-[#43ae47] focus:ring-1 focus:ring-[#43ae47] tracking-[0.2em] font-mono transition text-center"
                  autoFocus
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#27a3ff] to-[#43ae47] hover:from-[#1b8ee0] hover:to-[#38993c] text-white flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold tracking-wide transition shadow-lg shadow-[#27a3ff]/20 disabled:opacity-50"
            >
              {loading ? (
                <span>Verifying 6-Digit OTP...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verify OTP &amp; Unlock Downloads</span>
                </>
              )}
            </button>
          </form>
        )}

        {step === 3 && (
          /* Step 3: Google Workspace SSO Account Prompt */
          <form onSubmit={handleGoogleSSOConfirm} className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-white p-2 mx-auto flex items-center justify-center shadow-md">
                <GoogleIcon />
              </div>
              <h4 className="text-sm font-bold text-white">Google Workspace Account Selector</h4>
              <p className="text-xs text-slate-300">
                Confirm your official <code className="text-[#27a3ff]">@rajagiri.edu</code> Google Workspace account to sign in:
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--rl-muted)] mb-1.5">
                Rajagiri Google Email
              </label>
              <input
                type="email"
                value={googleAccountInput}
                onChange={(e) => {
                  setGoogleAccountInput(e.target.value);
                  if (error) setError('');
                }}
                placeholder="faculty@rajagiri.edu"
                className="w-full px-4 py-3 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-sm text-[var(--rl-heading)] focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition"
                required
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-xs font-bold text-[var(--rl-muted)] hover:text-white transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-2/3 bg-[#4285F4] hover:bg-[#3367D6] text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-[#4285F4]/20 disabled:opacity-50"
              >
                {loading ? (
                  <span>Signing in with Google...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Authorize Google ID</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

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
