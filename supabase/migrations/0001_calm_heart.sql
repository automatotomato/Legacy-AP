/*
  # Create leads table for demo form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text)
      - `location` (text)
      - `occupation` (text)
      - `email` (text)
      - `phone` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting new leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  occupation text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);