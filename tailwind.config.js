/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Every value below points at a CSS variable defined in
        // src/styles/theme.css — that file is the single global
        // source of truth for the whole app's color palette.
        // Change a color ONCE there and it updates everywhere
        // (every section, every hover state, every opacity variant
        // like bg-ink/85 or text-parchment/70) automatically.
        ink:        'rgb(var(--color-ink) / <alpha-value>)',         // primary text, dark surfaces
        parchment:  'rgb(var(--color-parchment) / <alpha-value>)',   // default page background
        stone:      'rgb(var(--color-stone) / <alpha-value>)',       // secondary surfaces, cards
        surface2:   'rgb(var(--color-surface-2) / <alpha-value>)',   // section-canvas rhythm, tone 2
        surface3:   'rgb(var(--color-surface-3) / <alpha-value>)',   // section-canvas rhythm, tone 3
        surface4:   'rgb(var(--color-surface-4) / <alpha-value>)',   // section-canvas rhythm, tone 4
        slate:      'rgb(var(--color-slate) / <alpha-value>)',       // secondary text, captions
        accent:     'rgb(var(--color-accent) / <alpha-value>)',      // sapphire — semantic brand accent
        accentDeep: 'rgb(var(--color-accent-deep) / <alpha-value>)', // darker accent, eyebrows/links on light bg
        gold:       'rgb(var(--color-gold) / <alpha-value>)',        // rose-gold — rare, institutional accent
        safe:       'rgb(var(--color-safe) / <alpha-value>)',        // "safe zone" state — muted sage, NEVER stock green
        alert:      'rgb(var(--color-alert) / <alpha-value>)',       // "SOS" state — muted brick, NEVER stock red
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],   // headlines + wordmark ONLY
        body:    ['Inter', 'sans-serif'], // all paragraph copy, nav, buttons
        mono:    ['JetBrains Mono', 'monospace'], // specs, eyebrows, captions ONLY
      },
      // Premium type-scale tuning — nudges every eyebrow/caption that uses
      // tracking-widest a little further apart (boutique/editorial feel),
      // and gives buttons/labels using tracking-wide a touch more air.
      // No class names changed anywhere in the app — only how they render.
      letterSpacing: {
        wide:    '0.04em',
        widest:  '0.16em',
      },
      // Premium, ink-tinted layered shadows — replaces Tailwind's flat
      // default grey shadows everywhere shadow-sm/md/lg/xl/2xl is already
      // used (including inside hover: states). No class names changed
      // anywhere in the app — only how they render.
      boxShadow: {
        sm:  '0 1px 3px rgba(14,16,19,0.08), 0 1px 2px rgba(14,16,19,0.06)',
        md:  '0 4px 12px rgba(14,16,19,0.10), 0 2px 4px rgba(14,16,19,0.08)',
        lg:  '0 12px 32px -4px rgba(14,16,19,0.16), 0 6px 12px -2px rgba(14,16,19,0.10)',
        xl:  '0 24px 48px -8px rgba(14,16,19,0.22), 0 10px 20px -4px rgba(14,16,19,0.14)',
        '2xl': '0 40px 80px -12px rgba(14,16,19,0.28), 0 16px 32px -6px rgba(14,16,19,0.16)',
      },
    },
  },
  plugins: [],
};