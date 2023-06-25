import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Farmers from "./pages/Farmers";
import Mediators from "./pages/Mediators";
import Kebeles from "./pages/Kebeles";
import Crops from "./pages/Crops";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import AddFarmerPage from "./pages/AddFarmerPage";
import AddTransactionPage from "./pages/AddTransactionPage";
import AddMediatorPage from "./pages/AddMediatorPage";
import Admins from "./pages/Admins";
import FarmerAgents from "./pages/FarmerAgents";
import AddFarmerAgentPage from "./pages/AddFarmerAgentPage";
import AddAdminPage from "./pages/AddAdminPage";

const routes = [
  {
    path: "signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "transactions",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <Transactions />
      </PrivateRoute>
    ),
  },
  {
    path: "farmers",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <Farmers />
      </PrivateRoute>
    ),
  },
  {
    path: "mediators",
    element: (
      <PrivateRoute accessRole={["super_admin", "admin", "farmer_agent"]}>
        <Mediators />
      </PrivateRoute>
    ),
  },
  {
    path: "kebeles",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <Kebeles />
      </PrivateRoute>
    ),
  },
  {
    path: "crops",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <Crops />
      </PrivateRoute>
    ),
  },
  {
    path: "add-transaction",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <AddTransactionPage />
      </PrivateRoute>
    ),
  },
  {
    path: "add-farmer",
    element: (
      <PrivateRoute
        accessRole={["super_admin", "admin", "farmer_agent", "mediator"]}>
        <AddFarmerPage />
      </PrivateRoute>
    ),
  },
  {
    path: "add-mediator",
    element: (
      <PrivateRoute accessRole={["super_admin", "admin", "farmer_agent"]}>
        <AddMediatorPage />
      </PrivateRoute>
    ),
  },
  {
    path: "farmer-agents",
    element: (
      <PrivateRoute accessRole={["super_admin", "admin"]}>
        <FarmerAgents />
      </PrivateRoute>
    ),
  },
  {
    path: "add-farmer-agent",
    element: (
      <PrivateRoute accessRole={["super_admin", "admin"]}>
        <AddFarmerAgentPage />
      </PrivateRoute>
    ),
  },
  {
    path: "admins",
    element: (
      <PrivateRoute accessRole={["super_admin"]}>
        <Admins />
      </PrivateRoute>
    ),
  },
  {
    path: "add-admin",
    element: (
      <PrivateRoute accessRole={["super_admin"]}>
        <AddAdminPage />
      </PrivateRoute>
    ),
  },
];

function App() {
  return (
    <div className='App'>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path='*' element={<Navigate replace to='/dashboard' />} />
      </Routes>
    </div>
  );
}

export default App;
