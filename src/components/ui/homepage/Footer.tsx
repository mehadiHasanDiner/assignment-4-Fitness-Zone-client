const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-primary text-primary-content p-10 rounded-lg">
        <aside>
          <img className="size-12 rounded-lg" src="" alt="" />
          <p className="font-bold">
            Fitness Zone
            <br />
            Fitness slogan
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            Icon
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
