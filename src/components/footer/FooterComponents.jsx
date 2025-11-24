// src/components/footer/FooterComponents.jsx
import React from 'react';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import clsx from 'clsx';

// --- 1. 单个链接组件 ---
export const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-sm text-white/60 hover:text-white transition-colors duration-200 block py-1"
    >
      {children}
    </a>
  </li>
);

// --- 2. 列表列组件 ---
export const FooterColumn = ({ title, items }) => (
  <div className="flex flex-col">
    <h4 className="text-white font-bold mb-4 text-base tracking-wide">{title}</h4>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <FooterLink key={index} href={item.href}>
          {item.label}
        </FooterLink>
      ))}
    </ul>
  </div>
);

// --- 3. 社交图标组件 ---
export const SocialLinks = () => {
  return (
    <div className="flex space-x-3 mt-4">
      <a href="#" className="w-8 h-8 bg-[#3b5998] rounded flex items-center justify-center text-white hover:opacity-90 transition">
        <Facebook size={18} fill="currentColor" strokeWidth={0} />
      </a>
      <a href="#" className="w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center text-white hover:opacity-90 transition">
        <Linkedin size={18} fill="currentColor" strokeWidth={0} />
      </a>
      <a href="#" className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center text-white hover:opacity-90 transition">
        <Youtube size={18} fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
};

// --- 4. 顶部订阅表单 ---
export const NewsletterForm = () => (
  <div className="w-full max-w-4xl mx-auto text-center mb-16 relative z-10">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 capitalize">
      Subscribe to our newsletter
    </h2>
    <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <input 
        type="text" 
        placeholder="First name" 
        className="w-full md:w-64 bg-transparent border border-white/60 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition placeholder-white/60" 
      />
      <input 
        type="email" 
        placeholder="Email address" 
        className="w-full md:w-80 bg-transparent border border-white/60 text-white px-4 py-3 rounded focus:outline-none focus:border-primary transition placeholder-white/60" 
      />
      <button 
        type="submit"
        className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded font-bold transition duration-300 shadow-[0_4px_14px_0_rgba(172,18,31,0.39)] "
      >
        Subscribe Now
      </button>
    </form>
  </div>
);