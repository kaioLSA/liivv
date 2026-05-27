# Liivv Beauty — Site Institucional

Site institucional premium para o **Liivv Beauty**, salão de beleza corporativo localizado no Complexo Rochavera, São Paulo.

## Stack Tecnológica

| Tecnologia | Finalidade |
|---|---|
| **Next.js 16** (App Router) | Framework React com SSG/SSR |
| **TypeScript** | Type safety completo |
| **TailwindCSS** | Estilização utility-first |
| **GSAP + ScrollTrigger** | Animações cinematográficas |
| **Cormorant Garamond** | Tipografia de display premium |
| **Inter** | Tipografia de corpo profissional |
| **Lucide React** | Ícones |

## Paleta de Cores

```
Brand Peach:   #FEBDAB  ← Cor principal da logo
Brand Gold:    #C9A882
Dark BG:       #0A0907
Dark Surface:  #120E0B
Dark Card:     #1A1410
Text Primary:  #FAF7F5
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Build de produção

```bash
npm run build
npm start
```

## Variáveis de Ambiente

```bash
cp .env.example .env.local
```

Configure o número de WhatsApp e demais variáveis em `src/config/site.ts`.

## Personalização Rápida

| O que mudar | Onde mudar |
|---|---|
| Contato / WhatsApp | `src/config/site.ts` |
| Serviços | `src/data/services/index.ts` |
| Depoimentos | `src/data/testimonials/index.ts` |
| Stats / Timeline / FAQ | `src/data/content/index.ts` |
| Cores | `tailwind.config.ts` + `src/app/globals.css` |
| Logo | `public/logo/liivv.svg` |
