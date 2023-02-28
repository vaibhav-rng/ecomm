import { Grid, Button, TextField, useMediaQuery, useTheme, InputAdornment, Drawer } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))

    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setDrawer(true);
    };

    return (
        <div style={{ marginTop: "2rem" }}>
            <Drawer
                anchor={'left'}
                open={drawer}

                onClose={() => setDrawer(false)}
            >
                <div style={{padding:"2rem"}}>

           
                <Grid md={1} item>
                    <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Men's</Button>
                </Grid>
                <Grid md={1} item>
                    <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Women's</Button>

                </Grid>
                <Grid md={1} item>
                    <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Electronics</Button>
                </Grid>
                <Grid md={1} item>
                    <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Jewelry</Button>
                </Grid>
             </div>
            </Drawer>


            <Grid textAlign={"center"} fontFamily="Roboto" container justifyContent={isSmallScreen ? "center" : "space-between"}>
                <Grid item s={2} xs={2} md={2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64" fill="none">
                        <path d="M44.72 9.09333C44.72 6.28036 42.4396 4 39.6267 4C36.8137 4 34.5333 6.28036 34.5333 9.09333V21.8133C34.5333 24.6263 36.8137 26.9067 39.6267 26.9067C42.4396 26.9067 44.72 24.6263 44.72 21.8133V9.09333Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M23.0933 4C24.1047 4 25.0746 4.40176 25.7898 5.1169C26.5049 5.83204 26.9067 6.80197 26.9067 7.81333V11.6267H23.0933C22.082 11.6267 21.112 11.2249 20.3969 10.5098C19.6818 9.79463 19.28 8.82469 19.28 7.81333C19.28 6.80197 19.6818 5.83204 20.3969 5.1169C21.112 4.40176 22.082 4 23.0933 4Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M19.2533 54.9067C19.2533 57.7196 21.5337 60 24.3467 60C27.1596 60 29.44 57.7196 29.44 54.9067L29.44 42.1867C29.44 39.3737 27.1596 37.0933 24.3467 37.0933C21.5337 37.0933 19.2533 39.3737 19.2533 42.1867V54.9067Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M40.9067 60C39.8953 60 38.9254 59.5982 38.2102 58.8831C37.4951 58.168 37.0933 57.198 37.0933 56.1867V52.3733H40.9067C41.918 52.3733 42.888 52.7751 43.6031 53.4902C44.3182 54.2054 44.72 55.1753 44.72 56.1867C44.72 57.198 44.3182 58.168 43.6031 58.8831C42.888 59.5982 41.918 60 40.9067 60Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M19.2533 54.9067C19.2533 57.7196 21.5337 60 24.3467 60C27.1596 60 29.44 57.7196 29.44 54.9067L29.44 42.1867C29.44 39.3737 27.1596 37.0933 24.3467 37.0933C21.5337 37.0933 19.2533 39.3737 19.2533 42.1867V54.9067Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M40.9067 60C39.8953 60 38.9254 59.5982 38.2102 58.8831C37.4951 58.168 37.0933 57.198 37.0933 56.1867V52.3733H40.9067C41.918 52.3733 42.888 52.7751 43.6031 53.4902C44.3182 54.2054 44.72 55.1753 44.72 56.1867C44.72 57.198 44.3182 58.168 43.6031 58.8831C42.888 59.5982 41.918 60 40.9067 60Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M54.9067 44.7467C57.7196 44.7467 60 42.4663 60 39.6533C60 36.8404 57.7196 34.56 54.9067 34.56H42.1867C39.3737 34.56 37.0933 36.8404 37.0933 39.6533C37.0933 42.4663 39.3737 44.7467 42.1867 44.7467H54.9067Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M60 23.0933C60 24.1047 59.5982 25.0746 58.8831 25.7898C58.168 26.5049 57.198 26.9067 56.1867 26.9067H52.3733V23.0933C52.3733 22.082 52.7751 21.112 53.4902 20.3969C54.2054 19.6818 55.1753 19.28 56.1867 19.28C57.198 19.28 58.168 19.6818 58.8831 20.3969C59.5982 21.112 60 22.082 60 23.0933Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M9.09333 19.2533C6.28036 19.2533 4 21.5337 4 24.3467C4 27.1596 6.28036 29.44 9.09333 29.44H21.8133C24.6263 29.44 26.9067 27.1596 26.9067 24.3467C26.9067 21.5337 24.6263 19.2533 21.8133 19.2533H9.09333Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M4 40.9067C4 39.8953 4.40176 38.9254 5.1169 38.2102C5.83204 37.4951 6.80198 37.0933 7.81333 37.0933H11.6267V40.9067C11.6267 41.918 11.2249 42.888 10.5098 43.6031C9.79463 44.3182 8.82469 44.72 7.81333 44.72C6.80198 44.72 5.83204 44.3182 5.1169 43.6031C4.40176 42.888 4 41.918 4 40.9067Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M9.09333 19.2533C6.28036 19.2533 4 21.5337 4 24.3467C4 27.1596 6.28036 29.44 9.09333 29.44H21.8133C24.6263 29.44 26.9067 27.1596 26.9067 24.3467C26.9067 21.5337 24.6263 19.2533 21.8133 19.2533H9.09333Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                        <path d="M4 40.9067C4 39.8953 4.40176 38.9254 5.1169 38.2102C5.83204 37.4951 6.80198 37.0933 7.81333 37.0933H11.6267V40.9067C11.6267 41.918 11.2249 42.888 10.5098 43.6031C9.79463 44.3182 8.82469 44.72 7.81333 44.72C6.80198 44.72 5.83204 44.3182 5.1169 43.6031C4.40176 42.888 4 41.918 4 40.9067Z" stroke="#292929" stroke-width="5.09333" stroke-miterlimit="10" />
                    </svg>
                </Grid>


                {isSmallScreen ?
                    <>
                        <Grid md={1} item>
                            <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Men's</Button>
                        </Grid>
                        <Grid md={1} item>
                            <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Women's</Button>

                        </Grid>
                        <Grid md={1} item>
                            <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Electronics</Button>
                        </Grid>
                        <Grid md={1} item>
                            <Button sx={{ "&:hover": { backgroundColor: "transparent" }, marginTop: "0.3rem" }}>Jewelry</Button>
                        </Grid></> :
                    null}
                <Grid md={2} s={2} xs={6} item>
                    <TextField size="small" sx={{ marginTop: isSmallScreen ? "0.1rem" : "0.5rem" }} placeholder='Search' variant="standard"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                        }} />
                </Grid>
                {isSmallScreen === false ? <Grid xs={2} item>
                    <MenuIcon onClick={toggleDrawer}     sx={{ fontSize: 38, marginTop: "0.5rem" }} />
                </Grid> : null}


            </Grid>
        </div>
    )
}

export default NavBar