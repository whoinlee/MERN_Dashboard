//-- color tokens
const colorTokens = (mode) => ({
  ...(mode === "dark"
    ? {
      // indigo == grey
      // black: {  
      // //== primary
      //   100: "#d3d4de",
      //   200: "#a6a9be",
      //   300: "#7a7f9d",
      //   400: "#4d547d",
      //   500: "#21295c",   //******//
      //   // 600: "#1a214a",
      //   600: "#191F45",   // manually adjusted
      //   700: "#141937",
      //   800: "#0d1025",
      //   900: "#070812"
      // },
      // yellow: {
      // //== secondary
      //   50: "#f0f0f0",    // manually added
      //   100: "#fff6e0",
      //   200: "#ffedc2",
      //   300: "#ffe3a3",
      //   400: "#ffda85",
      //   500: "#ffd166",   //******//
      //   600: "#cca752",
      //   700: "#997d3d",
      //   800: "#665429",
      //   900: "#332a14"
      // },
      grey: { 
        //-- from here, manually added
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        //-- till here
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",   //***** using Tailwind Shades for #666666
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000",  // manually added
      },
      primary: {  
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",  
        600: "#191F45", 
        700: "#141937",
        800: "#0d1025",
        900: "#070812"
      },
      secondary: {
        50: "#f0f0f0",   
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",   
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14"
      },
    }
    : {
      //-- shift+cmd+p: sort lines ascending/descending
      grey: { 
        0: "#141414",
        10: "#292929",
        50: "#3d3d3d",
        100: "#525252",
        200: "#666666", 
        300: "#f0f0f0",
        400: "#858585",
        500: "#a3a3a3",
        600: "#c2c2c2",
        700: "#000000",
        800: "#e0e0e0",
        900: "#f6f6f6",
        1000: "#ffffff",
      },
      primary: {  
        100: "#070812",
        200: "#0d1025",
        300: "#141937",
        400: "#191F45", 
        500: "#21295c",  
        600: "#4d547d",
        700: "#7a7f9d",
        800: "#a6a9be",
        900: "#d3d4de",
      },
      secondary: {
        50: "#332a14",
        100: "#665429",
        200: "#997d3d",
        300: "#cca752",
        400: "#ffd166",   
        500: "#f0f0f0",   
        600: "#ffda85",
        700: "#ffe3a3",
        800: "#ffedc2",
        900: "#fff6e0",
      },
    }),
});
export const tokensDark = colorTokens("dark");
export const tokensLight = colorTokens("light");


//-- mui theme settings
const FONTS = ["Inter", "Roboto", "sans-serif"];
const FONT_FAMILY = FONTS.join(",");
export const themeSettings = (mode) => {
  const colors = colorTokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark" ? 
        {
            primary: {
              ...colors.primary,
              main: colors.primary[400],
              light: colors.primary[400],
            },
            secondary: {
              ...colors.secondary,
              main: colors.secondary[300],
            },
            neutral: {
              ...colors.grey,
              main: colors.grey[500],
            },
            background: {
              default: colors.primary[600],
              alt: colors.primary[500],
            }
        }
        : {
            primary: {
              ...colors.primary,
              main: colors.grey[50],
              light: colors.grey[100],
            },
            secondary: {
              ...colors.secondary,
              main: colors.secondary[600],
              light: colors.secondary[700],
            },
            neutral: {
              ...colors.grey,
              main: colors.grey[500],
            },
            background: {
              default: colors.grey[0],
              alt: colors.grey[50],
            },
        }),
    },
    typography: {
      fontFamily: FONT_FAMILY,
      fontSize: 12,

      h1: {
        fontFamily: FONT_FAMILY,
        fontSize: 40,
      },
      h2: {
        fontFamily: FONT_FAMILY,
        fontSize: 32,
      },
      h3: {
        fontFamily: FONT_FAMILY,
        fontSize: 24,
      },
      h4: {
        fontFamily: FONT_FAMILY,
        fontSize: 20,
      },
      h5: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
      },
      h6: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
      }
    },
  };
};