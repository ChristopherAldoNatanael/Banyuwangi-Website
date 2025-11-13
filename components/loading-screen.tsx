"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 300);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-green-600/20 opacity-30"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Logo Animation */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={showLogo ? { scale: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
        >
          {" "}          <motion.div
            className="w-40 h-40 md:w-52 md:h-52 relative"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src="/Lambang_Kabupaten_Banyuwangi.png" alt="Lambang Kabupaten Banyuwangi" fill className="object-contain drop-shadow-lg" priority />
          </motion.div>
          {/* Glowing Ring */}
          <motion.div className="absolute inset-0 border-4 border-white/30 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 tracking-wide">Pesona Budaya</h1>
          <motion.h2
            className="text-2xl md:text-3xl font-serif text-yellow-300 tracking-widest"
            animate={{
              textShadow: ["0 0 10px rgba(253, 224, 71, 0.5)", "0 0 20px rgba(253, 224, 71, 0.8)", "0 0 10px rgba(253, 224, 71, 0.5)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            BANYUWANGI
          </motion.h2>
          <motion.p className="text-blue-100 mt-4 text-lg italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
            The Sunrise of Java
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="w-80 max-w-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80 text-sm">Memuat...</span>
            <span className="text-white/80 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
            <motion.div className="bg-linear-to-r from-yellow-400 to-yellow-300 h-2 rounded-full shadow-lg" style={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Loading Text Animation */}
        <motion.div className="absolute bottom-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
          <motion.p className="text-white/60 text-sm" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
            Menghadirkan keindahan budaya Nusantara...
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
