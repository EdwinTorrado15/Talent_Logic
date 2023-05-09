import { FiStar } from "react-icons/fi";

const Stars = ({ rating }) => {

  



  const starCount = Math.round(rating);
  const starPercentage = (rating / 10) * 100;

  const stars = Array(5)
    .fill(null)
    .map((_, index) => {
      const starClass = index < starCount ? "fill-yellow-400" : "text-gray-400";
      const starWidth = index === starCount - 1 ? `${starPercentage}%` : "100%";

      return (
        <div key={index} className="relative">
          <FiStar className={`${starClass} w-full h-full`} />
          <div className="absolute top-0 left-0 overflow-hidden w-0 h-full">
            <FiStar
              className="fill-yellow-400 w-full h-full"
              style={{ width: starWidth }}
            />
          </div>
        </div>
      );
    });

  return <span className="flex justify-center items-center">{stars}</span>;
};

export default Stars;
