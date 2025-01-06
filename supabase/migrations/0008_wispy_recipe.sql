/*
  # Add missing fields to childhood questionnaire

  1. Changes
    - Add missing fields to questionnaire_childhood table:
      - birth_date
      - neighborhood
      - childhood_friends
      - favorite_games
      - family_vacations
      - childhood_pets
      - memorable_events

  2. Security
    - Maintains existing RLS policies
*/

-- Drop and recreate questionnaire_childhood table with all fields
DROP TABLE IF EXISTS questionnaire_childhood;
CREATE TABLE questionnaire_childhood (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  birthplace text,
  birth_date text,
  earliest_memory text,
  childhood_home text,
  neighborhood text,
  family_traditions text,
  school_experiences text,
  childhood_friends text,
  favorite_games text,
  family_vacations text,
  childhood_pets text,
  memorable_events text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE questionnaire_childhood ENABLE ROW LEVEL SECURITY;

-- Add RLS policy
CREATE POLICY "Users can manage their own childhood data"
  ON questionnaire_childhood
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Add updated_at trigger
CREATE TRIGGER update_childhood_timestamp
  BEFORE UPDATE ON questionnaire_childhood
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();