import React from "react";
import "./App.css";
import AppHeader from "./components/appHeader";
import AppContent from "./components/appContent";
import AddModal from "./components/addModal";

function App() {
  return (
    <div className="container mx-auto bg-[#f3f3f3] p-5 rounded max-w-3xl">
      <AppHeader />
      <AppContent />
      <AddModal />
    </div>
  );
}

export default App;
