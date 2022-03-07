import React from "react";
import { homeObjNine, homeObjTen } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjNine} />
    </>
  );
};

export default Home;