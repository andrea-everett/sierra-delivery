import React from 'react'
import Button from '@mui/material/Button';

const ReusableButton = () => {
  const buttonStyles = {
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '12px',
    width: '400px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }

  return (
    <Button variant="outlined" href="#outlined-buttons" sx={buttonStyles}>
      VIEW ALL EQUIPMENT
    </Button>
  )
}

export default ReusableButton