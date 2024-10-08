import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Layouts/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AllArtCraft from "../pages/AllArt&Craft/AllArtCraft";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ItemDetails from "../components/ItemDetails/ItemDetails";
import Update from "../pages/MyArtCraftList/Update";
import PrivateRouter from "./PrivateRouter";
import NewAdd from "../components/NewAdd";
import DetailsOfCeraAndPot from "../components/DetailsOfCeraAndPot/DetailsOfCeraAndPot";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/allArt&Craft",
          element: <AllArtCraft/>,
          loader: () => fetch('https://assignment-10-server-gamma-nine.vercel.app/allCraftItems')
        },
        {
          path: "/addCraft",
          element: <PrivateRouter>
            <AddCraft/>
          </PrivateRouter>
        },
        {
          path: "/myArt&Craft",
          element: <PrivateRouter>
            <MyArtCraftList/>
          </PrivateRouter>
        },
        {
          path: "/itemDetails/:id",
          element: <PrivateRouter>
            <ItemDetails/>
          </PrivateRouter>,
          loader: ({params}) => fetch(`https://assignment-10-server-gamma-nine.vercel.app/allCraftItems/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <PrivateRouter>
            <Update/>
          </PrivateRouter>,
          loader: ({params}) => fetch(`https://assignment-10-server-gamma-nine.vercel.app/allCraftItems/${params.id}`)
        },
        {
          path: "/newAdd",
          element: <NewAdd/>
        },
        {
          path: "/ceramicsAndPottery/:id",
          element:<DetailsOfCeraAndPot/>,
          loader: ({params}) => fetch(`https://assignment-10-server-gamma-nine.vercel.app/ceramicsAndPottery/${params.id}`)
        }
        
      ],
    },
  ]);