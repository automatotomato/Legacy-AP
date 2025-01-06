import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Mail, Check, X } from 'lucide-react';
import { useAuth } from '../../../lib/AuthContext';
import { supabase } from '../../../lib/supabase';
import { motion } from 'framer-motion';

interface Collaboration {
  id: string;
  owner_id: string;
  collaborator_email: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}

export default function CollaborationSection() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [sentInvites, setSentInvites] = useState<Collaboration[]>([]);
  const [receivedInvites, setReceivedInvites] = useState<Collaboration[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      fetchInvites();
    }
  }, [user]);

  const fetchInvites = async () => {
    // Fetch sent invites
    const { data: sent } = await supabase
      .from('collaborations')
      .select('*')
      .eq('owner_id', user?.id);

    if (sent) setSentInvites(sent);

    // Fetch received invites
    const { data: received } = await supabase
      .from('collaborations')
      .select('*')
      .eq('collaborator_email', user?.email);

    if (received) setReceivedInvites(received);
  };

  const sendInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Please enter an email address');
      return;
    }

    try {
      const { error: inviteError } = await supabase
        .from('collaborations')
        .insert([
          {
            owner_id: user?.id,
            collaborator_email: email,
          }
        ]);

      if (inviteError) throw inviteError;

      setSuccess('Invitation sent successfully!');
      setEmail('');
      fetchInvites();
    } catch (err) {
      setError('Failed to send invitation. Please try again.');
    }
  };

  const handleInviteResponse = async (id: string, accept: boolean) => {
    try {
      const { error: updateError } = await supabase
        .from('collaborations')
        .update({ status: accept ? 'accepted' : 'declined' })
        .eq('id', id);

      if (updateError) throw updateError;

      fetchInvites();
    } catch (err) {
      setError('Failed to update invitation. Please try again.');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Collaboration</h2>
        <p className="mt-1 text-gray-600">
          Invite family members to contribute to your memoir
        </p>
      </div>

      {/* Send Invitation Form */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <UserPlus className="w-5 h-5 text-emerald-600" />
          Send Invitation
        </h3>

        <form onSubmit={sendInvite} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter email address"
                />
              </div>
              <button
                type="submit"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Send Invite
              </button>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-emerald-600 text-sm">{success}</p>}
        </form>
      </div>

      {/* Sent Invitations */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sent Invitations</h3>
        {sentInvites.length > 0 ? (
          <div className="space-y-4">
            {sentInvites.map((invite) => (
              <div
                key={invite.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{invite.collaborator_email}</p>
                  <p className="text-sm text-gray-500">
                    Status: <span className="capitalize">{invite.status}</span>
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                  ${invite.status === 'accepted' ? 'bg-emerald-100 text-emerald-800' :
                    invite.status === 'declined' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'}`}>
                  {invite.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No invitations sent yet</p>
        )}
      </div>

      {/* Received Invitations */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Received Invitations</h3>
        {receivedInvites.length > 0 ? (
          <div className="space-y-4">
            {receivedInvites.map((invite) => (
              <div
                key={invite.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Invitation to collaborate
                  </p>
                  <p className="text-sm text-gray-500">
                    Status: <span className="capitalize">{invite.status}</span>
                  </p>
                </div>
                {invite.status === 'pending' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleInviteResponse(invite.id, true)}
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleInviteResponse(invite.id, false)}
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No invitations received</p>
        )}
      </div>
    </div>
  );
}