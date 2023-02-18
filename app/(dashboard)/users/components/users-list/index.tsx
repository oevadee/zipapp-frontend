import React from "react";
import { User } from "../../../../types/user";

interface Props {
  users: User[] | null;
}

export const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <ul>
      {users?.map(({ _id, email }) => (
        <li key={_id}>
          <div>
            <p>id: {_id}</p>
            <p>email: {email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
