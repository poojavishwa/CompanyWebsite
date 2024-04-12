import React, { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Modal, Button } from "@mui/material";
import { EditEmp } from "./EditEmp";
import { DeleteEmp } from "./DeleteEmp";
import { EditPassword } from "./EditPassword";

const Optionsss = () => {
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
      <div className="w-60 border bg-white border-gray-100 m-10 h-[170px] p-5 space-y-2 shadow-xl">
        <button className="bg-green-50 rounded-lg w-full flex justify-start">
          <div className="flex justify-start items-center">
            <BorderColorOutlinedIcon />
            <Button
              onClick={handleOpenModal1}
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
              onClick={handleOpenModal2}
              style={{
                color: "black",
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
            <LockOutlinedIcon />
            <Button
              onClick={handleOpenModal3}
              style={{
                color: "black",
                padding: "6px",
              }}>
              Change Password
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
        <EditEmp notShow={handleCloseModal1} />
      </Modal>

      <Modal
        open={showModal2}
        onClose={handleCloseModal2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <DeleteEmp notShow={handleCloseModal2} />
      </Modal>

      <Modal
        open={showModal3}
        onClose={handleCloseModal3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <EditPassword notShow={handleCloseModal3} />
      </Modal>
    </React.Fragment>
  );
};
export default Optionsss;
