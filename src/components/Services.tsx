import { Typography, Container, Box, Stack } from "@mui/material";
import { FormatPaint, Brush, GridOn } from "@mui/icons-material";

import { InfoCard } from "./common/InfoCard";

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
    {
      icon: <GridOn sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Repairs",
      description:
        "Plaster repairs, surface preparation. Woodwork repairs & finishing. Property maintenance & general repairs.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Professional painting, decorating, tiling and repairs for residential
          and commercial clients
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <InfoCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
