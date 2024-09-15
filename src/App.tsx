import { RouterProvider } from "react-router-dom";
import { rootRoutes } from "./routes/routes";

export default function App() {
  return <RouterProvider router={rootRoutes} />;
}
