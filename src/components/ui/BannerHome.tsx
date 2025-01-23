import { Button } from "./Button";

function BannerHome() {
  return (
    <section className="flex flex-col items-center w-full mt-20 space-y-10 ">
      <p className="flex flex-col gap-3 text-3xl text-center transition-all duration-300 ease-in-out md:text-4xl md:flex-row md:justify-center text-grey-text ">
        Vous aussi,{" "}
        <span>
          <strong className="px-1 py-2 text-black rounded-md bg-primary-color">
            soyez visible
          </strong>
        </span>{" "}
        là où on vous cherche
      </p>

      <h1 className="text-4xl font-semibold text-center text-white transition-all duration-300 ease-in-out sm:text-5xl md:text-7xl">
        C2 Projet Web
      </h1>
      <h2 className="text-2xl text-center text-primary-color">
        Agence de communication à Villerest
      </h2>
      <Button
        className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
        size={"lg"}>
        nous contacter
      </Button>
    </section>
  );
}

export default BannerHome;
