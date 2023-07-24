// color design tokens export
import { PaletteMode } from "@mui/material";

export const tokens = (colorMode: PaletteMode) => ({
  ...(colorMode === "light"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#696767",
          600: "#4f4c4c",
          700: "#504b4b",
          800: "#2c2a2a",
          900: "#141414",
        },
        black: {
          100: "#ffffff",
          200: "#e1e1e1",
          300: "#c0c0c0",
          400: "#a9a9a9",
          500: "#727272",
          600: "#595959",
          700: "#343434",
          800: "#232323",
          900: "#030303",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#f6f6f6",
          500: "#42485d",
          600: "#3b4259",
          700: "#3c425e",
          800: "#282d46",
          900: "#131928",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#43b494",
          700: "#36917b",
          800: "#2a775f",
          900: "#1d5246",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#d24742",
          600: "#bb3935",
          700: "#a1302d",
          800: "#8d2422",
          900: "#8d1f1e",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#4b53dc",
          600: "#4047c4",
          700: "#4147a9",
          800: "#2f337c",
          900: "#2d3373",
        },

        cyanAccent: {
          100: "#eff7f9",
          200: "#dff0f3",
          300: "#cee8ec",
          400: "#bee1e6",
          500: "#aed9e0",
          600: "#55bcc4",
          700: "#369aa8",
          800: "#2bacc4",
          900: "#0f98bb",
        },

        pinkAccent: {
          100: "#ffedec",
          200: "#ffdbd8",
          300: "#ffcac5",
          400: "#ffb8b1",
          500: "#ffa69e",
          600: "#de7e73",
          700: "#e37c74",
          800: "#e17a76",
          900: "#cc5454",
        },

        yellowAccent: {
          100: "#ffff46",
          200: "#ffffc2",
          300: "#fdfda0",
          400: "#ffff85",
          500: "#f3f35a",
          600: "#f5f547",
          700: "#efef27",
          800: "#f6f615",
          900: "#f5e11c",
        },

        orange: {
          100: "#fce6ce",
          200: "#ffd6ad",
          300: "#ffc285",
          400: "#ffc892",
          500: "#fcb873",
          600: "#fca757",
          700: "#f5993c",
          800: "#ee851f",
          900: "#ff8507",
        },

        purpleAccent: {
          100: "#e0e0f5",
          200: "#c2c2eb",
          300: "#a3a3e0",
          400: "#8282d7",
          500: "#6969d9",
          600: "#5858da",
          700: "#4242cc",
          800: "#2929ce",
          900: "#1212cc",
        },
      }
    : {
        grey: {
          900: "#e0e0e0",
          800: "#c2c2c2",
          700: "#a3a3a3",
          600: "#858585",
          500: "#696767",
          400: "#4f4c4c",
          300: "#504b4b",
          200: "#2c2a2a",
          100: "#141414",
        },
        black: {
          900: "#ffffff",
          800: "#e1e1e1",
          700: "#c0c0c0",
          600: "#a9a9a9",
          500: "#727272",
          400: "#595959",
          300: "#343434",
          200: "#232323",
          100: "#030303",
        },
        primary: {
          900: "#d0d1d5",
          800: "#a1a4ab",
          700: "#727681",
          600: "#555e73",
          500: "#42485d",
          400: "#3f3f3f",
          300: "#3c425e",
          200: "#282d46",
          100: "#131928",
        },
        greenAccent: {
          900: "#dbf5ee",
          800: "#b7ebde",
          700: "#94e2cd",
          600: "#70d8bd",
          500: "#4cceac",
          400: "#43b494",
          300: "#36917b",
          200: "#2a775f",
          100: "#1d5246",
        },
        redAccent: {
          900: "#f8dcdb",
          800: "#f1b9b7",
          700: "#e99592",
          600: "#e2726e",
          500: "#d24742",
          400: "#bb3935",
          300: "#a1302d",
          200: "#8d2422",
          100: "#8d1f1e",
        },
        blueAccent: {
          900: "#e1e2fe",
          800: "#c3c6fd",
          700: "#a4a9fc",
          600: "#868dfb",
          500: "#4b53dc",
          400: "#4047c4",
          300: "#4147a9",
          200: "#2f337c",
          100: "#2d3373",
        },

        cyanAccent: {
          900: "#eff7f9",
          800: "#dff0f3",
          700: "#cee8ec",
          600: "#bee1e6",
          500: "#aed9e0",
          400: "#55bcc4",
          300: "#369aa8",
          200: "#2bacc4",
          100: "#0f98bb",
        },

        pinkAccent: {
          900: "#ffedec",
          800: "#ffdbd8",
          700: "#ffcac5",
          600: "#ffb8b1",
          500: "#ffa69e",
          400: "#de7e73",
          300: "#e37c74",
          200: "#e17a76",
          100: "#cc5454",
        },

        yellowAccent: {
          900: "#ffff46",
          800: "#ffffc2",
          700: "#fdfda0",
          600: "#ffff85",
          500: "#f3f35a",
          400: "#f5f547",
          300: "#efef27",
          200: "#f6f615",
          100: "#f5e11c",
        },

        orange: {
          900: "#fce6ce",
          800: "#ffd6ad",
          700: "#ffc285",
          600: "#ffc892",
          500: "#fcb873",
          400: "#fca757",
          300: "#f5993c",
          200: "#ee851f",
          100: "#ff8507",
        },

        purpleAccent: {
          900: "#e0e0f5",
          800: "#c2c2eb",
          700: "#a3a3e0",
          600: "#8282d7",
          500: "#6969d9",
          400: "#5858da",
          300: "#4242cc",
          200: "#2929ce",
          100: "#1212cc",
        },
      }),
});

// mui theme settings

export const themeSettings = (colorMode: PaletteMode) => {
  const colors = tokens(colorMode);
  return {
    palette: {
      mode: colorMode,
      ...(colorMode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.pinkAccent[400],
            },
            neutral: {
              dark: colors.black[700],
              main: colors.black[500],
              light: colors.black[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.pinkAccent[400],
            },
            neutral: {
              dark: colors.black[700],
              main: colors.black[500],
              light: colors.black[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
  };
};
