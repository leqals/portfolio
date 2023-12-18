import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home, Portfolio } from "./Pages";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const location = useLocation();

  const queryClient = new QueryClient();

  return (
    <AnimatePresence mode="wait">
      <QueryClientProvider client={queryClient}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/project/:id" element={<Portfolio />} />
          <Route path="home/project/:id" element={<Portfolio />} />
        </Routes>
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default App;
