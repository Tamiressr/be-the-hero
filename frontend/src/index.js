import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// renderiza a página adicionando o componente App dentro da div com id = root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

