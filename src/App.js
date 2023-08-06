import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="w-full dark:text-gray-200 dark:bg-zinc-800 duration-700 pt-40 sm:pt-20">
      {/* header section */}
      <Header />

      {/* navbar section */}
      <Navbar />

      {/* slider section */}
      <Slider />

      {/* gallery section */}
      <Gallery />

      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;
