export interface SubLink {
  label: string;
  href: string;
  badge?: string;
  active?: boolean;
}

export interface MenuGroup {
  title?: string; // 对于普通 dropdown，title 是可选的
  items: SubLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  // 新增 'dropdown' 类型
  type: "link" | "mega" | "dropdown";
  groups?: MenuGroup[]; // mega 使用这个结构
  items?: SubLink[]; // dropdown 使用这个更简单的结构
}

export const MENU_DATA: NavItem[] = [
  {
    label: "Product",
    type: "mega",
    groups: [
      {
        title: "Video Encoder",
        items: [
          { label: "C6 4K HDMI/3G-SDI Encoder", href: "#" },
          { label: "X1 4G Bonding Encoder", href: "#" },
        ],
      },
      {
        title: "Video Decoder",
        items: [
          {
            label: "D1 4K HDMI/3G-SDI Decoder",
            href: "#",
            badge: "New",
            active: true,
          },
        ],
      },
      {
        title: "NDI Converter",
        items: [
          { label: "A1 Bi-Directional NDIConverter", href: "#" },
          { label: "NDI Go NDI to HDMI Decoder", href: "#" },
        ],
      },
      {
        title: "Manage & IP Gateway",
        items: [
          { label: "CNDLive Manager Software", href: "#" },
          { label: "CNDLive Manager Max", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Solution",
    type: "dropdown", // 🔥 新增：普通下拉菜单
    items: [
      { label: "TV Broadcast", href: "/solution/tv" },
      { label: "Live Events", href: "/solution/live" },
      { label: "Education", href: "/solution/edu" },
      { label: "Enterprise", href: "/solution/enterprise" },
    ],
  },
  { label: "Support", type: "link", href: "/support" },
  {
    label: "Resources",
    type: "dropdown", // 🔥 新增：普通下拉菜单
    items: [
      { label: "News", href: "/news" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/cases" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  { label: "About US", type: "link", href: "/about" },
];
