import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoints = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));
  const isDesktop = useMediaQuery(useTheme().breakpoints.up("md"));

  return { isMobile, isDesktop };
};
