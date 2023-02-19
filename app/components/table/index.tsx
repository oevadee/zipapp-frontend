import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import styled from "styled-components";

const SWrapper = styled.div`
  width: 100%;
`;

const STable = styled.table`
  min-width: 100%;
  border-spacing: 0px;

  th,
  td {
    border-bottom: solid 1px ${({ theme }) => theme.color.primary};
    padding: 1rem 1.5rem;
    font-size: ${({ theme }) => theme.font.size.regular};
  }

  th {
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  td {
    font-weight: ${({ theme }) => theme.font.weight.light};
    white-space: nowrap;
  }
`;

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const Table = <T extends object>({
  data,
  columns,
}: ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <SWrapper>
      <STable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            console.log(headerGroup);
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </STable>
    </SWrapper>
  );
};
