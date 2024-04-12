import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CustomButton = styled(Button)({
  backgroundColor: "white",
  width: "150px",
  color: "#dbdcdc",
  padding: "25px 25px",
  border: "2px dashed #dbdcdc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#e8e8e8",
  },
});

export default function InputFileUpload() {
  const handleFileInputChange = (event) => {
    const fileList = event.target.files;
  };

  return (
    <React.Fragment>
      <CustomButton component="label" role={undefined} variant="contained">
        <CloudUploadIcon fontSize="large" />
        <div>Upload file</div>
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </CustomButton>
    </React.Fragment>
  );
}
