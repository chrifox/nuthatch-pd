import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import Logo from "../assets/logo.png";

export function Header() {
  return (
    <AppBar position="static">
      <Stack direction="column" alignItems="center" spacing={6} sx={{ p: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img src={Logo} alt="Nuthatch Logo" style={{ height: 240 }} />
        </Box>

        <Container maxWidth="md">
          <Stack alignItems="center" sx={{ textAlign: "center" }}>
            <Typography variant="h1" className="visually-hidden">
              Nuthatch Painting & Decorating
            </Typography>
            <Typography variant="h5" component="p" sx={{ mb: 4 }}>
              <span>
                Expert painting, decorating, tiling and repair services.
              </span>
              <br />
              <span>Quality craftsmanship you can trust.</span>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="secondary" size="large">
                Get Free Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Call Now
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </AppBar>
  );
}
