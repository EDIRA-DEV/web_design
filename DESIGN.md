# EDIRA Design System & Brand Tokens

Guía técnica y de especificación del sistema de diseño para **EDIRA** (`landing-e-t`). Documenta la identidad visual corporativa, paletas cromáticas, jerarquía tipográfica, reglas de maquetación, elevaciones de cristal (*glassmorphism*) y extensiones editoriales.

---

## 1. Color Palette

El sistema de color de EDIRA se basa en un esquema de **alto contraste y modo oscuro profundo (*Deep Dark Luxe*)**, utilizando acentos violetas eléctricos (*Electric Violet*), cian/azul cian y destellos sutiles de gradientes sobre fondos negros puros y superficies elevadas.

### 1.1 Canvas & Backgrounds

Superficies de fondo, contenedores y niveles de elevación de capas.

| Token CSS | Valor HEX / RGBA | Clase Tailwind Recomendada | Uso / Contexto |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#000000` | `bg-black` / `bg-[#000000]` | Canvas principal, fondo raíz del `body` y secciones clave |
| `--color-bg-alt` | `#0a0a0a` | `bg-[#0a0a0a]` / `bg-neutral-950` | Fondo alternado de secciones, tarjetas y footer |
| `--color-bg-elevated` | `#171717` | `bg-[#171717]` / `bg-neutral-900` | Tarjetas en hover, dropdowns y elementos flotantes |
| *Surface Card Solid* | `#111111` | `bg-[#111111]` | Tarjetas modulares sólidas (About Us, Values, etc.) |
| *Surface Modal Dark* | `#0d0d0d` | `bg-[#0d0d0d]` | Fondo principal de modales (ej. Contacto, Cookies) |
| *Surface Legal Prose* | `#060606` | `bg-[#060606]` | Fondos de páginas de texto legal y lectura inmersiva |
| *Glass Surface Ultra-Subtle* | `rgba(255, 255, 255, 0.02)` | `bg-white/[0.02]` | Fondos de tarjetas con soporte de transparencia |
| *Glass Surface Light* | `rgba(255, 255, 255, 0.03)` | `bg-white/[0.03]` | Superficies de testimonios, items de lista e insignias |
| *Glass Overlay Nav* | `rgba(0, 0, 0, 0.40)` | `bg-black/40` | Navbar en estado scrolled (`backdrop-blur-md`) |
| *Glass Overlay Heavy* | `rgba(17, 17, 17, 0.85)` | `bg-[#111111]/85` | Banner de cookies y modales (`backdrop-blur-xl`) |
| *Modal Backdrop Dim* | `rgba(0, 0, 0, 0.80)` | `bg-black/80` | Capa oscurecedora para modales (`backdrop-blur-sm`) |

---

### 1.2 Text & Ink (Tipografía)

Jerarquía de contraste cromático para legibilidad óptima sobre fondos oscuros.

| Token CSS | Valor HEX / RGBA | Clase Tailwind Recomendada | Uso / Contexto |
| :--- | :--- | :--- | :--- |
| `--color-text` | `#ffffff` | `text-white` | Títulos primarios (H1-H6), texto de énfasis y CTAs |
| `--color-text-secondary` | `#cbd5e1` / `#a1a1aa` | `text-slate-300` / `text-zinc-400` | Subtítulos, párrafos descriptivos y placeholders |
| `--color-text-muted` | `#94a3b8` / `#71717a` | `text-slate-400` / `text-zinc-500` | Metadatos, fechas, copyrights e iconos pasivos |
| `--color-text-inverse` | `#000000` | `text-black` | Texto sobre badges o botones de color claro |
| *Prose Body Contrast* | `rgba(255, 255, 255, 0.85)` | `text-white/85` | Lectura extendida de artículos y reportes |
| *Prose Secondary* | `rgba(255, 255, 255, 0.65)` | `text-white/65` | Párrafos secundarios en tarjetas técnicas |
| *Prose Muted* | `rgba(255, 255, 255, 0.55)` | `text-white/55` | Descripciones de pie de tarjeta y notas marginales |

---

### 1.3 Brand Accents & Gradients

Acentos corporativos para acciones primarias, estados dinámicos e identidades tecnológicas.

