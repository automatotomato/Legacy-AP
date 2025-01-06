/*
  # Fix questionnaire duplicates and add constraints

  1. Changes
    - Remove duplicate entries keeping only the most recent one
    - Add unique constraints on user_id for all questionnaire tables
    - Add update triggers for timestamp management
  
  2. Tables Modified
    - questionnaire_childhood
    - questionnaire_family
    - questionnaire_career
    - questionnaire_relationships
    - questionnaire_life_lessons
*/

-- Function to handle questionnaire updates
CREATE OR REPLACE FUNCTION handle_questionnaire_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Clean up duplicates and add constraints for each table
DO $$
BEGIN
  -- Childhood questionnaire
  DELETE FROM questionnaire_childhood a USING (
    SELECT DISTINCT ON (user_id) id, user_id
    FROM questionnaire_childhood
    ORDER BY user_id, updated_at DESC
  ) b WHERE a.user_id = b.user_id AND a.id != b.id;
  
  ALTER TABLE questionnaire_childhood
    DROP CONSTRAINT IF EXISTS questionnaire_childhood_user_id_key,
    ADD CONSTRAINT questionnaire_childhood_user_id_key UNIQUE (user_id);

  DROP TRIGGER IF EXISTS update_childhood_timestamp ON questionnaire_childhood;
  CREATE TRIGGER update_childhood_timestamp
    BEFORE UPDATE ON questionnaire_childhood
    FOR EACH ROW
    EXECUTE FUNCTION handle_questionnaire_update();

  -- Family questionnaire
  DELETE FROM questionnaire_family a USING (
    SELECT DISTINCT ON (user_id) id, user_id
    FROM questionnaire_family
    ORDER BY user_id, updated_at DESC
  ) b WHERE a.user_id = b.user_id AND a.id != b.id;
  
  ALTER TABLE questionnaire_family
    DROP CONSTRAINT IF EXISTS questionnaire_family_user_id_key,
    ADD CONSTRAINT questionnaire_family_user_id_key UNIQUE (user_id);

  DROP TRIGGER IF EXISTS update_family_timestamp ON questionnaire_family;
  CREATE TRIGGER update_family_timestamp
    BEFORE UPDATE ON questionnaire_family
    FOR EACH ROW
    EXECUTE FUNCTION handle_questionnaire_update();

  -- Career questionnaire
  DELETE FROM questionnaire_career a USING (
    SELECT DISTINCT ON (user_id) id, user_id
    FROM questionnaire_career
    ORDER BY user_id, updated_at DESC
  ) b WHERE a.user_id = b.user_id AND a.id != b.id;
  
  ALTER TABLE questionnaire_career
    DROP CONSTRAINT IF EXISTS questionnaire_career_user_id_key,
    ADD CONSTRAINT questionnaire_career_user_id_key UNIQUE (user_id);

  DROP TRIGGER IF EXISTS update_career_timestamp ON questionnaire_career;
  CREATE TRIGGER update_career_timestamp
    BEFORE UPDATE ON questionnaire_career
    FOR EACH ROW
    EXECUTE FUNCTION handle_questionnaire_update();

  -- Relationships questionnaire
  DELETE FROM questionnaire_relationships a USING (
    SELECT DISTINCT ON (user_id) id, user_id
    FROM questionnaire_relationships
    ORDER BY user_id, updated_at DESC
  ) b WHERE a.user_id = b.user_id AND a.id != b.id;
  
  ALTER TABLE questionnaire_relationships
    DROP CONSTRAINT IF EXISTS questionnaire_relationships_user_id_key,
    ADD CONSTRAINT questionnaire_relationships_user_id_key UNIQUE (user_id);

  DROP TRIGGER IF EXISTS update_relationships_timestamp ON questionnaire_relationships;
  CREATE TRIGGER update_relationships_timestamp
    BEFORE UPDATE ON questionnaire_relationships
    FOR EACH ROW
    EXECUTE FUNCTION handle_questionnaire_update();

  -- Life lessons questionnaire
  DELETE FROM questionnaire_life_lessons a USING (
    SELECT DISTINCT ON (user_id) id, user_id
    FROM questionnaire_life_lessons
    ORDER BY user_id, updated_at DESC
  ) b WHERE a.user_id = b.user_id AND a.id != b.id;
  
  ALTER TABLE questionnaire_life_lessons
    DROP CONSTRAINT IF EXISTS questionnaire_life_lessons_user_id_key,
    ADD CONSTRAINT questionnaire_life_lessons_user_id_key UNIQUE (user_id);

  DROP TRIGGER IF EXISTS update_life_lessons_timestamp ON questionnaire_life_lessons;
  CREATE TRIGGER update_life_lessons_timestamp
    BEFORE UPDATE ON questionnaire_life_lessons
    FOR EACH ROW
    EXECUTE FUNCTION handle_questionnaire_update();
END $$;