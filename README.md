# 🫒 Azienda Agricola Pelaggi

Sito vetrina per un'azienda agricola calabrese con frantoio di proprietà, a
Strongoli — realizzato come **case study personale** per mettere alla prova
server-side rendering e SEO tecnica su un caso concreto (non è un incarico
commissionato da un cliente reale).

---

## Indice

1. [Funzionalità](#funzionalità)
2. [Perché il Server-Side Rendering](#perché-il-server-side-rendering)
3. [Tech Stack](#tech-stack)
4. [Struttura del Progetto](#struttura-del-progetto)
5. [Installazione e Avvio](#installazione-e-avvio)
6. [Build e Deploy](#build-e-deploy)
7. [Autore](#autore)

---

## Funzionalità

| Pagina | Descrizione |
|--------|-------------|
| **Home** | Hero con l'olio come protagonista, punti di forza dell'azienda (frantoio di proprietà, molitura a freddo, prodotto non miscelato), sezione "Dalla Terra alla Tavola" |
| **Il Frantoio** | Racconto del processo produttivo — dalla raccolta alla molitura, tecnologia e tradizione a confronto |
| **Chi Siamo** | Storia dell'azienda e del territorio |
| **Contatti** | Recapiti e form di contatto |

Layout condiviso (navbar + footer) su tutte le pagine, completamente
responsivo, con un'attenzione particolare a tempi di caricamento e resa su
mobile — è un sito vetrina, deve aprirsi subito e leggersi bene ovunque.

---

## Perché il Server-Side Rendering

Un sito vetrina vive o muore sulla ricerca locale ("olio extravergine
Strongoli") e su quanto velocemente si apre da telefono. Con l'SSR
(Angular Universal su Express):

- Le pagine arrivano al browser **già renderizzate**: primo contenuto
  visibile immediato, non si aspetta che il JavaScript scarichi e giri
- Google (e qualunque altro crawler) vede subito l'HTML finale, non una
  pagina vuota in attesa di JavaScript — indicizzazione più affidabile
- Meta tag, Open Graph e title impostati per la ricerca locale e per
  l'anteprima quando il link viene condiviso in chat

Su un sito con un'unica pagina davvero "di conversione" (la home) e poco
altro, è la differenza tra esserci nei risultati di ricerca e non esserci.

---

## Tech Stack

| Layer | Tecnologia | Versione |
|-------|-----------|----------|
| **Framework** | Angular (standalone components) | 21 |
| **Rendering** | Angular Universal (SSR) | 21 |
| **Server** | Express | 5 |
| **Linguaggio** | TypeScript | — |
| **Routing** | Angular Router | 21 |
| **Reactive** | RxJS | 7.8 |

---

## Struttura del Progetto

```
sito-pelaggi/
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── frantoio/
│   │   │   ├── chi-siamo/
│   │   │   └── contatti/
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── main.ts              # bootstrap client
│   ├── main.server.ts       # bootstrap server (SSR)
│   └── server.ts            # entry point Express
└── public/
    └── fotoFrantoio.jpeg
```

---

## Installazione e Avvio

### Prerequisiti

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

### Sviluppo (client-side, hot reload)

```bash
npm install
npm start
```

Apri [http://localhost:4200](http://localhost:4200). Non usa SSR in questa
modalità — è il flusso di sviluppo normale con `ng serve`.

### Con Server-Side Rendering (come in produzione)

```bash
npm run build
npm run serve:ssr:sito-pelaggi
```

Compila sia il bundle client sia quello server, poi avvia il server Express
che serve le pagine già renderizzate.

---

## Build e Deploy

```bash
npm run build
```

Genera `dist/sito-pelaggi/` con due cartelle: `browser/` (assets statici) e
`server/` (il bundle Node per l'SSR). Pronto per essere deployato su
qualunque piattaforma che supporti Node.js (Vercel, Render, un VPS con
`node dist/sito-pelaggi/server/server.mjs`).

---

## Autore

**Dario Elia** — [github.com/darioeliaaa](https://github.com/darioeliaaa) · [darioelia.it](https://www.darioelia.it)
