import { useContext, useState } from "react";
import SectionHead from "../../../Components/dashboard/SectionHead";
import StarRating from "../../../Components/dashboard/StarRating";
import { FaTelegramPlane } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);

  const [recipe, setRecipe] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [details, setDetails] = useState("");


  const handleAddReview = (e) => {
    e.preventDefault();
    if (rating < 1) {
      alert("Please rate your desired recipe out of 5.")
      return;
    }
    const newReview = { name: user?.displayName, userEmail: user?.email, rating, recipe, suggestion, details };

    axiosSecure.post('/reviews', { ...newReview })
      .then(res => {
        if (res.data.insertedId) {
          alert("Your review has been posted.")
        } else {
          alert("Sorry! Your review couldn't be posted.")
        }
      })
    setRating(0);
    setRecipe("");
    setSuggestion("");
    setDetails("");
  }
  return (
    <div className="">
      <SectionHead title="Sharing is Caring!!!" heading="Give a Review..." />
      <section className="flex flex-col gap-8 py-[50px] px-12 md:px-32 items-center w-full bg-[#f3f3f3]">
        <h2 className="text-[#151515] text-[32px] text-center font-medium font-['Cinzel']">Rate US!</h2>
        {/* rating */}
        <StarRating
          rating={rating}
          setRating={setRating}
        />
        {/* add review form */}
        <form onSubmit={handleAddReview} className="w-full mx-auto mt-10 flex flex-col items-center">
          <Input
            label="Which recipe you liked most?"
            placeholder="Recipe you liked most"
            setValue={setRecipe}
            required
          />
          <Input
            label="Do you have any suggestion for us?"
            placeholder="Suggestion"
            setValue={setSuggestion}
            required
          />
          <Input
            label="Kindly express your care in a short way."
            placeholder="Review in detail"
            setValue={setDetails}
            rows={4}
          />
          <button className="flex items-center gap-2.5 py-4 px-8 my-4 self-baseline text-lg text-white font-bold bg-gradient-to-r from-[#835d23] to-[#b58130]" type="submit">
            <p>Send Review</p>
            <FaTelegramPlane />
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddReview;


const Input = ({ label = "Recipe you liked most", setValue, placeholder = "Enter Your Suggestion", required = false, rows }) => {
  return (
    <div className="my-3 w-full">
      <p className="text-[#444444] text-xl font-semibold font-['Inter'] mb-4">{label}</p>
      {
        rows ?
          <textarea
            rows={rows}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="w-full px-[30px] py-6 bg-white rounded-lg placeholder:text-[#a1a1a1] placeholder:text-base placeholder:font-normal placeholder:font-['Inter']"
            placeholder={placeholder}
            required={required}
          /> :
          <input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="w-full px-[30px] py-6 bg-white rounded-lg placeholder:text-[#a1a1a1] placeholder:text-base placeholder:font-normal placeholder:font-['Inter']"
            placeholder={placeholder}
            required={required}
          />
      }
    </div>
  )
}