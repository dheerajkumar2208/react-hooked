import React from 'react';
// import { IconButton } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CsvFileUpload = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        let fileContent = event.target.result;

        // fileContent = fileContent.replace(/,\s*\r?\n/g, '');

        fileContent = fileContent.replace(/\r\n/g, ',');
        console.log('File content:', fileContent);

        onFileUpload(fileContent);
        // Reset the input value to allow selecting the same file again
        fileInput.value = '';
      };

      reader.readAsText(file);
    }
  };

  return (
    <span>
      <input
        type="file"
        accept=".csv"
        id="csv-file-input"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="csv-file-input">
        {/* <IconButton component="span">
          <CloudUploadIcon />
        </IconButton> */}
      </label>
    </span>
  );
};

export default CsvFileUpload;