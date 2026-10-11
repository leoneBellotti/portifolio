# PORTFOLIO_START.md

Documento de contexto e requisitos para o desenvolvimento do site pessoal de portfólio profissional de **Leone Bellotti**. Gerado a partir de entrevista estruturada, do currículo em PDF exportado do LinkedIn, e da inspeção direta do código dos projetos próprios (AtendePix, 3DT Online, Sakkamusuko) e do perfil público no GitHub.

Este arquivo é a fonte principal de verdade para o desenvolvimento do site. Decisões novas devem ser refletidas aqui antes de virar código.

---

## 1. Visão geral

**Objetivo do site**: portfólio profissional, currículo online, apresentação comercial, catálogo de serviços e vitrine de projetos — funcionando como canal central para conseguir freelas, consultorias e parcerias em produtos próprios, e também como referência para recrutadores.

**Público-alvo**: ambos os públicos (recrutadores e clientes/empresas contratantes), com prioridade comercial para **clientes, freelas e consultoria** — o site não deve parecer um currículo tradicional.

**Objetivo principal**: gerar oportunidades de freelas, consultoria/Tech Lead fracionado e parcerias em produtos próprios (não emprego CLT/PJ fixo).

**Ação esperada do visitante**: explorar os projetos e conhecer as competências/realizações primeiro; o contato é a consequência natural, não a ação forçada logo de cara.

**Idiomas**: português (principal) e inglês, desde o lançamento.

---

## 2. Posicionamento profissional

**Título profissional** (versão completa, estilo LinkedIn):
> Especialista Técnico Sênior — Sistemas, APIs, Cloud e Bancos de Dados, Modernização de Legados e Produtos Digitais

**Frase principal (hero)**:
> 15+ anos construindo, modernizando e sustentando sistemas — do banco de dados à interface, da infraestrutura à segurança.

**Resumo curto**:
> Desenvolvedor sênior com mais de 15 anos de experiência em todo o ciclo de vida de sistemas: requisitos, banco de dados, backend, frontend, infraestrutura e segurança. Cria produtos digitais próprios do zero e atua na modernização de sistemas legados críticos.

**Resumo completo**:
> Atuo há mais de 15 anos com desenvolvimento de software, participando de todo o ciclo de criação, evolução e sustentação de sistemas: levantamento de requisitos, análise de regras de negócio, definição de soluções, modelagem de bancos de dados, desenvolvimento frontend e backend, infraestrutura, segurança, publicação e manutenção. Minha trajetória combina experiência técnica, visão de produto e atuação em ambientes complexos — sistemas corporativos, aplicações legadas, APIs, integrações, servidores físicos e ambientes em nuvem. Além da experiência corporativa, também crio produtos próprios: do AtendePix, um SaaS que desenvolvi sozinho do zero, a jogos web como o 3D&T Online e o Sakkamusuko, publicado e em evolução contínua. Uso ferramentas e agentes de inteligência artificial como apoio no dia a dia — análise de código, documentação, refatoração e testes — sempre com revisão humana e responsabilidade técnica sobre as decisões implementadas.

**Diferenciais**:
- Atua do levantamento de requisitos até produção e sustentação — não só escreve código.
- Constrói produtos digitais próprios sozinho, incluindo infraestrutura e publicação (não é só "ideia", tem produto rodando).
- Trânsito real entre tecnologia legada (ColdFusion, Lucee, PHP) e stack moderna (Node.js, NestJS, Vue, React), sem esconder nenhuma das duas.
- Experiência prática recente com correção de vulnerabilidades em APIs de produção.
- Usa múltiplos agentes de IA (Claude, Codex, ChatGPT) como parte real do fluxo de trabalho, com responsabilidade técnica sobre o resultado.
- Combina desenvolvimento com habilidades visuais (Photoshop, Illustrator, CorelDRAW, 3ds Max/modelagem 3D) — produz os próprios assets em projetos de jogos.

**Proposta de valor**:
> Ajudo negócios e produtos a saírem do papel ou saírem do zero: do levantamento de requisitos ao banco de dados, backend, frontend, infraestrutura, segurança e publicação — sozinho ou como extensão do seu time.

