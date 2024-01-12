import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

export async function addTruckAction({ request, params }) {
  let loadingToast; // Define the loadingToast variable outside the try-catch block

  try {
    // Show loading toast
    loadingToast = toast.loading("Saving...");

    const data = await request.formData();
    const enteredData = {
      truckNumber: data.get("truckNumber").trim().toUpperCase(),
    };

    const url = "http://localhost:5000/trucks/";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(enteredData),
    });
    // Pass errors to render to New Truck component
    if (response.status === 400) {
      const errorData = await response.json();
      toast.error(`Error: An error occurred`);
      return errorData;
    }

    // Close loading toast and show success toast
    toast.success("Truck saved successfully!");
    // Redirect on success
    return redirect("/trucks");
  } catch (error) {
    // Log the error to the console
    console.error("Error in addTruckAction:", error.message);

    // Show error toast
    toast.error(`Error:"An error occurred"`);
  } finally {
    // Dismiss the loading toast regardless of success or failure
    toast.dismiss(loadingToast);
  }
}
