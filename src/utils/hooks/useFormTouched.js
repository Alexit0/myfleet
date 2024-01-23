// useFormTouched.js
import { useEffect, useState } from "react";

export function useFormTouched() {
  const [formTouched, setFormTouched] = useState(false);

  useEffect(() => {
    const handleFormChange = () => {
      if (!formTouched) {
        setFormTouched(true);
      }
    };

    const formElements = document.querySelectorAll(
      "form input, form textarea, form select"
    );

    const handleInput = () => {
      handleFormChange();
    };

    formElements.forEach((element) => {
      element.addEventListener("input", handleInput);
    });

    return () => {
      formElements.forEach((element) => {
        element.removeEventListener("input", handleInput);
      });
    };
  }, [formTouched]);

  return { formTouched, setFormTouched };
}
