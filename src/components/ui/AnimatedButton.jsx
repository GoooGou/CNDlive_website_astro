// src/components/ui/AnimatedButton.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function AnimatedButton({ href = '#', children, className }) {
  return (
    <a
      href={href}
      // 1. group: 用于父级 hover 控制子级元素
      // 2. relative overflow-hidden: 核心，用于隐藏初始状态在外部的箭头
      className={clsx(
        "group relative inline-flex items-center justify-center px-8 py-2 border border-primary text-primary rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:bg-primary hover:text-white",
        className // 允许外部传入额外的 className
      )}
    >
      {/* --- 箭头图标容器 --- */}
      {/* - absolute: 绝对定位脱离文档流
         - -left-10: 初始位置在按钮左侧外部，看不见
         - opacity-0: 初始透明
         - group-hover:left-4: 鼠标悬停时，滑动到距离左侧 1rem 的位置
         - group-hover:opacity-100: 悬停时显示
      */}
      

      {/* --- 按钮文本 --- */}
      {/* - transition-all: 添加过渡动画
         - group-hover:translate-x-3: 悬停时，文字向右平移约 12px，给箭头腾位置
      */}
      <span className="transition-all duration-300 group-hover:translate-x-3">
        {children}
      </span>

      <span className="absolute -left-10 transition-all duration-300 group-hover:left-4 opacity-0 group-hover:opacity-100 flex items-center z-10">
        <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
}