import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={} />
      <Route path="/register" element={} />
      <Route path="/login" element={} />
      <Route path="/dashboard" element={} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
