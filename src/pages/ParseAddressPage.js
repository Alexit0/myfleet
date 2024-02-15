import React, { useState } from 'react';

const ParseAddressPage = () => {
  const [inputAddress, setInputAddress] = useState('');
  const [parsedAddress, setParsedAddress] = useState(null);

  const handleAddressParse = () => {
    // Regular expression to match the expected format
    const match = inputAddress.match(/^(.*?)\s+(\S.*\d)\s+(\S+)\s+(\S.*)$/);

    if (match) {
      const [, company, address, postCode, city] = match;
      setParsedAddress({
        company,
        address,
        postCode,
        city,
      });
    } else {
      setParsedAddress(null);
      console.error('Invalid address format. Unable to parse the address.');
    }
  };

  return (
    <div>
      <h1>Address Parser</h1>

      <textarea
        placeholder="Enter address here"
        rows="4"
        cols="50"
        value={inputAddress}
        onChange={(e) => setInputAddress(e.target.value)}
      />

      <button onClick={handleAddressParse}>Parse Address</button>

      {parsedAddress && (
        <div>
          <h2>Parsed Address:</h2>
          <p>
            <strong>Company Name:</strong> {parsedAddress.company}
          </p>
          <p>
            <strong>Address:</strong> {parsedAddress.address}
          </p>
          <p>
            <strong>Post Code:</strong> {parsedAddress.postCode}
          </p>
          <p>
            <strong>City:</strong> {parsedAddress.city}
          </p>
        </div>
      )}
    </div>
  );
};

export default ParseAddressPage;
