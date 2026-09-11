/**
 * LiquidGlassFilter.tsx
 *
 * Reutilizable SVG filter that sculpts a liquid-glass optical effect
 * directly on the alpha silhouette of any vector/Lottie element.
 *
 * Effect layers:
 *  1. feGaussianBlur     → soft bump map from SourceAlpha (surface curvature)
 *  2. feSpecularLighting → top-left point light → white specular highlight ridge
 *  3. feComposite(in)    → clip specular strictly to vector alpha silhouette
 *  4. feFlood + feComposite → violet chromatic fringe on shadow edges
 *  5. feMerge            → blend all layers onto SourceGraphic
 *
 * SSR/Hydration safety: rendered as an absolute, zero-size, pointer-events-none
 * SVG element — invisible in the DOM, no layout impact, no hydration mismatch.
 */

export function LiquidGlassFilter() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0,
        zIndex: -1,
      }}
    >
      <defs>
        {/* ────────────────────────────────────────────────────────────
            liquid-glass-core
            Apply with: filter: url(#liquid-glass-core)
            ──────────────────────────────────────────────────────────── */}
        <filter
          id="liquid-glass-core"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          {/* 1. Bump map: blur the alpha channel to infer 3D curvature */}
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="2.5"
            result="bumpBlur"
          />

          {/* 2. Specular highlight — top-left point light, white ridge */}
          <feSpecularLighting
            in="bumpBlur"
            surfaceScale="5"
            specularConstant="1.8"
            specularExponent="32"
            lightingColor="#ffffff"
            result="specularRaw"
          >
            <fePointLight x="100" y="-80" z="200" />
          </feSpecularLighting>

          {/* 3. Clip specular strictly to the vector's alpha silhouette */}
          <feComposite
            in="specularRaw"
            in2="SourceAlpha"
            operator="in"
            result="specularCut"
          />

          {/* 4a. Violet shadow fringe flood */}
          <feFlood floodColor="#7928CA" floodOpacity="0.55" result="violetFlood" />

          {/* 4b. Clip violet to the alpha */}
          <feComposite
            in="violetFlood"
            in2="SourceAlpha"
            operator="in"
            result="violetLayer"
          />

          {/* 4c. Offset the violet fringe (shadow direction) */}
          <feOffset in="violetLayer" dx="1.5" dy="2.5" result="violetOffset" />

          {/* 4d. Soften the violet fringe */}
          <feGaussianBlur in="violetOffset" stdDeviation="1.2" result="violetSoft" />

          {/* 5. Merge: base graphic → violet shadow → white specular */}
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="violetSoft" />
            <feMergeNode in="specularCut" />
          </feMerge>
        </filter>

        {/* ────────────────────────────────────────────────────────────
            liquid-glass-intense
            Variant: stronger specular + purple accent for larger icons (≥64px)
            Apply with: filter: url(#liquid-glass-intense)
            ──────────────────────────────────────────────────────────── */}
        <filter
          id="liquid-glass-intense"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="bumpBlur" />

          <feSpecularLighting
            in="bumpBlur"
            surfaceScale="7"
            specularConstant="2.2"
            specularExponent="40"
            lightingColor="#ffffff"
            result="specularRaw"
          >
            <fePointLight x="80" y="-120" z="180" />
          </feSpecularLighting>

          <feComposite
            in="specularRaw"
            in2="SourceAlpha"
            operator="in"
            result="specularCut"
          />

          {/* Secondary micro-specular for sub-rim highlight */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="microBlur" />
          <feSpecularLighting
            in="microBlur"
            surfaceScale="3"
            specularConstant="1.2"
            specularExponent="60"
            lightingColor="#e9d5ff"
            result="microSpec"
          >
            <fePointLight x="400" y="600" z="120" />
          </feSpecularLighting>
          <feComposite
            in="microSpec"
            in2="SourceAlpha"
            operator="in"
            result="microSpecCut"
          />

          {/* Violet + purple chromatic fringe */}
          <feFlood floodColor="#a855f7" floodOpacity="0.6" result="purpleFlood" />
          <feComposite
            in="purpleFlood"
            in2="SourceAlpha"
            operator="in"
            result="purpleLayer"
          />
          <feOffset in="purpleLayer" dx="2" dy="3" result="purpleOffset" />
          <feGaussianBlur in="purpleOffset" stdDeviation="1.5" result="purpleSoft" />

          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="purpleSoft" />
            <feMergeNode in="microSpecCut" />
            <feMergeNode in="specularCut" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
