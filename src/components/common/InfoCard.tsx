import { Box, Card, CardContent, Typography } from "@mui/material";

type InfoCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export function InfoCard({
  title,
  description,
  icon,
  ...cardProps
}: InfoCardProps) {
  return (
    <Card
      {...cardProps}
      sx={{
        flex: 1,
        maxWidth: { sm: 300 },
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        p: 2,
        border: (theme) => `2px solid ${theme.palette.grey[50]}`,
        "&:hover": {
          border: (theme) => `2px solid ${theme.palette.secondary.main}`,
          transform: "translateY(-4px)",
          transition: "all 0.3s ease",
        },
      }}
    >
      <CardContent>
        {icon && <Box sx={{ mb: 2 }}>{icon}</Box>}
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
