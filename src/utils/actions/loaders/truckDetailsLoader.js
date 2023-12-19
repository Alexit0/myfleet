import { json } from "react-router-dom";

export async function truckDetailsLoader({ params }) {
    const response = await fetch(
      `http://localhost:5000/trucks/${params.truckId}`
    );
  
    if (!response.ok) {
      throw json(
        {
          message: "Oops.. Couldn't not fetch this truck from database...",
        },
        { status: 500 }
      );
    } else {
      return response;
    }
  }
  