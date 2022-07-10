import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCard from "./CartCard";

const NavBar = ({
  isDark,
  toggleColorMode,
  cartItems,
  removeFromCart,
  price,
}) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <Box bgColor={isDark ? "blackAlpha.600" : "#85F4FF"}>
      <Box
        display="flex"
        marginX={["2em", "6em", "12em", "22em"]}
        p="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="xl">Shoes App</Text>
        <Box display="flex" alignItems="center" gap="20px">
          <Box>
            <IconButton
              icon={<AiOutlineShoppingCart />}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            />
            {cartItems.length > 0 ? <Tag>{cartItems.length}</Tag> : ""}
          </Box>
          <IconButton
            onClick={toggleColorMode}
            icon={isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
          />
        </Box>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="full">
        {overlay}
        <ModalContent>
          <ModalHeader>Cart Items:</ModalHeader>
          <ModalCloseButton />
          <ModalBody minW="min-content">
            <Box display="flex" maxW="800px" gap="2em" marginBottom="2em">
              {cartItems.length > 0
                ? cartItems.map((item, index) => (
                    <CartCard
                      imageURL={item.imageUrl}
                      title={item.title}
                      color={item.color}
                      size={item.size}
                      price={item.price}
                      isDark={item.isDark}
                      cartItems={cartItems}
                      removeFromCart={removeFromCart}
                      index={index}
                    />
                  ))
                : "No items in the cart. Please add some items!"}
            </Box>
            {cartItems.length > 0 && (
              <Text fontSize="6xl" marginX="auto">
                Total: ₹{price}
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NavBar;
