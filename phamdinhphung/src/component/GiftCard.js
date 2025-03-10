import GiftCard from "./GiftCard";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <motion.h1 
        className="text-4xl font-bold text-red-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Chúc Mừng 8/3, Em Yêu! 💖
      </motion.h1>
      
      <GiftCard />
    </div>
  );
}
