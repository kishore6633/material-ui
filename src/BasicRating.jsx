import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <>
    <Button variant="outlined" color="error" onClick={handleClick} startIcon={<DeleteIcon />}>
     click me!
    </Button>
    </>
  );
}
