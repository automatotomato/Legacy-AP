import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import { supabase } from '../../lib/supabase';
import ErrorMessage from '../ui/ErrorMessage';

interface SignupFormProps {
  onSuccess: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  isGift: boolean;
  recipientFirstName?: string;
  recipientLastName?: string;
  recipientEmail?: string;
  recipientPhone?: string;
}

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    isGift: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Sign up with Supabase Auth
      await signUp(formData.email, formData.password);

      // Get the user ID from the session
      const { data: { session } } = await supabase.auth.getSession();
      const userId = session?.user?.id;

      if (!userId) throw new Error('Failed to get user ID');

      // Create user profile
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert([{
          user_id: userId,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          is_gift: formData.isGift,
          recipient_first_name: formData.recipientFirstName,
          recipient_last_name: formData.recipientLastName,
          recipient_email: formData.recipientEmail,
          recipient_phone: formData.recipientPhone
        }]);

      if (profileError) throw profileError;

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="isGift"
          name="isGift"
          checked={formData.isGift}
          onChange={handleChange}
          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
        />
        <label htmlFor="isGift" className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Gift className="w-4 h-4 text-emerald-600" />
          This is a gift for someone else
        </label>
      </div>

      {formData.isGift && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-4 border-t pt-4"
        >
          <h4 className="font-medium text-gray-900">Recipient Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="recipientFirstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="recipientFirstName"
                name="recipientFirstName"
                value={formData.recipientFirstName || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required={formData.isGift}
              />
            </div>
            <div>
              <label htmlFor="recipientLastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="recipientLastName"
                name="recipientLastName"
                value={formData.recipientLastName || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required={formData.isGift}
              />
            </div>
          </div>

          <div>
            <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="recipientEmail"
              name="recipientEmail"
              value={formData.recipientEmail || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required={formData.isGift}
            />
          </div>

          <div>
            <label htmlFor="recipientPhone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="recipientPhone"
              name="recipientPhone"
              value={formData.recipientPhone || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required={formData.isGift}
            />
          </div>
        </motion.div>
      )}

      {error && <ErrorMessage message={error} />}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 bg-emerald-600 text-white rounded-lg font-semibold
                 shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed
                 transform transition-all duration-200 ease-in-out"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </motion.form>
  );
}