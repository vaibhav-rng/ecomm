import React from 'react'
import img1 from '../Images/homePageImg.png';
import { Box, Grid, Typography, useMediaQuery, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';



const Image = () => {
    let theme = createTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    theme = responsiveFontSizes(theme);
  

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid fontFamily={"Roboto"} container style={{ marginTop: "2.5rem" }}>
                    <Grid item sm={12} xs={12} md={12}>
                        <Box sx={{ position: "relative", maxWidth: "100%", height: "auto" }}>
                            <img src={img1} alt="image" style={{ width: "100%", height: "auto" }} />
                            <Box sx={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)" }}>
                                <Typography sx={{ color: "#FFFFFF" }} variant={matches?'h3':"subtitle1"}> True Urban Collection</Typography>
                                {matches?<br/>:null}
                                <a href="" style={{ color: "#FFFFFF" }}><Typography variant={matches?'':"caption"}>View collection</Typography></a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Image