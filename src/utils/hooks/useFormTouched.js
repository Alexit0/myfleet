import { useEffect, useState, useCallback } from "react";

export function useFormTouched() {
  const [formTouched, setFormTouched] = useState(false);

  const handleFormChange = useCallback(() => {
    if (!formTouched) {
      setFormTouched(true);
    }
  }, [formTouched]);

  useEffect(() => {
    const formElements = document.querySelectorAll(
      "form input:not([type=button]), form textarea, form select"
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
  }, [handleFormChange]);

  return { formTouched, setFormTouched };
}
