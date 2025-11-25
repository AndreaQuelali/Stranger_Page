# Stranger_Page
Una landing page de Stranger Things que presenta la serie, con diseño oscuro, tipografía ochentera, imágenes optimizadas y algunos componentes interactivos usando islas de Astro.

## Estructura:
```
Stranger_Page/
│
├─ public/
│   ├─ assets/
│       └─ images/
│           ├─ hero/
│           ├─ characters/
│           ├─ episodes/
│           └─ gallery/
│
├─ src/
│   ├─ components/
│   │   ├─ Hero.astro
│   │   ├─ Navbar.astro
│   │   ├─ Footer.astro
│   │   ├─ Characters.astro
│   │   ├─ Gallery.astro
│   │   ├─ Episodes.astro
│   │   ├─ Faq.astro
│   │   ├─ Trailer.astro
│   │   └─ interactive/
│   │       ├─ Carousel.jsx
│   │       ├─ EpisodeTabs.jsx
│   │       └─ FAQAccordion.jsx
│   │
│   ├─ layouts/
│   │   └─ MainLayout.astro
│   │
│   └─ pages/
│       └─ index.astro
│
├─ package.json
├─ tsconfig.json (si elegiste TS)
├─ astro.config.mjs
└─ README.md
```

## Pasos para ejecutar el proyecto:
1. Clonar el repositorio:
```
git clone https://github.com/AndreaQuelali/Stranger_Page.git
```
2. Instalar dependencias:
```
cd Stranger_Page
npm install
```
3. Ejecutar el proyecto:
```
npm run dev
```
4. Abrir el navegador y visitar http://localhost:4321
