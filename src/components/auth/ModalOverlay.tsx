import React from 'react';
import { motion } from 'framer-motion';

interface ModalOverlayProps {
  onClose: () => void;
}

export default function ModalOverlay({ onClose }: ModalOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
    />
  );
}