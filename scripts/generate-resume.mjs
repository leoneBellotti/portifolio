// Generates the downloadable resume PDFs served from /public/cv/.
// Re-run with `node scripts/generate-resume.mjs` whenever the CV content below changes.
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'cv');

const ACCENT = rgb(0x0d / 255, 0x7d / 255, 0x72 / 255);
const TEXT = rgb(0.12, 0.12, 0.14);
const MUTED = rgb(0.42, 0.42, 0.46);

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 50;
const CONTENT_W = PAGE_W - MARGIN * 2;

function wrapText(text, font, size, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function buildResume(pdfDoc, data) {
  const fonts = {
    regular: await pdfDoc.embedFont(StandardFonts.Helvetica),
    bold: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    italic: await pdfDoc.embedFont(StandardFonts.HelveticaOblique),
  };

  let page = pdfDoc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  const ensureSpace = (needed) => {
    if (y - needed < MARGIN) {
      page = pdfDoc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
    }
  };

  const drawLine = (text, { font = fonts.regular, size = 10, color = TEXT, gap = 14, x = MARGIN, maxWidth = CONTENT_W } = {}) => {
    for (const line of wrapText(text, font, size, maxWidth)) {
      ensureSpace(gap);
      page.drawText(line, { x, y, size, font, color });
      y -= gap;
    }
  };

  const drawBullets = (items, { size = 9.7, gap = 13 } = {}) => {
    const indent = 12;
    for (const item of items) {
      const lines = wrapText(item, fonts.regular, size, CONTENT_W - indent);
      lines.forEach((line, i) => {
        ensureSpace(gap);
        page.drawText(i === 0 ? `•  ${line}` : `   ${line}`, { x: MARGIN, y, size, font: fonts.regular, color: TEXT });
        y -= gap;
      });
    }
  };

  const sectionTitle = (title) => {
    ensureSpace(30);
    y -= 8;
    page.drawText(title.toUpperCase(), { x: MARGIN, y, size: 11, font: fonts.bold, color: ACCENT });
    y -= 6;
    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.75, color: ACCENT });
    y -= 14;
  };

  // Header
  page.drawText(data.name, { x: MARGIN, y, size: 25, font: fonts.bold, color: TEXT });
  y -= 24;
  drawLine(data.title, { size: 12.5, color: ACCENT, gap: 17, font: fonts.bold });
  y -= 4;
  drawLine(data.contactLine, { size: 9.5, color: MUTED, gap: 13 });
  y -= 8;
  ensureSpace(4);
  page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 1, color: ACCENT });
  y -= 20;

  sectionTitle(data.labels.summary);
  drawLine(data.summary, { size: 10, gap: 14 });
  y -= 6;

  sectionTitle(data.labels.experience);
  drawLine(data.experience.company, { size: 12.5, font: fonts.bold, gap: 16 });
  drawLine(data.experience.period, { size: 9.3, color: MUTED, gap: 12 });
  drawLine(data.experience.roles.join('  —  '), { size: 10, font: fonts.italic, gap: 14 });
  y -= 2;
  drawLine(data.experience.sector, { size: 9.3, color: MUTED, gap: 12 });
  y -= 6;
  drawBullets(data.experience.activities);
  y -= 4;
  drawLine(`${data.labels.highlight}: ${data.experience.highlight}`, { size: 10, gap: 14 });
  y -= 8;

  sectionTitle(data.labels.projects);
  for (const project of data.projects) {
    ensureSpace(16);
    page.drawText(project.name, { x: MARGIN, y, size: 10.5, font: fonts.bold, color: TEXT });
    y -= 14;
    drawLine(project.tagline, { size: 9.5, color: MUTED, gap: 12 });
    y -= 4;
  }
  y -= 4;

  sectionTitle(data.labels.education);
  drawLine(data.education, { size: 10, gap: 14 });
  y -= 6;

  sectionTitle(data.labels.skills);
  for (const group of data.skills) {
    drawLine(`${group.title}: ${group.items.join(', ')}`, { size: 9.4, gap: 13 });
  }

  pdfDoc.setTitle(`${data.name} — ${data.title}`);
  pdfDoc.setAuthor(data.name);
  pdfDoc.setSubject(data.title);
  pdfDoc.setKeywords(['curriculo', 'resume', 'cv', data.name]);
  pdfDoc.setProducer('pdf-lib');
  pdfDoc.setCreator('leonebellotti.com.br');
}

