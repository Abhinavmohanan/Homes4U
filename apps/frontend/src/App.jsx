import './App.css';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import  Dashboard  from "./pages/dashboard/dashboard";

import LandingPage from "./pages/landing/landingpage";
 
if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
 

 

 
function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />

        
          <Route
            path="/sign-in/*"
            element={
              <div className="authentication">
                <SignIn redirectUrl="/protected" routing="path" path="/sign-in" />
              </div>
            }
          />
        
          <Route
            path="/sign-up/*"
            element={
            <div className="authentication">
            <SignUp redirectUrl="/protected" routing="path" path="/sign-up" />
            </div>}
          />
        
        
        <Route
          path="/protected"
          element={
          <>
            <SignedIn >
              <Dashboard />
            </SignedIn>
             <SignedOut>
              <LandingPage />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
 
function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}
 
export default App;