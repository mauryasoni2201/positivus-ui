import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="py-7 lg:py-14 bg-black px-6 rounded-tl-[45px] rounded-tr-[45px] lg:px-12">
          <div className="flex justify-between items-center">
            <div className="logo">
              <img
                src="/p-f-logo.svg"
                alt="footer-logo"
                width={180}
                height={30}
              />
            </div>

            <div className="links">
              <ul className="flex gap-x-5 lg:gap-x-10">
                <li>
                  <Link
                    href="#"
                    className="text-white text-lg hover:text-primary transition-all ease-in-out duration-400"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white text-lg hover:text-primary transition-all ease-in-out duration-400"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white text-lg hover:text-primary transition-all ease-in-out duration-400"
                  >
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white text-lg hover:text-primary transition-all ease-in-out duration-400"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white text-lg hover:text-primary transition-all ease-in-out duration-400"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="social-links text-white">
              <ul className="flex gap-x-4">
                <li>
                  <Link className="w-[30px] h-[30px] bg-white flex justify-center items-center rounded-full" href={'#'}>
                    <img className="object-cover" src="/p-linkedin.svg" alt="social-icon" />
                 </Link>
                </li>
                <li>
                  <Link className="w-[30px] h-[30px] bg-white flex justify-center items-center rounded-full" href={'#'}>
                    <img className="object-cover" src="/p-twitter.svg" alt="social-icon" />
                 </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="middle"></div>

          <div className="bottom"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;