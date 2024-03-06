import { Head } from "@/components/Head";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Head />
      Hello World
    </HelmetProvider>
  );
}

export default App;
