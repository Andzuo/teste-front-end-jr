module.exports = {
  node: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        '96': '46%',
        '50': '220px',
      },
      height: {
        '96': '173.871px',
        '10': '41px',
      },
      maxWidth: {
        '96': '798px'
      },
      minWidth: {
        '96': '47%'
      },
      marginLeft: {
        '5': '100%'
      },
      fontFamily: {
        body: ['Inter'],
      },
      backgroundImage: theme => ({
        'custom-image': "url('../public/image-bg.png')",
      }),
      colors: {
        primary: '#21CA46',
        secondary: '#171A1F',
        line : '#2F3236'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

