import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { id: 1, title: 'Array', description: 'Indexed collection of elements.' },
  { id: 2, title: 'String', description: 'Sequence of characters.' },
  { id: 3, title: 'Searching & Sorting', description: 'Finding and ordering data.' },
  { id: 4, title: 'Recursion', description: 'Function calling itself.' },
  { id: 5, title: 'Backtracking', description: 'Trial and error problem solving.' },
  { id: 6, title: 'Pointer', description: 'Variable holding memory address.' },
  { id: 7, title: 'Linked List', description: 'Nodes linked by pointers.' },
  { id: 8, title: 'Stacks', description: 'LIFO data structure.' },
  { id: 9, title: 'Queues', description: 'FIFO data structure.' },
  { id: 10, title: 'Graph', description: 'Nodes connected by edges.' },
  { id: 11, title: 'Dynamic Programming', description: 'Optimize overlapping problems.' },
];


const Slider = () => {
  return (
    <div className="relative overflow-hidden py-4 h-max mt-15 mb-20">
    <h1 className="font-bold text-4xl font-serif flex justify-center items-center mx-auto mt-4 mb-10">Master These Core Concepts</h1>
      <div className="slider-container flex">
        {/* Duplicate cards to enable infinite scrolling */}
        {cards.concat(cards).map((card, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] mx-2 rounded-2xl bg-gray-900 shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-400">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Inline CSS for animation <style jsx></style>*/}
      <style>{`
        .slider-container {
          display: flex;
          gap: 1rem;
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
