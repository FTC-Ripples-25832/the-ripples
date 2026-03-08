export type BilingualText = { en: string; zh: string }

export const heroContent: { subtitle: BilingualText } = {
  subtitle: {
    en: "Breaking boundaries as a rookie-season FTC team: bold robot design, software quality, and meaningful outreach.",
    zh: "我们的2024-2025 新手赛季，用一句话概括就是：突破界限——大胆的机器人设计、追求极致的软件质量，以及有意义的外联。"
  }
}

export type HighlightItem = BilingualText
export type Highlight = {
  title: BilingualText
  items: BilingualText[]
}

export const highlights: Highlight[] = [
  {
    title: { en: "Technical Excellence", zh: "技术卓越" },
    items: [
      {
        en: "AI vision (Limelight 3A) ~92% success; end-to-end closed-loop grab sequence",
        zh: "AI 视觉（Limelight 3A）约 92% 成功率；手动阶段一键闭环抓取序列"
      },
      {
        en: "KoalaLog: open-source telemetry with AdvantageScope 3D replay",
        zh: "KoalaLog：开源遥测，支持 AdvantageScope 3D 回放"
      },
      {
        en: "Mechanical innovations: CV4B grabber, PTO gear-ratio switching, modular design",
        zh: "机械创新：CV4B 抓取、PTO 齿比切换、模块化设计"
      }
    ]
  },
  {
    title: { en: "Global Impact", zh: "全球影响" },
    items: [
      {
        en: "Active on international Discord—1,000+ messages; only China-based team consistently helping rookies",
        zh: "活跃于国际 Discord——累计 1000+ 条消息；中国区唯一长期活跃答疑的新队"
      },
      {
        en: "Promoted FIRST via school CS/Math week, exhibitions, and workshops",
        zh: "通过学校计算机/数学周、展演和工作坊推广 FIRST"
      },
      {
        en: "Open-source tools and docs for the FTC community",
        zh: "面向 FTC 社区的开源工具与文档"
      }
    ]
  },
  {
    title: { en: "Growth & Potential", zh: "成长与潜力" },
    items: [
      {
        en: "Grew from 3 to 15 members; trained 12 new teammates",
        zh: "从 3 人成长至 15 人；培养训练 12 位新队员"
      },
      {
        en: "Established school robotics club with funding",
        zh: "创建学校机器人社团并获得资金支持"
      },
      {
        en: "World Top 250 autonomous; 4 robot generations in one season",
        zh: "自主世界前 250；单赛季完成 4 代机器人"
      }
    ]
  }
]
