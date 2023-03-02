import React from 'react'
import img1 from '../Images/homePageImg.png';
import { Box, Grid, Typography, createTheme, ThemeProvider,responsiveFontSizes } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);


const Image = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid fontFamily={"Roboto"} container style={{ marginTop: "2.5rem" }}>
                    <Grid item sm={11} xs={11} md={11}>
                        <Box sx={{ position: "relative", maxWidth: "95%", height: "auto" }}>
                            <img src={img1} alt="image" style={{ width: "100%", height: "auto" }} />
                            <Box sx={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)" }}>
                                <Typography sx={{ color: "#FFFFFF" }} variant='h4'> True Urban Collection</Typography>
                                <br />
                                <a href="" style={{ color: "#FFFFFF" }}>View collection</a>
                            </Box>
                        </Box>
                        <img style={{}} alt="" />

                    </Grid>
                    <Grid item sm={1} xs={1} md={1}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Box mt={6}>
                                    <Box >
                                        <Typography variant='h2'>01</Typography>
                                    </Box>
                                    <Box sx={{ color: "#8C8C8C" }} >
                                        <Typography>Days</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Box mt={2} >
                                    <Typography variant='h2'>20</Typography>
                                </Box>
                                <Box sx={{ color: "#8C8C8C" }} >
                                    <Typography>Hours</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Box mt={2}>
                                    <Typography variant='h2'>12</Typography>
                                </Box>
                                <Box sx={{ color: "#8C8C8C" }} >
                                    <Typography>Minutes</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Box mt={2}>
                                    <Typography variant='h2'>43</Typography>
                                </Box>
                                <Box sx={{ color: "#8C8C8C" }} >
                                    <Typography>Seconds</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Image