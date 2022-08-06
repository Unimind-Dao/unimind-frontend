import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import DiscordIcon from "../svg/Discord";
import TiktokIcon from "../svg/TikTokLogo";

export const data = [
  {
    id: "twitter",
    href: process.env.NEXT_PUBLIC_TWITTER_LINK,
    icon: (
      <>
        <TwitterIcon sx={{ color: "white" }} />
      </>
    ),
  },
  {
    id: "discord",
    href: process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK,
    icon: (
      <>
        <DiscordIcon />
      </>
    ),
  },
  {
    id: "youtube",
    href: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_LINK,
    icon: (
      <>
        <YouTubeIcon sx={{ color: "white" }} />
      </>
    ),
  },
  {
    id: "facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_LINK,
    icon: (
      <>
        <FacebookIcon sx={{ color: "white" }} />
      </>
    ),
  },
  {
    id: "tiktok",
    href: process.env.NEXT_PUBLIC_TIKTOK_LINK,
    icon: (
      <>
        <TiktokIcon fill="white" />
      </>
    ),
  },
];
