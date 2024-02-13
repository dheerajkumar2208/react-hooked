import React, { useState, useEffect } from 'react';
import { Grid, IconButton, Popover, TextField, Typography, Button, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CsvFileUpload from './csvFileUpload';

const CustomTextField = ({ mode, keyName, label, value, onSave }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [localValue, setLocalValue] = useState(value || ''); // Use local state for changes
  // const [searchText, setSearchText] = useState('');
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
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
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
    setEditOpen(false); // Close the popover after saving
  };
  const handleDeleteClick = () => {
    if (onSave) {
      onSave('', keyName);
      setLocalValue('');
    }
    // setEditOpen(false); // Close the popover after saving
  };

  const handleSearchChange = (event) => {
    // setSearchText(event.target.value);
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
    <Grid
      container
      spacing={1}
      alignItems="center"
      sx={{
        border: '1px solid #8080805e',
        height: 50,
        backgroundColor: '#f0f0f0',
        paddingLeft: '12px',
        paddingRight: '12px',

      }}
    >
      <Grid item xs={9}>
        <Typography variant="body1">
          {`${label} (Max 100)`}
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: 'right' }}>
        {mode === 'create' && (
          <>
            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
            <CsvFileUpload onFileUpload={handleFileUpload} />
          </>
        )}
        {mode === 'modify' && (
          <>
            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon onClick={handleDeleteClick}/>
            </IconButton>
          </>
        )}
      </Grid>
      <Popover
        open={isEditOpen || isSearchOpen}
        anchorEl={document.body}
        onClose={isSearchOpen ? handleSearchClose : handleEditClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            padding: 3,
            borderRadius: '10px',
          }}
        >
          <Grid item xs={11}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={isSearchOpen ? handleSearchClose : handleEditClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            {isSearchOpen && (
              <>
              <TextField
                placeholder="Search..."
                variant="outlined"
                fullWidth
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearchClose}>
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ marginBottom: 2 }}
              />

              <div>{highlightedText}</div></>
            )}
              {isEditOpen && (
                <>
            <TextField
              multiline
              rows={15}
              name={keyName}
              value={localValue}
              onChange={handleTextAreaChange}
              placeholder="Enter text here"
              variant="standard"
              fullWidth
              sx={{
                border: 'none',
              }}
            />
           
          
              <Grid item xs={12} sx={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={handleSaveClick}>
                  Save
                </Button>
              </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Popover>
    </Grid>
  );
};

export default CustomTextField;