---

## 3. Perfil profissional

- Mais de 15 anos de experiência em desenvolvimento de software, todos na mesma empresa (ProcessMind), com progressão de carreira interna.
- Áreas de atuação: desenvolvimento fullstack, APIs REST, bancos de dados relacionais e não-relacionais, infraestrutura física e em nuvem, segurança de aplicações, modernização de sistemas legados, criação de produtos digitais/SaaS.
- Trajetória: começou como Analista de Sistemas Internet, evoluiu para Desenvolvedor Pleno e hoje é Desenvolvedor de Sistemas Sênior — sempre na ProcessMind, desde agosto de 2011.
- Fora do ambiente corporativo, desenvolve produtos próprios de ponta a ponta (produto, código, infraestrutura, publicação), com apoio de ferramentas de IA.
- **Formação acadêmica**: Tecnologia em Sistemas de Informação pela Universidade Paulista (não concluída). Deve aparecer de forma objetiva, sem tom de justificativa, e depois da experiência/projetos/competências na hierarquia da página "Sobre".

---

## 4. Serviços

Contratação: **freelancer e consultoria** (sem CLT/PJ fixo), **100% remoto**, boa disponibilidade para novos projetos.

### 1. Desenvolvimento de sistemas web e APIs
- **Descrição**: criação de sistemas web e APIs REST do zero, ou evolução de sistemas existentes, cobrindo banco de dados, backend e frontend.
- **Problema resolvido**: o negócio precisa de um sistema novo ou de uma funcionalidade que o time atual não tem capacidade ou tempo de entregar.
- **Cliente ideal**: pequenas e médias empresas, ou times técnicos que precisam de um desenvolvedor sênior para tocar um projeto do início ao fim.
- **Entregáveis**: sistema/API funcional, documentação técnica básica, código versionado, deploy configurado.
- **Modelo**: projeto fechado (freelancer) ou pacote de horas.

### 2. Modernização e recuperação de sistemas legados
- **Descrição**: atualização de sistemas antigos (ColdFusion, PHP, versões desatualizadas de frameworks) para stacks modernas, preservando dados e regras de negócio.
- **Problema resolvido**: sistema antigo que ninguém mais quer ou consegue manter, mas que ainda sustenta o negócio — inclui projetos abandonados por outros desenvolvedores.
- **Cliente ideal**: empresas com sistemas legados críticos ou projetos parados.
- **Entregáveis**: diagnóstico da base atual, plano de modernização, sistema migrado com paridade de funcionalidades.
- **Modelo**: consultoria + projeto fechado por fase.

### 3. Diagnóstico técnico e correção de vulnerabilidades
- **Descrição**: análise de APIs e sistemas em produção em busca de vulnerabilidades, dependências desatualizadas e falhas de configuração, com correção aplicada.
- **Problema resolvido**: sistema exposto a riscos de segurança sem que a equipe saiba onde estão as brechas.
- **Cliente ideal**: empresas com APIs/sistemas em produção sem auditoria de segurança recente.
- **Entregáveis**: relatório de vulnerabilidades encontradas, correções aplicadas, recomendações de hardening.
- **Modelo**: consultoria pontual ou pacote de horas.

### 4. Consultoria técnica / Tech Lead fracionado
- **Descrição**: apoio técnico recorrente para decisões de arquitetura, revisão de código, priorização técnica e orientação de times.
- **Problema resolvido**: empresa sem um técnico sênior disponível em tempo integral para guiar decisões importantes.
- **Cliente ideal**: startups e pequenas empresas que precisam de liderança técnica sem contratar um Tech Lead full-time.
- **Entregáveis**: sessões recorrentes, documentação de decisões, acompanhamento de entregas.
- **Modelo**: pacote de horas mensal.

