import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Content from "./Content";
import { items } from "../items";

const App = () => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Box>
        <Text fontSize={"1.8rem"} fontWeight={"600"}>
          Analyzr Privacy Policy
        </Text>
      </Box>
      <Box w={"60%"}>
        {/* <Content
          title={"Introduction"}
          description={
            "Thank you for using Analyzr, a Chrome extension designed to provide time and space complexity insights for code on platforms like LeetCode and GeeksforGeeks. We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines the types of information we collect and how it is used."
          }
        /> */}
        {items.map((e) => {
          return <Content title={e.title} description={e.description} />;
        })}
      </Box>
    </Box>
  );
};

export default App;
