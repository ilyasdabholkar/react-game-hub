import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
  } from "@chakra-ui/react";
  import { BsChevronDown } from "react-icons/bs";
  import usePlatforms from "../hooks/usePlatforms";
  import { Platform } from "../hooks/useGames";
  
  interface Props {
   
  }
  
  function SortSelector() {
  
    return (
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by : Relevance
          </MenuButton>
          <MenuList>
           <MenuItem>Relevance</MenuItem>
           <MenuItem>Date Added</MenuItem>
           <MenuItem>Name</MenuItem>
           <MenuItem>Release Date</MenuItem>
           <MenuItem>Popularity</MenuItem>
           <MenuItem>Average Rating</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  }
  
  export default SortSelector;
  