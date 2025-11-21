export const BACKGROUND_PRESETS = {
  // ==============================
  // 🌑 经典深色 (硬件/高端感)
  // ==============================
  pitchBlack: "bg-black text-white", // 纯黑
  matteGraphite: "bg-zinc-900 text-white", // 哑光石墨灰 (更有质感)
  midnightBlue: "bg-[#0f172a] text-white", // 午夜深蓝 (Tailwind slate-900)
  
  // ==============================
  // 🌈 科技渐变 (游戏/直播/电竞)
  // ==============================
  // 红色系 (任天堂/AMD风格)
  nintendoRed: "bg-gradient-to-br from-red-600 to-red-900 text-white",
  lavaFlow: "bg-gradient-to-r from-orange-600 via-red-600 to-red-900 text-white",
  
  // 蓝色系 (Intel/PlayStation/商务科技)
  cyberBlue: "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white",
  deepOcean: "bg-gradient-to-bl from-blue-600 to-slate-900 text-white",
  electricBlue: "bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 text-white",
  
  // 紫色系 (赛博朋克/Twitch风格)
  cyberPunk: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
  neonCity: "bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 text-white",
  
  // 绿色系 (Nvidia/Xbox风格)
  matrixCode: "bg-gradient-to-b from-gray-900 to-green-900 text-white",
  emeraldTech: "bg-gradient-to-tr from-emerald-900 via-green-800 to-slate-900 text-white",

  // 金色/奢华系 (专业版/旗舰版)
  luxuryGold: "bg-gradient-to-br from-slate-900 via-yellow-900 to-amber-700 text-white",

  // ==============================
  // ☀️ 浅色/极简 (办公/文档)
  // ==============================
  cleanWhite: "bg-white text-gray-900", // 纯白，深色字
  softGray: "bg-gray-100 text-gray-800", // 柔和灰
  skyLight: "bg-gradient-to-b from-blue-50 to-white text-slate-800", // 浅蓝渐变
};

// 导出类型，方便组件引用
export type HeroData = {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  // 这里的 keyof typeof 自动获取上面定义的所有键名，无需手动维护
  theme: keyof typeof BACKGROUND_PRESETS;
};