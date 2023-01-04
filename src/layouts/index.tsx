import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box maxW={1200} minH="100vh" alignItems="center" flexDir="column">
      <div>{children}</div>
    </Box>
  );
};
