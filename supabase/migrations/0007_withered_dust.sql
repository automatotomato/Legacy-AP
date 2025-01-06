/*
  # Fix questionnaire table names

  1. Changes
    - Rename 'relations' to 'relationships' in table name
    - Rename 'life' to 'life_lessons' in table name
    - Add missing columns for all questionnaire tables

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Drop and recreate tables with correct names and columns
DROP TABLE IF EXISTS questionnaire_relationships;
CREATE TABLE questionnaire_relationships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  significant_other text,
  meeting_story text,
  relationship_growth text,
  children text,
  parenting_philosophy text,
  friendships text,
  community_ties text,
  mentoring text,
  relationships text,
  life_changing text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

DROP TABLE IF EXISTS questionnaire_life_lessons;
CREATE TABLE questionnaire_life_lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  philosophy text,
  values text,
  wisdom text,
  regrets text,
  proudest_moments text,
  challenges text,
  growth text,
  happiness text,
  purpose text,
  legacy text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS and add policies
ALTER TABLE questionnaire_relationships ENABLE ROW LEVEL SECURITY;
ALTER TABLE questionnaire_life_lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own relationships data"
  ON questionnaire_relationships
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own life lessons data"
  ON questionnaire_life_lessons
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Add triggers for updated_at
CREATE TRIGGER update_relationships_timestamp
  BEFORE UPDATE ON questionnaire_relationships
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();

CREATE TRIGGER update_life_lessons_timestamp
  BEFORE UPDATE ON questionnaire_life_lessons
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();