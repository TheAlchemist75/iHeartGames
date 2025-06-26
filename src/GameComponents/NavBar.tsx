import {
  Box,
  HStack,
  IconButton,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import logoHeart from "../assets/logoHeart.png";
import logoHeartLight from "../assets/logoHeartLight.png";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: SearchInputProps) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logo = colorMode === "light" ? logoHeartLight : logoHeart;

  return (
    <>
      <HStack padding="1rem" justifyContent="space-between" flexWrap="wrap">
        <HStack flex="1" spacing={4}>
          <Image src={logo} boxSize="3.5rem" />
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Text
              whiteSpace="nowrap"
              fontFamily="'Racing Sans One', sans-serif"
              fontSize="3xl"
            >
              iHeartGames
            </Text>
          </Link>

          <Box flex="1" display={{ base: "none", md: "block" }}>
            <SearchInput onSearch={onSearch} />
          </Box>

          <Box display={{ base: "block", md: "none" }} mr={4}>
            <IconButton
              aria-label="Open search"
              icon={<BsSearch />}
              variant="ghost"
              onClick={onOpen}
            />
          </Box>
        </HStack>

        <ColorModeToggle />
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalCloseButton />
          <ModalBody paddingY={8}>
            <SearchInput
              onSearch={(text) => {
                onSearch(text);
                onClose();
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavBar;
