import Link from "next/link";

const TeamMemberCard = ({ name, role, imgUrl, linkedinUrl, description }) => {
  return (
    <div className="px-4 w-full md:w-6/12 lg:w-4/12">
      <div className="border border-black rounded-xl-custom py-5 px-4 lg:px-8 lg:py-10 shadow-md h-full">
        <div className="flex justify-between pb-7 border-b border-b-black mb-7 gap-x-2">
          <div className="w-[100px] h-[100px]">
            <img
              className="w-full h-full object-contain"
              src={imgUrl}
              alt={name}
              width="100"
              height="100"
            />
          </div>
          <div className="details flex flex-col justify-end">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
          <div className="link">
            <Link
              className="h-[34px] w-[34px] flex justify-center items-center bg-black rounded-full"
              href={linkedinUrl}
              target="_blank"
            >
              <img
                src="/linkedin-green.svg"
                alt={`${name} LinkedIn`}
                width="17"
                height="17"
              />
            </Link>
          </div>
        </div>
        <div className="description">
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
