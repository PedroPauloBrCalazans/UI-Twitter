import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)

//forEach / map => ambos percorre o array, porém o forEach não tem retorno sempre que o forEach e executar dentro de um array, nao consigo retornar nada desta operação. O MAP já assina toda a operação...
// quando se usa RouterProvider estou basicamente dando acesso a todas as funcionalidades que estão dentro do RouterProvider,