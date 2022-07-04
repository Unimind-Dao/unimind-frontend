import { styled } from "@mui/system";

type LinearGradientProps = { shade?: "light" | "dark" };

export const LinearGradient = styled("div")<LinearGradientProps>`
  width: 260px;
  height: 6px;

  background: linear-gradient(
    90.04deg,
    ${({ shade }) => (shade === "light" ? "#11D2AC" : "#111111")} 0%,
    rgba(17, 210, 172, 0) 99.97%
  );
`;
