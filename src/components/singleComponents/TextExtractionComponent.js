import React, { useState, useRef, useEffect, useCallback } from "react";
import Tesseract from "tesseract.js";

const TextExtractionComponent = ({ index, handleInput, name, title }) => {
  const [extractedText, setExtractedText] = useState("");
  const [pastedImage, setPastedImage] = useState(null);
  const textareaRef = useRef(null);

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;

    if (clipboardData) {
      const items = clipboardData.items;

      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];

          if (item.type.indexOf("image") !== -1) {
            const blob = item.getAsFile();
            const file = new File([blob], "pasted-image.png", {
              type: "image/png",
            });

            setPastedImage(URL.createObjectURL(file)); // Set the image for preview
            processImage(file);
            e.preventDefault();
            break;
          }
        }
      }
    }
  };

  const processImage = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;

      Tesseract.recognize(
        image,
        "eng" // language code, e.g., 'eng' for English
      ).then(({ data: { text } }) => {
        setExtractedText(text);
        updateTextareaHeight();
      });
    };

    reader.readAsDataURL(file);
  };

  const updateTextareaHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset to auto height
      const newHeight = textareaRef.current.scrollHeight + "px";
      textareaRef.current.style.height = newHeight;
    }
  }, []);

  useEffect(() => {
    updateTextareaHeight();
  }, [extractedText, updateTextareaHeight]);

  const handleTextareaChange = (event) => {
    // Update the extractedText state when the user edits the textarea
    setExtractedText(event.target.value);
    updateTextareaHeight();
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };

  return (
    <div>
      <label>{title}</label>
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

      <textarea
        name={name}
        ref={textareaRef}
        style={{ width: "170px", padding: "5px", resize: "none" }}
        placeholder="Paste from Clipboard"
        onPaste={handlePaste}
        value={extractedText}
        spellCheck={false} // Disable spell check
        onChange={handleTextareaChange} // Handle textarea changes
        readOnly={false} // Make textarea editable
      />
    </div>
  );
};

export default TextExtractionComponent;
