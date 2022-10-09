import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="header"
      w="100%"
      h="45px"
      bg="#000000"
      color="#fff"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="17px" lineHeight="20px" fontWeight="bold">Ravn Star Wars Registry</Text>
    </Box>
  );
}

export default Header;
