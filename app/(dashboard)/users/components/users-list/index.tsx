import React from "react";
import { User } from "../../../../types/user";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../../../components/table";
import Card from "../../../../components/card";

interface Props {
  users: User[] | null;
}

export const UsersList: React.FC<Props> = ({ users }) => {
  const cols = React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: "Id",
        cell: (row) => row.renderValue(),
        accessorKey: "_id",
      },
      {
        header: "Email",
        cell: (row) => row.renderValue(),
        accessorKey: "email",
      },
    ],
    []
  );

  return (
    <Card noPadding>{users && <Table data={users} columns={cols} />}</Card>
  );
};
