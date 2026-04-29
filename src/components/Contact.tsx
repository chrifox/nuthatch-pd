import { Box, Container, Stack, Typography } from "@mui/material";
import { Phone, Email } from "@mui/icons-material";

import { InfoCard } from "./common/InfoCard";

export function Contact() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="md">
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
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <InfoCard
            title="Call Us"
            description="07401 818282"
            icon={
              <Phone sx={{ fontSize: 48, color: "secondary.main", mb: 2 }} />
            }
          />
          <InfoCard
            title="Email Us"
            description="J.boulton@nuthatchpd.co.uk"
            icon={
              <Email sx={{ fontSize: 48, color: "secondary.main", mb: 2 }} />
            }
          />
        </Stack>
      </Container>
    </Box>
  );
}
