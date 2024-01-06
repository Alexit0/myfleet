import { redirect } from "react-router-dom";
import toast from "react-hot-toast";

export async function addTruckAction({ request, params }) {
  const data = await request.formData();

  const enteredData = {
    truckNumber: data.get("truckNumber").trim().toUpperCase(),
  };

  let url = "http://localhost:5000/trucks/";

  const savePromise = fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(enteredData),
  });

  toast.promise(savePromise, {
    loading: "Saving...",
    success: "Truck saved successfully!",
    error: "An error occurred while saving the truck.",
  });

  try {
    const response = await savePromise;

    if (response.status === 422) {
      // Handle validation error
      return response;
    }

    if (!response.ok) {
      throw new Error("Could not save truck");
    }

    // Redirect on successful save
    return redirect("/trucks");
  } catch (error) {
    // Log the error to the console
    console.error(error);
  }
}
