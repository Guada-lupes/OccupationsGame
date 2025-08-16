import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import LandingPage from "./pages/LandingPage";
import AllTribusPage from "./pages/AllTribusPage";
import { PlayerProvider } from "./context/PlayerContext";
import TribuCard from "./components/TribuCard";
import PlayerPage from "./pages/PlayerPage";


function App() {
  return (
    <>
      <PlayerProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/all_tribus" element={<AllTribusPage />} />
          <Route path="/:id" element={<TribuCard/>}/>
          <Route path="/player" element={<PlayerPage/>}/>
        </Routes>
      </PlayerProvider>
    </>
  );
}
export default App;
