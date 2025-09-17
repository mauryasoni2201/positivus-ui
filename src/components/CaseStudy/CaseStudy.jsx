import Link from "next/link";

const CaseStudy = ({ description, linkUrl }) => {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 lg:border-r border-white text-white px-4 lg:px-16 last:border-0">
      <p className="text-white pb-5">{description}</p>
      <Link
        href={linkUrl}
        className="text-lg lg:text-xl text-primary font-normal transition-all ease-in-out duration-400 hover:text-grey"
      >
        Learn More
      </Link>
    </div>
  );
};

export default CaseStudy;