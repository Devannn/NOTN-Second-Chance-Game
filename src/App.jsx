import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Introduction from "./pages/Introduction/Introduction.jsx";
import Options from "./pages/Options/Options.jsx";
import Rules from "./pages/Rules/Rules.jsx";
import Game from "./pages/Game/Game.jsx";
import Winner from "./pages/Winner/Winner.jsx";
import Loser from "./pages/Loser/Loser.jsx";

function App() {
  return (
    <>
      <div className="app">
        
        {/* creating a custom route to the following page */}
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/rules" element={<Rules/>}/>
          <Route path="/options" element={<Options />} />
          <Route path="/game" element={<Game />} />
          <Route path="/winner" element={<Winner/>}/>
          <Route path="/loser" element={<Loser/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;