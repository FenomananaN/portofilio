import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
//extend type typscript
import { PaletteOptions } from "@mui/material/styles";

type modeType = "dark"| "light"

interface mode {
  mode: modeType
}

interface ColorType {
    main?: string
    dark?: string
    light?: string
    contrastText? : string
    default?: string
    paper?:string
  };
  
type PaletteType = mode & {    

  //mode: string; // Explicitly set the type for "mode"
  [key: string]: ColorType | string}


type themeType = {
    palette: PaletteType,
    typography : {}
  };


//declaring it for button
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    strongBlue: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    strongBlue: true;
  }
}

// color design tokens export
export const tokens = (mode: modeType) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#a3e0ff",
          200: "#7aceff",
          300: "#52baff",
          400: "#29a2ff",
          500: "#0088ff",
          600: "#006cd9",
          700: "#0053b3",
          800: "#003d8c",
          900: "#002966",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#f0f1f5",  // Lightest shade
          200: "#d9dce5",  // Slightly darker shade
          300: "#c2c6d5",  // Neutral gray shade
          400: "#a5a9b0",  // Mid-tone gray
          500: "#9298a0",  // Base primary color
          600: "#7a7f8c",  // Darker gray
          700: "#606469",  // Even darker gray
          800: "#484c51",  // Approaching dark gray
          900: "#303336",  // Darkest shade
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#a3e0ff",
          200: "#7aceff",
          300: "#52baff",
          400: "#29a2ff",
          500: "#0088ff",
          600: "#006cd9",
          700: "#0053b3",
          800: "#003d8c",
          900: "#002966",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode:modeType): themeType => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      strongBlue: {
        dark: colors.blueAccent[700],
        main: colors.blueAccent[500],
        light: colors.blueAccent[100],
      },
      background: {
        //default: colors.primary[500],
        default: colors.primary[500],
        paper: colors.primary[500], 
      },
      /*...(mode === "dark"
        ? {
            // palette values for dark mode
            blue: {
              dark: colors.blueAccent[700],
              main: colors.blueAccent[500],
              light: colors.blueAccent[100],
            },
            background: {
              //default: colors.primary[500],
              default: colors.primary[500],
            },
            /*secondary: {
              main: colors.greenAccent[500],
            },
           neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              //default: colors.primary[500],
              main: colors.primary[500],
            },
            greenSuccess: {
              main: '#198754',
             // contrastText: '#fff'
            },
            gray : {
              main: '#495057',
           //   contrastText: '#fff'
            }
          }
        : {
            // palette values for light mode
            blue: {
              dark: colors.blueAccent[700],
              main: colors.blueAccent[500],
              light: colors.blueAccent[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
             // default: "#fcfcfc",
              main: '#495057',
            },
          })*/
    },
    typography: {
      "fontFamily": `"Tw Cen MT","Space Mono","monospace","Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 15,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     },
     /*typography: {
      
      h1: {
        fontFamily: ["TCM","Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["TCM","Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["TCM","Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["TCM","Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["TCM","Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["TCM","Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },*/
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<modeType>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return {theme, colorMode};
};