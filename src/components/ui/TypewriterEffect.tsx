import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number; // 打字速度，越小越快
  cursor?: boolean; // 是否显示光标
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className = "",
  speed = 0.03, // 默认每个字间隔 0.03秒
  cursor = true,
}) => {
  const ref = useRef(null);
  // once: true 表示只触发一次，防止往回滚时又重新打字
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 拆分文本为字符数组
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      display: "inline-block", // 防止布局抖动
      x: 0,
    },
    hidden: {
      opacity: 0,
      display: "none", // 隐藏时占位不显示，模拟打字光标紧跟效果
      x: -5,
    },
  };

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline"
      >
        {characters.map((char, index) => (
          <motion.span variants={child} key={index} className="whitespace-pre">
            {char}
          </motion.span>
        ))}
      </motion.span>

      {/* 闪烁的光标 */}
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-red-500 ml-1 align-middle"
        />
      )}
    </span>
  );
};