import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* ✅ Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ✅ Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/donar-list" element={<DonarList />} />
          <Route path="/hospital-list" element={<HospitalList />} />
          <Route path="/org-list" element={<OrgList />} />
          <Route path="/hospital" element={<Hospitals />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/organization" element={<OrganisationPage />} />
          <Route path="/donar" element={<Donar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
