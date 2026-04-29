import { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export function PortfolioCarousel() {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioItems = [
    {
      title: "Modern Living Room Transformation",
      description: "Complete interior painting and decorative finish",
      color: theme.palette.primary.main,
    },
    {
      title: "Kitchen Tiling Project",
      description: "Premium ceramic tiling with custom backsplash",
      color: theme.palette.secondary.main,
    },
    {
      title: "Exterior House Painting",
      description: "Full exterior repaint with weather-resistant coating",
      color: theme.palette.primary.dark,
    },
    {
      title: "Bathroom Renovation",
      description: "Complete tiling and decorative painting",
      color: theme.palette.text.primary,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <Box sx={{ bgcolor: "background.default", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Work
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Browse through our recent projects and see the quality we deliver
        </Typography>

        <Box sx={{ position: "relative", maxWidth: 800, mx: "auto" }}>
          {/* Carousel Container */}
          <Paper
            elevation={3}
            sx={{
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: portfolioItems[currentSlide].color,
              color: "white",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.5s ease",
            }}
          >
            <Box sx={{ textAlign: "center", px: 4 }}>
              <Typography variant="h3" gutterBottom>
                {portfolioItems[currentSlide].title}
              </Typography>
              <Typography variant="h6">
                {portfolioItems[currentSlide].description}
              </Typography>
              <Typography
                variant="caption"
                sx={{ mt: 2, display: "block", opacity: 0.8 }}
              >
                [Project Image Placeholder]
              </Typography>
            </Box>
          </Paper>

          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrevSlide}
            sx={{
              position: "absolute",
              left: { xs: 0, sm: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "grey.50" },
              boxShadow: 2,
            }}
          >
            <ArrowBackIos color="primary" />
          </IconButton>
          <IconButton
            onClick={handleNextSlide}
            sx={{
              position: "absolute",
              right: { xs: 0, sm: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "grey.50" },
              boxShadow: 2,
            }}
          >
            <ArrowForwardIos color="primary" />
          </IconButton>

          {/* Carousel Indicators */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            {portfolioItems.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor:
                    currentSlide === index ? "secondary.main" : "grey.100",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor:
                      currentSlide === index
                        ? "secondary.dark"
                        : "primary.main",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
