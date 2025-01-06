/*
  # Add unique constraints for questionnaire tables

  1. Changes
    - Add unique constraints on user_id for all questionnaire tables
    - Remove any duplicate rows before adding constraints
    - Ensure data integrity for upsert operations

  2. Security
    - Maintains existing RLS policies
*/

-- Remove duplicates and add unique constraint for childhood table
DELETE FROM questionnaire_childhood a USING (
  SELECT DISTINCT ON (user_id) id, user_id
  FROM questionnaire_childhood
  ORDER BY user_id, updated_at DESC
) b WHERE a.user_id = b.user_id AND a.id != b.id;

ALTER TABLE questionnaire_childhood
  DROP CONSTRAINT IF EXISTS questionnaire_childhood_user_id_key,
  ADD CONSTRAINT questionnaire_childhood_user_id_key UNIQUE (user_id);

-- Remove duplicates and add unique constraint for family table
DELETE FROM questionnaire_family a USING (
  SELECT DISTINCT ON (user_id) id, user_id
  FROM questionnaire_family
  ORDER BY user_id, updated_at DESC
) b WHERE a.user_id = b.user_id AND a.id != b.id;

ALTER TABLE questionnaire_family
  DROP CONSTRAINT IF EXISTS questionnaire_family_user_id_key,
  ADD CONSTRAINT questionnaire_family_user_id_key UNIQUE (user_id);

-- Remove duplicates and add unique constraint for career table
DELETE FROM questionnaire_career a USING (
  SELECT DISTINCT ON (user_id) id, user_id
  FROM questionnaire_career
  ORDER BY user_id, updated_at DESC
) b WHERE a.user_id = b.user_id AND a.id != b.id;

ALTER TABLE questionnaire_career
  DROP CONSTRAINT IF EXISTS questionnaire_career_user_id_key,
  ADD CONSTRAINT questionnaire_career_user_id_key UNIQUE (user_id);

-- Remove duplicates and add unique constraint for relationships table
DELETE FROM questionnaire_relationships a USING (
  SELECT DISTINCT ON (user_id) id, user_id
  FROM questionnaire_relationships
  ORDER BY user_id, updated_at DESC
) b WHERE a.user_id = b.user_id AND a.id != b.id;

ALTER TABLE questionnaire_relationships
  DROP CONSTRAINT IF EXISTS questionnaire_relationships_user_id_key,
  ADD CONSTRAINT questionnaire_relationships_user_id_key UNIQUE (user_id);

-- Remove duplicates and add unique constraint for life lessons table
DELETE FROM questionnaire_life_lessons a USING (
  SELECT DISTINCT ON (user_id) id, user_id
  FROM questionnaire_life_lessons
  ORDER BY user_id, updated_at DESC
) b WHERE a.user_id = b.user_id AND a.id != b.id;

ALTER TABLE questionnaire_life_lessons
  DROP CONSTRAINT IF EXISTS questionnaire_life_lessons_user_id_key,
  ADD CONSTRAINT questionnaire_life_lessons_user_id_key UNIQUE (user_id);