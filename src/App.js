import { Box, Container, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  const [images, setImages] = useState([
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/946912ad-88ee-42b4-912e-61704b406c5f/air-pegasus-83-shoes-dRccxf.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/25c5c430-a8d8-4034-b0ef-9bfdedf58dd2/sb-ishod-wair-skate-shoes-BFw5xR.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/860d504a-1cb7-428e-80d8-30c0bec94689/custom-nike-react-infinity-run-3-by-you.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34bbc29a-ebc0-4853-a557-b6b67211b143/air-max-bella-tr-5-training-shoes-rGVXdS.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dec81d47-4188-405f-a126-37c47c665e87/zoomx-vaporfly-next-2-road-racing-shoes-fG92S8.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e222f738-521e-493b-aa47-36e93584c902/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04f922ce-ba7d-4ffd-9743-0d2b0c02ccfe/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14998677-9e1a-4a30-b51d-7cdcc23cf167/custom-nike-react-infinity-run-3-by-you.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
  ]);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price;
    });
    setPrice(sum);
  }, [cartItems]);

  useEffect(() => {
    images.forEach((img) => {
      const pic = new Image();
      pic.src = img;
    });
  }, []);

  const addToCart = (obj) => {
    setCartItems([...cartItems, obj]);
    console.log(cartItems);
  };

  const removeFromCart = (index) => {
    let newArr = cartItems.filter(function (item, idx) {
      return idx !== index;
    });
    setCartItems(newArr);
  };

  return (
    <Box>
      <NavBar
        isDark={isDark}
        toggleColorMode={toggleColorMode}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        price={price}
      />
      <Container maxW="6xl">
        <Main isDark={isDark} addToCart={addToCart} cartItems={cartItems} />
      </Container>
    </Box>
  );
}

export default App;
