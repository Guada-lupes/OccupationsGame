import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WelcomePage from "./pages/WelcomePage";
import { PlayerProvider } from "./context/PlayerContext";
import Layout from "./pages/Layout";
import ScrollToTop from "../utils/ScrollToTop";

const AllTribusPage = lazy(() => import("./pages/AllTribusPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const TribuCard = lazy(() =>
  import("./components/TribuCard").then((module) => ({
    default: module.TribuCard,
  }))
);
const PlayerPage = lazy(() => import("./pages/PlayerPage"));
const GameCompletePage = lazy(() => import("./pages/GameCompletePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <>
      <PlayerProvider>
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<div>Cargando</div>}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/all_tribus" element={<AllTribusPage />} />
              <Route path="/:id" element={<TribuCard />} />
              <Route path="/player" element={<PlayerPage />} />
              <Route path="/finished" element={<GameCompletePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </PlayerProvider>
    </>
  );
}
export default App;
