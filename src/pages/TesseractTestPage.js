import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TesseractTestPage = () => {
    const [extractedText, setExtractedText] = useState('');

    const handlePaste = (e) => {
      const clipboardData = e.clipboardData || window.clipboardData;
  
      if (clipboardData) {
        const items = clipboardData.items;
  
        if (items) {
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
  
            if (item.type.indexOf('image') !== -1) {
              const blob = item.getAsFile();
              const file = new File([blob], 'pasted-image.png', { type: 'image/png' });
  
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
          'eng', // language code, e.g., 'eng' for English
        ).then(({ data: { text } }) => {
          setExtractedText(text);
        });
      };
  
      reader.readAsDataURL(file);
    };
  
    return (
      <div>
        <h1>Text Extraction with Tesseract.js</h1>
  
        <input
          type="text"
          placeholder="Paste from Clipboard or type here"
          style={{ width: '300px', padding: '5px' }}
          onPaste={handlePaste}
        />
  
        {extractedText && (
          <div>
            <h2>Extracted Text:</h2>
            <p>{extractedText}</p>
          </div>
        )}
      </div>
    );
  };

export default TesseractTestPage;
