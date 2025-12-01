export const SEO_CONFIG = {
  siteName: "Sylvain DAVID - Développeur Web Confirmé",
  siteUrl: "https://sylvain-dev.fr",
  defaultImage: "/me.jpeg",
  socialLinks: {
    github: "https://github.com/SylDav",
  },
  keywords: [
    "développeur web",
    "CDI", 
    "PHP",
    "Laravel", 
    "Symfony",
    "Vue.js",
    "Docker",
    "santé",
    "impact social",
    "autodidacte",
    "adaptable",
    "confirmé",
    "5 ans d'expérience"
  ],
  skills: [
    "PHP",
    "Laravel", 
    "Symfony",
    "Vue.js",
    "Docker",
    "JavaScript",
    "MySQL",
    "API REST",
    "IA pour le code"
  ]
} as const;

export const getSEOTitle = (title: string): string => {
  const siteName = SEO_CONFIG.siteName;
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
};

export const getStructuredData = (type: "Person" | "WebPage" | "Article", data?: Record<string, any>) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  };

  const structuredData = {
    Person: {
      name: "Sylvain DAVID",
      jobTitle: "Développeur Web Confirmé",
      description: "Développeur Web Confirmé spécialisé PHP, Laravel, Symfony et Vue.js. Recherche CDI dans la santé ou l'impact social.",
      url: SEO_CONFIG.siteUrl,
      sameAs: Object.values(SEO_CONFIG.socialLinks),
      knowsAbout: SEO_CONFIG.skills,
      jobSeekingCategory: "Développement Web",
      seeks: {
        "@type": "JobPosting",
        title: "Développeur Web Confirmé",
        description: "CDI en développement web avec préférence pour les secteurs santé et impact social",
        employmentType: "FULL_TIME"
      }
    },
    WebPage: {
      name: "Portfolio - Sylvain DAVID",
      description: "Portfolio de Sylvain DAVID, Développeur Web Confirmé",
      url: SEO_CONFIG.siteUrl,
      mainEntity: {
        "@type": "Person",
        name: "Sylvain DAVID"
      }
    },
    Article: {
      headline: data?.headline || "",
      description: data?.description || "",
      author: {
        "@type": "Person",
        name: "Sylvain DAVID"
      },
      publisher: {
        "@type": "Organization",
        name: "Sylvain DAVID"
      }
    }
  };

  return { ...baseData, ...structuredData[type], ...data };
};
