import React from "react";
import { homeObjFour, homeObjSix } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjSix} />
    </>
  );
};

export default Home;