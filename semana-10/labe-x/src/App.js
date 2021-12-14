import { Router } from './Route/Router'
import { ThemeProvider } from '@mui/material/'
import { theme } from './Theme/Theme'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createGlobalStyle } from 'styled-components'
import { CssBaseline } from '@mui/material/'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }
`

function App() {
  return (
    <div>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router />
      </ThemeProvider>
      </div>
  );
}

export default App;
