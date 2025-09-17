import Link from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Header from "components/components/Header/Header";
import Footer from "components/components/Footer/Footer";
import SeoHead from "components/components/SeoHead/SeoHead";

export default function Home() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const seoData = {
    title: "Positivus - Digital Marketing Agency | SEO, PPC & Social Media Experts",
    description:
      "Grow your business online with Positivus. We provide SEO, PPC, social media marketing, email marketing, and content creation to help brands achieve success in the digital landscape.",
    keywords:
      "digital marketing agency, SEO services, PPC advertising, social media marketing, email marketing, content creation, analytics and tracking",
    url: "https://www.positivus.com",
    image: "https://www.positivus.com/og-home.png",
    type: "website",
  };

  return(<>

    <SeoHead data={seoData}/>

     <Header/>

     <section className="py-10 md:py-16">
      <div className="container">
          <div className="flex gap-y-6 lg:gap-0 flex-wrap justify-between">
            <div className="w-full lg:w-6/12">
              <h1 className="max-w-full lg:max-w-[531px] text-black">Navigating the digital landscape for success</h1>
              <p className="py-4 lg:py-8 w-full max-w-full lg:max-w-[498px] text-black">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <div>
                <Link href={'#'} className="btn">Book a consultation</Link>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <img src="/p-homebanner-image.png" alt="homebanner-image" width={'600'} height={'515'} />
            </div>
          </div>
      </div>
     </section>

      <div className="container">
        <div className="flex flex-wrap gap-y-6 lg:gap-0 -mx-4 justify-center lg:justify-between">
          <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
            <img className="object-contain" src="/p-cl-one.png" alt="cl-image" width={'124'} height={'48'} />
          </div>
          <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
            <img className="object-contain" src="/p-cl-two.png" alt="cl-image" width={'124'} height={'48'} />
          </div>
          <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
            <img className="object-contain" src="/p-cl-three.png" alt="cl-image" width={'124'} height={'48'} />
          </div>
          <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
            <img className="object-contain" src="/p-cl-four.png" alt="cl-image" width={'124'} height={'48'} />
          </div>
            <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
            <img className="object-contain" src="/p-cl-five.png" alt="cl-image" width={'124'} height={'48'} />
          </div>
          <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
            <img className="object-contain" src="/p-cl-six.png" alt="cl-image" width={'124'} height={'48'} />
          </div>
        </div>
      </div>
     
     <section className="py-16 lg:py-36">
      <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Services</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>
          <div className="flex -mx-4 lg:-mx-5 flex-wrap gap-y-5 lg:gap-y-10">
            <div className="px-4 lg:px-5 w-full lg:w-6/12">
             <div className="p-6 lg:p-12 border bg-grey border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center">
                 <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
                  <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
                    <h3 className="max-w-[221px] bg-primary rounded-md px-1.5">Search engine optimization</h3>
                     <div className="mt-auto">
                        <Link className="text-lg lg:text-xl text-black font-normal" href={'#'}>Learn More</Link>
                     </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <img className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain" src="/p-services-one.png" alt="service-image" width={'210'} height={'166'} />
                  </div>
                 </div>
             </div>
            </div>
            <div className="px-4 lg:px-5 w-full lg:w-6/12">
             <div className="p-6 lg:p-12 border bg-primary border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center">
                 <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
                  <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
                    <h3 className="max-w-[221px] bg-grey rounded-md px-1.5">Pay-per-click advertising</h3>
                     <div className="mt-auto">
                        <Link className="text-lg lg:text-xl text-black font-normal" href={'#'}>Learn More</Link>
                     </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <img className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain" src="/p-services-two.png" alt="service-image" width={'210'} height={'166'} />
                  </div>
                 </div>
             </div>
            </div>
            <div className="px-4 lg:px-5 w-full lg:w-6/12">
             <div className="p-6 lg:p-12 border bg-black border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center">
                 <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
                  <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
                    <h3 className="max-w-[221px] bg-grey rounded-md px-1.5">Social Media Marketing</h3>
                     <div className="mt-auto">
                        <Link className="text-lg lg:text-xl text-white font-normal" href={'#'}>Learn More</Link>
                     </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <img className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain" src="/p-services-three.png" alt="service-image" width={'210'} height={'166'} />
                  </div>
                 </div>
             </div>
            </div>
            <div className="px-4 lg:px-5 w-full lg:w-6/12">
             <div className="p-6 lg:p-12 border bg-silver border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center">
                 <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
                  <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
                    <h3 className="max-w-[221px] bg-primary rounded-md px-1.5">Email Marketing</h3>
                     <div className="mt-auto">
                        <Link className="text-lg lg:text-xl text-black font-normal" href={'#'}>Learn More</Link>
                     </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <img className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain" src="/p-services-four.png" alt="service-image" width={'210'} height={'166'} />
                  </div>
                 </div>
             </div>
            </div>
            <div className="px-4 lg:px-5 w-full lg:w-6/12">
             <div className="p-6 lg:p-12 border bg-primary border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center">
                 <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
                  <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
                    <h3 className="max-w-[221px] bg-grey rounded-md px-1.5">Content Creation</h3>
                     <div className="mt-auto">
                        <Link className="text-lg lg:text-xl text-black font-normal" href={'#'}>Learn More</Link>
                     </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <img className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain" src="/p-services-five.png" alt="service-image" width={'210'} height={'166'} />
                  </div>
                 </div>
             </div>
            </div>
            <div className="px-4 lg:px-5 w-full lg:w-6/12">
             <div className="p-6 lg:p-12 border bg-black border-black rounded-xl-custom h-full min-h-[310px] d-flex items-center justify-center">
                 <div className="flex lg:justify-between flex-wrap gap-y-5 lg:gap-0 h-full">
                  <div className="w-full lg:w-6/12 flex flex-col justify-between gap-y-3 lg:gap-0">
                    <h3 className="max-w-[221px] bg-primary rounded-md px-1.5">Analytics and Tracking</h3>
                     <div className="mt-auto">
                        <Link className="text-lg lg:text-xl text-white font-normal" href={'#'}>Learn More</Link>
                     </div>
                  </div>
                  <div className="w-full lg:w-5/12">
                    <img className="mx-auto lg:mx-0 lg:h-full lg:w-full lg:object-contain" src="/p-services-six.png" alt="service-image" width={'210'} height={'166'} />
                  </div>
                 </div>
             </div>
            </div>
          </div>
      </div>
     </section>
  
      <section>
        <div className="container">
          <div className="flex bg-grey p-5 lg:p-10 flex-wrap gap-y-6 items-center lg:gap-0 lg:justify-between rounded-xl-custom">
          <div className="w-full lg:w-5/12">
            <h3>
            Let’s make things happen
            </h3>
            <p className="py-6">Contact us today to learn more about how our digital marketing 
            services can help your business grow and succeed online.</p>
            <Link className="btn" href={'#'}>Get your free proposal</Link>
            </div>
          <div className="w-full lg:w-5/12">
            <img src="/proposal-image.png" className="object-contain mx-auto" alt="proposal-image" width={'360'} height={'394'} />
          </div>
          </div>
        </div>
      </section>

    <section className="py-16 lg:py-36">
      <div className="container">
          <div className="flex lg:items-center gap-y-5 lg:gap-x-10 pb-10 lg:pb-20 flex-wrap">
            <h2 className="px-1.5 inline-block bg-primary text-black">Case Studies</h2>
            <p className="w-full lg-w-none lg:max-w-[640px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
          </div>
          <div className="px-8 lg:px-16 py-10 lg:py-20 rounded-xl-custom bg-black">
            <div className="flex flex-wrap justify-center gap-y-6 -mx-4 lg:-mx-16">
              <div className="w-full md:w-6/12 lg:w-4/12 lg:border-r border-white text-white px-4 lg:px-16  last:border-0">
               <p className="text-white pb-5">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a
                50% increase in website traffic and a 25% increase in sales.
               </p>
               <Link href={'#'} className="text-lg lg:text-xl text-primary font-normal transition-all ease-in-out duration-400 hover:text-grey">Learn More</Link>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:border-r border-white text-white px-4 lg:px-16 last:border-0">
               <p className="text-white pb-5">
                For a B2B software company, we developed an SEO strategy that 
                resulted in a first page ranking for key keywords
                and a 200% increase in organic traffic.
               </p>
               <Link href={'#'} className="text-lg lg:text-xl text-primary font-normal transition-all ease-in-out duration-400 hover:text-grey">Learn More</Link>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:border-r border-white text-white px-4 lg:px-16 last:border-0">
               <p className="text-white pb-5">
                For a national retail chain, we created a social media 
                marketing campaign that increased 
                followers by 25% and generated a 20% increase in online sales.
               </p>
               <Link href={'#'} className="text-lg lg:text-xl text-primary font-normal transition-all ease-in-out duration-400 hover:text-grey">Learn More</Link>
              </div>
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
        indicator:'w-[40px] h-[40px] border border-black rounded-[50%] inline-flex justify-center items-center bg-grey data-[open=true]:-rotate-180',
        trigger: 'p-0',
        base:'px-5 lg:px-16 py-5 lg:py-10 border border-black bg-grey rounded-xl-custom data-[open]:bg-primary',
        content:' text-lg pb-0 pt-4 lg:pt-7 mt-4 lg:mt-7 border-t border-black md:text-xl font-normal;',
        title: 'text-xl lg:text-3xl font-medium text-black'
      }} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
      <AccordionItem className="" key="1" indicator={({ isOpen }) =>
          isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />
        } aria-label="Accordion 1" title='Consultation'>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" indicator={({ isOpen }) =>
          isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />
        } title='Research and Strategy Development'>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" indicator={({ isOpen }) =>
          isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />
        } title='Implementation'>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" indicator={({ isOpen }) =>
          isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />
        } title='Monitoring and Optimization'>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" indicator={({ isOpen }) =>
          isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />
        } title='Reporting and Communication'>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" indicator={({ isOpen }) =>
          isOpen ? <Minus className="w-6 h-6 text-black" /> : <Plus className="w-6 h-6 text-black font-bold" />
        } title='Continual Improvement'>
        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. 
        This will allow us to understand your needs and tailor our services to best fit your requirements.
      </AccordionItem>
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
          <div className="px-4 w-full md:w-6/12 lg:w-4/12">
           <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
               <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
                  <div className="w-[100px] h-[100px]">
                    <img className="w-full h-full object-contain" src="/team-p-one.png" alt="p-cl" width={'100'} height={'100'} />
                  </div>
                  <div className="details flex flex-col justify-end">
                      <h4>John Smith</h4>
                      <p>CEO and Founder</p>
                  </div>
                  <div className="link">
                    <Link className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full" href={'#'}>
                      <img src="/linkedin-green.svg" alt="linkedin-green" width={'17'} height={'17'} />
                    </Link>
                  </div>
               </div>
               <div className="description">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
               </div>
            </div>
          </div>
          <div className="px-4 w-full md:w-6/12 lg:w-4/12">
           <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
               <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
                  <div className="w-[100px] h-[100px]">
                    <img className="w-full h-full object-contain" src="/team-p-two.png" alt="p-cl" width={'100'} height={'100'} />
                  </div>
                  <div className="details flex flex-col justify-end">
                      <h4>Michael Brown</h4>
                      <p>Senior SEO Specialist</p>
                  </div>
                  <div className="link">
                    <Link className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full" href={'#'}>
                      <img src="/linkedin-green.svg" alt="linkedin-green" width={'17'} height={'17'} />
                    </Link>
                  </div>
               </div>
               <div className="description">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
               </div>
            </div>
          </div>
          <div className="px-4 w-full md:w-6/12 lg:w-4/12">
           <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
               <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
                  <div className="w-[100px] h-[100px]">
                    <img className="w-full h-full object-contain" src="/team-p-three.png" alt="p-cl" width={'100'} height={'100'} />
                  </div>
                  <div className="details flex flex-col justify-end">
                      <h4>John Smith</h4>
                      <p>CEO and Founder</p>
                  </div>
                  <div className="link">
                    <Link className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full" href={'#'}>
                      <img src="/linkedin-green.svg" alt="linkedin-green" width={'17'} height={'17'} />
                    </Link>
                  </div>
               </div>
               <div className="description">
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
               </div> 
            </div>
          </div>
          <div className="px-4 w-full md:w-6/12 lg:w-4/12">
           <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
               <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
                  <div className="w-[100px] h-[100px]">
                    <img className="w-full h-full object-contain" src="/team-p-four.png" alt="p-cl" width={'100'} height={'100'} />
                  </div>
                  <div className="details flex flex-col justify-end">
                      <h4>Emily Johnson</h4>
                      <p>PPC Manager</p>
                  </div>
                  <div className="link">
                    <Link className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full" href={'#'}>
                      <img src="/linkedin-green.svg" alt="linkedin-green" width={'17'} height={'17'} />
                    </Link>
                  </div>
               </div>
               <div className="description">
                <p>
                3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis
                </p>
               </div>
            </div>
          </div>
          <div className="px-4 w-full md:w-6/12 lg:w-4/12">
           <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
               <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
                  <div className="w-[100px] h-[100px]">
                    <img className="w-full h-full object-contain" src="/team-p-five.png" alt="p-cl" width={'100'} height={'100'} />
                  </div>
                  <div className="details flex flex-col justify-end">
                      <h4>Brian Williams</h4>
                      <p>Social Media Specialist</p>
                  </div>
                  <div className="link">
                    <Link className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full" href={'#'}>
                      <img src="/linkedin-green.svg" alt="linkedin-green" width={'17'} height={'17'} />
                    </Link>
                  </div>
               </div>
               <div className="description">
                <p>
                4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
                </p>
               </div>
            </div>
          </div>
          <div className="px-4 w-full md:w-6/12 lg:w-4/12">
           <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
               <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
                  <div className="w-[100px] h-[100px]">
                    <img className="w-full h-full object-contain" src="/team-p-six.png" alt="p-cl" width={'100'} height={'100'} />
                  </div>
                  <div className="details flex flex-col justify-end">
                      <h4>Sarah Kim</h4>
                      <p>Content Creator</p>
                  </div>
                  <div className="link">
                    <Link className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full" href={'#'}>
                      <img src="/linkedin-green.svg" alt="linkedin-green" width={'17'} height={'17'} />
                    </Link>
                  </div>
               </div>
               <div className="description">
                <p>2+ years of experience in writing and editing 
                Skilled in creating compelling, SEO-optimized content for various industries</p>
               </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4 lg:pt-6">
            <Link className="btn" href={'#'}>See All Team</Link>
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
            <SwiperSlide>
              <div className="wrapper">
                <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                  <p className="text-white">
                    Working with Positivus has been a game-changer for us. Their
                    strategies helped us double our online reach in just six
                    months.
                  </p>
                </div>
                <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">
                  John Smith
                </div>
                <div className="text-lg lg:text-xl text-white">
                  Marketing Director at XYZ Corp
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper">
                <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                  <p className="text-white">
                    Working with Positivus has been a game-changer for us. Their
                    strategies helped us double our online reach in just six
                    months.
                  </p>
                </div>
                <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">
                  Sarah Lee
                </div>
                <div className="text-lg lg:text-xl text-white">CEO at ABC Ltd</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper">
                <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                  <p className="text-white">
                    Working with Positivus has been a game-changer for us. Their
                    strategies helped us double our online reach in just six
                    months.
                  </p>
                </div>
                <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">
                  David Brown
                </div>
                <div className="text-lg lg:text-xl text-white">
                  Head of Marketing at QRS Inc
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper">
                <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                  <p className="text-white">
                    Working with Positivus has been a game-changer for us. Their
                    strategies helped us double our online reach in just six
                    months.
                  </p>
                </div>
                <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">
                  David Brown
                </div>
                <div className="text-lg lg:text-xl text-white">
                  Head of Marketing at QRS Inc
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper">
                <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                  <p className="text-white">
                    Working with Positivus has been a game-changer for us. Their
                    strategies helped us double our online reach in just six
                    months.
                  </p>
                </div>
                <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">
                  David Brown
                </div>
                <div className="text-lg lg:text-xl text-white">
                  Head of Marketing at QRS Inc
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrapper">
                <div className="p-6 lg:p-12 border border-primary rounded-[9px]">
                  <p className="text-white">
                    Working with Positivus has been a game-changer for us. Their
                    strategies helped us double our online reach in just six
                    months.
                  </p>
                </div>
                <div className="text-xl lg:text-2xl pt-3 lg:pt-5 text-primary">
                  David Brown
                </div>
                <div className="text-lg lg:text-xl text-white">
                  Head of Marketing at QRS Inc
                </div>
              </div>
            </SwiperSlide>
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
        <div className="bg-gray-200 py-8 lg:py-14 rounded-xl-custom
            lg:bg-[url('/contact-us-section-image.png')]
            lg:bg-no-repeat lg:bg-[center_right_-320px] lg:bg-auto">
              <div className="flex flex-wrap justify-between">
                 <div className="px-10 lg:pl-20 w-full lg:w-6/12">
                 <form className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center">
