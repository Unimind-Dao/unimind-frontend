import styles from "./Footer.module.css";
// import { TwitterIcon, YouTubeIcon } from '@mui/icons-material';
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FirstBox from "./FirstBox";
import PartnersBox from "./PartnersBox";
import EndBox from "./EndBox";

export default function Footer() {
  return (
    <div className={styles.mainBox}>
      <FirstBox />
      <PartnersBox />
      <EndBox />
    </div>
  );
}
