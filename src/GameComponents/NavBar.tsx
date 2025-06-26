import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import logoHeart from "../assets/logoHeart.png";
import logoHeartLight from "../assets/logoHeartLight.png";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: SearchInputProps) => {
  const { colorMode } = useColorMode();
  const logo = colorMode === "light" ? logoHeartLight : logoHeart;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack padding="1rem" justifyContent="space-between" alignItems="center">
        <HStack flex="1" spacing={4} display={{ base: "none", md: "flex" }}>
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
          <Box flex="1">
            <SearchInput onSearch={onSearch} />
          </Box>
        </HStack>

        <HStack flex="1" spacing={4} display={{ base: "flex", md: "none" }}>
          <Image src={logo} boxSize="3.5rem" />
          <Text fontSize="xl" fontFamily="'Racing Sans One', sans-serif">
            iHeartGames
          </Text>
        </HStack>

        <Flex gap={3} display={{ base: "flex", md: "none" }}>
          <IconButton
            aria-label="Search"
            icon={<BsSearch />}
            variant="outline"
            onClick={onOpen}
          />
          <ColorModeToggle />
        </Flex>

        <Box display={{ base: "none", md: "block" }}>
          <ColorModeToggle />
        </Box>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginTop="20%">
          <ModalBody>
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
