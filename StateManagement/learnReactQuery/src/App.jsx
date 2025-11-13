import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";
import MainLayout from "./MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);
/* 
If we use contextAPI then we wrap our root component with the Provider similarly for using React Query we have to warp with
ReactClientProvider and pass one props named as client with the value queryClient which is an instance
*/
const App = () => {
  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={appRouter}></RouterProvider>;
    </QueryClientProvider>
  );
};

export default App;
