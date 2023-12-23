import { json } from "react-router-dom";

export async function trucksLoader() {
  const response = await fetch("http://localhost:5000/trucks");

  if (!response.ok) {
    throw json(
      {
        message: "Sorry.. Couldn't not fetch trucks from database.",
      },
      { status: 500 }
    );
  } else {
    return response;
  }
}
