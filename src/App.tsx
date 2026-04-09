import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Partials/Navbar";
import Footer from "./components/Partials/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";
import MobileMenu from "./components/Partials/MobileMenu";
import Industries from "./pages/Industries";
import NotFound from "./pages/NotFound";
import ProjectInfo from "./pages/ProjectInfo";
import Login from "./pages/admin/Login";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./pages/admin/Dashboard";
import AddNews from "./pages/admin/AddNews";
import NewsInfo from "./pages/NewsInfo";
import PrivateRoute from "./PrivateRoute";
import Innoweek from "./pages/Innoweek";

function isLikelySlowNetwork(): boolean {
  const nav = navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  };
  const c = nav.connection;
  if (!c) return false;
  if (c.saveData) return true;
  const t = c.effectiveType ?? "";
  return t === "slow-2g" || t === "2g" || t === "3g";
}

function PageTransitionLoader() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const initialLoadFinished = useRef(false);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const minDisplayMs = 550;
    const started = performance.now();

    const finishInitial = () => {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, minDisplayMs - elapsed);
      window.setTimeout(() => {
        initialLoadFinished.current = true;
        setIsVisible(false);
      }, wait);
    };

    if (document.readyState === "complete") {
      finishInitial();
    } else {
      window.addEventListener("load", finishInitial, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishInitial);
    };
  }, []);

  useEffect(() => {
    if (!initialLoadFinished.current) {
      prevPathRef.current = location.pathname;
      return;
    }

    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;

    if (!isLikelySlowNetwork()) return;

    setIsVisible(true);
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(38,96,189,0.3),_rgba(8,18,38,0.92)_58%)] backdrop-blur-[3px]">
      <div className="flex w-[300px] flex-col items-center gap-5 rounded-3xl border border-white/15 bg-white/[0.06] p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="relative h-20 w-20">
          <span className="absolute inset-0 rounded-full border border-[#8ec5ff]/50" />
          <span className="absolute inset-2 rounded-full border border-[#4ea1ff]/60" />
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#8ed1ff] shadow-[0_0_14px_#8ed1ff] animate-spin" />
          <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#5ba8ff] shadow-[0_0_10px_#5ba8ff] animate-[spin_1.4s_linear_infinite_reverse]" />
          <span className="absolute inset-[30%] rounded-full bg-gradient-to-br from-[#8fd1ff] to-[#3c79ff] shadow-[0_0_24px_rgba(103,170,255,0.8)]" />
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#93cdff] animate-bounce" />
          <span className="h-2 w-2 rounded-full bg-[#6fb8ff] animate-bounce [animation-delay:0.15s]" />
          <span className="h-2 w-2 rounded-full bg-[#4b9dff] animate-bounce [animation-delay:0.3s]" />
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <span className="block h-full w-1/3 animate-[pulse_0.9s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#4d8dff] via-[#7ec4ff] to-[#4d8dff]" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <PageTransitionLoader />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/innoweek" element={<Innoweek />} />
                <Route
                  path="/services/industries/:id"
                  element={<Industries />}
                />
                <Route path="/projects/:id" element={<ProjectInfo />} />
                <Route path="/news/:id" element={<NewsInfo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <MobileMenu />
              <Footer />
            </>
          }
        />

        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-news"
          element={
            <PrivateRoute>
              <AddNews />
            </PrivateRoute>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
