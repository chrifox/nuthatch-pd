import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { portfolioItems } from "../data/portfolioItems";

const CarouselNavigationButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 2;
  background-color: ${({ theme }) => theme.palette.background.paper};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[700]};

    svg {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;

const AUTO_ADVANCE_DELAY = 5000;

export function PortfolioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === portfolioItems.length - 1 ? 0 : prev + 1,
      );
    }, AUTO_ADVANCE_DELAY);
    return () => clearInterval(id);
  }, [paused, timerKey]);

  const handlePrevSlide = () => {
    setTimerKey((k) => k + 1);
    setCurrentSlide((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setTimerKey((k) => k + 1);
    setCurrentSlide((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1,
    );
  };

  const handleDotClick = (index: number) => {
    setTimerKey((k) => k + 1);
    setCurrentSlide(index);
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

        <Box
          sx={{ position: "relative", maxWidth: 800, mx: "auto" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Carousel Container */}
          <Paper
            elevation={3}
            sx={{ height: 400, overflow: "hidden", position: "relative" }}
          >
            <Box
              component="a"
              href={portfolioItems[currentSlide].instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "block", width: "100%", height: "100%" }}
            >
              <Box
                component="img"
                src={portfolioItems[currentSlide].image}
                alt={`Portfolio item ${currentSlide + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transition: "opacity 0.3s ease",
                }}
              />
            </Box>
          </Paper>

          {/* Navigation Buttons */}
          <CarouselNavigationButton onClick={handlePrevSlide} sx={{ left: 8 }}>
            <ArrowBackIosNew color="primary" />
          </CarouselNavigationButton>

          <CarouselNavigationButton onClick={handleNextSlide} sx={{ right: 8 }}>
            <ArrowForwardIos color="primary" />
          </CarouselNavigationButton>

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
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor:
                    currentSlide === index ? "secondary.main" : "grey.400",
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
