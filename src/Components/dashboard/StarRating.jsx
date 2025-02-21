import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const [displayRating, setDisplayRating] = useState(rating);

  return (
    <section className="flex items-center justify-center mx-auto">
      {
        Array(5).fill().map((_, index) =>
          <FaStar
            key={index}
            onMouseOver={() => setDisplayRating(index + 1)}
            onMouseLeave={() => setDisplayRating(rating)}
            onClick={() => setRating(index + 1)}
            className={`${displayRating > index ? "text-[#e49d34]" : "text-[#D0D0D0]"} cursor-pointer brightness-100 px-1 text-7xl`} />
        )
      }
    </section>
  );
};

export default StarRating;