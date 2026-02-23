import {
  Typography,
  Container,
  Box,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { FormatPaint, Brush, GridOn } from "@mui/icons-material";

export function Services() {
  const services = [
    {
      icon: <FormatPaint sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Painting",
      description:
        "Professional interior and exterior painting services for your home or business.",
    },
    {
      icon: <Brush sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Decorating",
      description:
        "Expert decorating services to transform your space with style and precision.",
    },
    {
      icon: <GridOn sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Tiling",
      description:
        "High-quality tiling for kitchens, bathrooms, and all living spaces.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Professional painting, decorating, and tiling for residential and
          commercial clients
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                flex: 1,
                maxWidth: { sm: 300 },
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                p: 2,
                border: (theme) => `2px solid ${theme.palette.grey[50]}`,
                "&:hover": {
                  border: (theme) =>
                    `2px solid ${theme.palette.secondary.main}`,
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
