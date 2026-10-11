# Portfólio — Leone Bellotti

Site pessoal de portfólio profissional. Requisitos e conteúdo aprovado vivem em [PORTFOLIO_START.md](./PORTFOLIO_START.md) — esse arquivo é a fonte de verdade; qualquer mudança de conteúdo/escopo deve ser refletida lá primeiro.

## Stack

Astro 7 + Vue (ilhas de interatividade) + Tailwind CSS v4. Site 100% estático (sem servidor/adaptador), i18n nativo do Astro (pt na raiz, en em `/en/`), fontes self-hosted (`@fontsource`).

## Estrutura

```
src/
  site.config.ts     # domínio, contatos, chaves de formulário/analytics — config central
  i18n/
    types.ts          # tipos do dicionário de conteúdo
    pt.ts / en.ts      # todo o texto do site, por idioma
    routes.ts          # mapa de rotas por idioma (slugs distintos pt/en)
  layouts/BaseLayout.astro
  components/          # Header, Footer, cards, TechBadgeList, ContactForm.vue...
  components/pages/     # conteúdo de cada página, parametrizado por `lang`
  pages/                # rotas pt (raiz) — arquivos finos que só montam layout + conteúdo
  pages/en/             # rotas en
  seo.ts                # JSON-LD (Person, ProfilePage, CreativeWork)
```

## Comandos

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor local em `localhost:4321` |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview do build de produção |

## Publicação

O portfólio está em https://leone-bellotti.web.app/, no Firebase Hosting (projeto/site `leone-bellotti`). Com a Firebase CLI instalada e autenticada, execute `npm run build` e depois `firebase deploy --only hosting --project leone-bellotti`. A configuração publica somente os arquivos estáticos de `dist/`.

## Pendências antes de publicar

Ver seção 15 do `PORTFOLIO_START.md` para a lista completa. Resumo do que falta configurar em `src/site.config.ts` e correlatos:

- **Domínio próprio**: `SITE_URL` usa o endereço Firebase confirmado (`leone-bellotti.web.app`) — trocar quando um domínio próprio for conectado.
- **Formulário de contato**: `CONTACT_FORM_ENDPOINT` (e `CONTACT_FORM_ACCESS_KEY` se usar Web3Forms) estão vazios — o formulário fica desabilitado (mostra só os canais alternativos) até serem preenchidos.
- **Agenda de reuniões**: `SCHEDULING_URL` vazio (Calendly/Cal.com).
- **Analytics**: `CF_ANALYTICS_TOKEN` vazio (Cloudflare Web Analytics).
- **Currículo em PDF**: os botões apontam para `/cv/leone-bellotti-cv-pt.pdf` e `-en.pdf`, mas os arquivos ainda não existem em `public/cv/`.
- **WhatsApp**: confirmar se deve ser link direto (`wa.me`, já implementado) ou só texto.
- **Imagem de OG/social**: nenhuma foi criada ainda; as tags `og:image`/`twitter:image` só aparecem quando uma é passada explicitamente para `BaseLayout`.
- **Imagens dos projetos**: Sakkamusuko tem arte de divulgação no case e links para o jogo publicado. Screenshots de gameplay e imagens de AtendePix e 3D&T Online continuam pendentes.
