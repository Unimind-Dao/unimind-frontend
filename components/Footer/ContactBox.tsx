import { useId } from "react";
import { Box } from "@mui/material";

import { CustomLink } from "../CustomLink";

const ContactBox = () => {
  const Id = useId();

  const social = [
    { id: "1", name: "Contact", link: "https://unimind-dao.com/" },
    { id: "2", name: "Webtrzy.xyz", link: "https://webtrzy.xyz/" },
    { id: "3", name: "NFTPolska", link: "https://nftpolska.net/" },
  ];

  return (
    <>
      {social.map((label) => {
        return (
          <Box
            sx={{ margin: "20px" }}
            id={`${Id}-${label.name}`}
            key={label.id}
          >
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
