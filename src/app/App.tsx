import React from 'react';
import Layout from '../pages/Layout/Layout';
import { LocalizationProvider } from 'src/widgets/LocalizationSwitcher/LocalizationProvider';
import { ThemeProvider } from 'src/widgets/ThemeSwitcher/ThemeProvider';

function App() {
  return (
    <>
      <LocalizationProvider />
      <ThemeProvider>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
