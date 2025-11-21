// src/components/navbar/MobileMenu.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { MENU_DATA } from '../../data/menuData';

export default function MobileMenu({ isOpen, onClose }) {
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (index) => {
    setExpandedGroups(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div 
      className={clsx(
        "lg:hidden fixed inset-0 top-20 bg-[#0a0a0a] z-40 transition-transform duration-300 ease-in-out overflow-y-auto pb-20",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="px-6 py-6 space-y-6">
        {MENU_DATA.map((item, index) => (
          <div key={index} className="border-b border-white/5 pb-4 last:border-0">
            {item.type === 'mega' ? (
              <div>
                <button 
                  onClick={() => toggleGroup(index)}
                  className="flex justify-between items-center w-full text-lg font-medium text-white mb-2"
                >
                  {item.label}
                  <ChevronDown className={clsx("w-5 h-5 transition-transform", expandedGroups[index] ? "rotate-180" : "")} />
                </button>
                
                <div className={clsx("space-y-6 pl-4 overflow-hidden transition-all duration-300", expandedGroups[index] ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0")}>
                  {item.groups?.map((group, gIndex) => (
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
                </div>
              </div>
            ) : (
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