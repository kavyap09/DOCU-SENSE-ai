import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import DomainSelection from "./pages/DomainSelection";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import Documents from "./pages/Documents";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Landing />} />

        <Route path="/auth" element={<Auth />} />

        <Route
          path="/domain-selection"
          element={<DomainSelection />}
        />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          
          <Route index element={<Dashboard />} />

          <Route path="upload" element={<UploadPage />} />

          <Route path="documents" element={<Documents />} />

          <Route path="analytics" element={<Analytics />} />

          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;