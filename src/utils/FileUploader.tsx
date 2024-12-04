import { useRef } from "react";
import { Button, useTheme } from "@mui/material";

export const FileUploader = ({ handleFile }: { handleFile: any }) => {
    const theme = useTheme();

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = (event: any) => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file
    const handleChange = (event: any) => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };
    return (
        <>
            <Button
                variant="contained"
                sx={{ backgroundColor: `${theme.palette.secondary.main}` }}
                onClick={(e) => handleClick(e)}
            >
                Upload a file
            </Button>
            <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: "none" }} // Make the file input element invisible
            />
        </>
    );
};
