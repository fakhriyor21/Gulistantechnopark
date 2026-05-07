import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddNews from "./AddNews";
import Messages from "./Messages";
import PrivateRoute from "../../PrivateRoute";

export default function AppAdmin() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="add-news"
          element={
            <PrivateRoute>
              <AddNews />
            </PrivateRoute>
          }
        />
        <Route
          path="messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
