// src/components/navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { MENU_DATA } from '@/data/menuData';
import AnimatedButton from '@/components/ui/AnimatedButton';

import NavLogo from './NavLogo';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import DropdownMenu from './DropdownMenu'; 

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);

  // 控制移动端菜单打开时，body 滚动禁用
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
  }, [isMobileOpen]);
  // 检查是否有子菜单
  const hasSubMenu = (type) => type === 'mega' || type === 'dropdown';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 text-white 
    backdrop-blur-md bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* 导航栏左侧：logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLogo />
          </div>
          {/* 导航栏中间：桌面菜单 */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            {MENU_DATA.map((item, index) => (
              <div 
                key={index}
                className="relative h-full flex items-center group"
                // 鼠标悬停时触发子菜单显示 检查传进来的 type 是否是 mega 或 dropdown 激活当前项
                // 鼠标离开时清除激活状态
                onMouseEnter={() => hasSubMenu(item.type) && setActiveMega(index)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <a 
                  href={item.href || '#'}
                  className={clsx(
                    // 🔥 核心样式修改开始 🔥
                    "relative z-50 flex items-center gap-1 h-full px-1 transition-colors duration-300",
                    "text-sm font-bold tracking-wide",
                    // border-t-4: 顶部边框 4px
                    "border-t-4", 
                    activeMega === index 
                      ? "border-primary text-white " // 激活状态：红线 + 白字
                      : "border-transparent text-white/80 hover:border-primary hover:text-white" // 默认：透明线 + 灰字 -> 悬停：红线 + 白字
                    // 🔥 核心样式修改结束 🔥
                  )}
                >
                  {item.label}
                  {hasSubMenu(item.type) && (
                    <ChevronDown 
                        className={clsx(
                            "w-3 h-3 mt-0.5 transition-transform duration-300", 
                            activeMega === index ? "rotate-180 opacity-100" : "opacity-50"
                        )} 
                    />
                  )}
                </a>

                {/* 下拉菜单区域保持不变 */}
                {item.type === 'mega' && (
                  <MegaMenu 
                    isOpen={activeMega === index}
                    groups={item.groups}
                    onMouseEnter={() => setActiveMega(index)}
                    onMouseLeave={() => setActiveMega(null)}
                  />
                )}

                {item.type === 'dropdown' && (
                  <DropdownMenu 
                    isOpen={activeMega === index}
                    items={item.items}
                    onMouseEnter={() => setActiveMega(index)}
                    onMouseLeave={() => setActiveMega(null)}
                  />
                )}

              </div>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            
             
            <div className="hidden lg:block">
                <AnimatedButton href="/contact">
                Contact US
                </AnimatedButton>
            </div>
          </div>
            {/* 导航栏右侧：移动端菜单按钮 */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </nav>
  );
}