| Token CSS / Nombre | Valor HEX / RGBA / Gradiente | Clase Tailwind Recomendada | Uso / Contexto |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#8b5cf6` | `text-purple-500` / `bg-purple-500` | Color primario de marca, enlaces activos, bullets |
| `--color-primary-hover` | `#7c3aed` | `bg-purple-600` / `bg-[#7c3aed]` | Hover primario, nodos activos y puntos de timeline |
| `--color-primary-dark` | `#9333ea` | `bg-purple-700` / `bg-[#9333ea]` | Estado activo / hover profundo de botones |
| `--color-primary-light` | `rgba(139, 92, 246, 0.20)` | `bg-purple-500/20` | Fondos de tags primarios y auras lumínicas |
| *Brand Electric Violet* | `#a855f7` | `text-[#a855f7]` / `bg-[#a855f7]` | Puntos destacados y acentos en formularios |
| *Brand Neon Pulse* | `#c084fc` | `text-[#c084fc]` / `bg-[#c084fc]` | Efectos de animación de energía y líneas de pulso |
| *Brand Vibrant Violet* | `#a72ef4` | `bg-[#a72ef4]` | Gradientes de avatares y fondos radiales |
| `--color-secondary` | `#0ea5e9` | `text-sky-500` / `bg-sky-500` | Acento secundario y contrastes de datos |
| `--color-secondary-hover`| `#0284c7` | `bg-sky-600` / `bg-[#0284c7]` | Hover secundario |
| *Brand Deep Blue* | `#1f43c2` | `bg-[#1f43c2]` | Acentos corporativos de Ownership y gradientes |
| `--color-success` | `#10b981` | `text-emerald-500` / `bg-emerald-500`| Estados de éxito, validaciones y badges activos |
| `--color-warning` | `#f59e0b` | `text-amber-500` / `bg-amber-500` | Avisos de advertencia y destacados |
| `--color-error` | `#ef4444` | `text-red-500` / `bg-red-500` | Errores de validación y estados críticos |

#### Gradientes Corporativos

- **Gradient CTA / Submit Pill**:
  ```css
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  ```
  *Tailwind:* `bg-gradient-to-br from-[#7c3aed] to-[#a855f7]`

