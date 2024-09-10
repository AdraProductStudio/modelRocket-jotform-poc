import LoginPage from "./Components/LandingPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthentatePage from "./Components/Home/AuthentatePage";
import Error404 from "./Components/OtherPages/Error404";
import AddClient from "./Components/Home/AddClient";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/home" element={<AuthentatePage />}>
          <Route index element={<AddClient />} />
          <Route path="update_client" element={<AddClient/>}/>
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
