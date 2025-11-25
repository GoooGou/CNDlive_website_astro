import React from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      
      {/* 第一行：姓名 + 邮箱 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name <span className="text-primary-600">*</span></label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email <span className="text-red-600">*</span></label>
          <input 
            type="email" 
            id="email" 
            placeholder="example@cndlive.com"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
          />
        </div>
      </div>

      {/* 第二行：国家 + 电话 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-zinc-400">Country or Region <span className="text-red-600">*</span></label>
          <input 
            type="text" 
            id="country" 
            placeholder="China"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="+86 ..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
          />
        </div>
      </div>

      {/* 第三行：留言 */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
        <textarea 
          id="message" 
          rows="6"
          placeholder="How can we help you?"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none"
        ></textarea>
      </div>

      {/* 提交按钮 */}
      <div className="flex justify-center pt-4">
        <button 
          type="submit" 
          className="group flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-red-900/20 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </form>
  );
}