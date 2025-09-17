import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Header from "components/components/Header/Header";
import Footer from "components/components/Footer/Footer";
import SeoHead from "components/components/SeoHead/SeoHead";
import CompanyIcon from "components/components/CompanyIcon/CompanyIcon";
import ServiceCard from "components/components/ServiceCard/ServiceCard";
import CaseStudy from "components/components/CaseStudy/CaseStudy";
import TeamMemberCard from "components/components/TeamCard/TeamCard";

export default function Home() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const seoData = {
    title: "Positivus - Digital Marketing Agency | SEO, PPC & Social Media Experts",
    description:
      "Grow your business online with Positivus. We provide SEO, PPC, social media marketing, email marketing, and content creation to help brands achieve success in the digital landscape.",
    keywords:
      "digital marketing agency, SEO services, PPC advertising, social media marketing, email marketing, content creation, analytics and tracking",
    url: "https://positivus-ui-dusky.vercel.app",
    image: "https://positivus-ui-dusky.vercel.app/p-homebanner-image.png",
    type: "website",
  };

  return (
    <>
      <SeoHead data={seoData} />
      <Header />

      <section className="py-10 md:py-16">
        <div className="container">
          <div className="flex gap-y-6 lg:gap-0 flex-wrap justify-between">
            <div className="w-full lg:w-6/12">
              <h1 className="max-w-full lg:max-w-[531px] text-black">
                Navigating the digital landscape for success
              </h1>
              <p className="py-4 lg:py-8 w-full max-w-full lg:max-w-[498px] text-black">
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
              </p>
              <Link href="#" className="btn">Book a consultation</Link>
            </div>
            <div className="w-full lg:w-5/12">
              <img
                className="w-full h-full object-cover"
                src="/p-homebanner-image.png"
                alt="homebanner-image"
                width="600"
                height="515"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="flex flex-wrap gap-y-6 lg:gap-y-4 -mx-4 justify-center lg:justify-between">
          <CompanyIcon imgUrl="/p-cl-one.png" />
          <CompanyIcon imgUrl="/p-cl-two.png" />
          <CompanyIcon imgUrl="/p-cl-three.png" />
          <CompanyIcon imgUrl="/p-cl-four.png" />
          <CompanyIcon imgUrl="/p-cl-five.png" />
          <CompanyIcon imgUrl="/p-cl-six.png" />
        </div>
      </div>

      <section className="py-16 lg:py-36">
        <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Services</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>
          <div className="flex -mx-4 lg:-mx-5 flex-wrap gap-y-5 lg:gap-y-10">
            <ServiceCard
              title="Search engine optimization"
              imgUrl="/p-services-one.png"
              bgColor="bg-grey"
              titleBg="bg-primary"
              linkColor="text-black"
            />
            <ServiceCard
              title="Pay-per-click advertising"
              imgUrl="/p-services-two.png"
              bgColor="bg-primary"
              titleBg="bg-grey"
              linkColor="text-black"
            />
            <ServiceCard
              title="Social Media Marketing"
              imgUrl="/p-services-three.png"
              bgColor="bg-black"
              titleBg="bg-grey"
              linkColor="text-white"
            />
            <ServiceCard
              title="Email Marketing"
              imgUrl="/p-services-four.png"
              bgColor="bg-silver"
              titleBg="bg-primary"
              linkColor="text-black"
            />
            <ServiceCard
              title="Content Creation"
              imgUrl="/p-services-five.png"
              bgColor="bg-primary"
              titleBg="bg-grey"
              linkColor="text-black"
            />
            <ServiceCard
              title="Analytics and Tracking"
              imgUrl="/p-services-six.png"
              bgColor="bg-black"
              titleBg="bg-primary"
              linkColor="text-white"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex bg-grey p-5 lg:p-10 flex-wrap gap-y-6 items-center lg:gap-0 lg:justify-between rounded-xl-custom">
            <div className="w-full lg:w-5/12">
              <h3>Let’s make things happen</h3>
              <p className="py-6">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>
              <Link className="btn" href="#">Get your free proposal</Link>
            </div>
            <div className="w-full lg:w-5/12">
              <img
                src="/proposal-image.png"
                className="object-contain mx-auto"
                alt="proposal-image"
                width="360"
                height="394"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-36">
        <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Case Studies</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">
              Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
          </div>
          <div className="px-8 lg:px-16 py-10 lg:py-20 rounded-xl-custom bg-black">
            <div className="flex flex-wrap justify-center gap-y-6 -mx-4 lg:-mx-16">
              <CaseStudy
                description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
                linkUrl="#"
              />
              <CaseStudy
                description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
                linkUrl="#"
              />
              <CaseStudy
                description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
                linkUrl="#"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-36">
        <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Our Working Process</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">Step-by-Step Guide to Achieving Your Business Goals</p>
          </div>
          <Accordion
            className="flex flex-col gap-y-6 flex-wrap"
            showDivider={false}
            itemClasses={{
              indicator: 'w-[40px] h-[40px] border border-black rounded-[50%] inline-flex justify-center items-center bg-grey data-[open=true]:-rotate-180',
              trigger: 'p-0',
              base: 'px-5 lg:px-16 py-5 lg:py-10 border border-black bg-grey rounded-xl-custom data-[open]:bg-primary',
              content: 'text-lg pb-0 pt-4 lg:pt-7 mt-4 lg:mt-7 border-t border-black md:text-xl font-normal',
              title: 'text-xl lg:text-3xl font-medium text-black flex gap-x-2 lg:gap-x-4 items-center'
            }}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {["Consultation", "Research and Strategy Development", "Implementation", "Monitoring and Optimization", "Reporting and Communication", "Continual Improvement"].map((title, index) => (
              <AccordionItem
                key={index + 1}
                title={<>
                <span className="text-4xl lg:text-6xl font-medium">{index+1>9?index+1:`0${index+1}`}</span>{title}
                </>}
                indicator={({ isOpen }) => isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />}
              >
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
                This will allow us to understand your needs and tailor our services to best fit your requirements.
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="pb-16 reviews lg:pb-36">
        <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Team</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">
              Meet the skilled and experienced team behind our successful digital marketing strategies
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6 justify-center">
            <TeamMemberCard
              name="John Smith"
              role="CEO and Founder"
              imgUrl="/team-p-one.png"
              linkedinUrl="#"
              description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
            />
            <TeamMemberCard
              name="Michael Brown"
              role="Senior SEO Specialist"
              imgUrl="/team-p-two.png"
              linkedinUrl="#"
              description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
            />
            <TeamMemberCard
              name="John Smith"
              role="CEO and Founder"
              imgUrl="/team-p-three.png"
              linkedinUrl="#"
              description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
            />
            <TeamMemberCard
              name="Emily Johnson"
              role="PPC Manager"
              imgUrl="/team-p-four.png"
              linkedinUrl="#"
              description="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis."
            />
            <TeamMemberCard
              name="Brian Williams"
              role="Social Media Specialist"
              imgUrl="/team-p-five.png"
              linkedinUrl="#"
              description="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement."
            />
            <TeamMemberCard
              name="Sarah Kim"
              role="Content Creator"
              imgUrl="/team-p-six.png"
              linkedinUrl="#"
              description="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries."
            />
          </div>
          <div className="flex justify-end pt-4 lg:pt-6">
            <Link className="btn" href="#">See All Team</Link>
          </div>
        </div>
      </section>

      <section className="pb-16 reviews lg:pb-36">
        <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Testimonials</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
            </p>
          </div>
          <div className="bg-black px-4 md:px-0 py-20 rounded-xl-custom lg:h-full lg:min-h-[550px] relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoHeight={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, centeredSlides: false },
                1024: { slidesPerView: 3, centeredSlides: false },
              }}
              className="pb-8 lg:pb-16"
            >
              {[
                { name: "John Smith", role: "Marketing Director at XYZ Corp" },
                { name: "Sarah Lee", role: "CEO at ABC Ltd" },
                { name: "David Brown", role: "Head of Marketing at QRS Inc" },
                { name: "John Smith", role: "Marketing Director at XYZ Corp" },
                { name: "Sarah Lee", role: "CEO at ABC Ltd" },
                { name: "David Brown", role: "Head of Marketing at QRS Inc" },
              ].map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="wrapper">
                    <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                      <p className="text-white">
                        Working with Positivus has been a game-changer for us. Their strategies helped us double our online reach in just six months.
                      </p>
                    </div>
                    <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">{slide.name}</div>
                    <div className="text-lg lg:text-xl text-white">{slide.role}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute w-full flex justify-between items-center left-0 right-0 mx-auto max-w-[632px] px-4">
              <button className="swiper-button-prev static text-black bg-primary p-2 rounded-full cursor-pointer z-1">
                <ChevronLeft size={24} />
              </button>
              <div className="swiper-pagination static"></div>
              <div className="swiper-button-next static text-black bg-primary p-2 rounded-full cursor-pointer z-1">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 reviews lg:pb-36">
        <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Contact Us</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">
              Connect with Us: Lets Discuss Your Digital Marketing Needs
            </p>
          </div>

          <div
            className="bg-gray-200 py-8 lg:py-14 rounded-xl-custom
            lg:bg-[url('/contact-us-section-image.png')]
            lg:bg-no-repeat lg:bg-[center_right_-320px] lg:bg-auto"
          >
            <div className="flex flex-wrap justify-between">
              <div className="px-10 lg:pl-20 w-full lg:w-6/12">
                <form className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center">
                    <div className="flex items-center gap-x-2">
                      <input type="radio" name="quote" id="say-hi" required />
                      <label htmlFor="say-hi">Say Hi</label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input type="radio" name="quote" id="get-quote" required />
                      <label htmlFor="get-quote">Get a Quote</label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="name" className="text-base lg:text-lg text-black font-normal">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[40px] lg:h-[60px] placeholder:font-normal"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email" className="text-base lg:text-lg text-black font-normal">Email*</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[40px] lg:h-[60px] placeholder:font-normal"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="message" className="text-base lg:text-lg text-black font-normal">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[100px] lg:h-[190px] overflow-y-auto placeholder:font-normal"
                      placeholder="Message"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}