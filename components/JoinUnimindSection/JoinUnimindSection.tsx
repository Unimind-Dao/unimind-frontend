import { Grid, Typography, useTheme } from "@mui/material";
import { Content } from "../../layout";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";
import { Button } from "../Button";

const JoinUnimindSection = () => {
  const theme = useTheme();

  return (
    <Content
      pt={12}
      pb={{ xs: 11, md: 16 }}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item container direction="column" alignItems="center">
          <SectionTitle mb={2}>Join UNIMIND</SectionTitle>
          <LinearGradient />
        </Grid>
        <Grid item md={10} mb={5}>
          <Typography mt={5} variant="body1" textAlign="center">
            Create the world of Web3 with us and open yourself to new
            possibilities.
          </Typography>
        </Grid>
        <Grid item width={{ xs: "100%", sm: 205 }}>
          <Button
            href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}
            variant="dark"
          >
            Join Community
          </Button>
        </Grid>
      </Grid>
    </Content>
  );
};

export default JoinUnimindSection;
