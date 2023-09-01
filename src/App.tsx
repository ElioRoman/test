import React from "react";
import UserCard from "./components/UserCard";
import Search from "./components/Search";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Search />
        <UserCard />
      </Box>
    </>
  );
};

export default App;
