import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { PortfolioCarousel } from "./components/PortfolioCarousel";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <PortfolioCarousel />
      <Services />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
