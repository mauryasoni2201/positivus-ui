const CompanyIcon = ({imgUrl}) => {
  return (
    <div className="w-6/12 lg:w-2/12 inline-flex justify-center items-center px-4">
        <img className="object-contain" src={imgUrl} alt="company-image" width={'124'} height={'48'} />
    </div>
  )
}

export default CompanyIcon;