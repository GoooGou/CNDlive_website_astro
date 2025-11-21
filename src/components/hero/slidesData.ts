// src/components/hero/slidesData.ts

// 1. 引入类型定义，确保类型安全
import { type HeroData } from './themePresets';

// 2. 导出数据数组
export const slidesData: HeroData[] = [
  {
    id: 1,
    title: "ipsum dolor sit amet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/slide/slide-1.jpg",
    ctaText: "Know More", // 顺手帮你修了个 typo: Kown -> Know
    theme: "pitchBlack"
  },
  {
    id: 2,
    title: "Professional Streaming",
    description: "Experience zero latency and high fidelity audio support with our latest hardware solutions.",
    image: "/slide/slide-2.png",
    ctaText: "Know More",
    theme: "deepOcean"
  },
  {
    id: 3,
    title: "Connect Everywhere",
    description: "Portable, powerful, and plug-and-play. Take your live stream to the outdoors.",
    image: "/slide/slide-3.png",
    ctaText: "Know More",
    theme: "electricBlue"
  }
];