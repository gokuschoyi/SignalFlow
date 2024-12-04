import React, { useState, useEffect } from 'react'
import { Box, Typography, useTheme, TextField, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { FileUploader } from '../utils/FileUploader';
import { IndicatorSearch } from './IndicatorSearch';
import { talibDescriptions } from '../Constants';
import JsonChecker from './JsonPreview';

const DataInput = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [fileName, setFileName] = useState("");

    const [searchedFunctions, setSearchedFunction] = useState([]);
    const [transformedFunctionsList, setTransformedFunctionList] = useState([]);

    useEffect(() => {
        if (talibDescriptions.length > 0) {
            const modified = talibDescriptions.reduce((result: { func_selected: boolean; group: string; label: string; }[], item) => {
                return [
                    ...result,
                    ...item.functions.map((func) => ({
                        func_selected: func.function_selected_flag,
                        group: func.group,
                        label: `${func.hint} : ${func.name}`,
                    }))
                ];
            }, [])

            // @ts-ignore
            setTransformedFunctionList(modified)
        }
    }, [])

    const handleAddSelectedFunction = () => {
        console.log('Add functions to calculate')
        const functionNamesToAdd = searchedFunctions.map((func) => {
            // @ts-ignore
            const [, func_name] = func.label.split(':')
            return func_name.trim()
        })
        console.log(functionNamesToAdd)

        functionNamesToAdd.forEach((func_name) => {
            const foundFunction = talibDescriptions
                .map(group => group.functions)
                .flat()
                .find(func => func.name === func_name);
            console.log(foundFunction)
        })
    }

    const handleSearchedFunctions = (newValue: any) => {
        setSearchedFunction(newValue)
    }


    const handleFile = (file: { name: React.SetStateAction<string>; }) => {
        setFileName(file.name);
    };

    return (
        <Box className="datainput-parent">
            <Box className="datainput-section" pt={4} pb={2} pr={2} pl={2} style={{ paddingTop: sm ? "16px" : "10vh" }}>
                <Grid container spacing={4}>
                    <Grid size={{ md: 12, lg: 6 }}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"start"} textAlign={"left"} gap={2}>
                            <Box display={"flex"} flexDirection={"column"} justifyContent={"start"} textAlign={"left"} gap={1}>
                                <Typography variant="h4" fontFamily={"Montserrat"} sx={{ color: `${theme.palette.secondary.main}` }}>Upload Your Data</Typography>
                                <Typography variant="body1" fontFamily={"Montserrat"} textAlign={"justify"}>
                                    Paste your <a style={{ textDecoration: "none", color: `${theme.palette.secondary.light}` }} href="https://www.json.org/json-en.html">JSON</a> data into the box to begin
                                    or upload a <span style={{ fontWeight: "bold" }}>JSON</span> or <span style={{ fontWeight: "bold" }}>CSV</span> file.
                                    Then select the technical indicators and parameters you want to apply to your data.
                                </Typography>
                            </Box>

                            <IndicatorSearch
                                searchedFunctions={searchedFunctions}
                                transformedFunctionsList={transformedFunctionsList}
                                handleSearchedFunctions={handleSearchedFunctions}
                                handleAddSelectedFunction={handleAddSelectedFunction}
                            />
                        </Box>

                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-end"} gap={2}>
                            <JsonChecker />
                            <FileUploader handleFile={handleFile} />
                            {fileName ? <p>Uploaded file: {fileName}</p> : null}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default DataInput