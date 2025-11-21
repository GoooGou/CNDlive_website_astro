import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HeroSlide } from './organisms/HeroSlide';
// 修复：添加 type 关键字避免 TS 报错
import { type HeroData } from '@/components/hero/themePresets';

interface HeroCarouselProps {
  slides: HeroData[];
  autoPlay?: boolean;
  interval?: number; // 使轮播时间可配置
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  slides, 
  autoPlay = true,
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // 用于处理触摸滑动
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 切换逻辑：提取出来方便复用
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 1. 优化自动轮播逻辑：依赖 currentIndex，手动切换后重置计时器
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, isPaused, interval, nextSlide]);

  // 2. 移动端触摸逻辑 (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // 滑动灵敏度

    if (distance > minSwipeDistance) {
      nextSlide(); // 左滑 -> 下一张
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // 右滑 -> 上一张
    }

    // 重置
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)} // 3. 鼠标悬停暂停
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* 4. 渲染区域：使用 Grid 堆叠技巧 */}
      {/* grid-cols-1 让所有子元素重叠在同一个格子里，实现淡入淡出 */}
      <div className="grid grid-cols-1 grid-rows-1">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={index !== currentIndex}
          >
            {/* 注意：这里去掉了 HeroSlide 内部的 "if (!isActive) return null" 逻辑
                让 Slide 始终渲染，通过外层 div 控制 opacity 实现动画 
                (如果 HeroSlide 内部开销巨大，可以改回 lazy loading) */}
            <HeroSlide 
              data={slide} 
              isActive={index === currentIndex} 
            />
          </div>
        ))}
      </div>

      {/* 右侧垂直指示器 (Desktop) */}
      <div className="absolute right-30 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'h-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' // 加点发光效果
                : 'h-6 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>

      {/* 底部水平指示器 (Mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex lg:hidden gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};