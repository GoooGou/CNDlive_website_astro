// src/components/ui/Reveal.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%"; // 这是控制 CSS style 的 width
  delay?: number;
  className?: string;
  // 🔥 新增：控制布局宽度
  layout?: "full" | "narrow"; 
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0,
  className = "",
  layout = "narrow" // 🔥 默认是窄宽（居中模式），因为大部分内容都需要居中
}) => {
  
  // 1. 根据 layout 属性决定 Tailwind 类名
  // - narrow: 限制最大宽度 + 居中 + 两侧留白 (替代了原本 Main 里的 container)
  // - full: 撑满屏幕宽度
  const layoutClasses = layout === "narrow" 
    ? "w-full max-w-7xl mx-auto px-4 sm:px-6" 
    : "w-full";

  const variants = {
    hidden: { opacity: 0, y: 30 }, // 加一点 y 轴位移，动效更有高级感
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      style={{ width }}
      // 🔥 2. 将计算出的 layoutClasses 和传入的 className 拼接
      className={`${layoutClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};