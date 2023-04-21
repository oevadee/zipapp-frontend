import React from "react";
import { User } from "../../../../types/user";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../../../components/table";
import Card from "../../../../components/card";
import { appUrl } from "../../../../constants";
import axios from "axios";

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
      {
        header: "Delete",
        cell: ({ row }) => (
          <button onClick={() => handleDeleteRow(row.original._id)}>
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const handleDeleteRow = async (userId: string) => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const { data } = await axios.delete(`${appUrl}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return data;
      }
      throw new Error();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card noPadding>
      {users && (
        <Table data={users} columns={cols} handleDeleteRow={handleDeleteRow} />
      )}
    </Card>
  );
};