- **Gradient Text Shine (Headings)**:
  ```css
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.70) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
  *Tailwind:* `bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent`

- **Gradient Avatar / Node**:
  ```css
  background: linear-gradient(135deg, #a72ef4 0%, #1f43c2 100%);
  ```
  *Tailwind:* `bg-gradient-to-br from-[#a72ef4] to-[#1f43c2]`

- **Hero Ambient Glow (Top Right / Bottom Left)**:
  ```css
  background: radial-gradient(circle at top right, rgba(119, 54, 228, 0.15) 0%, transparent 40%),
              radial-gradient(circle at bottom left, rgba(31, 67, 194, 0.15) 0%, transparent 40%);
  ```

---

### 1.4 Dividers & Borders

Estructura de separación visual y bordes finos (*Hairline borders*).

| Token CSS | Valor HEX / RGBA | Clase Tailwind Recomendada | Uso / Contexto |
| :--- | :--- | :--- | :--- |
| `--color-border` | `#262626` | `border-[#262626]` / `border-neutral-800` | Bordes estándar de tarjetas y cajas |
| `--color-border-light` | `#171717` | `border-[#171717]` / `border-neutral-900` | Separadores de footer y líneas sutiles |
| *Border Glass Ultra-Faint*| `rgba(255, 255, 255, 0.04)` | `border-white/[0.04]` | Separadores internos de listas |
| *Border Glass Standard* | `rgba(255, 255, 255, 0.08)` | `border-white/[0.08]` | Bordes de inputs, tarjetas e imágenes |
| *Border Glass Pronounced*| `rgba(255, 255, 255, 0.10)` | `border-white/10` | Tarjetas interactivas y botones secundarios |
| *Border Glass Hover* | `rgba(255, 255, 255, 0.20)` | `border-white/20` | Estados hover de tarjetas y botones |
| *Border Glass Active* | `rgba(255, 255, 255, 0.25)` | `border-white/25` | Estados focus / active en inputs y modales |

---

## 2. Typography Hierarchy

EDIRA implementa una combinación tipográfica moderna: **Inter** como Sans UI principal con soporte de renderizado cinemático, **Serif Display** en cursiva para toques de elegancia editorial de consultoría de élite, y **JetBrains Mono / Fira Code** para código y metadatos estructurados.

```
                    TYPOGRAPHY ARCHITECTURE
 ┌───────────────────────────────────────────────────────────┐
 │ Sans UI (Inter)           :  UI, Body, Headlines, Labels  │
 │ Serif Accent (Italic)     :  Display Nuance (*Luxury*)     │
 │ Monospace (JetBrains Mono):  Technical Data, Code, Metas  │
 └───────────────────────────────────────────────────────────┘
```

### 2.1 Familias Tipográficas

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

- **Sans Principal**: `Inter` (importada vía `next/font/google` con `display: swap`, optimizada como variable `--font-sans`).
- **Serif Editorial**: `serif` nativo con renderizado cursivo (`font-style: italic`), utilizado en palabras clave de titulares para generar sofisticación visual (ej. *"Tailored **Solutions**"*, *"Core **Services**"*).
- **Monospace**: `'JetBrains Mono', 'Fira Code', monospace` para números de métricas, chips técnicos y código.

---

### 2.2 Escala Tipográfica de Tamaños (`fontSize`)

| Token CSS | Rem / Pixels | Clase Tailwind | Equivalente Línea (`line-height`) | Tracking Sugerido |
| :--- | :--- | :--- | :--- | :--- |
| `--text-xs` | `0.75rem` (12px) | `text-xs` | `1.4` (17px) | `tracking-wider` (`0.05em`) |
| `--text-sm` | `0.875rem` (14px) | `text-sm` | `1.5` (21px) | `tracking-normal` (`0`) |
| `--text-base` | `1.000rem` (16px) | `text-base` | `1.6` - `1.75` (26px) | `tracking-normal` (`0`) |
| `--text-lg` | `1.125rem` (18px) | `text-lg` | `1.6` - `1.8` (30px) | `tracking-normal` (`0`) |
| `--text-xl` | `1.250rem` (20px) | `text-xl` | `1.4` (28px) | `tracking-tight` (`-0.01em`) |
| `--text-2xl` | `1.500rem` (24px) | `text-2xl` | `1.3` (31px) | `tracking-tight` (`-0.01em`) |
| `--text-3xl` | `1.875rem` (30px) | `text-3xl` | `1.2` (36px) | `tracking-tight` (`-0.02em`) |
| `--text-4xl` | `2.250rem` (36px) | `text-4xl` | `1.15` (41px) | `tracking-tight` (`-0.02em`) |
| `--text-5xl` | `3.000rem` (48px) | `text-5xl` | `1.10` (53px) | `tracking-tighter` (`-0.025em`) |
| `--text-6xl` | `3.750rem` (60px) | `text-6xl` | `1.05` (63px) | `tracking-tighter` (`-0.03em`) |

---

### 2.3 Pesos Tipográficos (`fontWeight`)

```css
--font-normal:   400;  /* Texto de párrafo estándar y texto legal */
--font-medium:   500;  /* Subtítulos, nav links, preheads */
--font-semibold: 600;  /* Títulos de tarjeta, botones, tablas */
--font-bold:     700;  /* H1, H2, H3 principales y display */
```

---

### 2.4 Interlineados (`lineHeight`)

```css
--leading-tight:   1.15;  /* Titulares H1-H3 masivos */
--leading-normal:  1.50;  /* Elementos UI compactos y tarjetas */
--leading-relaxed: 1.75;  /* Párrafos largos de lectura y prosa editorial */
```

---

### 2.5 Jerarquía de Encabezados y Display

| Nivel / Rol | Estilos Clave (Tamaño, Peso, Tracking, Line Height) | Ejemplo de Uso |
| :--- | :--- | :--- |
| **Hero Display H1** | `5.5rem` (desktop) / `3rem` (mobile), `font-weight: 500-700`, `leading: 1.1`, `color: #fff` | Portadas de inicio y landings principales |
| **Section Title H2** | `2.5rem` - `3.5rem` (`clamp(2.5rem, 5vw, 4rem)`), `font-weight: 700`, `tracking: -0.02em` | Títulos de sección (Features, How We Work, Core Services) |
| **Subsection H3** | `1.5rem` - `1.875rem` (`var(--text-2xl)` - `var(--text-3xl)`), `font-weight: 600`, `leading: 1.2` | Títulos principales de tarjetas y artículos |
| **Card Heading H4** | `1.125rem` - `1.25rem` (`var(--text-lg)` - `var(--text-xl)`), `font-weight: 600` | Títulos de tarjetas secundarias y bloques de proceso |
| **Prehead / Eyebrow**| `0.875rem` (`var(--text-sm)`), `font-weight: 500`, `tracking: 0.02em - 0.1em`, `text-transform: uppercase` | Insignias superiores de contexto ("INSIGHTS", "SERVICES") |
| **Body Large** | `1.125rem` (`var(--text-lg)`), `font-weight: 400`, `line-height: 1.8`, `color: rgba(255,255,255,0.85)` | Primer párrafo / Lead de artículos |
| **Body Regular** | `1.000rem` (`var(--text-base)`), `font-weight: 400`, `line-height: 1.75`, `color: var(--color-text-secondary)` | Párrafos generales y descripciones |
| **Meta / Caption** | `0.75rem` - `0.875rem`, `font-weight: 400-500`, `color: var(--color-text-muted)` | Tiempos de lectura, fechas, notas legales |

---

## 3. Core UI Rules

### 3.1 Escala Estándar de Espaciado (`Spacing Scale`)

Basada en múltiplos armónicos con base en `4px` (`0.25rem`).

```
Token        Valor (rem)    Pixels      Uso Estándar
─────────────────────────────────────────────────────────────────
--space-1    0.25rem        4px         Micro-gaps, badges padding
--space-2    0.50rem        8px         Gaps entre iconos y textos
--space-3    0.75rem        12px        Paddings internos botones
--space-4    1.00rem        16px        Gaps en grids compactos, inputs
--space-5    1.25rem        20px        Paddings de tarjetas compactas
--space-6    1.50rem        24px        Container mobile padding, gutters
--space-8    2.00rem        32px        Container desktop padding, card pads
--space-10   2.50rem        40px        Separación de grupos y secciones medias
--space-12   3.00rem        48px        Separaciones de encabezados de sección
--space-16   4.00rem        64px        Gaps en grids divididos
--space-20   5.00rem        80px        Padding vertical de secciones medianas
--space-24   6.00rem        96px        Padding vertical de secciones completas
```

- **Layout Container Width**: `--max-width: 1200px` (`max-w-[1200px]` o `max-w-6xl` con márgenes automáticos).
- **Prose Container Width**: `max-width: 800px` centrado para artículos y documentos legales.
- **Header Height**: `--header-height: 72px`.

---

### 3.2 Radios de Curvatura (`Border Radius`)

```css
--radius-sm:   0.375rem; /* 6px  - Insignias pequeñas, switches, tags */
--radius-md:   0.500rem; /* 8px  - Inputs, botones secundarios, sub-bloques */
--radius-lg:   0.750rem; /* 12px - Contenedores medianos, inputs de formulario */
--radius-xl:   1.000rem; /* 16px - Tarjetas principales (Values, Core, Apart) */
--radius-2xl:  1.500rem; /* 24px - Bloques hero de artículos y módulos masivos */
--radius-full: 9999px;   /* Pills, botones redondos, avatares, badges */
```

---

### 3.3 Elevación, Sombras y Tratamiento de Cristal (*Glassmorphism*)

EDIRA utiliza elevaciones ópticas con sombras oscuras profundas combinadas con auras tenues en tonos violetas (`#8b5cf6` / `#a855f7`).

#### Sombras Base

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

#### Tratamientos Avanzados de Elevación & Auras

1. **Card Glass Hover Elevation**:
   ```css
   box-shadow: 0 10px 40px rgba(139, 92, 246, 0.15);
   border-color: rgba(255, 255, 255, 0.20);
   transform: translateY(-4px);
   ```

2. **Modal Glass Elevation**:
   ```css
   background: #0d0d0d;
   border: 1px solid rgba(255, 255, 255, 0.08);
   box-shadow: 0 24px 64px rgba(0, 0, 0, 0.70), 0 0 100px rgba(168, 85, 247, 0.05);
   ```

3. **Navbar Glass (Scrolled)**:
   ```css
   background-color: rgba(0, 0, 0, 0.40);
   backdrop-filter: blur(12px) saturate(180%);
   -webkit-backdrop-filter: blur(12px) saturate(180%);
   border-bottom: 1px solid rgba(255, 255, 255, 0.08);
   ```

4. **Point Icon Glow Aura**:
   ```css
   background-color: #7c3aed;
   box-shadow: 0 0 16px rgba(124, 58, 237, 0.50);
   ```

5. **Cinematic Hero Fade-to-Black**:
   ```css
   /* Overlay inferior para fusionar video con el canvas negro */
   background: linear-gradient(to bottom, transparent 0%, #000000 100%);
   ```

---

### 3.4 Transiciones & Micro-Interacciones

```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
```

- **Hover en Enlaces / Botones**: Transformaciones en escala (`scale(1.03)`) o traslación sutil (`translateY(-2px)` a `translateY(-4px)`).
- **Flechas de Navegación**: Traslación horizontal al hover (`transform: translateX(4px)`).

---

### 3.5 Especificación de Componentes Clave

#### Botón Primario (*Brand Pill Button*)
```css
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
font-size: 1rem;
font-weight: 600;
border-radius: 9999px;
background: linear-gradient(135deg, #7c3aed, #a855f7);
color: #ffffff;
border: none;
cursor: pointer;
transition: transform 0.2s ease, opacity 0.2s ease;
```

#### Botón Secundario (*Glass Button*)
```css
background-color: rgba(255, 255, 255, 0.10);
color: #ffffff;
border: 1px solid rgba(255, 255, 255, 0.20);
backdrop-filter: blur(8px);
border-radius: 9999px;
padding: 0.75rem 1.5rem;
font-weight: 600;
```

#### Input / Form Fields
```css
background-color: #0a0a0a;
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 12px;
padding: 1rem 1.25rem;
color: #ffffff;
font-size: 0.875rem;
outline: none;
transition: border-color 0.2s ease;
```

---

## 4. Editorial Extension Tokens

Guía técnica de tokens y clases para la maquetación consistente de **artículos de investigación (*Insights*), reportes técnicos, avisos de privacidad y tablas de datos corporativas**.

### 4.1 Tipografía Editorial y Prosa

Para mantener un ritmo de lectura cómodo en pantallas de alta resolución, la columna de lectura debe restringirse a `max-width: 800px` con un interlineado generoso (`1.75` - `1.8`).

```
                    EDITORIAL ARTICLE LAYOUT
 ┌───────────────────────────────────────────────────────────┐
 │ EYEBROW / CATEGORY  •  READING TIME                       │
 │ H1: Display Headline (font-bold, tracking-tight)          │
 │ Author Meta Row (Avatar + Name + Date)                    │
 │ ───────────────────────────────────────────────────────── │
 │ Lead Paragraph (text-lg, text-white/85, leading-relaxed)  │
 │                                                           │
 │ H2 Section Break (border-bottom hairline, text-white)     │
 │ Body Text Paragraph (text-base, text-white/75)            │
 │                                                           │
 │ ┌─ Callout / Warning Box ───────────────────────────────┐ │
 │ │  border-left: 3px solid #8b5cf6                       │ │
 │ │  background: rgba(168, 85, 247, 0.03)                 │ │
 │ └───────────────────────────────────────────────────────┘ │
 │                                                           │
 │ Data Table / Figure (Glass wrapper, hairline grid)        │
 └───────────────────────────────────────────────────────────┘
```

#### Clases Recomendadas para Prosa y Artículos

| Elemento | Estilos Recomendados (CSS / Tailwind) |
| :--- | :--- |
| **Contenedor Editorial** | `max-w-[800px] mx-auto px-6 py-12` |
| **Párrafo Lead / Entrada** | `text-lg text-white/85 leading-relaxed mb-6 font-normal` |
| **Párrafo Estándar** | `text-base text-white/75 leading-[1.8] mb-6` |
| **Encabezado H2** | `text-2xl md:text-3xl font-bold text-white mt-12 mb-4 tracking-tight border-b border-white/[0.05] pb-2` |
| **Encabezado H3** | `text-xl font-semibold text-white mt-8 mb-3` |
| **Listas con Bullet de Marca** | `ul { @apply pl-6 mb-6 list-disc; } li::marker { color: #8b5cf6; }` |
| **Enlaces en Texto** | `text-[#8b5cf6] underline underline-offset-4 hover:text-[#a855f7] transition-colors` |
| **Texto Resaltado (`strong`)** | `font-semibold text-white` |

---

### 4.2 Callout Boxes, Banners y Citas

#### Caja de Destacado / Callout Box
```css
.editorialCallout {
  background: rgba(168, 85, 247, 0.03);
  border-left: 3px solid var(--color-primary, #8b5cf6);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--space-4) var(--space-6);
  margin-block: var(--space-8);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.editorialCallout strong {
  color: var(--color-primary, #a855f7);
  font-weight: 600;
}
```
*Tailwind:* `bg-purple-500/[0.03] border-l-[3px] border-purple-500 rounded-r-xl p-5 my-8 text-sm md:text-base text-slate-300`

#### Bloque de Cita (*Editorial Blockquote*)
```css
.editorialQuote {
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: var(--space-6);
  margin-block: var(--space-8);
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text);
}
```
*Tailwind:* `border-l-2 border-white/20 pl-6 my-8 italic text-xl text-white leading-relaxed`

#### Badge de Metadato (*Meta Label*)
```css
.metaLabel {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```
*Tailwind:* `bg-white/[0.03] border border-white/[0.06] rounded px-2.5 py-1 text-xs text-slate-400 uppercase tracking-wider`

---

### 4.3 Tablas de Datos Corporativas (*Data Tables*)

Para especificaciones técnicas, benchmarks, comparativas de arquitectura y reportes analíticos.

```
                    EDIRA DATA TABLE SYSTEM
 ┌───────────────────────────────────────────────────────────┐
 │ ┌── Glass Outer Wrapper (rounded-xl, border-white/10) ──┐ │
 │ │  [Table Header: bg-neutral-950, text-xs uppercase]    │ │
 │ │  ───────────────────────────────────────────────────  │ │
 │ │  [Row 1: bg-transparent, text-sm, border-b]          │ │
 │ │  [Row 2: bg-white/[0.02] (Zebra row), text-sm]        │ │
 │ │  [Row 3: bg-transparent, text-sm, border-b]          │ │
 │ └───────────────────────────────────────────────────────┘ │
 └───────────────────────────────────────────────────────────┘
```

#### Estructura CSS Recomendada

```css
/* Contenedor con scroll horizontal responsivo */
.tableWrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  background-color: #0a0a0a;
  margin-block: var(--space-8);
}

.dataTable {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: var(--text-sm);
}

/* Cabecera */
.dataTable th {
  background-color: rgba(255, 255, 255, 0.02);
  color: var(--color-text);
  font-weight: 600;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Filas y Celdas */
.dataTable td {
  padding: var(--space-4) var(--space-5);
  color: var(--color-text-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  vertical-align: middle;
}

/* Alternancia de filas (Zebra) */
.dataTable tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.015);
}

/* Hover interactivo */
.dataTable tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

.dataTable tbody tr:last-child td {
  border-bottom: none;
}

/* Celdas numéricas / métricas */
.tableCellMetric {
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--color-primary);
}
```

#### Mapeo a Clases de Tailwind

```html
<div class="w-full overflow-x-auto rounded-xl border border-white/10 bg-[#0a0a0a] my-8">
  <table class="w-full text-left text-sm border-collapse">
    <thead>
      <tr class="border-b border-white/10 bg-white/[0.02]">
        <th class="py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-white">Métrica / Parámetro</th>
        <th class="py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-white">Valor Objetivo</th>
        <th class="py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-white">Estado</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-white/[0.04]">
      <tr class="hover:bg-white/[0.04] transition-colors">
        <td class="py-4 px-5 text-slate-300 font-medium">Core Web Vitals (LCP)</td>
        <td class="py-4 px-5 font-mono text-purple-400 font-semibold">&lt; 1.2s</td>
        <td class="py-4 px-5">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Óptimo
          </span>
        </td>
      </tr>
      <tr class="bg-white/[0.015] hover:bg-white/[0.04] transition-colors">
        <td class="py-4 px-5 text-slate-300 font-medium">Disponibilidad SLA</td>
        <td class="py-4 px-5 font-mono text-purple-400 font-semibold">99.99%</td>
        <td class="py-4 px-5">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Garantizado
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 5. Cheat Sheet de Implementación Rápida

```
┌────────────────────────────────────────────────────────────────────────┐
│                        QUICK TOKENS CHEAT SHEET                        │
├────────────────────────────────────────────────────────────────────────┤
│ Fondos     :  #000000 (Canvas) | #0a0a0a (Alt) | #111111 (Card Solid)  │
│ Acentos    :  #8b5cf6 (Primary) | #7c3aed (Hover) | #a855f7 (Electric) │
│ Textos     :  #ffffff (H1-H4) | #cbd5e1 (P/Body) | #94a3b8 (Muted)    │
│ Bordes     :  rgba(255,255,255,0.08) (Base) | rgba(255,255,255,0.20)  │
│ Radios     :  8px (Input) | 16px (Card) | 24px (Hero) | 9999px (Pill)  │
│ Sombras    :  0 10px 40px rgba(139, 92, 246, 0.15) (Hover Glow)        │
│ Blur       :  blur(12px) saturate(180%) (Navbar / Cards)              │
│ Max Width  :  1200px (Layout Container) | 800px (Editorial / Prose)   │
└────────────────────────────────────────────────────────────────────────┘
```
