import { useState } from "react";
import { motion } from "framer-motion";

export default function WomensDay() {
  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-white text-center p-6">
      <motion.h1
        className="text-5xl font-extrabold text-pink-700 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Chúc Mừng Ngày 8/3! 🎉
      </motion.h1>
      <motion.p
        className="text-xl text-gray-800 mt-3 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Gửi lời yêu thương đến người yêu thương nhất của anh/em! 💖
      </motion.p>
      <img 
        src="https://www.google.com.vn/imgres?q=anh%20hoa&imgurl=https%3A%2F%2Fhoatuoi360.vn%2Fuploads%2Ffile%2FBaiviet202"
        alt="Hoa tặng em" 
        className="mt-6 rounded-xl shadow-xl border-4 border-pink-400"
      />
      <button
        className="mt-6 bg-gradient-to-r from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transform hover:scale-105 transition-all"
        onClick={() => setShowMessage(true)}
      >
        Nhận Lời Chúc 💌
      </button>
      {showMessage && (
        <motion.div
          className="mt-8 p-6 bg-white shadow-xl rounded-2xl text-pink-800 border-4 border-pink-500 text-lg font-medium max-w-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          "Chúc em luôn xinh đẹp, hạnh phúc và tràn đầy yêu thương! Anh yêu em 💐💖"
        </motion.div>
      )}
    </div>
  );
}
