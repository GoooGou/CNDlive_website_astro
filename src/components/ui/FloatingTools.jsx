import React, { useState, useEffect } from 'react';
import { ArrowUp, Home } from 'lucide-react';

export default function FloatingTools() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 当滚动超过 300px 时显示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. 平滑回到顶部逻辑
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 🔥 关键：原生丝滑滚动
    });
  };

  // 3. 通用按钮样式 (暗黑磨砂玻璃风)
  const btnClass = `
    p-3 rounded-full 
    bg-white 
    border border-gray-200 
    text-black 
    shadow-lg shadow-gray-200/50 
    transition-all duration-300 
    group
    
    /* Hover 状态：反转颜色 (变黑) */
    hover:bg-black hover:text-primary hover:border-black hover:-translate-y-1
  `;

  return (
    <div 
      className={`fixed bottom-8 right-8 flex flex-col gap-3 z-50 transition-all duration-500 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      {/* --- 回到首页按钮 --- */}
      <a 
        href="/" 
        aria-label="Back to Home"
        className={btnClass}
        title="Home"
      >
        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>

      {/* --- 回到顶部按钮 --- */}
      <button 
        onClick={scrollToTop} 
        aria-label="Scroll to Top"
        className={btnClass}
        title="Top"
      >
        {/* Hover 时箭头往上动一下 */}
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
}