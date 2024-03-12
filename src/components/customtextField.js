import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import CsvFileUpload from './csvFileUpload';
import Button from "./Button";
const CustomTextField = ({ mode, keyName, label, value, onSave }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [localValue, setLocalValue] = useState(value || ''); // Use local state for changes
  const [highlightedText, setHighlightedText] = useState(value || '');

  useEffect(() => {
    setLocalValue(value || '');
    setHighlightedText(value || '');
  }, [value]);

  const handleFileUpload = (file) => {
    if (onSave) {
      onSave(file, keyName);
      setLocalValue('');
    }
  };

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleTextAreaChange = (event) => {
    let newValue = event.target.value;
    let replacedValue = newValue.replace(/(\r\n|\n|\r)/gm, ",");
    setLocalValue(replacedValue);
  };

  const handleSaveClick = () => {
    if (onSave) {
      onSave(localValue, keyName);
      setLocalValue('');
    }
    setModalOpen(false); // Close the modal after saving
  };

  const handleDeleteClick = () => {
    if (onSave) {
      onSave('', keyName);
      setLocalValue('');
    }
  };

  const handleSearchChange = (event) => {
    highlightText(event.target.value);
  };

  const highlightText = (searchText) => {
    if (!searchText) {
      setHighlightedText(localValue);
      return;
    }

    const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
    const parts = localValue.split(new RegExp(`(${escapedSearchText})`, 'gi'));

    setHighlightedText(
      parts.map((part, index) =>
        part.toLowerCase() === searchText.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: 'yellow' }}>
            {part}
          </span>
        ) : (
          part
        )
      )
    );
  };

  return (
    <div className='form-upload-files'>
      <span>
        <h6>{`${label} (Max 100)`}</h6>
      </span>
      <div>
        {mode === 'create' && (
          <>
            <button className='icon-button' onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} /> 
            </button>
            <CsvFileUpload onFileUpload={handleFileUpload} />
          </>
        )}
        {mode === 'modify' && (
          <>
            <button className='icon-button' onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} /> 
            </button>
            <button className='icon-button' onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faTrashAlt} /> 
            </button>
            <button className='icon-button' onClick={handleSearchChange}>
              <FontAwesomeIcon icon={faSearch} /> 
            </button>
          </>
        )}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className='modal-heading-layout'>
            <h6 className='heading'>{label}</h6>
            <button className='icon-button' onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} /> 
            </button>
            
              
            </span>
            
            <div>
              <textarea
                rows={15}
                name={keyName}
                value={localValue}
                onChange={handleTextAreaChange}
                placeholder="Enter text here"
              />
              <div>
                <Button
            variant="primary"
            
            onClick={handleSaveClick}
          >
            Save
          </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTextField;
