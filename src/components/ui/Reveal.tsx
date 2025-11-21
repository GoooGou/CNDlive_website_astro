// src/components/ui/Reveal.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0,
  className = "" 
}) => {
  // 这里的 variants 定义了两种状态：隐藏(hidden) 和 显示(visible)
  const variants = {
    hidden: { opacity: 0,  },
    visible: { opacity: 1, },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      // once: true 表示只触发一次，防止上下反复滚动时重复鬼畜
      // margin: "-100px" 表示元素底部进入视口 100px 后才触发，不用等到完全露出来
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
};