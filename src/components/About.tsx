import { Typography, Container, Box } from "@mui/material";

export function About() {
  return (
    <Box sx={{ bgcolor: "background.default", py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          color="text.primary"
        >
          About Nuthatch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            lineHeight: 1.8,
            textAlign: "center",
          }}
          color="text.secondary"
        >
          With over 15 years of experience in painting, decorating, and tiling,
          we pride ourselves on delivering high-quality workmanship and
          exceptional customer service. Our skilled craftsmen are committed to
          transforming your space with precision and care, on time and within
          budget.
        </Typography>
      </Container>
    </Box>
  );
}
