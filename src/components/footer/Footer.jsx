// src/components/footer/Footer.jsx
import React from 'react';
import { FOOTER_LINKS } from '@/data/footerData';
import { FooterColumn, SocialLinks, NewsletterForm } from './FooterComponents';

// 模拟右下角的 Chat Widget
const ChatWidget = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <div className="bg-white text-black px-4 py-3 rounded-lg shadow-lg mb-3 text-sm font-medium animate-fade-in-up">
        👋 Hi! How can I help you today?
    </div>
    <button className="float-right w-12 h-12 bg-[#00BFA5] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative">
      <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0 border-2 border-[#00BFA5]"></div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
      </svg>
    </button>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-surface-muted text-white pt-20 pb-8 relative overflow-hidden">
      
      {/* --- 背景装饰 (红色弧线) --- */}
      {/* 左上角弧线 */}
      <div className="absolute top-0 -left-20 w-64 h-64 border border-primary/20 rounded-full opacity-50 pointer-events-none"></div>
      {/* 右侧弧线 */}
      <div className="absolute top-40 -right-20 w-96 h-96 border-t border-primary/30 rounded-full opacity-50 pointer-events-none rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 1. 订阅区域 */}
        <NewsletterForm />

        {/* 2. 链接网格区域 */}
        {/* 响应式策略：
           - Mobile (grid-cols-2): 紧凑排列
           - Desktop (lg:grid-cols-5): 展开排列
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 border-t border-white/10 pt-16 mb-12">
          
          {/* 前4列：标准链接 */}
          <FooterColumn title={FOOTER_LINKS.company.title} items={FOOTER_LINKS.company.items} />
          <FooterColumn title={FOOTER_LINKS.products.title} items={FOOTER_LINKS.products.items} />
          <FooterColumn title={FOOTER_LINKS.solutions.title} items={FOOTER_LINKS.solutions.items} />
          <FooterColumn title={FOOTER_LINKS.support.title} items={FOOTER_LINKS.support.items} />

          {/* 第5列：关于 Email List 的文字说明 + 社交图标 */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold mb-4 text-base tracking-wide">Sign up for our email list</h4>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Want to learn more from CNDLive about new product announcements, updates, support items and more? 
              <br />
              Visit our <a href="#" className="text-primary hover:underline">Contact page</a> to choose all or just the information you need!
            </p>
            <SocialLinks />
          </div>

        </div>

        {/* 3. 底部版权 */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-white/60">
          <p>Copyright© CNDLive All Rights Reserved.</p>
          <a href="/privacy" className="hover:text-white transition underline underline-offset-2">Privacy Policy</a>
        </div>

      </div>

     
    </footer>
  );
}