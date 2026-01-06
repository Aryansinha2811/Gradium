import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Students from "./components/Pages/Students";
import Client from "./components/Pages/Client";
import Gigs from "./components/Pages/Gigs";

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #0F0F0F 40%, #0F1C3B 100%)",
        }}
      />

      {/* Pages */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/gigs" element={<Gigs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
