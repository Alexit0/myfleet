import React, { useRef, useEffect, useCallback } from "react";
import Tesseract from "tesseract.js";

const TextExtractionComponent = ({
  index,
  handleInput,
  handleImage,
  name,
  title,
  value,
  onChange,
  image, // Image URL received from the Redux store
}) => {
  const textareaRef = useRef(null);

  const handlePaste = async (e) => {
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

            // Update the Redux store with the image URL
            handleImage({ index, name, image: URL.createObjectURL(file) });

            // Process the image using Tesseract
            const text = await processImage(file);

            // Dispatch loadingInput action with the extracted text
            handleInput({ name, value: text, index });

            e.preventDefault();
            break;
          }
        }
      }
    }
  };

  const processImage = async (file) => {
    const {
      data: { text },
    } = await Tesseract.recognize(file, "eng");
    return text;
  };

  const updateTextareaHeight = useCallback(() => {
    if (textareaRef.current) {
      const newHeight = textareaRef.current.scrollHeight + "px";
      textareaRef.current.style.height = newHeight;
    }
  }, []);

  useEffect(() => {
    updateTextareaHeight();
  }, [value, updateTextareaHeight]);

  const handleTextareaChange = (event) => {
    onChange && onChange(event.target.value);
    handleInput({ name: event.target.name, value: event.target.value, index });
    updateTextareaHeight();
  };

  return (
    <div>
      <label>{title}</label>

      {/* Render the image if available in the Redux store */}
      {image && (
        <div>
          <img
            src={image}
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

      {/* Textarea for pasting and extracting text */}
      <textarea
        name={name}
        ref={textareaRef}
        style={{ width: "170px", padding: "5px", resize: "none" }}
        placeholder="Paste from Clipboard"
        onPaste={handlePaste}
        value={value}
        spellCheck={false}
        onChange={handleTextareaChange}
        readOnly={false}
      />
    </div>
  );
};

export default TextExtractionComponent;
