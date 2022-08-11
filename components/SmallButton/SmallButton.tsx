import React, { FC } from "react";
import { Button } from "@mui/material";

interface ISmallButton {
  color: string;
  label: string;
  backgroundColor: string;
  margin: string;
}

const smallButton: FC<ISmallButton> = ({
  label,
  color,
  backgroundColor,
  margin,
}) => {
  const sx = {
    color: { color },
    backgroundColor: { backgroundColor },
    margin: { margin },
    height: "30px",
    width: "auto",
    padding: "5px 20px",
    borderRadius: "20px",
  };

  return (
    <>
      <Button sx={sx}>{label}</Button>
    </>
  );
};

export default smallButton;
