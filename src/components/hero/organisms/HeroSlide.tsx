import React from 'react';
import { HeroContent } from '../molecules/HeroContent';
import { HeroVisual } from '../molecules/HeroVisual';
// 优化：合并引入
import { BACKGROUND_PRESETS, type HeroData } from '@/components/hero/themePresets';

interface HeroSlideProps {
  data: HeroData;
  isActive: boolean;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ data, isActive }) => {
  // ❌ 删除下面这行！
  // if (!isActive) return null; 
  // 原因：保留 DOM 节点才能实现 CSS opacity 的淡入淡出动画。

  const bgClass = BACKGROUND_PRESETS[data.theme] || BACKGROUND_PRESETS.pitchBlack;

  return (
    // 1. 添加 flex items-center 实现垂直居中
    // 2. h-full 确保占满父容器高度
    <div className={`w-full h-full min-h-[450px] ${bgClass} text-white flex items-center transition-colors duration-700`}>
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-0">
        
        {/* 布局容器 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* 左侧文字区域 */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10">
            <HeroContent 
              title={data.title} 
              description={data.description} 
              ctaText={data.ctaText} 
            />
          </div>

          {/* 右侧图片区域 */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-0">
            <HeroVisual 
              imageSrc={data.image} 
              alt={data.title} 
            />
          </div>

        </div>
      </div>
    </div>
  );
};