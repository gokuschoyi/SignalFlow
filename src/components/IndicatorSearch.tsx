import { Box, Button, Chip, TextField, useMediaQuery, useTheme, Autocomplete } from '@mui/material'

interface IndicatorSearchProps {
    searchedFunctions: string[];
    transformedFunctionsList: { label: string; group: string; func_selected: boolean }[];
    handleSearchedFunctions: (functions: string[]) => void;
    handleAddSelectedFunction: () => void;
}

export const IndicatorSearch: React.FC<IndicatorSearchProps> = ({
    searchedFunctions,
    transformedFunctionsList,
    handleSearchedFunctions,
    handleAddSelectedFunction,
}) => {
    const theme = useTheme()
    // const lg = useMediaQuery(theme.breakpoints.down('lg'));
    // const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    // console.log(lg,md, sm)
    return (
        <Box>
            <Box className='search-indicator-box' display='flex' flexDirection='row' alignItems='center' >
                <Box className='function-selector' width='100%' display={'flex'} flexDirection={'column'} gap={1}>
                    {transformedFunctionsList.length > 0 &&
                        <Autocomplete
                            fullWidth
                            sx={{ fontFamily: "Montserrat", backgroundColor: `${theme.palette.background.default}`, width: sm ? "380px": "100%" }}
                            disableCloseOnSelect={true}
                            value={searchedFunctions}
                            size='small'
                            multiple
                            limitTags={2}
                            id="tags-filled"
                            options={transformedFunctionsList.sort((a, b) => -b.group.localeCompare(a.group))}
                            getOptionDisabled={(option) => transformedFunctionsList.filter((item) => item.label === option.label)[0].func_selected || searchedFunctions.includes(option.label)}
                            groupBy={(option) => option.group}
                            freeSolo
                            onChange={(event, newValue: any) => {
                                handleSearchedFunctions(newValue)
                            }}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => {
                                    const { key, ...tagProps } = getTagProps({ index });
                                    return (
                                        <Chip key={key} variant="outlined" size='small' label={option.label} {...tagProps} sx={{ fontFamily: "Montserrat" }} />
                                    )
                                })
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Search for a function"
                                    placeholder="Search..."
                                    size='small'
                                />
                            )}
                            slotProps={{
                                listbox: { sx: { fontFamily: "Montserrat", fontSize: 14 } }
                            }}
                        />
                    }
                    {searchedFunctions.length > 0 &&
                        <Box display='flex' alignItems='start'>
                            <Button size='small' color='secondary' variant='outlined' onClick={handleAddSelectedFunction.bind(null)}>Add Functions</Button>
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}