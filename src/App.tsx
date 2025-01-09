import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VideoCustomizer from "./pages/VideoCustomizer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/video-customizer" element={<VideoCustomizer />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;