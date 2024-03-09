import Head from "./components/Head";
import Projects from "./components/Projects";
import Technos from "./components/Technos";
import Mentions from "./components/Mentions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-pf bg-gray-900 flex flex-col p-10">
        <Head />
        <Projects />
        <Technos />
        <Mentions />
        <Footer />
      </div>
    </>
  );
}

export default App;