const pt = {
  name: 'Leone Bellotti',
  title: 'Especialista Técnico Sênior em Sistemas, APIs e Cloud',
  contactLine:
    'leone.bellotti@gmail.com  •  +55 11 99843-6150  •  Santo André, SP — 100% remoto  •  linkedin.com/in/leonebellotti  •  github.com/leoneBellotti',
  summary:
    'Desenvolvedor sênior com mais de 15 anos de experiência em todo o ciclo de vida de sistemas: requisitos, banco de dados, backend, frontend, infraestrutura e segurança. Cria produtos digitais próprios do zero e atua na modernização de sistemas legados críticos.',
  labels: {
    summary: 'Resumo',
    experience: 'Experiência profissional',
    highlight: 'Destaque',
    projects: 'Projetos próprios',
    education: 'Formação acadêmica',
    skills: 'Competências',
  },
  experience: {
    company: 'ProcessMind',
    period: 'Desde agosto de 2011 (15+ anos) — única empresa da trajetória profissional.',
    roles: ['Analista de Sistemas Internet', 'Desenvolvedor Pleno', 'Desenvolvedor de Sistemas Sênior (atual)'],
    sector: 'Tecnologia da informação — consultoria de processos e sistemas corporativos.',
    activities: [
      'Desenvolvimento e sustentação de aplicações frontend e backend',
      'Criação e manutenção de APIs REST, rotas, autenticação e integrações',
      'Desenvolvimento com JavaScript, Node.js, PHP, ColdFusion e Lucee',
      'Interfaces com HTML, CSS, JavaScript, Vue.js e Bootstrap',
      'Modelagem, consultas, procedures e integrações em bancos Oracle, MySQL e MariaDB',
      'Levantamento de requisitos e análise de regras de negócio',
      'Correção e evolução de sistemas legados',
      'Atuação com servidores físicos, ambientes Windows/Linux, AWS e Docker',
    ],
    highlight:
      'Identificação e correção de vulnerabilidades em mais de dez APIs do registrocivil.org.br, envolvendo atualização de dependências, revisão de código e adequações de segurança.',
  },
  projects: [
    { name: 'AtendePix', tagline: 'Mini SaaS para pequenos negócios transformarem atendimentos em clientes, orçamentos, cobranças Pix e controle financeiro. Criado sozinho, do zero, até a produção.' },
    { name: '3D&T Online', tagline: 'Ferramenta web de apoio ao sistema de RPG de mesa 3D&T Alpha — fichas, catálogos de regras e aventuras narrativas com IA mestre. Finalizado e em produção.' },
    { name: 'Sakkamusuko', tagline: 'Jogo web de formação, coleção e evolução de atletas de futebol fictícios, incluindo motor de simulação de partidas próprio. MVP completo.' },
  ],
  education: 'Tecnologia em Sistemas de Informação — Universidade Paulista (não concluída).',
  skills: [
    { title: 'Frontend', items: ['JavaScript', 'Vue.js', 'React', 'HTML', 'CSS', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'PHP', 'ColdFusion', 'Lucee', 'APIs REST'] },
    { title: 'Banco de dados', items: ['Oracle', 'MySQL', 'MariaDB', 'PostgreSQL (Prisma)', 'MongoDB', 'Redis'] },
    { title: 'Infraestrutura e cloud', items: ['Servidores físicos', 'Windows', 'Linux', 'AWS', 'Google Cloud Run', 'Firebase Hosting', 'Docker'] },
    { title: 'Segurança', items: ['Correção de vulnerabilidades', 'JWT', 'OAuth Google', 'Rate limiting', 'Auditoria de ações sensíveis'] },
    { title: 'Produto e requisitos', items: ['Levantamento de requisitos', 'Análise de regras de negócio', 'Definição de soluções', 'Documentação técnica'] },
    { title: 'IA aplicada ao desenvolvimento', items: ['Claude (Claude Code)', 'Codex', 'ChatGPT'] },
    { title: 'Testes e qualidade', items: ['Vitest', 'Playwright', 'ESLint', 'Prettier'] },
  ],
};

