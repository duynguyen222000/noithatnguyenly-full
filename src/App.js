import "./App.css";
import { Header } from "./components/header/Header";
import { ServiceLayout } from "./components/service/ServiceLayout";
import { SlideBanner } from "./components/slide/SlideBanner";
import { SlideProduct } from "./components/slideproduct/SlideProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <SlideBanner />
      <SlideProduct />
      <ServiceLayout />
    </div>
  );
}

export default App;
