import React, { useState, useRef, useEffect, useCallback } from "react";
import Tesseract from "tesseract.js";

const TesseractTestPage = () => {
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
      const numberOfLines = extractedText.split("\n").length;
      const newHeight = numberOfLines * 1.9 + "em"; // Adjust the multiplier as needed
      textareaRef.current.style.height = newHeight;
    }
  }, [extractedText]);

  useEffect(() => {
    updateTextareaHeight();
  }, [extractedText, updateTextareaHeight]);

  const handleCopyClick = () => {
    // Copy the content of the textarea to the clipboard
    navigator.clipboard.writeText(extractedText);
  };

  return (
    <div>
      <h1>Text Extraction with Tesseract.js</h1>

      {pastedImage && (
        <div>
          <h2>Pasted Image Preview:</h2>
          <img
            src={pastedImage}
            alt="Pasted"
            style={{
              maxWidth: "300px",
              maxHeight: "200px",
              border: "solid 1px",
              borderRadius: "8px",
            }}
          />
        </div>
      )}

      <textarea
        ref={textareaRef}
        style={{ width: "300px", padding: "5px", resize: "none" }}
        placeholder="Paste from Clipboard"
        onPaste={handlePaste}
        value={extractedText}
        spellCheck={false} // Disable spell check
      />

      {extractedText && (
        <div>
          <button onClick={handleCopyClick}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default TesseractTestPage;
