import React from 'react'
import Button from '@mui/material/Button';

const ReusableButton = () => {
  const buttonStyles = {
    fontSize: 20,
    fontWeight: 400,
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }

  return (
    <Button size="large" variant="contained" sx={buttonStyles}>
      Equipment
    </Button>
  )
}

export default ReusableButton