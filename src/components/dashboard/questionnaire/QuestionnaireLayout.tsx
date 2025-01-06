import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QuestionnaireProvider } from './context/QuestionnaireContext';
import QuestionnaireForm from './QuestionnaireForm';

export default function QuestionnaireLayout() {
  return (
    <QuestionnaireProvider>
      <Routes>
        <Route path=":section" element={<QuestionnaireForm />} />
      </Routes>
    </QuestionnaireProvider>
  );
}