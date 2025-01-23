function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex flex-col py-3 mx-auto text-xs text-white sm:text-sm">
      <span className="text-center">Copyright © {date}</span>{" "}
      <span className="text-center">
        C2 Projet Web, agence de communication à Villerest
      </span>
    </footer>
  );
}

export default Footer;
