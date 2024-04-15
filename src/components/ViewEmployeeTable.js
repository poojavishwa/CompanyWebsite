import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import Pagination from "./Pagination";
import Optionsss from "./Optionsss";
import { Modal, Button } from "@mui/material";

const ViewEmployeeTable = ({ employeeData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const employeesPerPage = 5;

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employeeData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(employeeData.length / employeesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <div className="m-4 overflow-x-auto">
        <table className="w-full text-2xl md:text-base sm:text-base text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" class="px-6 py-3">
                Employee
              </th>
              <th scope="col" class="px-6 py-3">
                Job Role
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.role}</td>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">
                  {employee.status === "Active" ? (
                    <ToggleOnIcon sx={{ color: "green" }} />
                  ) : (
                    <ToggleOffIcon />
                  )}
                </td>
                <td className="px-6 py-4">
                  <Button
                    onClick={() => handleOpenModal(employee)}
                    style={{ color: "gray" }}>
                    <MoreHorizOutlinedIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Optionsss employee={selectedEmployee} />
      </Modal>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </React.Fragment>
  );
};
export default ViewEmployeeTable;
