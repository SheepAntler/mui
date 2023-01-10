import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import { pink } from '@mui/material/colors';
import UpcomingAlarm from '../../components/Upcoming/UpcomingAlarm';
import BasicMenu from '../../components/common/BasicMenu/BasicMenu';

const Breakfast = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpen(false);
  }

  const breakfastButtonOverrideStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
      backgroundColor: pink[900],
      '&:hover': {
          backgroundColor: pink[800]
      },
    },
    '&.MuiButton-outlined': {
      color: "#fff",
      borderColor: '#fff',
      '&:hover': {
          backgroundColor: 'transparent'
      },
    },
  };

  const upcomingBreakfastCount = 4;

  return (
    <Grid item xs={8}>
      <CommonButton
        size='large'
        variant='contained'
      >
        Breakfast Button!
      </CommonButton>
      <CommonButton
        variant="outlined"
      >
        Add breakfast location
      </CommonButton>
      <CommonButton
        size='large'
        variant='contained'
        sx={breakfastButtonOverrideStyles}
      >
        Override Button
      </CommonButton>
      <UpcomingAlarm 
        anchorEl={anchorEl}
        badgeContent={upcomingBreakfastCount}
        iconColor='primary'
        tooltipTitle='Upcoming breakfasts'
        onClick={(e) => handleOpen(e)}
      />
      <BasicMenu 
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </Grid>
  )
}

export default Breakfast;