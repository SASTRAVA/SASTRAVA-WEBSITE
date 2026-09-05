import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Lock, User } from 'lucide-react';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';
import { login } from '../../services/authService';

/**
 * Reusable LoginForm
 * Renders a professional sign-in form for a given auth role.
 * Uses the existing SASTRAVA design system (FormInput, Button).
 * No credentials are hardcoded — submission goes through the
 * authService, which is a clean, replaceable integration point.
 */
export const LoginForm = ({ role, title, accent = 'gold' }) => {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const isGold = accent === 'gold';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const nextErrors = {};
    if (!formData.identifier.trim()) nextErrors.identifier = 'This field is required';
    if (!formData.password) nextErrors.password = 'Password is required';
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    const result = await login(role, formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatus('success');
      setStatusMessage('Signed in successfully.');
    } else {
      setStatus('error');
      setStatusMessage(result.message || 'Unable to sign in. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full max-w-md mx-auto ${isGold ? 'glass-gold' : 'glass-peacock'} gloss
        p-8 md:p-10 rounded-2xl border ${isGold ? 'border-gold-DEFAULT/25' : 'border-peacock-light/30'}
        backdrop-blur-sm md:backdrop-blur-glass`}
      style={{
        boxShadow: isGold
          ? '0 0 24px rgba(201, 168, 76, 0.15), inset 0 0 15px rgba(201, 168, 76, 0.04)'
          : '0 0 24px rgba(20, 184, 166, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.03)',
      }}
    >
      <div className="flex flex-col items-center mb-8">
        <div className={`mb-4 p-4 rounded-2xl ${isGold ? 'bg-gold-DEFAULT/10' : 'bg-peacock-light/10'}`}>
          <Lock className={`w-8 h-8 ${isGold ? 'text-gold-light' : 'text-peacock-light'}`} strokeWidth={1.75} />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-offwhite text-center">{title}</h1>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <p className="text-emerald-200 text-sm">{statusMessage}</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-6 p-4 rounded-xl bg-red-950/30 border border-red-500/30 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-red-200 text-sm">{statusMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Email or ID"
          name="identifier"
          type="text"
          placeholder="you@sastrava.com"
          value={formData.identifier}
          onChange={handleChange}
          error={errors.identifier}
          required
          autoComplete="username"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
          autoComplete="current-password"
        />

        <Button
          type="submit"
          variant={isGold ? 'primary' : 'secondary'}
          size="lg"
          className="w-full mt-2"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          <User className="w-5 h-5" />
          Sign In
        </Button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
