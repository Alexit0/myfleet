import React from "react";

import {
  Link,
  useLoaderData,
  useParams,
} from "react-router-dom";

function TruckDetailsPage() {
  const params = useParams();
  
  return (
    <React.Fragment>
      <h3>Truck details:</h3>
      <h1>{params.truckId}</h1>
      <Link to="/trucks">back to the list</Link>
    </React.Fragment>
  );
}

export default TruckDetailsPage;
