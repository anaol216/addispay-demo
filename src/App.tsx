import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 

// Import all page components
import Pages from "./pages/pages"; 
import ApiIntegrationPage from "./pages/integration/Api";
import HostedIntegrationPage from "./pages/integration/Hosted";
import OverviewGuide from "./pages/learn/Overview";
import AdditionalResources from "./pages/learn/AdditionalResources";
import Search from "./pages/Search";


export default function App() {
  return (
    console.log("App rendred"),
    <Router>
      <Routes> 
        
        {/* Parent Route: Applies the persistent Header/Sidebar/Footer layout */}
        <Route path="/" element={<Layout />}>

          {/* Child Routes render inside the <Outlet /> */}
          <Route index element={<Pages />} /> 
          
          <Route path="integration/api" element={<ApiIntegrationPage />} />
          <Route path="integration/hosted" element={<HostedIntegrationPage />} /> 
          
          <Route path="learn/overview" element={<OverviewGuide />} />
          <Route path="learn/resources" element={<AdditionalResources />} />
          
          <Route path="search" element={<Search />} />
          
          {/* Catch-all for 404 */}
          <Route path="*" element={
              <div className="text-center pt-20">
                <h1 className="text-4xl text-red-500">404</h1>
                <p>Page Not Found</p>
              </div>
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
}