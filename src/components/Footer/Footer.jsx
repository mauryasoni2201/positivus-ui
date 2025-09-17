import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="py-7 lg:py-14 bg-black px-6 rounded-tl-[45px] rounded-tr-[45px] lg:px-12">
          <div className="flex justify-between flex-wrap gap-y-6 items-center">
            <div className="flex justify-center xl:block w-full xl:w-2/12">
              <img
                src="/p-f-logo.svg"
                alt="footer-logo"
                width={180}
                height={30}
              />
            </div>
            <div className="w-full xl:w-6/12">
              <ul className="flex flex-col justify-center items-center gap-y-2 lg:gap-y-0 lg:flex-row gap-x-5 lg:gap-x-10">
                {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-white text-lg hover:text-primary transition-all ease-in-out duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-full xl:w-2/12">
              <ul className="flex justify-center xl:justify-end items-center gap-x-2 lg:gap-x-4">
                <li>
                  <Link
                    className="w-[30px] h-[30px] bg-white flex justify-center items-center rounded-full"
                    href="#"
                  >
                    <img
                      className="object-cover"
                      src="/p-linkedin.svg"
                      alt="LinkedIn"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-[30px] h-[30px] bg-white flex justify-center items-center rounded-full"
                    href="#"
                  >
                    <img
                      className="object-cover"
                      src="/p-twitter.svg"
                      alt="Twitter"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10 lg:py-14 mb-10 border-b border-b-white lg:mb-14">
            <div className="flex flex-wrap gap-y-5 justify-between">
              <div className="w-full lg:w-4/12">
              <p className="text-white text-center lg:text-left pb-2">Email: <Link className="text-white hover:text-primary transition-all ease-in-out duration-300" href={'mailto:info@positivus.com'}>info@positivus.com</Link></p>
              <p className="text-white text-center lg:text-left pb-2">Tel: <Link className="text-white hover:text-primary transition-all ease-in-out duration-300" href={'tel:555-567-8901'}>555-567-8901</Link></p>
              <p className="text-white text-center lg:text-left">Address: <Link className="text-white hover:text-primary transition-all ease-in-out duration-300" target="_blank" href={'#'}> 1234 Main St Moonstone City, Stardust State 12345</Link></p>
              </div>

              <div className="w-full lg:w-6/12">
                <form className="bg-lightBlack flex flex-col lg:flex-row gap-4 items-center py-7 lg:py-10 px-5 lg:px-10 rounded-[14px]">
                  <div className="w-full lg:w-4/6">
                    <input
                      className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[40px] lg:h-[60px] placeholder:font-normal placeholder:text-black"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-1/6 text-center lg:text-left">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p className="lg:text-left text-center text-white">© 2023 Positivus. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
