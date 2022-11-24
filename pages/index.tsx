import type { NextPage } from "next";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import ImageBlock from "../ui/ImageBlock";
import RichContentBlock from "../ui/RichContentBlock";

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Kia ora"
        content="Introducing Foodstuffs Precision Media. We're creating New Zealand’s largest omnichannel retail media network, powered by dunnhumby data science."
        imageUrl="https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/hero-homepage-2.jpg"
      />
      <RichContentBlock
        heading="Take advantage of world-leading data-science, enabling brands to understand, target and engage their customers like never before."
        content="Retail is changing, as are Customers’ needs and expectations. We ensure that we can precisely connect with customers from sofa to store so that they can interact with your brand in a personalised and effective way."
        video={{
          title: "Introducing Foodstuffs Precision Media",
          url: "https://www.youtube.com/watch?v=8D7xR3JB6mg",
        }}
      />
      <ImageBlock
        heading="Greater campaign effectiveness and return"
        content="Reduce media wastage by targeting the most relevant customers online and in store to achieve your brand objectives. Insights and measurement underpin our full-service approach."
        imageUrl="https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/Content-and-promo-images/Helping-customer-650x430.jpg?h=430&iar=0&w=650"
        position="LEFT"
        theme="PURPLE"
        callToAction={{
          location: "/home",
          title: "Our approach",
        }}
      />
      <ImageBlock
        heading="Seamless multi-channel delivery"
        content="Our client-focused team of media experts ensure consistent campaign delivery across the New World and PAK’nSAVE media portfolio."
        imageUrl="https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/Content-and-promo-images/HR-Man-using-Cellphone-AdobeStock_315539172-650x480.jpg?h=480&iar=0&w=650"
        position="RIGHT"
        theme="WHITE"
        callToAction={{
          location: "/home",
          title: "Solutions",
        }}
      />
      <Footer />
    </>
  );
};

export default Home;
