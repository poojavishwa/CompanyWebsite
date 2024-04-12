import React from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
export const Buttonn = ({ onClick, children }) => {
  return (
    <React.Fragment>
      <div className="flex space-x-5">
        <button
          onClick={onClick}
          className="border border-dashed border-black py-6 px-4 flex flex-col items-center ">
          <AddPhotoAlternateRoundedIcon />
          {children}
        </button>
        {/* <button className="border border-dashed border-black py-6 px-4 flex flex-col items-center ">
          <AddPhotoAlternateRoundedIcon />
          Upload Bill
        </button> */}
      </div>
    </React.Fragment>
  );
};
