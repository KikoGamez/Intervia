import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
      <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
    </svg>
  );
}

export default function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { language } = useLanguage();

  const texts = language === 'es' ? {
    loginTitle: 'Bienvenido de nuevo',
    loginSubtitle: 'Inicia sesión en tu cuenta',
    signUpTitle: 'Crear cuenta',
    signUpSubtitle: 'Regístrate para empezar gratis',
    email: 'Email',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',
    login: 'Iniciar sesión',
    signUp: 'Crear cuenta',
    orContinueWith: 'o continúa con',
    noAccount: '¿No tienes cuenta?',
    hasAccount: '¿Ya tienes cuenta?',
    createAccount: 'Regístrate',
    loginLink: 'Inicia sesión',
    google: 'Google',
    apple: 'Apple',
    microsoft: 'Microsoft',
  } : {
    loginTitle: 'Welcome back',
    loginSubtitle: 'Sign in to your account',
    signUpTitle: 'Create account',
    signUpSubtitle: 'Sign up to get started for free',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    forgotPassword: 'Forgot your password?',
    login: 'Sign in',
    signUp: 'Create account',
    orContinueWith: 'or continue with',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    createAccount: 'Sign up',
    loginLink: 'Sign in',
    google: 'Google',
    apple: 'Apple',
    microsoft: 'Microsoft',
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setIsSignUp(false); }}>
      <DialogContent className="sm:max-w-[420px] p-0 gap-0 border-none bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#7350ff] to-[#5a3fd4] px-8 pt-8 pb-6 text-center">
          <img src="/intervia-logo.png" alt="intervia.ai" className="h-[120px] mx-auto brightness-0 invert" />
        </div>

        <div className="px-8 py-6 space-y-5">
          {/* Social login buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
              <GoogleIcon />
              <span className="text-xs font-medium text-gray-700">{texts.google}</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
              <AppleIcon />
              <span className="text-xs font-medium text-gray-700">{texts.apple}</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
              <MicrosoftIcon />
              <span className="text-xs font-medium text-gray-700">{texts.microsoft}</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">{texts.orContinueWith}</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <div className="space-y-3">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder={texts.email}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7350ff]/30 focus:border-[#7350ff] transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={texts.password}
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7350ff]/30 focus:border-[#7350ff] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Confirm password (sign up only) */}
            {isSignUp && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={texts.confirmPassword}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7350ff]/30 focus:border-[#7350ff] transition-all"
                />
              </div>
            )}

            {/* Forgot password */}
            {!isSignUp && (
              <div className="text-right">
                <button className="text-xs text-[#7350ff] hover:text-[#5a3fd4] font-medium transition-colors">
                  {texts.forgotPassword}
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <Button className="w-full bg-[#7350ff] hover:bg-[#5a3fd4] text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#7350ff]/30">
            {isSignUp ? texts.signUp : texts.login}
          </Button>

          {/* Toggle sign up / login */}
          <p className="text-center text-sm text-gray-500">
            {isSignUp ? texts.hasAccount : texts.noAccount}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#7350ff] hover:text-[#5a3fd4] font-semibold transition-colors"
            >
              {isSignUp ? texts.loginLink : texts.createAccount}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
