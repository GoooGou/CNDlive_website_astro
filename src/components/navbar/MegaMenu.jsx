// src/components/navbar/MegaMenu.jsx
import React from 'react';
import clsx from 'clsx';

export default function MegaMenu({ isOpen, groups, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className={clsx(
        // 核心样式：
        // 1. fixed + left/right-0: 强制全宽，脱离父元素宽度限制
        // 2. top-20: 紧贴 80px 高的 Navbar 底部
        "fixed left-0 right-0 top-20 bg-surface-muted border-b border-white/10 shadow-2xl transition-all duration-300 origin-top z-40",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* 内容容器：限制宽度居中，与网页对齐 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {groups?.map((group, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-dashed border-white/20">
                {group.title}
              </h3>
              <div className="flex flex-col space-y-4">
                {group.items.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    className="group/link flex items-center text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className={clsx(item.active && "text-primary font-medium")}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#5BA63D] rounded">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}