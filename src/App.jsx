import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LandingPage from "./pages/LandingPage";
import AllTribusPage from "./pages/AllTribusPage";
import { PlayerProvider } from "./context/PlayerContext";
import TribuCard from "./components/TribuCard";
import PlayerPage from "./pages/PlayerPage";
import Layout from "./pages/Layout";
import ScrollToTop from "../utils/ScrollToTop";
import GameCompletePage from "./pages/GameCompletePage";

function App() {
  return (
    <>
      <PlayerProvider>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/all_tribus" element={<AllTribusPage />} />
            <Route path="/:id" element={<TribuCard />} />
            <Route path="/player" element={<PlayerPage />} />
            <Route path="/finished" element={<GameCompletePage/>}/>
          </Routes>
        </Layout>
      </PlayerProvider>
    </>
  );
}
export default App;
