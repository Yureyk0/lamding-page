import { Features } from "./componetns/Features/Features";
import { Footer } from "./componetns/Footer/Footer";
import { Form } from "./componetns/Form/Form";
import { Gallery } from "./componetns/Gallery/Gallery";
import { Header } from "./componetns/Header/Header";
import { Slider } from "./componetns/Slider/Slider";
import { Video } from "./componetns/Video/Video";

export const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Features />
      <Gallery />
      <Video />
      <Form />
      <Footer />
    </>
  );
};
