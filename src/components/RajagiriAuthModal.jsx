import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight, X, AlertCircle, KeyRound, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const RajagiriAuthModal = ({ onTriggerToast }) => {
  const { isAuthModalOpen, closeAuthModal, completeAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Email, 2: OTP / Verification Code
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const validateRajagiriEmail = (emailStr) => {
    const regex = /^[a-zA-Z0-9._%+-]+@rajagiri\.edu$/i;
    return regex.test(emailStr.trim());
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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          title: 'Verification Code Sent',
          message: `Passcode sent to ${trimmedEmail}. (Enter 1234 or any 4 digits to verify)`,
        });
      }
    }, 600);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setError('');

    if (!otp || otp.trim().length < 4) {
      setError('Please enter the 4-digit verification code.');
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

      // Reset local modal state
      setStep(1);
      setEmail('');
      setOtp('');
    }, 600);
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
          <div className={`h-1.5 rounded-full transition-all ${step === 2 ? 'w-8 bg-[#43ae47]' : 'w-2 bg-[var(--rl-surface-border)]'}`} />
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {step === 1 ? (
          /* Step 1 Form: Email Input */
          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--rl-muted)] mb-1.5">
                Official Rajagiri Email Address
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
              <p className="text-[11px] text-[var(--rl-muted)] mt-1.5">
                Example: <span className="text-[var(--rl-heading)]">faculty@rajagiri.edu</span> or <span className="text-[var(--rl-heading)]">admin@rajagiri.edu</span>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-glass-primary flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold tracking-wide transition disabled:opacity-50"
            >
              {loading ? (
                <span>Sending Verification Code...</span>
              ) : (
                <>
                  <span>Continue to Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Step 2 Form: OTP Verification Code */
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--rl-muted)]">
                  Verification Passcode
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
                    setOtp(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter 1234"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-sm text-[var(--rl-heading)] placeholder:text-[var(--rl-muted)] focus:outline-none focus:border-[#43ae47] focus:ring-1 focus:ring-[#43ae47] tracking-widest font-mono transition"
                  autoFocus
                  required
                />
              </div>
              <p className="text-[11px] text-[var(--rl-muted)] mt-1.5">
                Sent to <span className="text-[#27a3ff] font-semibold">{email}</span>. Demo passcode: <code className="text-[#43ae47]">1234</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#27a3ff] to-[#43ae47] hover:from-[#1b8ee0] hover:to-[#38993c] text-white flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold tracking-wide transition shadow-lg shadow-[#27a3ff]/20 disabled:opacity-50"
            >
              {loading ? (
                <span>Verifying Rajagiri Credentials...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verify &amp; Unlock Downloads</span>
                </>
              )}
            </button>
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
