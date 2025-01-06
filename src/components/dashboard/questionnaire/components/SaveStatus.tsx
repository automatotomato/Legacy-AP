import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface SaveStatusProps {
  status: 'idle' | 'saving' | 'saved' | 'error';
  isDirty: boolean;
}

export default function SaveStatus({ status, isDirty }: SaveStatusProps) {
  return (
    <AnimatePresence>
      {(status !== 'idle' || isDirty) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg"
          style={{
            backgroundColor: status === 'error' ? '#FEE2E2' : 
                           status === 'saved' ? '#F7F7F6' : 
                           '#FFFFFF'
          }}
        >
          {status === 'saving' && (
            <>
              <Loader className="w-4 h-4 text-gray-600 animate-spin" />
              <span className="text-gray-600">Saving changes...</span>
            </>
          )}
          
          {status === 'saved' && (
            <>
              <CheckCircle className="w-4 h-4 text-legacy-600" />
              <span className="text-legacy-600">All changes saved</span>
            </>
          )}
          
          {status === 'error' && (
            <>
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-red-600">Error saving changes</span>
            </>
          )}

          {status === 'idle' && isDirty && (
            <span className="text-gray-500">Unsaved changes</span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}