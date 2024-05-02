import React from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const DataTable = ({ columns, data, color }) => {
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
  const getTextColor = (type) => {
    switch (type) {
      case "buyer":
        return "#001fe7";
      case "seller":
        return "red";
      case "finance":
        return "green";
      case "announcement":
        return "black";
      default:
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-2"
                style={{ color: getTextColor(row.original.offer_type) }}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`font-normal text-sm capitalize py-3 px-3 ${
                        index === 0 ? "" : "text-center"
                      }`}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
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
