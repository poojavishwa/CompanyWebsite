import React, { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Modal, Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { EditDevice } from "./EditDevice";
import { AssignDevice } from "./AssignDevice";
import { DeleteDevice } from "./DeleteDevice";

const DeviceOptionss = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleOpenModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const handleOpenModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const handleOpenModal3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };
  return (
    <React.Fragment>
      <div className="w-60 p-4 border bg-white border-gray-100 m-10 h-[200px] space-y-2 shadow-xl">
        <button className=" bg-green-50 rounded-lg w-full flex justify-start">
          <div className="flex justify-start items-center">
            <ManageAccountsOutlinedIcon sx={{ color: "green" }} />
            <Button
              onClick={handleOpenModal1}
              style={{
                color: "green",
                padding: "6px",
              }}>
              Assign
            </Button>
          </div>
        </button>
        <button className="bg-gray-100 rounded-lg w-full flex justify-start">
          <div className="flex justify-start items-center">
            <BorderColorOutlinedIcon />
            <Button
              onClick={handleOpenModal2}
              style={{
                color: "black",
                display: "flex",
                justifyContent: "start",
                padding: "6px",
              }}>
              Edit
            </Button>
          </div>
        </button>
        <button className=" bg-red-50 text-red-400 rounded-lg w-full flex justify-start">
          <div className="flex justify-start items-center">
            <DeleteOutlineOutlinedIcon />
            <Button
              onClick={handleOpenModal3}
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                padding: "6px",
              }}>
              Delete
            </Button>
          </div>
        </button>
        <button className=" bg-purple-100 rounded-lg w-full flex justify-start">
          <div className="flex justify-start items-center">
            <FileDownloadOutlinedIcon />
            <Button
              style={{
                color: "black",
                padding: "6px",
              }}>
              Download Bill
            </Button>
          </div>
        </button>
      </div>
      <Modal
        open={showModal1}
        onClose={handleCloseModal1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <AssignDevice notShow={handleCloseModal1} />
      </Modal>
      <Modal
        open={showModal2}
        onClose={handleCloseModal2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <EditDevice notShow={handleCloseModal2} />
      </Modal>
      <Modal
        open={showModal3}
        onClose={handleCloseModal3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <DeleteDevice notShow={handleCloseModal3} />
      </Modal>
    </React.Fragment>
  );
};
export default DeviceOptionss;
