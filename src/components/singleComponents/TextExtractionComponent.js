import React, { useRef, useEffect, useCallback, useState } from "react";
import Tesseract from "tesseract.js";

const TextExtractionComponent = ({
  index,
  handleInput,
  name,
  title,
  value, // prop for the current value
  onChange, // prop for the change event
}) => {
  // State to store the pasted image file
  const [pastedImage, setPastedImage] = useState(null);

  // Reference to the textarea element
  const textareaRef = useRef(null);

  // Function to handle paste events and extract image data
  const handlePaste = (e) => {
    // Access clipboard data from the event
    const clipboardData = e.clipboardData || window.clipboardData;

    // Check if clipboard data is available
    if (clipboardData) {
      const items = clipboardData.items;

      // Check if there are items in the clipboard
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];

          // Check if the item is an image
          if (item.type.indexOf("image") !== -1) {
            // Create a Blob from the clipboard image data
            const blob = item.getAsFile();
            const file = new File([blob], "pasted-image.png", {
              type: "image/png",
            });

            // Set the pastedImage state with the URL of the Blob
            setPastedImage(URL.createObjectURL(file));

            // Process the image using Tesseract
            processImage(file);

            e.preventDefault();

            // Exit the loop
            break;
          }
        }
      }
    }
  };

  // Function to process the image using Tesseract
  const processImage = (file) => {
    // Use Tesseract to recognize text from the image
    Tesseract.recognize(file, "eng").then(({ data: { text } }) => {
      // Dispatch loadingInput action immediately after extracting text
      handleInput({
        name: name,
        value: text,
        index,
      });

      // Update the textarea height based on the content
      updateTextareaHeight();
    });
  };

  // Function to update the textarea height based on content
  const updateTextareaHeight = useCallback(() => {
    // Check if the textareaRef is available
    if (textareaRef.current) {
      // Reset the textarea height to auto
      textareaRef.current.style.height = "auto";

      // Set the new height based on the scrollHeight
      const newHeight = textareaRef.current.scrollHeight + "px";
      textareaRef.current.style.height = newHeight;
    }
  }, []);

  // Effect hook to update textarea height when value changes
  useEffect(() => {
    updateTextareaHeight();
  }, [value, updateTextareaHeight]);

  const handleTextareaChange = (event) => {
    // Call the provided onChange prop with updated textarea value
    onChange && onChange(event.target.value);

    // Dispatch loadingInput action immediately after extracting text
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });

    updateTextareaHeight();
  };

  // JSX structure for the TextExtractionComponent
  return (
    <div>
      {/* Label for the textarea */}
      <label>{title}</label>

      {/* Display the pasted image if available */}
      {pastedImage && (
        <div>
          <img
            src={pastedImage}
            alt="Pasted"
            style={{
              maxWidth: "170px",
              maxHeight: "200px",
              border: "solid 1px",
              borderRadius: "8px",
            }}
          />
        </div>
      )}

      {/* Textarea for pasting content from the clipboard */}
      <textarea
        name={name}
        ref={textareaRef}
        style={{ width: "170px", padding: "5px", resize: "none" }}
        placeholder="Paste from Clipboard"
        onPaste={handlePaste}
        value={value}
        spellCheck={false} // Disable spell check
        onChange={handleTextareaChange} // Handle textarea changes
        readOnly={false} // Make textarea editable
      />
    </div>
  );
};

// Export the TextExtractionComponent
export default TextExtractionComponent;
