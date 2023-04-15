import React from 'react'
import Button from '@mui/material/Button';

const ReusableButton = () => {
  const buttonStyles = {
    fontSize: 20,
    fontWeight: 500,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '40%',
    width: '100px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }

  return (
    <Button variant="outlined" href="#outlined-buttons" sx={buttonStyles}>
      Link
    </Button>
  )
}

export default ReusableButton