### 5. Criação de MVP e produtos digitais/SaaS
- **Descrição**: construção de um MVP funcional do zero — banco de dados, backend, frontend e infraestrutura — para validar uma ideia de produto.
- **Problema resolvido**: alguém tem uma ideia de produto, mas não tem um time técnico para tirá-la do papel.
- **Cliente ideal**: empreendedores e pequenas empresas com uma ideia validada de negócio, mas sem capacidade técnica própria.
- **Entregáveis**: MVP funcional publicado, documentação básica, possibilidade de continuidade via manutenção.
- **Modelo**: projeto fechado por fase ou consultoria.

### 6. Sustentação e manutenção mensal
- **Descrição**: acompanhamento contínuo de sistemas em produção — correções, pequenas evoluções, suporte a incidentes.
- **Problema resolvido**: sistema já pronto que precisa de alguém de confiança cuidando dele no dia a dia.
- **Cliente ideal**: empresas com sistemas em produção sem desenvolvedor dedicado.
- **Entregáveis**: pacote de horas mensal, relatório periódico de atividades.
- **Modelo**: pacote de horas mensal (retainer).

### 7. Desenvolvimento de jogos web
- **Descrição**: criação de jogos e experiências interativas para web, do conceito à publicação.
- **Problema resolvido**: estúdios ou criadores independentes que precisam de um desenvolvedor capaz de tocar um jogo web sozinho (frontend, backend e infraestrutura).
- **Cliente ideal**: estúdios indie ou criadores de conteúdo que querem lançar um jogo web.
- **Entregáveis**: protótipo jogável, build publicada, documentação técnica do motor de jogo.
- **Modelo**: projeto fechado por fase ou consultoria.

---

## 5. Projetos

### AtendePix

