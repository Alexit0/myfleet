import { json, redirect } from "react-router-dom";
import toast from "react-hot-toast";

export async function deleteTruckAction({ params, request }) {
  const truckId = params.truckId;

  const method = request.method;

  const deletePromise = fetch("http://localhost:5000/trucks/" + truckId, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
  });

  toast.promise(deletePromise, {
    loading: "Deleting...",
    success: "Truck deleted successfully",
    error: "Error deleting truck",
  });

  try {
    const response = await deletePromise;

    if (!response.ok) {
      throw json(
        { message: "Could not delete truck." },
        {
          status: 500,
        }
      );
    }

    return redirect("/trucks"); // Redirect on successful deletion
  } catch (error) {
    console.error(error);
    // Handle other errors if needed
    throw error; // Re-throw the error if necessary
  }
}
