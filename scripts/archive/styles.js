const tokens = {
  colorBrandEsmerald: '#a7f3d0',
  colorBrandSlateBlue: '#7559d1',
  colorBrandMediumPurple: '#9879e9',
  colorBrandBlueMoon: '#eff1fd',
  colorBrandAmaranth: '#eb2d52',
  colorBrandMandy: '#eb4e58',
  colorBrandEastBay: '#455970',
  colorBrandRegentGray: '#7e858c',
  colorBrandLoblolly: '#b7b7b7',
  colorBrandWhiteLilac: '#e8e8e8',
  colorBrandHintOfRed: '#f9f9f9',
  colorBrandRomance: '#fcfdfd',
  colorBrandMediumSpringGreen: '#00e5a8',
  colorBrandPaoloVeroneseGreen: '#009877',
  colorBrandTurquoise: '#30CFD4',
  colorBrandElectricBlue: '#81EFFE',
  colorBrandWhite: '#ffffff',
  colorBrandSpanishGray: '#9297A0',
  colorBrandFeldspar: '#F7D4AD',
  colorBrandSpanishViridian: '#007e5c',
  colorBrandWhiteChocolate: '#f2e4d5',
  colorBrandRose: '#fecdd3',
  colorBrandEmperor: '#545454',

  colorBaseBlack: '#000',
  colorBaseWhite: '#fff',
  colorBaseTransparent: 'transparent',

  colorRose50: '#fff1f2',
  colorRose100: '#ffe4e6',
  colorRose200: '#fecdd3',
  colorRose300: '#fda4af',
  colorRose400: '#fb7185',
  colorRose500: '#f43f5e',
  colorRose600: '#e11d48',
  colorRose700: '#be123c',
  colorRose800: '#9f1239',
  colorRose900: '#881337',

  colorPink50: '#fdf2f8',
  colorPink100: '#fce7f3',
  colorPink200: '#fbcfe8',
  colorPink300: '#f9a8d4',
  colorPink400: '#f472b6',
  colorPink500: '#ec4899',
  colorPink600: '#db2777',
  colorPink700: '#be185d',
  colorPink800: '#9d174d',
  colorPink900: '#831843',

  colorFuchsia50: '#fdf4ff',
  colorFuchsia100: '#fae8ff',
  colorFuchsia200: '#f5d0fe',
  colorFuchsia300: '#f0abfc',
  colorFuchsia400: '#e879f9',
  colorFuchsia500: '#d946ef',
  colorFuchsia600: '#c026d3',
  colorFuchsia700: '#a21caf',
  colorFuchsia800: '#86198f',
  colorFuchsia900: '#701a75',

  colorPurple50: '#faf5ff',
  colorPurple100: '#f3e8ff',
  colorPurple200: '#e9d5ff',
  colorPurple300: '#d8b4fe',
  colorPurple400: '#c084fc',
  colorPurple500: '#a855f7',
  colorPurple600: '#9333ea',
  colorPurple700: '#7e22ce',
  colorPurple800: '#6b21a8',
  colorPurple900: '#581c87',

  colorViolet50: '#f5f3ff',
  colorViolet100: '#ede9fe',
  colorViolet200: '#ddd6fe',
  colorViolet300: '#c4b5fd',
  colorViolet400: '#a78bfa',
  colorViolet500: '#8b5cf6',
  colorViolet600: '#7c3aed',
  colorViolet700: '#6d28d9',
  colorViolet800: '#5b21b6',
  colorViolet900: '#4c1d95',

  colorIndigo50: '#eef2ff',
  colorIndigo100: '#e0e7ff',
  colorIndigo200: '#c7d2fe',
  colorIndigo300: '#a5b4fc',
  colorIndigo400: '#818cf8',
  colorIndigo500: '#6366f1',
  colorIndigo600: '#4f46e5',
  colorIndigo700: '#4338ca',
  colorIndigo800: '#3730a3',
  colorIndigo900: '#312e81',

  colorBlue50: '#eff6ff',
  colorBlue100: '#dbeafe',
  colorBlue200: '#bfdbfe',
  colorBlue300: '#93c5fd',
  colorBlue400: '#60a5fa',
  colorBlue500: '#3b82f6',
  colorBlue600: '#2563eb',
  colorBlue700: '#1d4ed8',
  colorBlue800: '#1e40af',
  colorBlue900: '#1e3a8a',

  colorSky50: '#f0f9ff',
  colorSky100: '#e0f2fe',
  colorSky200: '#bae6fd',
  colorSky300: '#7dd3fc',
  colorSky400: '#38bdf8',
  colorSky500: '#0ea5e9',
  colorSky600: '#0284c7',
  colorSky700: '#0369a1',
  colorSky800: '#075985',
  colorSky900: '#0c4a6e',

  colorCyan50: '#ecfeff',
  colorCyan100: '#cffafe',
  colorCyan200: '#a5f3fc',
  colorCyan300: '#67e8f9',
  colorCyan400: '#22d3ee',
  colorCyan500: '#06b6d4',
  colorCyan600: '#0891b2',
  colorCyan700: '#0e7490',
  colorCyan800: '#155e75',
  colorCyan900: '#164e63',

  colorTeal50: '#f0fdfa',
  colorTeal100: '#ccfbf1',
  colorTeal200: '#99f6e4',
  colorTeal300: '#5eead4',
  colorTeal400: '#2dd4bf',
  colorTeal500: '#14b8a6',
  colorTeal600: '#0d9488',
  colorTeal700: '#0f766e',
  colorTeal800: '#115e59',
  colorTeal900: '#134e4a',

  colorEsmerald50: '#ecfdf5',
  colorEsmerald100: '#d1fae5',
  colorEsmerald200: '#a7f3d0',
  colorEsmerald300: '#6ee7b7',
  colorEsmerald400: '#34d399',
  colorEsmerald500: '#10b981',
  colorEsmerald600: '#059669',
  colorEsmerald700: '#047857',
  colorEsmerald800: '#065f46',
  colorEsmerald900: '#064e3b',

  colorGreen50: '#f0fdf4',
  colorGreen100: '#dcfce7',
  colorGreen200: '#bbf7d0',
  colorGreen300: '#86efac',
  colorGreen400: '#4ade80',
  colorGreen500: '#22c55e',
  colorGreen600: '#16a34a',
  colorGreen700: '#15803d',
  colorGreen800: '#166534',
  colorGreen900: '#14532d',

  colorLime50: '#f7fee7',
  colorLime100: '#ecfccb',
  colorLime200: '#d9f99d',
  colorLime300: '#bef264',
  colorLime400: '#a3e635',
  colorLime500: '#84cc16',
  colorLime600: '#65a30d',
  colorLime700: '#4d7c0f',
  colorLime800: '#3f6212',
  colorLime900: '#365314',

  colorYellow50: '#fefce8',
  colorYellow100: '#fef9c3',
  colorYellow200: '#fef08a',
  colorYellow300: '#fde047',
  colorYellow400: '#facc15',
  colorYellow500: '#eab308',
  colorYellow600: '#ca8a04',
  colorYellow700: '#a16207',
  colorYellow800: '#854d0e',
  colorYellow900: '#713f12',

  colorAmber50: '#fffbeb',
  colorAmber100: '#fef3c7',
  colorAmber200: '#fde68a',
  colorAmber300: '#fcd34d',
  colorAmber400: '#fbbf24',
  colorAmber500: '#f59e0b',
  colorAmber600: '#d97706',
  colorAmber700: '#b45309',
  colorAmber800: '#92400e',
  colorAmber900: '#78350f',

  colorOrange50: '#fff7ed',
  colorOrange100: '#ffedd5',
  colorOrange200: '#fed7aa',
  colorOrange300: '#fdba74',
  colorOrange400: '#fb923c',
  colorOrange500: '#f97316',
  colorOrange600: '#ea580c',
  colorOrange700: '#c2410c',
  colorOrange800: '#9a3412',
  colorOrange900: '#7c2d12',

  colorRed50: '#fef2f2',
  colorRed100: '#fee2e2',
  colorRed200: '#fecaca',
  colorRed300: '#fca5a5',
  colorRed400: '#f87171',
  colorRed500: '#ef4444',
  colorRed600: '#dc2626',
  colorRed700: '#b91c1c',
  colorRed800: '#991b1b',
  colorRed900: '#7f1d1d',

  colorWarmGray50: '#fafaf9',
  colorWarmGray100: '#f5f5f4',
  colorWarmGray200: '#e7e5e4',
  colorWarmGray300: '#d6d3d1',
  colorWarmGray400: '#a8a29e',
  colorWarmGray500: '#78716c',
  colorWarmGray600: '#57534e',
  colorWarmGray700: '#44403c',
  colorWarmGray800: '#292524',
  colorWarmGray900: '#1c1917',

  colorTrueGray50: '#fafafa',
  colorTrueGray100: '#f5f5f5',
  colorTrueGray200: '#e5e5e5',
  colorTrueGray300: '#d4d4d4',
  colorTrueGray400: '#a3a3a3',
  colorTrueGray500: '#737373',
  colorTrueGray600: '#525252',
  colorTrueGray700: '#404040',
  colorTrueGray800: '#262626',
  colorTrueGray900: '#171717',

  colorGray50: '#fafafa',
  colorGray100: '#f4f4f5',
  colorGray200: '#e4e4e7',
  colorGray300: '#d4d4d8',
  colorGray400: '#a1a1aa',
  colorGray500: '#71717a',
  colorGray600: '#52525b',
  colorGray700: '#3f3f46',
  colorGray800: '#27272a',
  colorGray900: '#18181b',

  colorCoolGray50: '#f9fafb',
  colorCoolGray100: '#f3f4f6',
  colorCoolGray200: '#e5e7eb',
  colorCoolGray300: '#d1d5db',
  colorCoolGray400: '#9ca3af',
  colorCoolGray500: '#6b7280',
  colorCoolGray600: '#4b5563',
  colorCoolGray700: '#374151',
  colorCoolGray800: '#1f2937',
  colorCoolGray900: '#111827',

  colorBlueGray50: '#f8fafc',
  colorBlueGray100: '#f1f5f9',
  colorBlueGray200: '#e2e8f0',
  colorBlueGray300: '#cbd5e1',
  colorBlueGray400: '#94a3b8',
  colorBlueGray500: '#64748b',
  colorBlueGray600: '#475569',
  colorBlueGray700: '#334155',
  colorBlueGray800: '#1e293b',
  colorBlueGray900: '#0f172a',

  spacingNone: 0,
  spacingXs: 5,
  spacingSm: 15,
  spacingMd: 20,
  spacingLg: 40,

  fontFamilySansQuicksand: 'Quicksand',
  fontFamilySansArial: 'Arial',
  fontFamilySansSansserif: 'sans-serif',
  fontFamilyMonoRobotoMono: 'Roboto Mono',
  fontFamilyMonoCourierNew: 'Courier New',
  fontFamilyMonoMonospace: 'monospace',

  fontSizeBase: '14px',
  fontSizeXs: '1.2rem',
  fontSizeSm: '1.4rem',
  fontSizeMd: '1.6rem',
  fontSizeLg: '1.8rem',
  fontSizeXl: '2.2rem',
  fontSize2xl: '6rem',

  fontWeightHairline: 100,
  fontWeightThin: 200,
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  fontWeightExtrabold: 800,
  fontWeightBlack: 900,

  lineHeightNone: 1,
  lineHeightTight: 1.25,
  lineHeightSnug: 1.375,
  lineHeightNormal: 1.5,
  lineHeightRelaxed: 1.625,
  lineHeightLoose: 2,

  letterSpacingTighter: '-0.05em',
  letterSpacingTight: '-0.025em',
  letterSpacingNormal: '0',
  letterSpacingWide: '0.025em',
  letterSpacingWider: '0.05em',
  letterSpacingWidest: '0.1em',

  boxShadowNone: 'none',
  boxShadowXs: '0px 3px 6px rgba(0, 0, 0, 0.05)',
  boxShadowSm: '0px 4px 5px rgba(0, 0, 0, 0.07)',

  borderRadiusNone: '0',
  borderRadiusXs: '4px',
  borderRadiusSm: '10px',
  borderRadiusMd: '20px',
  borderRadiusLg: '30px',
  borderRadiusFull: '9999px',

  borderWidthNone: '0',
  borderWidthThin: '1px',
  borderWidthThick: '2px',

  opacity0: '0',
  opacity25: '0.25',
  opacity50: '0.5',
  opacity75: '0.75',
  opacity100: '1',

  zIndex0: '0',
  zIndex10: '10',
  zIndex20: '20',
  zIndex30: '30',
  zIndex40: '40',
  zIndex50: '50',
  zIndexAuto: 'auto',

  colorPrimary: '#009877',
  colorPrimaryMuted: '#30CFD4',
  colorPrimaryHighlight: '#81EFFE',
  colorPrimaryInverted: '#fcfdfd',
  colorFontBase: '#545454',
  colorFontMuted: '#9297A0',
  colorFontHighlight: '#b7b7b7',
  colorFontInverted: '#007e5c',
  colorSecondary: '#007e5c',
  colorSecondaryMuted: '#eb4e58',
  colorSecondaryHighlight: '#fecdd3',
  colorSecondaryInverted: '#fff',
  colorTertiary: '#F7D4AD',
  colorTertiaryMuted: '#f2e4d5',
  colorTertiaryHighlight: '#a7f3d0',
  colorTertiaryInverted: '#fff',
  colorSuccess: '#268f47',
  colorError: '#eb4e58',
  colorWarning: '#f7d4ad',
  colorInfo: '#255780',

  backgroundColorPrimary: '#009877',
  backgroundColorPrimaryHighlight: '#fcfdfd',

  containerMaxWidth: '800px',

  buttonMaxWidth: '300px',

  buttonBorderRadiusSm: '10px',
  buttonBorderRadiusMd: '20px',
  buttonBorderRadiusLg: '30px',

  inputHeight: '38px',
  inputMaxWidth: '400px',
  inputBackground: '#fff',
  inputBorderRadius: '30px',
  inputFontSize: '1.4rem',

  paragraphFontSizeXs: '14px',
  paragraphFontSizeSm: '1.2rem',
  paragraphFontSizeMd: '1.4rem',
  paragraphFontSizeLg: '1.6rem',

  textareaBorderRadius: '10px',

  pictureBorder: '1px solid #7e858c',

  cardBorderRadius: '10px',

  taskBorderRadius: '10px',

  chronometerBackgroundColor: '#d4d4d8',
  chronometerColor: '#eab308',
  chronometerBorderRadius: '9999px',
  chronometerHeight: '6px',

  modalBackdropColor: 'rgba(255, 255, 255, 0.85)',

  modalDesktopHeight: '650px',
  modalDesktopMaxWidth: '750px',
};
export default tokens;