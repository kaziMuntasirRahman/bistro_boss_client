const SubmitButton = ({name="Submit"}) => {
  return (
    <button
    type="submit"
    className=" bg-[#d1a054]/70 w-[450px] h-[60px] rounded-lg border border-[#d0d0d0] text-white text-lg font-bold font-['Inter'] mt-2 mb-4">
      {name}
      </button>
  );
};

export default SubmitButton;