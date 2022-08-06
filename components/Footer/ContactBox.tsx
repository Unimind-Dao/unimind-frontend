import React from "react";
import { useId } from "react";
import { Box } from "@mui/material";

import { CustomLink } from "../CustomLink";

const ContactBox = () => {
  const Id = useId();

  const social = [
    { name: "Contact", link: "https://unimind-dao.com/" },
    { name: "Webtrzy.xyz", link: "https://webtrzy.xyz/" },
    { name: "NFTPolska", link: "https://nftpolska.net/" },
  ];

  return (
    <>
      {social.map((label) => {
        return (
          <Box key={Id} sx={{ margin: "20px" }} id={`${Id}-${label.name}`}>
            <CustomLink
              href={label.link}
              underline="none"
              sx={{ color: "white" }}
            >
              {label.name}
            </CustomLink>
          </Box>
        );
      })}
    </>
  );
};

export default ContactBox;
