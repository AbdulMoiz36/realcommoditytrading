import React from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DataTable = ({ columns, data, color , postType}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 8 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  // Calculate total pages
  const totalPages = Math.ceil(data.length / pageSize);

  // Function to get the text color based on the type
  const getTextColor = (offerType, offerStatus) => {
    if (offerType === "buyer" || offerStatus === "buyer") {
      return "#001fe7"; // blue for buyer
    } else if (offerType === "seller" || offerStatus === "seller") {
      return "red"; // red for seller
    } else if (offerType === "finance" || offerStatus === "finance") {
      return "green"; // green for finance
    } else if (offerType === "announcement" || offerStatus === "announcement") {
      return "black"; // black for announcement
    } else {
      return "inherit";
    }
  };

  // Set fixed widths for columns
  columns.forEach((column, index) => {
    if (index === 0) {
      column.width = 500;
    } else {
      column.width = 90;
    }
  });

  return (
    <>
      <div>
        {/* <input
          value={globalFilter || ''}
          onChange={(e) => {
            setGlobalFilter(e.target.value); // Apply the global filter immediately
          }}
          placeholder="Search..."
        /> */}
      </div>
      <table {...getTableProps()} className="w-full border-2">
        <thead className={`bg-${color}-500 text-white rounded-t-lg border-2`}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  className={`py-3 px-1 font-semibold text-md ${
                    index === 0 ? "" : "text-center"
                  }`}
                  style={{ minWidth: `${column.width}px` }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="font-normal">
          {data.length === 0 ? (
            <tr className="">
              <td colSpan={columns.length} className="text-center py-5">
                No offers found
              </td>
            </tr>
          ) : (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-2 hover:bg-gray-100 transition duration-200"
                  style={{
                    color: getTextColor(
                      row.original.offer_type,
                      row.original.offer_status
                    ),
                  }}
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`font-normal text-sm capitalize py-3 px-3 ${
                          index === 0 ? "" : "text-center"
                        }`}
                      >
                        <NavLink
                          to={`/${postType}-details/${row.original._id}`}
                          key={row.original._id}
                          className=""
                        >
                          {cell.render("Cell")}
                        </NavLink>
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <div className="flex justify-start items-center">
        <div className="flex">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="flex justify-center items-center p-2 border-2 disabled:opacity-50 hover:bg-slate-200 transition ease-in-out duration-300"
          >
            <FaAngleLeft className="mt-1" />
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="flex justify-center items-center py-2 px-4 border-2 disabled:opacity-50 hover:bg-slate-200 transition ease-in-out duration-300"
          >
            Next
            <FaAngleRight className="mt-1" />
          </button>
        </div>
        <div className="ml-4">
          <span>
            Page
            <strong>
              <span className={`text-${color}-600`}> {pageIndex + 1}</span> of{" "}
              {totalPages}
            </strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default DataTable;
