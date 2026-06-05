import { BrowserRouter } from "react-router-dom";
import { AnimatedBackground } from "./components/ui/AnimatedBackground";
import { CursorDot } from "./components/ui/CursorDot";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { AppRouter } from "./routes/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <CursorDot />
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
