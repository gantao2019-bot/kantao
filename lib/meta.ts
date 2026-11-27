import type { Metadata } from "next";
import type { Locale } from "./content";

/** Public site origin (same value as BASE_URL in app/sitemap.ts). */
export const SITE_URL = "https://www.kantao.space";

/** Resolve the active locale from a route param (unknown values fall back to zh-hk). */
export function toLocale(locale: string): Locale {
  return locale === "en" ? "en" : "zh-hk";
}

/** Per-page metadata for a route key (see pageMeta). */
export function metaFor(route: string, locale: string): Metadata {
  const m = pageMeta[route][toLocale(locale)];
  return { title: m.title, description: m.description };
}

// Page titles and meta descriptions transcribed from the live site fetch.
// No /satellite-ai entry exists by design.

export const pageMeta: Record<string, Record<Locale, { title: string; description: string }>> = {
  "": {
    "zh-hk": {
      "title": "由地球數據到決策 | KANTAO",
      "description": "趕淘科技為香港及海外客戶提供衛星數據接入、地球觀測分析及行業解決方案。"
    },
    "en": {
      "title": "From Earth data to decisions | KANTAO",
      "description": "KANTAO provides satellite data access, Earth observation analytics and industry solutions for Hong Kong and international clients."
    }
  },
  "satellite-data": {
    "zh-hk": {
      "title": "衛星數據 | KANTAO",
      "description": "按任務需要整合 SAR、光學、多光譜及紅外數據，配合時序分析、變化偵測與專業解譯，將原始影像轉化為可採取行動的空間資訊。"
    },
    "en": {
      "title": "Satellite Data | KANTAO",
      "description": "We integrate SAR, optical, multispectral and infrared data around each mission, combining time-series analysis, change detection and expert interpretation to turn imagery into actionable spatial intelligence."
    }
  },
  "solutions": {
    "zh-hk": {
      "title": "解決方案 | KANTAO",
      "description": "由衛星數據到八大行業應用的完整空間智能能力。"
    },
    "en": {
      "title": "Solutions | KANTAO",
      "description": "Spatial intelligence across satellite data and eight industry domains."
    }
  },
  "solutions/agriculture": {
    "zh-hk": {
      "title": "農業 | KANTAO",
      "description": "結合多時相衛星影像與模型，監測耕地資源、作物面積、長勢、產量、設施農業及非農化變化。"
    },
    "en": {
      "title": "Agriculture | KANTAO",
      "description": "Combine multi-temporal imagery and models to monitor farmland, crop area, condition, yield, protected agriculture and land-use conversion."
    }
  },
  "solutions/banking-insurance": {
    "zh-hk": {
      "title": "銀行及保險 | KANTAO",
      "description": "把衛星觀測融入農業及工程標的的貸前、貸中、貸後與承保、風控、理賠流程。"
    },
    "en": {
      "title": "Banking & Insurance | KANTAO",
      "description": "Integrate satellite observation into pre-loan, ongoing and post-loan assessment as well as underwriting, risk control and claims."
    }
  },
  "solutions/emergency-disaster": {
    "zh-hk": {
      "title": "應急與災害管理 | KANTAO",
      "description": "利用多源遙感快速掌握洪澇、山火及地質災害的範圍、演變與影響，支援預警、應急調度及災後復原。"
    },
    "en": {
      "title": "Emergency & Disaster | KANTAO",
      "description": "Rapidly understand the extent, evolution and impact of floods, wildfires and geohazards to support warning, emergency coordination and recovery."
    }
  },
  "solutions/environment": {
    "zh-hk": {
      "title": "環境保護 | KANTAO",
      "description": "從水體、揚塵、保護地到固體廢物，利用遙感建立可重複、可追溯的環境問題底圖。"
    },
    "en": {
      "title": "Environment | KANTAO",
      "description": "Build repeatable and traceable environmental baselines across water, dust sources, protected areas and solid waste."
    }
  },
  "solutions/financial-intelligence": {
    "zh-hk": {
      "title": "金融情報 | KANTAO",
      "description": "以持續觀測形成房地產、基建、路網、夜光、工業、海運、農產品及新能源等主題指標。"
    },
    "en": {
      "title": "Financial Intelligence | KANTAO",
      "description": "Create thematic indicators for property, infrastructure, roads, night-time lights, industry, shipping, agriculture and renewable energy."
    }
  },
  "solutions/natural-resources": {
    "zh-hk": {
      "title": "自然資源 | KANTAO",
      "description": "以高頻衛星觀測支援土地利用變化、違規建設及礦場活動監察，讓監管由抽查走向持續觀測。"
    },
    "en": {
      "title": "Natural Resources | KANTAO",
      "description": "Use frequent satellite observation to monitor land-use change, unauthorised construction and mining activity, moving oversight from sampling to persistence."
    }
  },
  "solutions/power-grid": {
    "zh-hk": {
      "title": "電網 | KANTAO",
      "description": "利用光學、雷達及地形資料識別輸電走廊樹障、違建和地質環境風險，提升長距離巡查效率。"
    },
    "en": {
      "title": "Power Grid | KANTAO",
      "description": "Use optical, radar and terrain data to detect vegetation, construction and geohazard risks around transmission corridors."
    }
  },
  "solutions/water": {
    "zh-hk": {
      "title": "水利 | KANTAO",
      "description": "持續監測河流、湖泊、水庫及水利工程，掌握水面、水質、設施形變與河湖周邊違規活動。"
    },
    "en": {
      "title": "Water | KANTAO",
      "description": "Continuously monitor rivers, lakes, reservoirs and hydraulic infrastructure for surface water, quality, deformation and encroachment."
    }
  },
  "about": {
    "zh-hk": {
      "title": "關於趕淘 | KANTAO",
      "description": "趕淘科技（香港）有限公司連接全球地球觀測能力與亞洲及海外市場。"
    },
    "en": {
      "title": "About KANTAO | KANTAO",
      "description": "KANTAO TECHNOLOGY (HK) LIMITED connects global Earth observation capability with Asian and international markets."
    }
  },
  "resources": {
    "zh-hk": {
      "title": "資源中心 | KANTAO",
      "description": "透過 KANTAO 示範案例、白皮書、FAQ、樣本報告與方法論，評估衛星數據適配與交付邊界。"
    },
    "en": {
      "title": "Resources | KANTAO",
      "description": "Assess satellite data fit and delivery boundaries through KANTAO illustrative cases, white papers, FAQs, sample reports and methodology."
    }
  },
  "resources/earth-observation-methodology": {
    "zh-hk": {
      "title": "KANTAO 地球觀測任務方法論 | KANTAO",
      "description": "公開說明 KANTAO 如何從客戶問題出發，完成任務界定、數據組合、分析驗證和持續交付。"
    },
    "en": {
      "title": "KANTAO Earth observation mission methodology | KANTAO",
      "description": "A public explanation of how KANTAO moves from a client decision problem to mission definition, data assembly, analysis validation and continuous delivery."
    }
  },
  "resources/hong-kong-insurance-banking-whitepaper": {
    "zh-hk": {
      "title": "香港銀行及保險如何採用衛星空間智能 | KANTAO",
      "description": "面向香港金融機構的白皮書框架，說明衛星數據如何服務核保、理賠、貸後、再保和另類數據研究。"
    },
    "en": {
      "title": "How Hong Kong banks and insurers can adopt satellite spatial intelligence | KANTAO",
      "description": "A white paper framework for Hong Kong financial institutions explaining how satellite data supports underwriting, claims, loan monitoring, reinsurance and alternative data research."
    }
  },
  "resources/north-metropolis-construction-monitoring": {
    "zh-hk": {
      "title": "北部都會區與大灣區工程進度及形變監測 | KANTAO",
      "description": "示範銀行、工程險和承建商如何用光學進度追蹤與 SAR 形變監測，建立獨立的工程證據鏈。"
    },
    "en": {
      "title": "Construction progress and deformation monitoring for Northern Metropolis and Greater Bay Area assets | KANTAO",
      "description": "A demonstration of how banks, construction insurers and contractors can combine optical progress tracking with SAR deformation monitoring to build an independent evidence trail."
    }
  },
  "resources/procurement-faq": {
    "zh-hk": {
      "title": "香港衛星空間智能服務常見問題 | KANTAO",
      "description": "回答採購、技術、合規和業務團隊最常問的問題，降低首次接觸成本。"
    },
    "en": {
      "title": "Frequently asked questions about satellite spatial intelligence services in Hong Kong | KANTAO",
      "description": "Answers common procurement, technical, compliance and business questions to reduce first-contact friction."
    }
  },
  "resources/sar-disaster-sample-report": {
    "zh-hk": {
      "title": "SAR 災後快速評估樣本報告 | KANTAO",
      "description": "展示一次事件型交付應包含的內容：任務範圍、數據來源、分析步驟、受影響區域、標的清單、限制條件和後續行動。"
    },
    "en": {
      "title": "Sample SAR rapid post-disaster assessment report | KANTAO",
      "description": "Shows what an event-response deliverable should include: mission scope, data sources, analysis steps, affected areas, asset list, limitations and follow-up actions."
    }
  },
  "resources/typhoon-sar-claims-triage": {
    "zh-hk": {
      "title": "颱風暴雨後 SAR 快速定損與理賠分流 | KANTAO",
      "description": "示範 KANTAO 如何在多雲多雨的災後窗口，利用 SAR 影像輸出受災範圍、疑似受影響標的清單和理賠優先級。"
    },
    "en": {
      "title": "SAR-based damage mapping and claims triage after typhoon rainfall | KANTAO",
      "description": "A demonstration of how KANTAO uses SAR imagery after cloudy and rainy events to deliver affected-area maps, exposed asset lists and claims-priority signals."
    }
  },
  "resources/agentic-ai-in-orbit": {
    "zh-hk": {
      "title": "人工智能上軌道：10億美元AI衛星星座 | KANTAO",
      "description": "Marlan Space 與 Loft Orbital 在巴黎宣布 10 億美元、50 顆衛星的 AI 星座：智能搬上軌道之後，衛星數據買家該關注什麼，又有什麼不會變。"
    },
    "en": {
      "title": "Agentic AI in Orbit: The $1B Satellite Fleet | KANTAO",
      "description": "Marlan Space and Loft Orbital unveiled a $1B, 50-satellite AI constellation in Paris. What onboard intelligence changes for data buyers — and what it does not."
    }
  },
  "resources/strix-14-night-owls-never-sleep": {
    "zh-hk": {
      "title": "夜貓子不眠：StriX-14 雷達衛星升空 | KANTAO",
      "description": "Synspective 第 14 顆 StriX 雷達衛星 11 月 27 日搭乘 Rocket Lab Electron 升空。日本全天候雷達星座擴張，對保險與基建買家意味著什麼。"
    },
    "en": {
      "title": "StriX-14: Japan's Radar Constellation Grows | KANTAO",
      "description": "Synspective's 14th StriX radar satellite launches 27 Nov on Rocket Lab's Electron. What Japan's radar build-out means for insurers and infrastructure buyers."
    }
  },
  "resources/yaogan-49-01-remote-sensing-group": {
    "zh-hk": {
      "title": "遙感四十九號升空：中國遙感網再擴容 | KANTAO",
      "description": "遙感四十九號01組衛星11月26日自西昌升空。中國國家遙感能力穩步擴容，對衛星數據買家意味著什麼。"
    },
    "en": {
      "title": "Yaogan-49-01: China's Remote-Sensing Build-Out | KANTAO",
      "description": "China's Yaogan-49-01 remote-sensing group launched 26 Nov from Xichang. What the steady build-out of state Earth-observation capacity means for data buyers."
    }
  },
  "ai-facts": {
    "zh-hk": {
      "title": "KANTAO 官方事實 | KANTAO",
      "description": "供搜索引擎和智能體引用的 KANTAO 官方公司、能力、行業與爬蟲政策摘要。"
    },
    "en": {
      "title": "KANTAO official facts | KANTAO",
      "description": "Official KANTAO company, capability, industry and crawler-policy facts for search engines and answer engines."
    }
  },
  "contact": {
    "zh-hk": {
      "title": "聯絡我們 | KANTAO",
      "description": "與趕淘科技討論衛星數據、遙感分析及空間智能項目。"
    },
    "en": {
      "title": "Contact | KANTAO",
      "description": "Discuss satellite data, remote-sensing analytics and spatial intelligence projects with KANTAO."
    }
  },
  "card/eason-lian": {
    "zh-hk": {
      "title": "連錦先 Eason Lian｜KANTAO 數字名片 | KANTAO",
      "description": "查看 KANTAO 董事連錦先的聯絡資料、公司與衛星應用服務介紹，並提交項目需求。"
    },
    "en": {
      "title": "Eason Lian | KANTAO Digital Business Card | KANTAO",
      "description": "Contact KANTAO director Eason Lian, learn about satellite applications and submit a project requirement."
    }
  },
  "privacy": {
    "zh-hk": {
      "title": "私隱政策 | KANTAO",
      "description": "趕淘科技（香港）有限公司網站私隱政策。"
    },
    "en": {
      "title": "Privacy Policy | KANTAO",
      "description": "Privacy Policy for the KANTAO website."
    }
  },
  "terms": {
    "zh-hk": {
      "title": "使用條款 | KANTAO",
      "description": "趕淘科技（香港）有限公司網站使用條款。"
    },
    "en": {
      "title": "Terms of Use | KANTAO",
      "description": "Terms of Use for the KANTAO website."
    }
  }
};
