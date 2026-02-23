import { Typography, Container, Button, Paper } from "@mui/material";

export function Hero() {
  return (
    <Paper
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: "primary.contrastText",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Nuthatch Painting & Decorating
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          Expert painting, decorating, and tiling services. Quality
          craftsmanship you can trust.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mr: 2 }}
        >
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
      </Container>
    </Paper>
  );
}
