import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import { DesignHome } from "./pages/design/DesignHome";
import { AIDevelopementServices } from "./pages/services/AIDevelopementServices";
import { DataServices } from "./pages/services/DataServices";
import { DesignLayout } from "./componants/layout/DesignLayout";
import { DashboardLayout } from "./componants/layout/DashboardLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/design" element={<DesignLayout />}>
        <Route index element={<DesignHome />} />
      </Route>

      <Route path="/" element={<DashboardLayout/>}>
        <Route path="ai-service" element={<AIDevelopementServices />} />
        <Route path="data-service" element={<DataServices />} />
      </Route>
    </Routes>
  );
}

export default App;
