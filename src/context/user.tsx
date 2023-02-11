import * as React from "react";

export type User = {
  email: string;
} | null;

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

const defaultValues: UserStore = {
  user: null,
  setUser: () => {},
};

const UserContext = React.createContext<UserStore>(defaultValues);

export const useUser = () => React.useContext(UserContext) as UserStore;

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setState] = React.useState<User | null>(null);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  const setUser = (user: User) => {
    setState(user);
  };

  const value = React.useMemo(() => {
    return {
      user,
      setUser,
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
