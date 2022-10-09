import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {Person} from "../types";

function CharacterInformation() {
  const [CharacterInformation, setCharacterInformation] = useState<Person | undefined>();
  const { slug } = useParams<{ slug: string }>();
  const { getCharacterInfo } = useAppContext();

  console.log("CharacterInformation", CharacterInformation);

  useEffect(() => {
    if (slug) {
      const characterInfo = getCharacterInfo(slug);
      setCharacterInformation(characterInfo);
    }
  }, [slug]);

  return (
    <Box>
      <Text textAlign="left">General Information</Text>
      <Box display="flex" flexDirection="row">
        <Text>Eye Color:</Text>
        <Text>{CharacterInformation?.eye_color}</Text>
      </Box>
      <Box display="flex" flexDirection="row">
        <Text>Eye Color:</Text>
        <Text>{CharacterInformation?.hair_color}</Text>
      </Box>
      <Box display="flex" flexDirection="row">
        <Text>Eye Color:</Text>
        <Text>{CharacterInformation?.skin_color}</Text>
      </Box>
      <Box display="flex" flexDirection="row">
        <Text>Eye Color:</Text>
        <Text>{CharacterInformation?.birth_year}</Text>
      </Box>
      <Text textAlign="left">Vehicles</Text>
      
    </Box>
  );
}

export default CharacterInformation;
