import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ModalOverlay from '../ui/ModalOverlay';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  showSignupOption?: boolean;
}

export default function AuthModal({ 
  isOpen, 
  onClose, 
  onSuccess,
  showSignupOption = false
}: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(showSignupOption);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <ModalOverlay onClose={onClose} />
          
          <div className="fixed inset-0 z-[101] overflow-y-auto px-4 py-6 sm:py-12">
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 
                         text-left align-middle shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 p-2 -mr-2"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {isSignUp ? (
                  <SignupForm onSuccess={onSuccess} />
                ) : (
                  <LoginForm onSuccess={onSuccess} />
                )}

                {!showSignupOption && (
                  <p className="mt-4 text-center text-sm text-gray-600">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      {isSignUp ? 'Sign in' : 'Create one'}
                    </button>
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}