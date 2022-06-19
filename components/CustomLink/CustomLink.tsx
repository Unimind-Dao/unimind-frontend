import { Link, LinkProps } from "@mui/material";

export const CustomLink = (props: LinkProps) => (
  <Link underline="none" color="black" rel="noopener noreferrer" {...props}>
    {props.children}
  </Link>
);
