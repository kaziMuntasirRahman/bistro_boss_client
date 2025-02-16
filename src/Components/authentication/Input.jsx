const Input = ({ label, placeholder, type, onChangeMethod, onKeyDownMethod, required=true }) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      {label && <label className="text-[#444444] text-lg font-semibold font-['Inter'] ml-1">{label}</label>
      }
      <input
        type={type}
        className="w-[450px] bg-white rounded-lg border border-[#d0d0d0] py-4 px-5 placeholder:text-[#a1a1a1] placeholder:font-['Inter']"
        placeholder={placeholder}
        onChange={(e) => onChangeMethod(e.target.value)}
        onKeyDown={onKeyDownMethod}
        required={required}
      />
    </div>
  );
};

export default Input;