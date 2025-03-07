import { Helmet } from "react-helmet-async";
import SectionHead from "../../../Components/dashboard/SectionHead";
import { useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "../../../styles/pan_loader.css"
import Swal from "sweetalert2";

const AddItems = () => {
  // const img_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const [loading, setLoading] = useState(false)
  const imgbb_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;
  const axiosSecure = useAxiosSecure()
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    category: "",
    price: 0,
    details: "",
    image: null
  })

  const handleAddItem = async (e) => {
    e.preventDefault()
    const { name, category, price, details, image } = newRecipe;
    console.log(newRecipe)
    console.log(typeof (price))
    const imageFile = { image: image }
    // console.log(imageFile)
    setLoading(true)
    try {
      const imageUploadResponse = await axios.post(imgbb_api_url, imageFile,
        {
          headers: {
            "content-type": 'multipart/form-data'
          }
        })

      console.log(imageUploadResponse.data);
      if (imageUploadResponse.data.success) {
        console.log("Image has been successfully uploaded")
      }

      const newRecipe = { name, recipe: details, image: imageUploadResponse.data?.data?.url, category, price: parseFloat(price) }

      const addItemResponse = await axiosSecure.post('/menu', newRecipe)
      console.log(addItemResponse.data)

      if (addItemResponse.data.insertedId) {
        // alert("Item has been added.")
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: name + " has been added.",
          showConfirmButton: false,
          timer: 2500
        });
        e.target.reset()
      }
    }
    catch (err) {
      console.log(err)
      alert("Sorry, failed to add item.")
    } finally {
      setLoading(false)
    }

  }


  return (
    <div>
      <Helmet>
        <title>Dashboard | Add Item</title>
      </Helmet>
      <SectionHead title="What's new??" heading="Add an Item" />

      <form onSubmit={handleAddItem} className="bg-[#F3F3F3] p-12 flex flex-col items-start">

        {/* loading spinner */}
        {loading &&
          <div className="h-full w-full absolute top-0 left-0  bg-slate-100/50 flex items-center justify-center">
            <span className="loader scale-150" />
          </div>
        }

        <div className="flex flex-col gap-2 mb-3 w-full">
          <label className="text-[#444444] text-lg font-semibold font-['Inter'] ml-1">Recipe name*</label>
          <input
            type="text"
            className="w-full bg-white rounded-lg border-[1px] border-[#E8E8E8] py-4 px-5 placeholder:text-[#a1a1a1] placeholder:font-['Inter'] h-[72px]"
            placeholder="Recipe name"
            onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
          // required
          />
        </div>
        <section className="flex gap-5 justify-between w-full">
          {/* category input */}

          <div className="flex flex-col gap-2 mb-3 w-full">
            <label className="text-[#444444] text-lg font-semibold font-['Inter'] ml-1">Category*</label>
            <select
              defaultValue="Category"
              className="select w-full bg-white rounded-lg border-[#E8E8E8] focus:border-black px-5 focus:outline-none h-[72px] text-[#A1A1A1] font-['Inter']"
              onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value.toLowerCase() })}
            >
              <option disabled={true} className="text-[#A1A1A1] font-['Inter']">Category</option>
              <option className="font-['Inter']">Salad</option>
              <option className="font-['Inter']">Pizza</option>
              <option className="font-['Inter']">Soup</option>
              <option className="font-['Inter']">Dessert</option>
              <option className="font-['Inter']">Drinks</option>
            </select>
          </div>
          {/* price input */}
          <div className="flex flex-col gap-2 mb-3 w-full">
            <label className="text-[#444444] text-lg font-semibold font-['Inter'] ml-1">Price*</label>
            <input
              type="number"
              step={0.01}
              className="w-full bg-white rounded-lg border-[1px] border-[#E8E8E8] py-4 px-5 placeholder:text-[#a1a1a1] placeholder:font-['Inter'] h-[72px]"
              placeholder="Price"
              onChange={(e) => setNewRecipe({ ...newRecipe, price: e.target.value })}
            // required
            />
          </div>
        </section>
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label className="text-[#444444] text-lg font-semibold font-['Inter'] ml-1">Details*</label>
          <textarea
            rows={4}
            type="text"
            className="w-full bg-white rounded-lg border-[1px] border-[#E8E8E8] py-4 px-5 placeholder:text-[#a1a1a1] placeholder:font-['Inter']"
            placeholder="details"
            onChange={(e) => setNewRecipe({ ...newRecipe, details: e.target.value })}
          // required
          />
        </div>
        <input type="file" className="file-input h-14 rounded-none mt-3 mb-6" onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.files[0] })} />
        <button type="submit" className="bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none py-4 px-8 text-white text-xl font-bold font-['Inter'] flex items-center gap-3">
          <span className="">Add Item</span>
          <ImSpoonKnife />
        </button>
      </form >




    </div >
  );
};

export default AddItems;