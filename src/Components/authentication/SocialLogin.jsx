const socialsItems = [
  {
    id: 1,
    icon: "/assets/social login icon/facebook.svg",
    name: "Facebook"
  },
  {
    id: 2,
    icon: "/assets/social login icon/google.svg",
    name: "Google"
  },
  {
    id: 3,
    icon: "/assets/social login icon/github.svg",
    name: "Github"
  }
]



const SocialLogin = () => {
  return (
    <div className="flex gap-14">
      {
        socialsItems.map(item =>
          <span key={item.id} className="p-3 border-[2px] border-[#444444] rounded-full cursor-pointer">
            <img className="size-6" src={item.icon} alt={item.name + " Logo"} />
          </span>
        )
      }
    </div>
  );
};

export default SocialLogin;