- **Descrição curta**: mini SaaS para pequenos negócios transformarem atendimentos recebidos por WhatsApp, Instagram ou telefone em clientes, orçamentos, cobranças Pix, pedidos e controle financeiro.
- **Problema**: pequenos negócios recebem atendimento espalhado em múltiplos canais e perdem controle de orçamentos, cobranças e pedidos.
- **Solução**: plataforma multi-tenant com cadastro de clientes, geração de orçamentos, cobrança via Pix, gestão de pedidos e acompanhamento financeiro.
- **Funcionalidades**: multi-tenant (múltiplas empresas), painel administrativo, auditoria de ações sensíveis (pagamentos/assinaturas), rate limiting, monitoramento de erros, logs estruturados, healthcheck.
- **Minha atuação**: criado sozinho, do zero, com apoio de ferramentas de IA — produto, backend, frontend, infraestrutura e publicação.
- **Tecnologias**: monorepo (npm workspaces); API em Node.js/TypeScript com NestJS, Prisma e PostgreSQL; frontend em Vue 3 + Vite + Pinia + Tailwind CSS; Redis; Docker; deploy em Google Cloud Run (região São Paulo) com Firebase Hosting; CI/CD via GitHub Actions; testes com Vitest e Playwright.
- **Desafios técnicos**: integrações com WhatsApp.
- **Estado atual**: em produção, sem clientes ainda — em fase de divulgação para se mostrar no mercado.
- **Links**: [atendepix.com.br](https://atendepix.com.br) · repositório público no GitHub (parte do código é aberta).
- **Restrições de divulgação**: **não mostrar preços** (estratégia deliberada para gerar curiosidade).

### 3D&T Online

- **Descrição curta**: ferramenta web — **projeto fã, não-oficial** — de apoio ao sistema de RPG de mesa **3D&T Alpha** (crédito ao sistema original, propriedade da Jambô Editora / Marcus Lyra).
- **Problema**: jogadores de 3D&T precisam de uma forma digital de criar fichas, consultar catálogos de regras e jogar aventuras narrativas.
- **Solução**: plataforma web com cadastro/login (inclusive Google), criação e visualização de fichas de personagem, catálogos de vantagens/desvantagens/perícias/magias, sistema de combate, aventuras narrativas com IA mestre, geração de imagem de personagem e suporte a múltiplos idiomas.
- **Minha atuação**: criado sozinho, do zero até a publicação.
- **Tecnologias**: frontend em Vue 3 + Vite + Tailwind CSS + vue-i18n; backend em Node.js + Express 5 + MongoDB, com OpenAI (geração de história/IA mestre), Google Auth, Resend (e-mail) e Sharp/GridFS (imagens); Docker; deploy em nuvem.
- **Desafios técnicos**: motor de combate com as regras oficiais do sistema e as interações entre elas, extraído para um módulo de domínio isolado e testável.
- **Estado atual**: finalizado, em produção, com jogadores reais.
- **Links**: [3dtonline.com.br](https://3dtonline.com.br) · repositório público no GitHub ("3dt").
- **Restrições de divulgação**: deixar explícito, de forma visível no case, que é um **projeto de fã não-oficial**, com crédito ao sistema original 3D&T — não apresentar como produto autoral independente.

### Sakkamusuko

- **Descrição curta**: jogo web de futebol e estratégia, com coleção de atletas fictícios, desenvolvimento de carreiras e partidas simuladas PvE e PvP, disponível no navegador.
- **Conceito**: o jogador monta um clube, coleciona atletas e cartas de suporte, desenvolve carreiras por turnos com treinos, eventos e habilidades, organiza escalações e disputa partidas contra equipes do jogo ou outros clubes.
- **Cuidado com propriedade intelectual**: o projeto tem identidade própria — nomes, artes, interface e narrativa originais; países/clubes/atletas fictícios ou tratados de forma genérica; regras, atributos e motor de partida próprios. Não usa nomes, personagens ou IP de terceiros como se fossem parte do produto.
- **Funcionalidades atuais**: cadastro e login Google, coleção de atletas e suportes, mercado com banners e evolução de duplicatas, formações 11x11 e 5x5 com capitão e táticas, carreiras por turnos, campanha PvE com objetivos, partidas PvP simuladas entre clubes, histórico, missões e recompensas; administração de catálogos e auditoria. PvP não deve ser descrito como multiplayer em tempo real. Quantidades de catálogo não serão divulgadas sem confirmação dos dados em produção.
- **Minha atuação**: criado sozinho, incluindo o motor de simulação de partidas, o sistema de progressão/treino, a criação das imagens dos atletas e a criação do sistema de habilidades do zero.
- **Tecnologias**: monorepo pnpm + Turborepo + TypeScript; frontend React 19 + Vite + Phaser 4 + Recharts; API NestJS + Prisma + MongoDB, com autenticação própria e login Google; Firebase Hosting para landing e jogo, com pipeline GitHub Actions.
- **Desafios técnicos**: motor de simulação calculado na API e reproduzido em Phaser, calibração de táticas e habilidades, progressão das carreiras, prevenção de partidas/recompensas duplicadas, criação de artes próprias e administração auditável.
- **Estado atual**: publicado e em evolução contínua. Landing e jogo responderam HTTP 200 em 11/10/2026; isso confirma a publicação da interface, sem afirmar números de jogadores ou disponibilidade de todas as operações da API.
- **Links**: [sakkamusuko.com](https://sakkamusuko.com/) · [jogar](https://sakkamusuko.com/game/) · [repositório](https://github.com/leoneBellotti/Sakkamusuko).
- **Público-alvo**: genérico, sem nicho definido.
- **Monetização**: manter planos, preços e detalhes comerciais fora do portfólio.
- **Mídias disponíveis**: artes próprias e imagem de divulgação da landing, reutilizada no case com descrição em português e inglês.
- **Restrições de divulgação**: apresentar como jogo publicado e em evolução, com identidade própria; não afirmar multiplayer em tempo real, quantidade de jogadores ou planos comerciais.
- **Atualização do portfólio (11/10/2026)**: sincronizar case, cards, página Sobre e currículos em português e inglês com o README, dependências e schema atuais em `E:/Sakkamusuko`, além da verificação pública da landing e `/game/`.

### Cartoola (projeto adicional)

- **Descrição curta**: site que usa as APIs do Cartola FC (Globo.com) para gerir dados e estatísticas de jogadores do Campeonato Brasileiro.
- **Tecnologia**: Vue.
- **Link**: repositório público no GitHub ("cartoola").
- **Observação**: projeto menor — pode entrar como item rápido na lista de projetos, sem necessariamente virar um estudo de caso completo (a definir na fase de conteúdo).

### Projetos corporativos (ProcessMind — anonimizados)

Todos os itens abaixo devem ser descritos **sem nome de cliente** e sem detalhes internos da empresa.

- **Sistema de comunicação entre cartórios de registro civil** (registrocivil.org.br — nome público, já divulgado no LinkedIn do profissional): atuação no time de **backend** — APIs REST, integrações, bancos Oracle/MySQL/MariaDB, e um trabalho de destaque: identificação e correção de vulnerabilidades em mais de dez APIs (atualização de dependências, revisão de código, adequações de segurança).
- **Sistema de gestão para clínica do setor de saúde (pediatria)**: atuação completa — infraestrutura, frontend e backend. Stack: ColdFusion + Oracle.
- **Automação de pedidos B2B via e-mail**: sistema que lê caixas de e-mail para gerir pedidos. Atuação completa — infraestrutura, frontend e backend. Stack: Lucee + MySQL.
- **Plataformas internas da ProcessMind (Makeit e JobOne)**: contribuição em levantamento de requisitos e desenvolvimento (mencionar apenas de forma genérica, sem detalhar arquitetura ou funcionalidades internas).

### Repositórios públicos / código aberto

GitHub: [github.com/leoneBellotti](https://github.com/leoneBellotti)
- `atende-pix` — código do AtendePix (parcialmente aberto).
- `3dt` — 3D&T Online.
- `cartoola` — ferramenta com API do Cartola FC.
- Repositórios de 2014 (`mayron`, `phoneGap`, `PhoneGapTeste`) — testes antigos de aprendizado, **não devem aparecer** no portfólio.

---

## 6. Experiência profissional

**ProcessMind** — única empresa da trajetória profissional, desde agosto de 2011 (15+ anos).

- **Progressão de cargo**: Analista de Sistemas Internet → Desenvolvedor Pleno → **Desenvolvedor de Sistemas Sênior** (atual).
- **Atividades**: desenvolvimento e sustentação de aplicações frontend e backend; criação e manutenção de APIs REST, rotas, autenticação e integrações; desenvolvimento com JavaScript, Node.js, PHP, ColdFusion e Lucee; interfaces com HTML, CSS, JavaScript, Vue.js e Bootstrap; modelagem, consultas, procedures e integrações em bancos Oracle, MySQL e MariaDB; levantamento de requisitos e análise de regras de negócio; correção e evolução de sistemas legados; investigação de problemas em aplicações, bancos, integrações e performance; atuação com servidores físicos, ambientes Windows/Linux, AWS, Docker; documentação técnica e apoio na definição de arquitetura e soluções.
- **Projetos internos relevantes**: time de backend do registrocivil.org.br; sistema de gestão para clínica (pediatria, atuação completa); automação de pedidos B2B via e-mail (atuação completa); contribuição em requisitos/desenvolvimento das plataformas Makeit e JobOne.
- **Resultado de destaque**: identificação e correção de vulnerabilidades em mais de dez APIs, envolvendo atualização de dependências, revisão de código e adequações de segurança.
- **Liderança/orientação**: treinamento e explicação de projetos internos para outros colegas (mentoria informal / onboarding técnico).
- **Setor**: tecnologia da informação — consultoria de processos e sistemas corporativos, incluindo um produto voltado à comunicação entre cartórios de registro civil.

**Informações que não podem ser publicadas**: nomes de clientes da ProcessMind (exceto o próprio registrocivil.org.br, que já é público), arquitetura interna detalhada, credenciais, nomes internos de sistemas, e qualquer afirmação de que uma correção específica está ativa em produção sem confirmação atual.

---

## 7. Competências

Organizadas por área, sem percentuais ou barras de proficiência.

**Frontend**: JavaScript, Vue.js, React, HTML, CSS, Tailwind CSS.

**Backend**: Node.js, NestJS, Express, PHP, ColdFusion, Lucee, APIs REST.

**Banco de dados**: Oracle, MySQL, MariaDB, PostgreSQL (Prisma), MongoDB, Redis — modelagem, consultas, procedures.

**Infraestrutura e cloud**: servidores físicos, Windows e Linux, AWS, Google Cloud Run, Firebase Hosting, Docker.

**Segurança**: identificação e correção de vulnerabilidades, autenticação (JWT, OAuth Google), rate limiting, auditoria de ações sensíveis.

**Produto e requisitos**: levantamento de requisitos, análise de regras de negócio, definição de soluções, documentação técnica.

**Ferramentas de IA aplicadas ao desenvolvimento**: Claude (Claude Code), Codex, ChatGPT — usados no dia a dia para análise de código, documentação, refatoração e testes, sempre com revisão humana e responsabilidade técnica sobre o que é implementado.

**Design e produção visual** (diferencial para projetos de jogos e produtos próprios): Photoshop, Illustrator, CorelDRAW, 3ds Max, modelagem 3D.

**Testes e qualidade**: Vitest, Playwright, testes com Python, ESLint, Prettier.

**Tecnologias legadas mantidas com transparência** (parte real da experiência, sem esconder): ColdFusion, Lucee, PHP.

---

## 8. Estrutura do site

- **Home**: apresentação principal, resumo profissional, áreas de atuação, projetos em destaque, chamada para contato.
- **Sobre**: trajetória, experiência, forma de trabalho, visão profissional, diferenciais; formação acadêmica citada de forma objetiva, no fim da seção.
- **Projetos**: lista com AtendePix, 3D&T Online, Sakkamusuko e Cartoola (este último possivelmente como item simples).
  - Páginas individuais: `/projetos/atendepix`, `/projetos/3dt-online`, `/projetos/sakkamusuko`.
- **Serviços**: as 7 ofertas descritas na seção 4.
- **Experiência**: linha do tempo (ProcessMind com progressão de cargo), responsabilidades, tecnologias.
- **Competências**: organizadas por área (seção 7).
- **Blog**: confirmado para o lançamento — conteúdo técnico e de posicionamento.
- **Contato**: e-mail, WhatsApp, LinkedIn, GitHub, formulário, agenda para reuniões, currículo em PDF.

Navegação e CTAs devem reforçar a ação principal: explorar projetos/competências → contato como próximo passo natural.

---

## 9. Conteúdo textual inicial

**Título principal (hero)**: Leone Bellotti

**Subtítulo**: Especialista Técnico Sênior — Sistemas, APIs, Cloud e Modernização de Legados

**Sobre mim (rascunho)**:
> Trabalho com desenvolvimento de software há mais de 15 anos, participando do ciclo completo de criação e evolução de sistemas: levantamento de requisitos, modelagem de banco de dados, backend, frontend, infraestrutura, segurança e sustentação. Atuei tanto em sistemas corporativos críticos quanto na criação dos meus próprios produtos — do AtendePix, um SaaS que desenvolvi sozinho do zero, a jogos web como o 3D&T Online e o Sakkamusuko, publicado e em evolução contínua. Gosto de entender o problema antes da tecnologia, e de acompanhar uma solução da ideia até a produção.

**Serviços (chamada de seção)**:
> Do diagnóstico técnico à sustentação: veja como posso ajudar seu sistema ou produto a sair do papel, ganhar segurança ou continuar de pé.

**Projetos (chamada de seção)**:
> Produtos que criei do zero, sozinho — da ideia à publicação.

**Experiência (chamada de seção)**:
> 15+ anos de trajetória em uma mesma empresa, com evolução constante de responsabilidade e escopo técnico.

**Contato (chamada de seção)**:
> Tem um sistema para modernizar, um produto para tirar do papel ou uma vaga de consultoria? Vamos conversar.

**CTAs principais**: "Ver projetos" · "Falar comigo" · "Baixar currículo".

**Metadescription**:
> Leone Bellotti — especialista técnico sênior com mais de 15 anos de experiência em sistemas, APIs, bancos de dados, infraestrutura e modernização de sistemas legados. Conheça projetos, serviços e formas de contato.

**Descrição para compartilhamento social**:
> Desenvolvedor sênior e criador de produtos digitais. Do levantamento de requisitos à produção — sistemas, APIs, banco de dados, infraestrutura e segurança.

---

## 10. Identidade visual

- **Foto profissional**: não disponível. Usar alternativa visual (ex: avatar estilizado/iniciais, ou composição gráfica tech, sem retrato pessoal).
- **Logotipo**: sem logo pessoal — usar nome como wordmark estilizado. Logos/nomes dos produtos (AtendePix, 3D&T Online, Sakkamusuko) usados exatamente como estão hoje.
- **Tema**: automático (claro/escuro conforme preferência do sistema do visitante).
- **Estilo**: tech / dev / gamer — sugestão de paleta escura como base, com acentos vibrantes (tons tipo terminal/neon), tipografia com toque monoespaçado em detalhes técnicos (badges de tecnologia, trechos de código).
- **Imagens**: apenas estáticas (sem vídeos por enquanto). Screenshots dos projetos a definir na fase de conteúdo; ilustrações de atletas do Sakkamusuko já existem e podem ser usadas.
- **Referências de estilo**: nenhuma referência específica de site foi indicada — usar a vibe "tech/dev/gamer" como guia na fase de design visual.

---

## 11. Requisitos técnicos

- **Stack recomendada**: **Astro**, com componentes **Vue** onde houver necessidade de interatividade (framework que o profissional já domina). Justificativa: performance e SEO fortes por padrão, baixa manutenção, poucas dependências, suporte nativo a conteúdo (blog) e i18n, e hospedagem de baixo/nenhum custo.
- **Hospedagem**: Cloudflare Pages ou Vercel (camada gratuita, sem servidor para manter).
- **Domínio**: ainda não registrado. O nome de domínio deve ficar em uma variável de configuração central, para poder ser alterado facilmente e refletir em todo o site (não hardcoded).
- **Idiomas**: português (padrão) e inglês, desde o lançamento.
- **Blog**: sim, desde o lançamento.
- **Currículo**: novo PDF, a ser criado a partir do conteúdo final do site (não reaproveitar diretamente o PDF exportado do LinkedIn).
- **Formulário de contato**: recomendado via serviço estático sem backend próprio (ex: Web3Forms ou Formspree), com proteção anti-spam (honeypot).
- **Analytics**: recomendado Cloudflare Web Analytics (sem cookies, sem banner de consentimento necessário).
- **Agenda para reuniões**: sim — recomendado Calendly ou Cal.com.
- **Custo mensal**: alvo é próximo de zero — hospedagem gratuita, único custo recorrente é a renovação do domínio (~R$40–60/ano).
- **SEO, acessibilidade, responsividade, performance**: seguir boas práticas padrão (HTML semântico, imagens otimizadas, lazy loading, contraste adequado, mobile-first).

---

## 12. SEO

- Títulos e descriptions únicos por página.
- Open Graph e Twitter Cards para compartilhamento social.
- Sitemap.xml e robots.txt.
- Canonical URL em todas as páginas.
- Dados estruturados `Person` (perfil profissional) e `ProfilePage`.
- Dados estruturados de projeto (`CreativeWork` ou equivalente) para os estudos de caso, quando aplicável.
- Sem repetição artificial de palavras-chave — conteúdo natural, focado em resultados e problemas resolvidos.

---

## 13. Privacidade e segurança

- Não publicar nomes de clientes da ProcessMind (exceto o próprio registrocivil.org.br, que já é informação pública).
- Não publicar preços do AtendePix.
- Não publicar credenciais, variáveis de ambiente, nomes internos de sistemas ou arquitetura privada de nenhum projeto corporativo.
- Anonimizar os projetos de pediatria e de automação B2B — sem nome de cliente.
- Apresentar o 3D&T Online explicitamente como **projeto de fã não-oficial**, com crédito ao sistema original 3D&T (Jambô Editora / Marcus Lyra) — nunca como produto autoral independente.
- Apresentar o Sakkamusuko como **publicado e em evolução contínua**, conforme verificação de 11/10/2026; não divulgar planos comerciais nem afirmar multiplayer em tempo real.
- Não afirmar que a correção de vulnerabilidades nas APIs do registrocivil.org.br está necessariamente refletida no ambiente de produção atual, a menos que reconfirmado.
- Não expor endereço residencial — apenas a região (Santo André, São Paulo) para fins de "atendimento remoto a partir de".
- Proteger o formulário de contato contra spam (honeypot ou captcha leve).
- Não usar nomes, personagens ou propriedade intelectual de terceiros como se fossem parte do produto (aplica-se em especial ao Sakkamusuko).

---

## 14. Backlog inicial

| Etapa | Descrição | Prioridade | Dependências | Critério de aceite |
|---|---|---|---|---|
| Preparação | Registrar domínio, configurar repositório, escolher stack final (Astro + Vue) | Alta | Nenhuma | Domínio registrado; repositório inicial criado e rodando localmente |
| Estrutura | Criar esqueleto de páginas/rotas (Home, Sobre, Projetos, Serviços, Experiência, Competências, Blog, Contato) em PT e EN | Alta | Preparação | Navegação entre todas as páginas funcionando, com placeholders |
| Conteúdo | Revisar e finalizar todos os textos deste documento (seção 9) para cada página, em PT e EN | Alta | Estrutura | Textos finais aprovados pelo Leone |
| Layout | Definir paleta de cores final, tipografia e componentes visuais (tema claro/escuro automático) | Alta | Conteúdo (parcial) | Protótipo visual aprovado para pelo menos Home e uma página de projeto |
| Implementação | Construir as páginas com a stack definida, responsivas e acessíveis | Alta | Layout | Site navegável localmente, sem erros de build |
| Projetos | Montar os estudos de caso (AtendePix, 3D&T Online, Sakkamusuko, Cartoola) com imagens definidas | Média | Implementação | Cada projeto com página própria, imagens e links corretos |
| SEO | Implementar metadados, sitemap, robots.txt, dados estruturados | Média | Implementação | Lighthouse SEO ≥ 90; dados estruturados validados |
| Testes | Revisão de responsividade, acessibilidade e links quebrados | Média | Projetos + SEO | Sem erros críticos de acessibilidade; todos os links válidos |
| Publicação | Deploy em produção (Cloudflare Pages/Vercel), domínio apontado | Alta | Testes | Site acessível publicamente no domínio final |
| Evolução | Currículo em PDF, blog com primeiros posts, agenda de reuniões, analytics | Baixa | Publicação | Currículo disponível para download; primeiro post publicado; analytics recebendo dados |

---

## 15. Pendências

- **Hospedagem confirmada (11/10/2026)**: Firebase Hosting, projeto e site `leone-bellotti`, endereço público `https://leone-bellotti.web.app/`. Usar esse endereço em `SITE_URL`, canonicals, Open Graph e sitemap. Publicar o build estático de `dist/` com `firebase deploy --only hosting --project leone-bellotti`; configuração versionada em `firebase.json` e `.firebaserc`.
- **Domínio próprio**: ainda não registrado — enquanto isso, usar o endereço Firebase confirmado acima.
- **Foto profissional**: não existe — definir alternativa visual definitiva na fase de layout.
- ~~**Currículo em PDF**: precisa ser criado do zero a partir do conteúdo final do site (não é o PDF do LinkedIn usado nesta entrevista).~~ Feito — gerado a partir do conteúdo do site via `scripts/generate-resume.mjs` (`npm run generate:resume`), arquivos em `public/cv/`.
- **Screenshots/imagens finais** dos projetos (AtendePix, 3D&T Online, Sakkamusuko) ainda precisam ser selecionadas.
- **Paleta de cores exata**: só a vibe "tech/dev/gamer" foi definida — cores específicas ficam para a fase de layout.
- **Cartoola**: definir se vira um estudo de caso completo ou aparece apenas como item rápido na lista de projetos.
- **Makeit e JobOne**: definir se merecem menção um pouco mais detalhada (sempre genérica) ou se ficam apenas citados de passagem na experiência.
- **WhatsApp**: número informado (11 998436150) — confirmar antes da publicação se deve aparecer como link direto (wa.me) ou apenas como texto.
