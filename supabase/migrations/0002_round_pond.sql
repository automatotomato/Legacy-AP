/*
  # Create questionnaire tables

  1. New Tables
    - `questionnaire_childhood`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `birthplace` (text)
      - `earliest_memory` (text)
      - `childhood_home` (text)
      - `family_traditions` (text)
      - `school_experiences` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `questionnaire_family`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `family_background` (text)
      - `parents_story` (text)
      - `grandparents_story` (text)
      - `family_values` (text)
      - `family_secrets` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `questionnaire_career`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `first_job` (text)
      - `career_path` (text)
      - `achievements` (text)
      - `challenges` (text)
      - `mentors` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `questionnaire_relationships`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `significant_other` (text)
      - `meeting_story` (text)
      - `children` (text)
      - `friendships` (text)
      - `life_changing` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `questionnaire_life_lessons`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `life_philosophy` (text)
      - `biggest_lessons` (text)
      - `regrets` (text)
      - `proudest_moments` (text)
      - `legacy` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Childhood Questionnaire
CREATE TABLE questionnaire_childhood (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  birthplace text,
  earliest_memory text,
  childhood_home text,
  family_traditions text,
  school_experiences text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE questionnaire_childhood ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own childhood data"
  ON questionnaire_childhood
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Family Questionnaire
CREATE TABLE questionnaire_family (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  family_background text,
  parents_story text,
  grandparents_story text,
  family_values text,
  family_secrets text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE questionnaire_family ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own family data"
  ON questionnaire_family
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Career Questionnaire
CREATE TABLE questionnaire_career (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  first_job text,
  career_path text,
  achievements text,
  challenges text,
  mentors text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE questionnaire_career ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own career data"
  ON questionnaire_career
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Relationships Questionnaire
CREATE TABLE questionnaire_relationships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  significant_other text,
  meeting_story text,
  children text,
  friendships text,
  life_changing text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE questionnaire_relationships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own relationships data"
  ON questionnaire_relationships
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Life Lessons Questionnaire
CREATE TABLE questionnaire_life_lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  life_philosophy text,
  biggest_lessons text,
  regrets text,
  proudest_moments text,
  legacy text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE questionnaire_life_lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own life lessons data"
  ON questionnaire_life_lessons
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);