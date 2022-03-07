import React from "react";
import { homeObjSeven, homeObjEight} from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjSeven} />
      <InfoSection {...homeObjEight} />
    </>
  );
};

export default Home;