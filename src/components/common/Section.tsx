import { Box, Container, type SxProps } from "@mui/material";

type SectionProps = {
  children: React.ReactNode;
  sx: SxProps;
};

export function Section({ children, sx, ...sectionProps }: SectionProps) {
  return (
    <Box component="section" {...sectionProps} sx={{ ...sx, py: 8 }}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
}
