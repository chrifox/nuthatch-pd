import { Typography, Container, Box, Stack, Divider } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "text.primary", color: "white", py: 4 }}>
      <Container maxWidth="md">
        <Divider sx={{ mb: 4, bgcolor: "rgba(255,255,255,0.2)" }} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Nuthatch Painting & Decorating
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your trusted local experts for painting, decorating, tiling and
              repair services.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Business Hours
            </Typography>
            <Typography variant="body2">
              Mon - Fri: 7:00 AM - 6:00 PM
              <br />
              Saturday: 8:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ mt: 4, mb: 2, bgcolor: "rgba(255,255,255,0.2)" }} />
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "rgba(255,255,255,0.7)" }}
        >
          © 2026 Nuthatch Painting & Decorating. All rights reserved. Licensed &
          Insured.
        </Typography>
      </Container>
    </Box>
  );
}
