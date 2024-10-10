import LoginPage from "./Components/LandingPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthentatePage from "./Components/Home/AuthentatePage";
import Error404 from "./Components/OtherPages/Error404";
import AddClient from "./Components/Home/AddClient";
import UpdateClient from "./Components/Home/UpdateClient";
import ViewOnboardingSubmission from "./Components/Home/ViewOnboardingSubmission";
import ViewLiveCustomers from "./Components/Home/ViewLiveCustomers";
import MrApiDocs from "./Components/Home/MrApiDocs";
import { UpdateCallPrompt } from "./Components/Home/UpdateCallPrompt";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/home" element={<AuthentatePage />}>
          <Route index element={<AddClient />} />
          <Route path="update_client" element={<UpdateClient/>}/>
          <Route path="view_onboarding_submission" element={<ViewOnboardingSubmission/>}/>
          <Route path="view_live_customers" element={<ViewLiveCustomers/>}/>
          <Route path="update_call_prompt" element={<UpdateCallPrompt/>}/>
          <Route path="mr_api_docs" element={<MrApiDocs/>}/>
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
