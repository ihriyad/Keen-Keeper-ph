import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/home";
import Error from "../error/Error";
import TimeLine from "../Pages/timeline/TimeLine";
import Stats from "../Pages/stats/Stats";
import CardDetails from "../Pages/card details/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/timeline",
        Component: TimeLine,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "/home/:id",
        Component: CardDetails,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
