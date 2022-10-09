import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Center,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Person } from "../types";
import { useAppContext } from "../context/AppContext";

function Home() {

  const { data, getInfo, error, loading } = useAppContext();

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Box>
      {loading && (
        <Center mt="18px">
          <Spinner label="Loading" size="lg" />
          <Text
            fontSize="17px"
            color="#828282"
            fontWeight="bold"
            marginLeft="11.21px"
          >
            Loading
          </Text>
        </Center>
      )}
      {error && (
        <Center mt="16px">
          <Text color="#EC5757" fontWeight="bold">
            {error}
          </Text>
        </Center>
      )}

      {data.map((response: Person, index: number) => (
        <Link to={`/character-info/${response.slug}`} key={index}>
          <Box
            bg="#FFFFFF"
            mt="16px"
            p="16px"
            borderRadius="8px"
            onClick={() => console.log("click", index)}
          >
            <Box
              display="flex"
              flexDirection="column"
              fontSize="17px"
              color="#333333"
              fontWeight="bold"
              lineHeight="20.29px"
              letterSpacing="1.25%"
              textAlign="left"
            >
              {response.name}
            <Text
              as="sub"
              fontSize="14px"
              color="#828282"
              lineHeight="16.71px"
              letterSpacing="1.25%"
              fontWeight="400"
            >
              {response.specie} of {response.planet}
            </Text>
            </Box>
            <ChevronRightIcon
              color="#828282"
              float="right"
              alignItems="center"
              mt="2px"
              w={25}
              h={25}
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
}

export default Home;
