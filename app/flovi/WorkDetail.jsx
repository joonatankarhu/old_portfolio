const WorkDetail = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg">
        <div className="flex flex-col items-start gap-0">
          <div className="w-full flex justify-center">
            <img
              src={data.imageSrc}
              alt={data.title}
              className="w-full object-contain"
            />
          </div>

          <div className="w-full px-6 pt-4 lg:pt-8 pb-14 lg:pb-20 text-center">
            <h2 className="text-2xl font-semibold mb-3">{data.title}</h2>

            <p className="text-gray-800 mb-4">{data.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
