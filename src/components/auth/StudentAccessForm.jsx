import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Loader2, Mail, Phone, ShieldCheck } from 'lucide-react';
import { requestPhoneOtp, verifyPhoneOtp, getGoogleAuthUrl } from '../../services/authService';

const initialForm = { phone: '', otp: '', name: '', email: '' };

export const StudentAccessForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState('phone');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const returnTo = searchParams.get('returnTo') || '/student-dashboard';
  const course = searchParams.get('course');

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setStatus(null);
  };

  const handleGoogleLogin = () => {
    const url = getGoogleAuthUrl(returnTo, course);
    if (!url) {
      setStatus({ type: 'error', message: 'Google sign-in is not configured yet. Please use phone verification or contact SASTRAVA.' });
      return;
    }
    window.location.assign(url);
  };

  const handleRequestOtp = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const result = await requestPhoneOtp(form.phone);
    setIsSubmitting(false);
    if (!result.success) {
      setStatus({ type: 'error', message: result.message });
      return;
    }
    setStep('otp');
    setStatus({ type: 'success', message: 'Verification code sent. Enter the code received on your phone.' });
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const result = await verifyPhoneOtp({
      phone: form.phone,
      otp: form.otp,
      name: form.name,
      email: form.email,
      returnTo,
      course,
    });
    setIsSubmitting(false);
    if (!result.success) {
      setStatus({ type: 'error', message: result.message });
      return;
    }
    navigate(returnTo);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto glass-peacock gloss p-8 md:p-10 rounded-2xl border border-peacock-light/30 backdrop-blur-sm">
      <Link to="/login" className="inline-flex items-center gap-2 text-sm text-offwhite/60 hover:text-gold-light transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Login Options
      </Link>

      <div className="mb-8">
        <div className="inline-flex p-3 rounded-xl bg-peacock-light/10 mb-4">
          <ShieldCheck className="w-8 h-8 text-peacock-light" strokeWidth={1.75} />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-peacock-light mb-2">Learner access</p>
        <h1 className="text-2xl md:text-3xl font-bold text-offwhite">Start learning securely</h1>
        <p className="mt-3 text-sm leading-6 text-offwhite/65">
          Sign in with Google or verify your phone. A learner account is created on the first successful verification.
        </p>
        {course && <p className="mt-3 text-sm text-gold-light">Course selected: {course}</p>}
      </div>

      {status && (
        <div className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${status.type === 'error' ? 'bg-red-950/30 border-red-500/30 text-red-200' : 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'}`} role="status">
          {status.type === 'success' && <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
          <p className="text-sm">{status.message}</p>
        </div>
      )}

      <button type="button" onClick={handleGoogleLogin} className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-offwhite/20 bg-offwhite/5 px-5 py-3.5 text-sm font-semibold text-offwhite hover:border-gold-DEFAULT/50 hover:bg-offwhite/10 transition-colors">
        <Mail className="w-5 h-5 text-gold-light" />
        Continue with Google
      </button>

      <div className="flex items-center gap-3 my-7 text-xs uppercase tracking-[0.16em] text-offwhite/35">
        <span className="h-px flex-1 bg-offwhite/10" />
        or phone OTP
        <span className="h-px flex-1 bg-offwhite/10" />
      </div>

      {step === 'phone' ? (
        <form onSubmit={handleRequestOtp} className="space-y-5">
          <label className="block text-sm text-offwhite/75">
            Phone number
            <span className="relative mt-2 block">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-offwhite/40" />
              <input name="phone" type="tel" required value={form.phone} onChange={updateField} placeholder="+91 98765 43210" autoComplete="tel" className="w-full rounded-xl border border-offwhite/15 bg-navy-950/60 py-3.5 pl-11 pr-4 text-offwhite outline-none focus:border-peacock-light" />
            </span>
          </label>
          <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-peacock-light px-5 py-3.5 text-sm font-bold text-navy-950 hover:bg-peacock-green transition-colors disabled:opacity-60">
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Send verification code
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <label className="block text-sm text-offwhite/75">
            Verification code
            <input name="otp" inputMode="numeric" pattern="[0-9]{4,8}" required value={form.otp} onChange={updateField} placeholder="Enter your OTP" autoComplete="one-time-code" className="mt-2 w-full rounded-xl border border-offwhite/15 bg-navy-950/60 px-4 py-3.5 text-offwhite outline-none focus:border-peacock-light" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" value={form.name} onChange={updateField} placeholder="Full name" autoComplete="name" className="w-full rounded-xl border border-offwhite/15 bg-navy-950/60 px-4 py-3.5 text-offwhite outline-none focus:border-peacock-light" />
            <input name="email" type="email" value={form.email} onChange={updateField} placeholder="Email (optional)" autoComplete="email" className="w-full rounded-xl border border-offwhite/15 bg-navy-950/60 px-4 py-3.5 text-offwhite outline-none focus:border-peacock-light" />
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-peacock-light px-5 py-3.5 text-sm font-bold text-navy-950 hover:bg-peacock-green transition-colors disabled:opacity-60">
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Verify and continue
          </button>
          <button type="button" onClick={() => setStep('phone')} className="w-full text-sm text-offwhite/55 hover:text-gold-light transition-colors">Use a different phone number</button>
        </form>
      )}
    </div>
  );
};

export default StudentAccessForm;
