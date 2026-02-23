import { createTheme } from "@mui/material/styles";

// Nuthatch theme - inspired by the nuthatch bird colors
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3274b3", // Nuthatch blue
      dark: "#4A7FA8", // Darker blue for gradients
      light: "#5B9BD5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d8641d", // Nuthatch orange (accent)
      dark: "#d35c0d", // Darker orange for hover states
      light: "#FF8C42",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#2C3E50", // Dark text
      secondary: "#4A5568", // Gray text
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    grey: {
      50: "#F5F7FA", // Light background
      100: "#E2E8F0", // Light border
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
