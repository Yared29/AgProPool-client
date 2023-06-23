import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Farmers from "./pages/Farmers";
import Mediators from "./pages/Mediators";
import Kebeles from "./pages/Kebeles";
import Crops from "./pages/Crops";

const routes = [
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "transactions",
    element: <Transactions />,
  },
  {
    path: "farmers",
    element: <Farmers />,
  },
  {
    path: "mediators",
    element: <Mediators />,
  },
  {
    path: "kebeles",
    element: <Kebeles />,
  },
  {
    path: "crops",
    element: <Crops />,
  },
];
function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
