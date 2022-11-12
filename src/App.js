import "./App.css";
import { Feature } from "./components/feature/Feature";
import { Header } from "./components/header/Header";
import { News } from "./components/news/News";
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
      <Feature />
      <News />
    </div>
  );
}

export default App;
