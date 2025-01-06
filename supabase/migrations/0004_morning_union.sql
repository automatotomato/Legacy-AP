/*
  # Add collaboration support
  
  1. New Tables
    - `collaborations`
      - `id` (uuid, primary key)
      - `owner_id` (uuid, references auth.users)
      - `collaborator_id` (uuid, references auth.users)
      - `status` (text: 'pending', 'accepted', 'declined')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
  2. Security
    - Enable RLS on collaborations table
    - Add policies for owners and collaborators
*/

CREATE TABLE collaborations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES auth.users NOT NULL,
  collaborator_email text NOT NULL,
  collaborator_id uuid REFERENCES auth.users,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE collaborations ENABLE ROW LEVEL SECURITY;

-- Owners can manage their invitations
CREATE POLICY "Users can manage their own invitations"
  ON collaborations
  FOR ALL
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- Collaborators can view and update invitations sent to them
CREATE POLICY "Collaborators can view and update their invitations"
  ON collaborations
  FOR SELECT
  TO authenticated
  USING (collaborator_email = auth.jwt()->>'email');

-- Update policy for collaborators to accept/decline
CREATE POLICY "Collaborators can accept or decline invitations"
  ON collaborations
  FOR UPDATE
  TO authenticated
  USING (collaborator_email = auth.jwt()->>'email')
  WITH CHECK (collaborator_email = auth.jwt()->>'email');