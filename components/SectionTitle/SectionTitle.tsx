import { Typography, TypographyProps } from "@mui/material";

export const SectionTitle = (props: TypographyProps) => {
  return (
    <Typography
      variant="h2"
      fontSize="28px"
      fontWeight="bold"
      lineHeight="130%"
      {...props}
    >
      {props.children}
    </Typography>
  );
};
