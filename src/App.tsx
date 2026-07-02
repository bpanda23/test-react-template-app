import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/page";
import DocumentationPage from "./app/(site)/documentation/page";
import SigninPage from "./app/(site)/(auth)/signin/page";
import SignupPage from "./app/(site)/(auth)/signup/page";
import NotFoundPage from "./app/not-found";
import Layout from "./app/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
