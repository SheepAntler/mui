import { createTheme } from '@mui/material/styles';
import { cyan, pink } from '@mui/material/colors';

const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'capitalize',
          borderRadius: 8.5,
          '&.MuiButton-contained': {
              backgroundColor: cyan[900],
              '&:hover': {
                  backgroundColor: cyan[800]
              },
          },
          '&.MuiButton-outlined': {
              color: "#fff",
              borderColor: '#fff',
              '&:hover': {
                  backgroundColor: 'transparent'
              },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: pink[900] 
    },
    secondary: {
      main: cyan[900]
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: [4, 8, 12, 16, 20],
});

// dashboardTheme.spacing(20);

export default dashboardTheme;