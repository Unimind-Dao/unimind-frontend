import { Box } from "@mui/material";
import LetMeetUs from "./LetMeeUs";
import TeamCards from "./TeamCards";
import Bridge from './Bridge';


function Team () {

    const sx = { height: '80vh', width: '100%', backgroundColor:'#1b1b1b', display: 'flex', flexDirection: 'column', };


    return (

        <>
        <Box sx={sx}>
            <LetMeetUs />
            <Bridge />
            <TeamCards />
        </Box>
        
        
        </>
    )


}


export default Team;