import { Route, Routes } from "react-router-dom";
import Login from "./Login";

export default function AppAdmin() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Login />} />
      </Routes>
    </div>
  );
}
