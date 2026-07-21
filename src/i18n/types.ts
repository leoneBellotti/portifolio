export interface ServiceEntry {
  title: string;
  description: string;
  problem: string;
  idealClient: string;
  deliverables: string;
  model: string;
}

export interface ProjectEntry {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  tech: string[];
  challenges: string;
  status: string;
  statusBadge: string;
  disclaimer?: string;
  links: { live?: string; repo?: string };
}

export interface QuickProject {
  name: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
}

export interface ExperienceEntry {
  company: string;
  period: string;
  roles: string[];
  summary: string;
  activities: string[];
  internalProjects: string[];
  highlight: string;
  mentoring: string;
  sector: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    services: string;
    experience: string;
    skills: string;
    blog: string;
    contact: string;
  };
  common: {
    ctaViewProjects: string;
    ctaContactMe: string;
    ctaDownloadResume: string;
    viewCase: string;
    backToProjects: string;
    liveSite: string;
    repository: string;
    myRole: string;
    techUsed: string;
    challenges: string;
    status: string;
    languageSwitch: string;
    skipToContent: string;
  };
  meta: Record<
    | 'home'
    | 'about'
    | 'projects'
    | 'services'
    | 'experience'
    | 'skills'
    | 'blog'
    | 'contact',
    PageMeta
  >;
  hero: {
    title: string;
    subtitle: string;
  };
  home: {
    summaryShort: string;
    servicesTitle: string;
    servicesIntro: string;
    projectsTitle: string;
    projectsIntro: string;
    experienceTitle: string;
    experienceIntro: string;
    contactTitle: string;
    contactIntro: string;
    seeAllServices: string;
    seeAllProjects: string;
  };
  about: {
    title: string;
    intro: string;
    fullSummary: string;
    diffsTitle: string;
    diffs: string[];
    valuePropositionTitle: string;
    valueProposition: string;
    educationTitle: string;
    educationText: string;
  };
  services: {
    title: string;
    intro: string;
    items: ServiceEntry[];
    problemLabel: string;
    clientLabel: string;
    deliverablesLabel: string;
    modelLabel: string;
  };
  projects: {
    title: string;
    intro: string;
    items: ProjectEntry[];
    cartoola: QuickProject;
    quickProjectsTitle: string;
    problemLabel: string;
    solutionLabel: string;
    featuresLabel: string;
  };
  experience: {
    title: string;
    intro: string;
    entry: ExperienceEntry;
    activitiesTitle: string;
    highlightTitle: string;
    internalProjectsTitle: string;
  };
  skills: {
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  blog: {
    title: string;
    intro: string;
    emptyState: string;
  };
  contact: {
    title: string;
    intro: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
    formDisabled: string;
    channelsTitle: string;
    scheduleCta: string;
    resumeCta: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
}
