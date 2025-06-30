import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import recycleIcon from "./assets/recycle.svg";
import "./LandingPage.css";

const facts = [
  { text: "Recycling 1 ton of paper saves 17 trees", image: "🌳" },
  { text: "Plastic takes 450+ years to decompose", image: "🧴" },
  { text: "Only 9% of plastic ever gets recycled", image: "♻️" },
  { text: "E-waste contains valuable metals", image: "💻" },
  { text: "1 recycled bottle powers a bulb for 6 hours", image: "💡" },
];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const factInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 3000);

    const redirect = setTimeout(() => {
      navigate("/home");
    }, 13000);

    return () => {
      clearInterval(factInterval);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center text-center space-y-6 origin-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.3 }} // magnified everything
        transition={{ duration: 1 }}
      >
        {/* ♻️ Rotating Icon */}
        <motion.img
          src={recycleIcon}
          alt="Recycle Icon"
          style={{ width: "40px", height: "40px" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="mb-2"
        />

        {/* ✨ Animated Title */}
        <motion.h1
          className="titan-one-regular"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Kabadiwala
        </motion.h1>
        <span className="kabadiwala-tagline">
          Purani Cheezein... <i>Nayi Soch!</i>
        </span>

        {/* 💡 Fact Block */}
        <div className="relative w-full max-w-xl h-40 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md text-xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-5xl mb-2"
              >
                {facts[index].image}
              </motion.div>
              <p
                className="text-lg"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              >
                {facts[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="loading-text">
          Loading<span className="dot dot-1">.</span>
          <span className="dot dot-2">.</span>
          <span className="dot dot-3">.</span>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
