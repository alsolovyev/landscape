import Layout from "./Layout";
import Home from "./Pages/Home";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PenBox } from "lucide-react";

function App() {
  const [isEditable, setIsEditable] = useState(false);

  function toggleEditable() {
    setIsEditable((prev) => !prev);
    document.body.contentEditable = !isEditable;
  }

  return (
    <Layout currentPageName="Home">
      <Button
        onClick={toggleEditable}
        size="lg"
        className="fixed top-4 left-4 p-4 z-50"
      >
        <PenBox />
      </Button>
      <Home />
    </Layout>
  );
}

export default App;
