import { Grid,Typography } from '@mui/material'
import React from 'react'

const TopBar = () => {
    return (
        <div>
            <Grid container justifyContent={"space-between"}>
                <Grid item>
                   <Typography fontFamily="Roboto" variant=''>location</Typography> 
                </Grid>
                <Grid fontFamily="Roboto" item>
                    login/signup
                </Grid>
            </Grid>
            <hr  style={{border:"none",height:"0.1em",backgroundColor:"#6c757d"}} />
        </div>
    )
}

export default TopBar