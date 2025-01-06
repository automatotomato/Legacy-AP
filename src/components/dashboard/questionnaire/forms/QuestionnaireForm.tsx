import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormProgress } from '../../../../hooks/useFormProgress';
import SaveStatus from '../components/SaveStatus';
import QuestionnaireSection from '../components/QuestionnaireSection';
import { enhancedQuestions } from '../../../../data/enhancedQuestions';

interface QuestionnaireFormProps {
  section: keyof typeof enhancedQuestions;
  tableName: string;
}

export default function QuestionnaireForm({ section, tableName }: QuestionnaireFormProps) {
  const { savedData, saveStatus, saveData } = useFormProgress(tableName);
  const methods = useForm({
    defaultValues: savedData || {}
  });

  const onSubmit = async (data: any) => {
    await saveData(data);
  };

  return (
    <FormProvider {...methods}>
      <form onChange={methods.handleSubmit(onSubmit)} className="space-y-8">
        <QuestionnaireSection questions={enhancedQuestions[section]} />
        <SaveStatus status={saveStatus} isDirty={methods.formState.isDirty} />
      </form>
    </FormProvider>
  );
}