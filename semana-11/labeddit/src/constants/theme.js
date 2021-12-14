import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secundaryColor, neutralColor } from '../constants/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#ffffff'
  },
  text: {
      primary: neutralColor
  }
}
});

export default theme