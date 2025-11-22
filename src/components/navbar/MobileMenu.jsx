// src/components/navbar/MobileMenu.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { MENU_DATA } from '@/data/menuData'; // 确保路径对

export default function MobileMenu({ isOpen, onClose }) {
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (index) => {
    setExpandedGroups(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // 1. 辅助函数：判断是不是 Mega 或者 Dropdown
  const hasSubMenu = (item) => item.type === 'mega' || item.type === 'dropdown';

  return (
    <div 
      className={clsx(
        // 保持你原来的布局风格
        "lg:hidden fixed inset-0 top-20 bg-[#0a0a0a] z-40 transition-transform duration-300 ease-in-out overflow-y-auto pb-20 min-h-[calc(100vh-4rem)]",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="px-6 py-6 space-y-6">
        {MENU_DATA.map((item, index) => (
          <div key={index} className="border-b border-white/5 pb-4 last:border-0">
            
            {/* 2. 修改判断：只要有子菜单（不管是 mega 还是 dropdown）都显示折叠按钮 */}
            {hasSubMenu(item) ? (
              <div>
                <button 
                  onClick={() => toggleGroup(index)}
                  className="flex justify-between items-center w-full text-lg font-medium text-white mb-2"
                >
                  {item.label}
                  {/* 箭头图标 */}
                  <ChevronDown className={clsx("w-5 h-5 transition-transform", expandedGroups[index] ? "rotate-180" : "")} />
                </button>
                
                <div className={clsx("space-y-6 pl-4 overflow-hidden transition-all duration-300", expandedGroups[index] ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0")}>
                  
                  {/* 情况 A: Mega Menu (原来的逻辑) */}
                  {item.type === 'mega' && item.groups?.map((group, gIndex) => (
                    <div key={gIndex}>
                      <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">{group.title}</h4>
                      <div className="flex flex-col space-y-3">
                        {group.items.map((sub, sIndex) => (
                          <a key={sIndex} href={sub.href} className="text-gray-300 flex items-center text-sm">
                            {sub.label}
                            {sub.badge && <span className="ml-2 text-[10px] bg-[#5BA63D] px-1 rounded text-white">{sub.badge}</span>}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* 🔥 情况 B: 新增 Dropdown Menu (Solution/Resources) */}
                  {item.type === 'dropdown' && (
                    <div className="flex flex-col space-y-3">
                      {item.items?.map((sub, sIndex) => (
                        <a key={sIndex} href={sub.href} className="text-gray-300 flex items-center text-sm">
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ) : (
              // 3. 普通链接
              <a href={item.href} className="block text-lg font-medium text-white">
                {item.label}
              </a>
            )}
          </div>
        ))}

        <div className="pt-4">
          <a href="/contact" className="block w-full text-center py-3 border border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition">
            Contact US
          </a>
        </div>
      </div>
    </div>
  );
}