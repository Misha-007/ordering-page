import Navigation from "./Navigation.js";
import Hero from "./Hero.js";
import Mask from "./Mask.js";
import Phone from "./Phone.js";
import Footer from "./Footer.js";
import Info from "./Info.js";
import { useState } from "react";
import { productsArray } from "../productsStore.js";
const Home = () => {
  const phones = productsArray.slice(0, 4);
  const phones2 = productsArray.slice(4, 9);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [info, setInfo] = useState({
    id: 9,
    name: "Galaxy A53 5G",
    price: 23490,
    src: "https://images.samsung.com/is/image/samsung/assets/ph/pcd/smartphones/galaxy-a/mx-pcd-galaxy-a53-5g-pc.png?$FB_TYPE_J_S_PNG$",
    text: "Get free ITFIT IPX7 waterproof Bluetooth speaker when you buy the new Galaxy A53 5G. Exclusive and awesome deals await when you buy today. Get yours now! Free Delivery. 24/7 Customer Support. Flexible Payment Terms.",
  });
  const selected = (id) => {
    const select = productsArray.find((x) => x.id === id);
    setInfo(select);
  };
  return (
    <div>
      <Navigation />
      <Hero />
      <Mask
        h1="The latest gift, greatest love"
        h5="Gift the latest Galaxy and fill them with joy."
      />
      <Phone phones={phones} handleClick={handleShow} handleInfo={selected} />
      <Info show={show} onHide={handleClose} info={info} />
      <Mask
        h1="The right gift, right price"
        h5="Find just the right gift for your budget"
      ></Mask>
      <Phone phones={phones2} handleClick={handleShow} handleInfo={selected} />
      <Footer />
    </div>
  );
};

export default Home;
