import React from "react";
import TruckMap from "../components/singleComponents/TruckMap";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useLoaderData();

  // Check if data is available before rendering the map
  if (!data) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or message
  }

  return (
    <div id="mapid" style={{margin: '0px 1%'}}>
      <TruckMap data={data} />
    </div>
  );
};

export default HomePage;
