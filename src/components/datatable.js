import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters, useGlobalFilter } from 'react-table';


const DataTable = ({ columns, data , color }) => {
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
      <table {...getTableProps()} className=''>
        <thead className='bg-blue-500 text-white'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className='border-r border-slate-400 min-w-16 py-2 max-w-max font-normal'>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className='font-normal'>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className=''>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}  className='p-1 font-normal '>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
        <div>
          <span>
            Page <strong>{pageIndex + 1} of {totalPages}</strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default DataTable;
