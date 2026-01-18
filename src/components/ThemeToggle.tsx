import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-secondary border border-border p-1 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 26 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-primary-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-primary-foreground" />
        )}
      </motion.div>
      <div className="flex justify-between items-center w-full h-full px-1">
        <Sun className={`w-3 h-3 ${theme === 'light' ? 'text-transparent' : 'text-muted-foreground'}`} />
        <Moon className={`w-3 h-3 ${theme === 'dark' ? 'text-transparent' : 'text-muted-foreground'}`} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
