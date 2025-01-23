import { Link } from "react-router-dom";

import DOMPurify from "dompurify";
import { Button } from "./Button";

interface agenceProps {
  iconSrc?: string;
  width?: number;
  alt?: string;
  subtitle?: string;
  title?: string;
  text?: string;
  hashtags?: string;
}

function Banner({
  iconSrc,
  width,
  alt,
  subtitle,
  title,
  text,
  hashtags
}: agenceProps) {
  // Nettoyer le contenu HTML
  const cleanText = DOMPurify.sanitize(text || "");

  return (
    <section className="flex flex-col items-center max-w-4xl space-y-6 md:items-start">
      <div className="flex flex-col transition-all duration-300 ease-in-out md:gap-5 md:items-center md:flex-row">
        <img
          src={iconSrc}
          alt={alt}
          width={width}
          className="mx-auto"
        />

        <p className="text-xl text-primary-color">{subtitle}</p>
      </div>
      <div className="space-y-6 md:pl-10">
        <h1 className="items-start text-4xl font-semibold text-center transition-all duration-300 ease-in-out sm:text-5xl md:text-7xl">
          {title}{" "}
        </h1>
        {/* <p className="max-w-xl">{text}</p> */}
        <p
          dangerouslySetInnerHTML={{ __html: cleanText }}
          className="max-w-xl leading-7"
        />

        <p className="max-w-xl">{hashtags}</p>
        <Button
          asChild
          variant="primary">
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </section>
  );
}

export default Banner;
