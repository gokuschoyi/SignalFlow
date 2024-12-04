import React from 'react'
import { Box, Button, useTheme, useMediaQuery } from '@mui/material'
import logo_32 from '../assets/logo64.png'
import logo_full from '../assets/logo_full.png'
import ToggleSwitch from './ToggleSwitch'

const Header = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Box
            pl={2}
            pr={2}
            sx={{ backgroundColor: `${theme.palette.background.paper}` }}
            justifyContent={"center"}
            display={"flex"}
            
        >
            <Box
                className="header"
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
            >
                <Box
                    style={{
                        filter: theme.palette.mode === 'light' ? `drop-shadow(0px 1000px 0 ${theme.palette.primary.main})` : 'none',
                        transform: theme.palette.mode === 'light' ? 'translateY(-1000px)' : 'none'
                    }}
                >
                    {sm
                        ?
                        <Box height={78} display={"flex"} alignContent={"center"}>
                            <img style={{
                                height: '75px',
                                color: theme.palette.mode === 'dark' ? 'white' : `${theme.palette.text.primary}`
                            }} src={logo_32} alt="logo" />
                        </Box>
                        : <Box height={78} display={"flex"} alignContent={"center"}>
                            <img src={logo_full} alt="logo" />
                        </Box>
                    }
                </Box>

                <ToggleSwitch />
            </Box>
        </Box>
    )
}

export default Header