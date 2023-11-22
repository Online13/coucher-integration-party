import { Fragment } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