<div className="flex items-center gap-x-2">
  <input type="radio" name="quote" id="say-hi" required/>
  <label htmlFor="say-hi">Say Hi</label>
</div>
<div className="flex items-center gap-x-2">
  <input type="radio" name="quote" id="get-quote" required  />
  <label htmlFor="get-quote">Get a Quote</label>
</div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="name" className="text-base	lg:text-lg text-black font-normal">Name</label>
                    <input id="name" name="name" type="text" className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[40px] lg:h-[60px] placeholder:font-normal" placeholder="Name" required/>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email" className="text-base	lg:text-lg text-black font-normal">Email*</label>
                    <input id="email" name="email" type="email" className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[40px] lg:h-[60px] placeholder:font-normal" placeholder="Email" required/>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="message" className="text-base	lg:text-lg text-black font-normal">Message*</label>
                    <textarea id="message" name="message" className="border border-black w-full rounded-[9px] bg-white px-5 lg:px-7 py-3 lg:py-4 placeholder:text-lg h-[100px] lg:h-[190px] overflow-y-auto placeholder:font-normal" placeholder="Message" required/>
                  </div>
                  <div>
                    <button type="submit" className="w-full btn">Send Message</button>
                  </div>
                 </form>
                 </div>
              </div>
          </div>
      </div>
    </section>


    <Footer/>

  </>);
}

