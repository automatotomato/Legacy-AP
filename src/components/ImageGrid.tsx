import React from 'react';
import { motion } from 'framer-motion';
import { familyImages } from './images/constants';

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {familyImages.grid.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.2 }}
          className="relative overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
}