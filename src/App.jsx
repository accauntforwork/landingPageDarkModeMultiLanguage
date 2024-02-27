import React, { useState, useEffect } from "react";

import { ThemeProvider } from "./theme/ThemeProvider";

import Header from "./Components/Header/index";
import Loader from "./Components/Loader/index";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
