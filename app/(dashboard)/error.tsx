"use client";

import * as React from "react";
import { Button } from "../components/button";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  const recover = () => reset();

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={recover}>Try again</Button>
    </div>
  );
};

export default Error;
