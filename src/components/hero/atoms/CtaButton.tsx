import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // 假设使用 lucide-react 图标库

interface CtaButtonProps {
  text: string;
  onClick?: () => void;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/50"
    >
      <span className="font-bold tracking-wide">{text}</span>
      {/* 圆形白色背景箭头 */}
      <div className="bg-white text-red-700 rounded-full p-2 transition-transform group-hover:rotate-45">
        <ArrowUpRight size={18} />
      </div>
    </button>
  );
};