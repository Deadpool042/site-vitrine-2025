import { Helmet } from "react-helmet-async";

// import { Link } from "react-router-dom";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

import HeroComponent from "@/components/ui/layout/HeroComponent";
import { homeData } from "@/datas/homeData";
import SectionSplitComponent from "@/components/ui/layout/SectionSplitComponent";
import SectionGridItemComponents from "@/components/ui/layout/SectionGridItemComponents";
import MainLayout from "@/components/MainLayout";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Page d'accueil</title>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>

      <MainLayout>
        <HeroComponent data={homeData.hero} />
        <SectionSplitComponent
          data={homeData.splitSections || []}
          sectionIndex={0}
        />
        <SectionGridItemComponents data={homeData.cardSections || []} />
      </MainLayout>

      {/* <SectionSplitComponent data={homeData.sectionSplit} />
      <SectionGridItemComponents data={homeData.expertise} /> */}

      {/* <section className="max-w-6xl p-2 mx-auto space-y-0">
        <h2 className="text-4xl font-semibold text-center md:text-start">
          {homeData.testimonials.title}
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnMouseEnter: true,
              stopOnInteraction: false
            })
          ]}
          opts={{
            align: "start",
            loop: true
          }}
          className="w-10/12 mx-auto">
          <CarouselContent className="p-10 -ml-10 ">
            {Array.from(homeData.testimonials.items).map((item, index) => (
              <CarouselItem
                key={index}
                className="py-4 pl-0 m-4 space-y-4 transition-all duration-300 ease-in-out border rounded-md ">
                <div>
                  <h3 className="pl-4 font-semibold">{item.name}</h3>
                  <h4 className="pb-2 pl-4 font-thin">{item.role}</h4>
                </div>

                <p className="px-4 pt-4 border-t-2">{item.quote}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black hover:bg-primary-color border-primary-color" />
          <CarouselNext className="text-black" />
        </Carousel>

        <Link
          to="/contact"
          rel="noreferrer">
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 ease-in-out border-2 rounded-md bg-primary-color hover:bg-grey-text group hover:border-2 border-primary-color">
            {homeData.contact.button}

            <p className="font-semibold text-center uppercase transition-colors duration-300 group-hover:text-black">
              {homeData.contact.text}
            </p>
          </div>
        </Link>
      </section> */}
      {/* </LayoutWrapper> */}
    </>
  );
}

export default HomePage;
