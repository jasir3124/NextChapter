import { useState } from "react";
import { motion } from "framer-motion";

const QuizCard = ({ question, options, onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    onAnswer && onAnswer(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 w-full max-w-3xl mx-auto my-6"
    >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1 flex justify-center items-center p-4">
          <motion.div
            className="w-48 h-64 md:w-60 md:h-80 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl flex justify-center items-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute w-[85%] h-[85%] bg-black opacity-20 rounded-xl"></div>
            <div className="z-10 text-white font-bold">📱</div>
          </motion.div>
        </div>

        <div className="flex-1 p-4">
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-gray-800 dark:text-white">
            {question}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((opt, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect(index)}
                className={`w-full rounded-full px-4 py-2 text-sm font-medium border transition-all duration-300 ${
                  selected === index
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-gray-100 dark:bg-zinc-800 dark:text-white text-gray-800 hover:bg-purple-100 dark:hover:bg-purple-600 border-gray-300"
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizCard;
