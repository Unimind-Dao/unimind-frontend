import { Box } from "@mui/material"
import React from "react"
import Authors from "../Authors"
import PopularTags from "../PopularTags/PopularTags"
import BlogTitle from "./BlogTitle"

 
const BlogHeader = () => {

    const sx = { width: '100%', height:'auto', display:'flex', flexDirection: 'row' }

    return (
        <>
        
        <Box sx={sx}>
            <BlogTitle />


        </Box>
            <PopularTags />
            <Authors />
        
        
        </>
    )
}

export default BlogHeader;