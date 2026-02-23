import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../assets/logo.png";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center", py: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Nuthatch Logo" style={{ height: 140 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
