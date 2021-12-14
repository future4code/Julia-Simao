import { createTheme } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#0F62BB',
      },
      secondary: {
        main: '#41C1F0',
      },
    },
    components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: 'h2',
              h2: 'h2',
              h3: 'h2',
              h4: 'h2',
              h5: 'h2',
              h6: 'h2',
              subtitle1: 'h2',
              subtitle2: 'h2',
              body1: 'span',
              body2: 'span',
            },
          },
        },
      },
  });