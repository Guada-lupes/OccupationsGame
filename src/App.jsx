import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import LandingPage from "./pages/LandingPage";
import AllTribusPage from "./pages/AllTribusPage";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
  return (
    <>
      <PlayerProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/all_tribus" element={<AllTribusPage />} />
        </Routes>
      </PlayerProvider>
    </>
  );
}
export default App;
