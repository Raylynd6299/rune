import { Landing } from "@/screens/Landing";
import { Login } from "@/screens/Auth/Login";
import { Register } from "@/screens/Auth/Register";
import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};
