import { Typography, Container, Box, Stack, Card } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

export function Contact() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          color="text.primary"
        >
          Get In Touch
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ mt: 4 }}
        >
          <Card
            sx={{
              flex: 1,
              textAlign: "center",
              p: 3,
              border: (theme) => `1px solid ${theme.palette.grey[100]}`,
            }}
          >
            <Phone sx={{ fontSize: 48, color: "secondary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Call Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              (555) 123-4567
            </Typography>
          </Card>
          <Card
            sx={{
              flex: 1,
              textAlign: "center",
              p: 3,
              border: (theme) => `1px solid ${theme.palette.grey[100]}`,
            }}
          >
            <Email sx={{ fontSize: 48, color: "secondary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Email Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              info@nuthatch.com
            </Typography>
          </Card>
          <Card
            sx={{
              flex: 1,
              textAlign: "center",
              p: 3,
              border: (theme) => `1px solid ${theme.palette.grey[100]}`,
            }}
          >
            <LocationOn sx={{ fontSize: 48, color: "secondary.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Visit Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Trade Street
              <br />
              Your City, ST 12345
            </Typography>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
