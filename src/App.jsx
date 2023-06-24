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
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "transactions",
    element: (
      <PrivateRoute>
        <Transactions />
      </PrivateRoute>
    ),
  },
  {
    path: "farmers",
    element: (
      <PrivateRoute>
        <Farmers />
      </PrivateRoute>
    ),
  },
  {
    path: "mediators",
    element: (
      <PrivateRoute>
        <Mediators />
      </PrivateRoute>
    ),
  },
  {
    path: "kebeles",
    element: (
      <PrivateRoute>
        <Kebeles />
      </PrivateRoute>
    ),
  },
  {
    path: "crops",
    element: (
      <PrivateRoute>
        <Crops />
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
