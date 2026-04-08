import AboutPage from "./AboutPage";
import Header from "./header";
import HeroSectionContent from "./HeroSectionContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="border border-red-500 bg-black5 min-h-dvh overflow-hidden">
                <Header
                  BgColor="bg-black75"
                  TextColor="text-black5"
                  logoColor="text-black100"
                />
                <HeroSectionContent />
              </div>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
