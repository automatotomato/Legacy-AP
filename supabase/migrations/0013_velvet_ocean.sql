/*
  # Fix Remaining Column Names in Questionnaire Schema
  
  1. Changes
    - Ensure all column names match form field names exactly
    - Add any missing columns
    - Standardize column naming convention to camelCase
  
  2. Security
    - Maintain existing RLS policies
*/

-- Fix questionnaire_childhood table
ALTER TABLE questionnaire_childhood 
  RENAME COLUMN birth_date TO birthDate;

-- Fix questionnaire_family table
-- (Already fixed in previous migration)

-- Fix questionnaire_career table
-- (Already fixed in previous migration)

-- Fix questionnaire_relationships table
-- (Already fixed in previous migration)

-- Fix questionnaire_life_lessons table
-- (Already fixed in previous migration)

-- Add any missing columns with correct camelCase names
ALTER TABLE questionnaire_childhood
  ADD COLUMN IF NOT EXISTS birthDate text;

-- Ensure all tables have updated_at trigger
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_childhood_timestamp'
  ) THEN
    CREATE TRIGGER update_childhood_timestamp
      BEFORE UPDATE ON questionnaire_childhood
      FOR EACH ROW
      EXECUTE FUNCTION handle_questionnaire_update();
  END IF;
END $$;