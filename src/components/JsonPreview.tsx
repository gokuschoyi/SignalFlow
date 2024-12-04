import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'

const JsonChecker = () => {
    const [jsonText, setJsonText] = useState("");
    const [error, setError] = useState<{ message: string, position: number }>({ message: "", position: -1 });


    const handleJsonChange = (value: any) => {
        // const text = e.target.value;
        setJsonText(value);

        if (value !== "") {
            try {
                JSON.parse(value);
                setError({ message: "", position: -1 }); // Valid JSON
            } catch (err: any) {
                // Extract error position
                const match = err.message.match(/position (\d+)/);
                const position = match ? parseInt(match[1], 10) : null;
                // console.log(position);
                setError({ message: err.message, position: position ?? -1 });
            }
        } else {
            setError({ message: "", position: -1 });
        }
    };

    // const getHighlightedText = () => {
    //     if (error.message === "" || error.position === -1) return jsonText;

    //     const position = error.position;
    //     return (
    //         <>
    //             <span>{jsonText.slice(0, position)}</span>
    //             <span style={{ backgroundColor: "#F44336" }}>
    //                 {jsonText.slice(position, position + 1)}
    //             </span>
    //             <span>{jsonText.slice(position + 1)}</span>
    //         </>
    //     );
    // };



    const [dynamicHighlight, setDynamicHighlight] = useState([{ highlight: [-1, -1], className: "red_highlight" }]);

    useEffect(() => {
        if (error.position !== -1) {
            setDynamicHighlight([{ highlight: [error.position - 1, error.position], className: "red_highlight" }]);
        } else {
            setDynamicHighlight([{ highlight: [-1, -1], className: "red_highlight" }]);
        }
    }, [error.position])

    useEffect(() => {
        const tf_to_highlight = document.getElementsByClassName("public-DraftEditor-content")[0];
        // console.log(tf_to_highlight);
        if (tf_to_highlight) {
            // @ts-ignore
            tf_to_highlight.style.height = "360px";
        }
    }, [])

    return (
        <Box width={"100%"}>
            <Box className="custom-textfield" id="text_field">
                <HighlightWithinTextarea
                    placeholder="Paste JSON data here"
                    value={jsonText}
                    highlight={dynamicHighlight}
                    onChange={handleJsonChange}
                    handleDroppedFiles={(selection: any, files: any) => {
                        console.log(files[0].name);
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            console.log(e)
                            const text = e.target?.result;
                            if (text) {
                                setJsonText(text.toString());
                            }
                        };
                        reader.readAsText(files[0]);
                    }}
                />
            </Box>
            <Box pt={1} display={"flex"} flexDirection={"row"} justifyContent={"flex-start"}>
                {jsonText.length > 0 && (
                    <Typography variant="body1" fontFamily={"Montserrat"} fontSize={12} color="error">
                        {error.message !== "" ? error.message.split("JSON")[0] + "JSON" : "Valid JSON"}
                    </Typography>
                )}
            </Box>
        </Box>

        // <Box sx={{ position: "relative", width: "100%" }}>
        //     {/* Overlay for the highlighted text */}
        //     <Box
        //         className="json-overlay"
        //         sx={{
        //             height: "fit-content",
        //             paddingTop: "0.51px",
        //             position: "absolute",
        //             top: "8px", // Align overlay with TextField text
        //             left: "14px",
        //             right: "16px",
        //             bottom: "16px",
        //             pointerEvents: "none", // Allows clicks to pass through to TextField
        //             fontSize: 14,
        //             textAlign: "left",
        //             fontFamily: "Montserrat",
        //             whiteSpace: "pre-wrap",
        //             overflowWrap: "break-word",
        //             zIndex: 1,
        //             lineHeight: "1.4379em",
        //             letterSpacing: "0.00938em"
        //         }}
        //     >
        //         {getHighlightedText()}
        //     </Box>

        //     {/* <textarea
        //         className="json-input"
        //         value={jsonText}
        //         onChange={handleJsonChange}
        //         style={{
        //             fontFamily: "Montserrat",
        //             fontSize: 14
        //         }}
        //         rows={20}
        //         cols={60}
        //     /> */}

        //     {/* Invisible TextField to handle user input */}
        //     <TextField
        //         className="json-input"
        //         onChange={handleJsonChange}
        //         // onWheel={(e) => {console.log(e); e.stopPropagation();}}
        //         slotProps={{
        //             input: {
        //                 sx: {
        //                     fontFamily: "Montserrat",
        //                     fontSize: 14
        //                 }
        //             },
        //         }}
        //         size="small"
        //         value={jsonText}
        //         fullWidth
        //         id="json-input"
        //         multiline
        //         rows={20}
        //         variant="outlined"
        //         placeholder={`[{"key1": "value1", "key2": "value2"}...{}]`} // This is a placeholder`
        //         error={error.message !== ""}
        //         helperText={error.message ? error.message.split("JSON")[0] + "JSON" : "Valid JSON"}
        //     />

        // </Box>

    );
};



export default JsonChecker;
