import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { ReactDOM } from "react-dom/client";
import cardData from "./cardData";
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="albums" element={<Albums />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