const en = {
  name: 'Leone Bellotti',
  title: 'Senior Technical Specialist in Systems, APIs and Cloud',
  contactLine:
    'leone.bellotti@gmail.com  •  +55 11 99843-6150  •  Santo André, SP, Brazil — 100% remote  •  linkedin.com/in/leonebellotti  •  github.com/leoneBellotti',
  summary:
    'Senior developer with 15+ years of experience across the full system lifecycle: requirements, databases, backend, frontend, infrastructure and security. Builds self-owned digital products from scratch and modernizes critical legacy systems.',
  labels: {
    summary: 'Summary',
    experience: 'Professional experience',
    highlight: 'Key achievement',
    projects: 'Personal projects',
    education: 'Education',
    skills: 'Skills',
  },
  experience: {
    company: 'ProcessMind',
    period: 'Since August 2011 (15+ years) — the only company in his professional career.',
    roles: ['Internet Systems Analyst', 'Mid-level Developer', 'Senior Systems Developer (current)'],
    sector: 'Information technology — process and corporate systems consulting.',
    activities: [
      'Development and support of frontend and backend applications',
      'Building and maintaining REST APIs, routes, authentication and integrations',
      'Development with JavaScript, Node.js, PHP, ColdFusion and Lucee',
      'Interfaces with HTML, CSS, JavaScript, Vue.js and Bootstrap',
      'Modeling, queries, stored procedures and integrations across Oracle, MySQL and MariaDB',
      'Requirements gathering and business rule analysis',
      'Fixing and evolving legacy systems',
      'Working with physical servers, Windows/Linux environments, AWS and Docker',
    ],
    highlight:
      'Identified and fixed vulnerabilities in more than ten registrocivil.org.br APIs, including dependency updates, code review and security hardening.',
  },
  projects: [
    { name: 'AtendePix', tagline: 'A mini SaaS for small businesses to turn inbound conversations into customers, quotes, Pix charges and financial control. Built alone, from scratch to production.' },
    { name: '3D&T Online', tagline: 'A web companion tool for the 3D&T Alpha tabletop RPG — character sheets, rulebook catalogs and AI-driven narrative adventures. Finished and in production.' },
    { name: 'Sakkamusuko', tagline: 'A web game about training, collecting and evolving fictional football athletes, including a custom match simulation engine. MVP complete.' },
  ],
  education: 'Information Systems Technology — Universidade Paulista (not completed).',
  skills: [
    { title: 'Frontend', items: ['JavaScript', 'Vue.js', 'React', 'HTML', 'CSS', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'PHP', 'ColdFusion', 'Lucee', 'REST APIs'] },
    { title: 'Databases', items: ['Oracle', 'MySQL', 'MariaDB', 'PostgreSQL (Prisma)', 'MongoDB', 'Redis'] },
    { title: 'Infrastructure and cloud', items: ['Physical servers', 'Windows', 'Linux', 'AWS', 'Google Cloud Run', 'Firebase Hosting', 'Docker'] },
    { title: 'Security', items: ['Vulnerability remediation', 'JWT', 'Google OAuth', 'Rate limiting', 'Sensitive action auditing'] },
    { title: 'Product and requirements', items: ['Requirements gathering', 'Business rule analysis', 'Solution design', 'Technical documentation'] },
    { title: 'AI tools applied to development', items: ['Claude (Claude Code)', 'Codex', 'ChatGPT'] },
    { title: 'Testing and quality', items: ['Vitest', 'Playwright', 'ESLint', 'Prettier'] },
  ],
};

async function generate(data, filename) {
  const pdfDoc = await PDFDocument.create();
  await buildResume(pdfDoc, data);
  const bytes = await pdfDoc.save();
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, filename), bytes);
  console.log(`Generated ${filename} (${bytes.length} bytes)`);
}

await generate(pt, 'leone-bellotti-cv-pt.pdf');
await generate(en, 'leone-bellotti-cv-en.pdf');
