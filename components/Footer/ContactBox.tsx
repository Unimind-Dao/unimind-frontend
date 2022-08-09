import React, { useId } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";

import { CustomLink } from "../CustomLink";

const social = [
  { name: "contact", link: "https://unimind-dao.com/" },
  { name: "webtrzy", link: "https://webtrzy.xyz/" },
  {name:'Scio ', link: 'https://scio.xyz/'}
];

const ContactBox = () => {
  const Id = useId();
  const { t } = useTranslation("navigation");

  return (
    <>
      {social.map(({ name, link }) => {
        return (
          <Box key={Id} sx={{ margin: "20px" }} id={`${Id}-${name}`}>
            <CustomLink href={link} underline="none" sx={{ color: "white" }}>
              {t(name)}
            </CustomLink>
          </Box>
        );
      })}
    </>
  );
};

export default ContactBox;
