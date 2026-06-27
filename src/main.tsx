import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App";
import { KVKK, GizlilikPolitikasi, CerezPolitikasi, KullanimKosullari } from "./app/LegalPages";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/kvkk" element={<KVKK />} />
      <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
      <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
      <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
    </Routes>
  </BrowserRouter>
);
