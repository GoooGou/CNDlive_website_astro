// src/components/navbar/DropdownMenu.jsx
import React from 'react';
import clsx from 'clsx';

export default function DropdownMenu({ isOpen, items, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className={clsx(
        // 1. absolute: 绝对定位，不再是 fixed 全屏
        // 2. top-full: 位于父元素正下方
        // 3. w-56: 固定宽度 (可以根据需要改为 w-48 或 w-64)
        // 4. left-0: 左对齐
        "absolute top-20 left-0 w-56 bg-[#0a0a0a] border border-white/10 shadow-xl rounded-b-lg py-2 transition-all duration-300 origin-top z-40",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col">
        {items?.map((item, index) => (
          <a 
            key={index}
            href={item.href}
            className="block px-6 py-3 text-sm text-gray-400 hover:text-primary hover:bg-white/5 transition-colors"
          >
            {item.label}
            {item.badge && (
                <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#5BA63D] rounded">
                  {item.badge}
                </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}