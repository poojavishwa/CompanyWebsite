import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import Pagination from "./Pagination";
import { Laptop } from "@mui/icons-material";

const ViewDeviceTable = ({ deviceData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const devicePerPage = 5;

  const indexOfLastDevice = currentPage * devicePerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicePerPage;
  const currentDevices = deviceData.slice(
    indexOfFirstDevice,
    indexOfLastDevice
  );
  const totalPages = Math.ceil(deviceData.length / devicePerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <React.Fragment>
      <div className="m-4 ">
        <table className="w-full  md:min-w-max text-base text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" class="px-6 py-3">
                Device Name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Purchased date
              </th>
              <th scope="col" class="px-6 py-3">
                Warranty
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDevices.map((device) => (
              <tr
                key={device.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {/* <td className="px-6 py-4">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="h-10 w-10"
                  />
                </td> */}
                <td className="px-6 py-4 flex justify-start items-center">
                  <img src={device.image} className="h-10 w-10" />
                  {device.name}
                </td>
                <td className="px-6 py-4">{device.category}</td>
                <td className="px-6 py-4">
                  {device.status === "Active" ? (
                    <ToggleOnIcon />
                  ) : (
                    <ToggleOffIcon />
                  )}
                </td>
                <td className="px-6 py-4">{device.purchasedDate}</td>
                <td className="px-6 py-4">{device.warranty}</td>
                <td className="px-6 py-4">
                  <div>
                    <MoreHorizOutlinedIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ViewDeviceTable;
