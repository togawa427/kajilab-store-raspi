import type { Config } from 'tailwindcss'

const customColors = {
  forest: {
    50: '#0A5137',
    100: '#0E6445',
    200: '#137752',
    300: '#18895F',
    400: '#1D9A6C',
    500: '#3FAC84',
    600: '#62BE9C',
    700: '#86CEB4',
    800: '#AADECB',
    900: '#CFEDE2',
    DEFAULT: '#3FAC84',
  },
  gamboge: {
    50: '#FEF9E2',
    100: '#FCEDAA',
    200: '#F9DB57',
    300: '#F6CA06',
    DEFAULT: '#F9DB57',
  },
  redorange: {
    50:'#FBE9E2',
    100:'#F3C0AB',
    200:'#E6855E',
    300:'#DA5019',
    DEFAULT:'#E6855E',
  },
  hiwa: {
    50:'#F4F9E2',
    100:'#F2F5AA',
    200:'#E4EC5B',
    300:'#D8E212',
    DEFAULT:'#E4EC5B',
  },
  celadon: {
    50:'#D9F4F1',
    100:'#95DFD6',
    200:'#40BFB0',
    300:'#009F8C',
    DEFAULT:'#40BFB0',
  }

}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: customColors.forest,
        gamboge: customColors.gamboge,
        redorange: customColors.redorange,
        hiwa: customColors.hiwa,
        celadon: customColors.celadon
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
