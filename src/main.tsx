import React from 'react';
import ReactDOM from 'react-dom/client';

import { Sidebar } from './components/Sidebar';

import './global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

        <div className="content">

        <RouterProvider router={router} />
          
        </div>
    </div>
  </React.StrictMode>
)

//forEach / map => ambos percorre o array, porém o forEach não tem retorno sempre que o forEach e executar dentro de um array, nao consigo retornar nada desta operação. O MAP já assina toda a operação...