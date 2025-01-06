import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0 
}: ScrollRevealProps) {
  const directions = {
    up: { initial: { y: 50 }, animate: { y: 0 } },
    down: { initial: { y: -50 }, animate: { y: 0 } },
    left: { initial: { x: -50 }, animate: { x: 0 } },
    right: { initial: { x: 50 }, animate: { x: 0 } },
  };

  return (
    <motion.div
      initial={{ ...directions[direction].initial, opacity: 0 }}
      whileInView={{ ...directions[direction].animate, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}