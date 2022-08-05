import { Link, LinkProps, useTheme } from "@mui/material";

export const CustomLink = (props: LinkProps) => {
  const theme = useTheme();

  return (
    <Link
      underline="none"
      color={theme.palette.common.black}
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </Link>
  );
};
