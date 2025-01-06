/*
  # Fix questionnaire schema and add missing columns

  1. Changes
    - Add missing columns to questionnaire tables
    - Update column types and constraints
    - Add indexes for performance
  
  2. Security
    - Maintain RLS policies
    - Add row-level security for all tables
*/

-- Drop and recreate questionnaire_family table with all fields
DROP TABLE IF EXISTS questionnaire_family;
CREATE TABLE questionnaire_family (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  family_origins text,
  parents_story text,
  family_values text,
  grandparents_legacy text,
  family_traditions text,
  extended_family text,
  family_challenges text,
  family_resilience text,
  family_dynamics text,
  family_lessons text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Drop and recreate questionnaire_career table with all fields
DROP TABLE IF EXISTS questionnaire_career;
CREATE TABLE questionnaire_career (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  early_aspirations text,
  first_job text,
  career_path text,
  mentors text,
  achievements text,
  challenges text,
  work_life_balance text,
  leadership text,
  career_lessons text,
  legacy text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE questionnaire_family ENABLE ROW LEVEL SECURITY;
ALTER TABLE questionnaire_career ENABLE ROW LEVEL SECURITY;

-- Add RLS policies
CREATE POLICY "Users can manage their own family data"
  ON questionnaire_family
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own career data"
  ON questionnaire_career
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Add updated_at triggers
CREATE TRIGGER update_family_timestamp
  BEFORE UPDATE ON questionnaire_family
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();

CREATE TRIGGER update_career_timestamp
  BEFORE UPDATE ON questionnaire_career
  FOR EACH ROW
  EXECUTE FUNCTION handle_questionnaire_update();

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_questionnaire_childhood_user_id ON questionnaire_childhood(user_id);
CREATE INDEX IF NOT EXISTS idx_questionnaire_family_user_id ON questionnaire_family(user_id);
CREATE INDEX IF NOT EXISTS idx_questionnaire_career_user_id ON questionnaire_career(user_id);
CREATE INDEX IF NOT EXISTS idx_questionnaire_relationships_user_id ON questionnaire_relationships(user_id);
CREATE INDEX IF NOT EXISTS idx_questionnaire_life_lessons_user_id ON questionnaire_life_lessons(user_id);