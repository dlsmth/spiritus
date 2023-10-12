import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';

// const theme = createTheme({
//   palette: {
//     background: {
//       paper: '#fff',
//     },
//     text: {
//       primary: '#173A5E',
//       secondary: '#46505A',
//     },
//     action: {
//       active: '#001E3C',
//     },
//     success: {
//       dark: '#009688',
//     },
//   },
// });


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
