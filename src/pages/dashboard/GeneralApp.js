import { Box, Stack } from "@mui/material";
import React from "react";
import Converstation from "../../components/Converstation";
import Chats from "./Chats";
import { useTheme } from "@mui/material/styles";

import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import Contact from "../../components/Converstation/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chatss */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px) " : "calc(100vw - 420px) ",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* COnverstation */}
        <Converstation />
      </Box>
      {/* <Contack /> */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
