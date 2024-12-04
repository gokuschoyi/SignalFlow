import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TuneIcon from '@mui/icons-material/Tune';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import DownloadIcon from '@mui/icons-material/Download';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const About = () => {
    const theme = useTheme();
    const sm = useMediaQuery('(max-width:600px)');
    return (
        <Box className="about-parent">
            <Box p={2} className="about-section">
                <Grid container spacing={4}>
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"start"} textAlign={"left"}>
                            <Typography variant="h4" fontFamily={"Montserrat"} sx={{color:`${theme.palette.secondary.main}`}}>From Data to Decisions – Your Technical Analysis Made Simple!</Typography>
                            <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"justify"}>
                                Welcome to SignalFlow, your go-to platform for analyzing financial data with precision and ease.
                                Designed for traders, analysts, and enthusiasts, our app simplifies the process of applying powerful technical indicators
                                to your datasets.
                                With seamless file uploads and a user-friendly interface, we help you turn raw data into actionable insights using TA-Lib,
                                a trusted library for financial calculations.
                                Whether you're tracking trends, identifying patterns, or forecasting market movements, SignalFlow equips you with the tools to
                                make data-driven decisions confidently.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box display={"flex"} flexDirection={"column"} gap={2}>
                            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
                                <UploadFileIcon fontSize='large' sx={{ color: `${theme.palette.secondary.main}` }} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
                                    <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"} fontSize={"1rem"}>Seamless File Uploads</Typography>
                                    <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"left"}>Drag-and-drop or click-to-upload functionality for JSON and CSV files.</Typography>
                                </Box>
                            </Box>

                            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
                                <TuneIcon fontSize='large' sx={{ color: `${theme.palette.secondary.main}` }} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
                                    <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"} fontSize={"1rem"}>Parameter Configuration</Typography>
                                    <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"left"}>Customize indicator parameters with intuitive input fields to suit your analysis needs.</Typography>
                                </Box>
                            </Box>

                            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
                                <AutoGraphIcon fontSize='large' sx={{ color: `${theme.palette.secondary.main}` }} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
                                    <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"} fontSize={"1rem"}>Interactive Visualization</Typography>
                                    <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"left"}>View processed data in tables and dynamic charts for clear, actionable insights.</Typography>
                                </Box>
                            </Box>

                            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
                                <BrowseGalleryIcon fontSize='large' sx={{ color: `${theme.palette.secondary.main}` }} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
                                    <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"} fontSize={"1rem"}>Real-Time Processing</Typography>
                                    <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"left"}>Get quick results with optimized calculations, ensuring minimal wait times.</Typography>
                                </Box>
                            </Box>

                            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
                                <DownloadIcon fontSize='large' sx={{ color: `${theme.palette.secondary.main}` }} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
                                    <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"} fontSize={"1rem"}>Downloadable Results</Typography>
                                    <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"left"}>Export processed data in JSON or CSV format for further use or record-keeping.</Typography>
                                </Box>
                            </Box>

                            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"}>
                                <AccessibilityNewIcon fontSize='large' sx={{ color: `${theme.palette.secondary.main}` }} />
                                <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
                                    <Typography variant="h6" fontFamily={"Montserrat"} textAlign={"left"} fontSize={"1rem"}>User-Friendly Interface</Typography>
                                    <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"left"}>Clean, responsive design that works seamlessly on desktops, tablets, and smartphones.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default About