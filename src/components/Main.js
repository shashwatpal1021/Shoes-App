import { Box, Input, Select } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import Card from "./Card";

const Main = ({ isDark, addToCart, cartItems }) => {
  function useForceUpdate() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
      setTick((tick) => tick + 1);
    }, []);
    return update;
  }
  const forceUpdate = useForceUpdate();

  const [itemsState, setItemsState] = useState([
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/946912ad-88ee-42b4-912e-61704b406c5f/air-pegasus-83-shoes-dRccxf.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
      ],
      title: "Nike brown",
      colors: ["maroon", "gray"],
      price: 1999,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/25c5c430-a8d8-4034-b0ef-9bfdedf58dd2/sb-ishod-wair-skate-shoes-BFw5xR.png",
      ],
      title: "Nike grey",
      colors: ["gray", "blue"],
      price: 3999,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/860d504a-1cb7-428e-80d8-30c0bec94689/custom-nike-react-infinity-run-3-by-you.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34bbc29a-ebc0-4853-a557-b6b67211b143/air-max-bella-tr-5-training-shoes-rGVXdS.png",
      ],
      title: "Nike green",
      colors: ["green", "pink"],
      price: 2999,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dec81d47-4188-405f-a126-37c47c665e87/zoomx-vaporfly-next-2-road-racing-shoes-fG92S8.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e222f738-521e-493b-aa47-36e93584c902/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png",
      ],
      title: "Nike purple",
      colors: ["purple", "red"],
      price: 10000,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04f922ce-ba7d-4ffd-9743-0d2b0c02ccfe/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
      ],
      title: "Nike dark-green",
      colors: ["teal", "darkgray"],
      price: 1599,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14998677-9e1a-4a30-b51d-7cdcc23cf167/custom-nike-react-infinity-run-3-by-you.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
      ],
      title: "Nike black",
      colors: ["#151515", "gray"],
      price: 999,
    },
  ]);

  const hardData = [
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/946912ad-88ee-42b4-912e-61704b406c5f/air-pegasus-83-shoes-dRccxf.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
      ],
      title: "Nike brown",
      colors: ["maroon", "gray"],
      price: 1999,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/25c5c430-a8d8-4034-b0ef-9bfdedf58dd2/sb-ishod-wair-skate-shoes-BFw5xR.png",
      ],
      title: "Nike grey",
      colors: ["gray", "blue"],
      price: 3999,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/860d504a-1cb7-428e-80d8-30c0bec94689/custom-nike-react-infinity-run-3-by-you.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34bbc29a-ebc0-4853-a557-b6b67211b143/air-max-bella-tr-5-training-shoes-rGVXdS.png",
      ],
      title: "Nike green",
      colors: ["green", "pink"],
      price: 2999,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dec81d47-4188-405f-a126-37c47c665e87/zoomx-vaporfly-next-2-road-racing-shoes-fG92S8.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e222f738-521e-493b-aa47-36e93584c902/air-zoom-rival-fly-3-road-racing-shoes-Sct72w.png",
      ],
      title: "Nike purple",
      colors: ["purple", "red"],
      price: 10000,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04f922ce-ba7d-4ffd-9743-0d2b0c02ccfe/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
      ],
      title: "Nike dark-green",
      colors: ["teal", "darkgray"],
      price: 1599,
    },
    {
      imageUrl: [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14998677-9e1a-4a30-b51d-7cdcc23cf167/custom-nike-react-infinity-run-3-by-you.png",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png",
      ],
      title: "Nike black",
      colors: ["#151515", "gray"],
      price: 999,
    },
  ];

  const [selectValue, setSelectValue] = useState("");
  const [flag, setFlag] = useState(false);
  const [, setSearch] = useState("");

  // useEffect(() => {
  //   if (selectValue === "lowest") {
  //     let newArr = itemsState.sort(
  //       (a, b) => parseFloat(b.price) - parseFloat(a.price)
  //     );
  //     console.log(newArr);
  //     setItemsState(newArr);
  //   } else if (selectValue === "highest") {
  //     let newArr = itemsState.sort(
  //       (a, b) => parseFloat(a.price) - parseFloat(b.price)
  //     );
  //     console.log(newArr);
  //     setItemsState(newArr);
  //   } else if (selectValue.length === 0) {
  //     setItemsState(hardData);
  //   }
  // }, [flag, selectValue]);

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
    if (selectValue === "lowest") {
      let newArr = itemsState.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      console.log(newArr);
      setItemsState(newArr);
    } else if (selectValue === "highest") {
      let newArr = itemsState.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      console.log(newArr);
      setItemsState(newArr);
    } else if (selectValue.length === 0) {
      setItemsState(hardData);
    }
    setFlag(!flag);
    forceUpdate();
  };

  const searchFunc = (e) => {
    let input = e.target.value.toLowerCase();
    setSearch(input);
  };

  return (
    <Box marginTop="2em">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="1em"
        marginX="4em"
      >
        <Input
          placeholder="Search"
          onChange={searchFunc}
          maxW={["10em", "18em"]}
        />
        <Box display="flex" alignItems="center" gap="0.5em">
          <Select
            placeholder="Sort by price"
            maxW={{ base: "8em", md: "12em", lg: "16em", xl: "18em" }}
            onChange={handleSelect}
          >
            <option value="highest">Highest price</option>
            <option value="lowest">Lowest price</option>
          </Select>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="1em"
        marginY="1.5em"
        marginX={{ base: "auto" }}
      >
        {itemsState.length > 0
          ? itemsState.map((item) => (
              <Card
                imageURL={item.imageUrl}
                title={item.title}
                colors={item.colors}
                price={item.price}
                isDark={isDark}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            ))
          : ""}
      </Box>
    </Box>
  );
};

export default Main;
