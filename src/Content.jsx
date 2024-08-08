import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Content = ({title, description}) => {
  return (
    <Box>
      <Text fontSize={"1.2rem"} fontWeight={"500"} mt={"1.1rem"}>
        {title}
      </Text>
      <Text pt={'0.4rem'}>
        {description}
      </Text>
    </Box>
  );
};

export default Content;
