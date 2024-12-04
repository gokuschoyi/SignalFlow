import './App.css';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'
import { ColorModeContext, useMode } from './theme'
import { Box } from '@mui/material';

import Header from './components/Header';
import About from './components/About';
import DataInput from './components/DataInput';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="App">
          <Header />
          <DataInput />
          <About />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
