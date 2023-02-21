import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
    
      {
        path: '/status',
        element: <Status />
      }
    ]
  }
]) 



//Rotas encadeadas é uma forma de se conseguir reaproveitar partes de interfaces(Layouts) entre varias paginas..
//children sao as rotas dentro de determinado layout