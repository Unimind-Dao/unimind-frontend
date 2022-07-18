import { Box } from "@mui/material";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";
import Bridge from "./Bridge";
import TeamCards from "./TeamCards";

export default function Team () {


    const sx = { width: '100%', height: '80vh', backgroundColor: '#1B1B1B' , display:'flex' , flexDirection: 'column', color: 'white' , justifyContent: "center", alignItems:'center'};

    return (
			<>
            <Box sx={sx}>

				<SectionTitle mb={2}> Let's meet us</SectionTitle>
                <LinearGradient shade={'light'}/>
                <Bridge />
                <TeamCards cards={[]} data={[]}  />
            </Box>
			</>
		);
}