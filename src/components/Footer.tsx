import { Typography, Container, Box, Stack, Divider } from "@mui/material";

import FacebookIcon from "../assets/socials/Facebook_icon.png";
import InstagramIcon from "../assets/socials/Instagram_icon.png";
import TikTokIcon from "../assets/socials/TikTok_icon.png";

import { SocialLink } from "./common/SocialLink";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "text.primary", color: "white", py: 2 }}>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          sx={{ pt: 1 }}
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
              Monday - Saturday: 8:00 AM - 5:00 PM
              <br />
              Sunday: Closed
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Socials
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <SocialLink
                link="https://www.facebook.com/nuthatchpandd/"
                iconSrc={FacebookIcon}
              />
              <SocialLink
                link="https://www.instagram.com/nuthatchpandd/"
                iconSrc={InstagramIcon}
              />
              <SocialLink
                link="https://www.tiktok.com/nuthatchpandd/"
                iconSrc={TikTokIcon}
              />
            </Stack>
          </Box>
        </Stack>
        <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.2)" }} />
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
