import Button from '@mui/material/Button';


function App() {
  return (

    <div className='title_container'>
      <div className='title'>Sierra Delivery LLC</div>
      <p>We help clients deliver and move equipment efficiently.</p>

      <div>
        <Button variant="contained" onClick={console.log('click event')}>Shop Equipment</Button>
      </div>
    </div>
  );
}

export default App;
