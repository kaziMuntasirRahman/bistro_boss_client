const Footer = () => {
  return (
    <footer className="text-white text-center">
      <section className="h-[400px] flex">
        <div className="w-1/2 h-full bg-[#1F2937] flex flex-col items-center justify-center">
          <div className="text-[32px] font-medium font-['Inter'] mb-6">CONTACT US</div>
          <div className="text-xl font-medium font-['Inter'] leading-9">123 ABS Street, Uni 21, Bangladesh</div>
          <div className="text-xl font-medium font-['Inter'] leading-9">+88 123456789</div>
          <div className="text-xl font-medium font-['Inter'] leading-9">Mon - Fri: 08:00 - 22:00</div>
          <div className="text-xl font-medium font-['Inter'] leading-9">Sat - Sun: 10:00 - 23:00</div>
        </div>
        <div className="w-1/2 h-full bg-[#111827] flex flex-col items-center justify-center">
          <div className="text-[32px] font-medium font-['Inter'] mb-6">FOLLOW US</div>
          <div className="w-[345px] text-xl font-medium font-['Inter'] leading-9">Join us on social media</div>
          <div className="flex gap-8 mt-8">
            <img src="assets/social icons/facebook.png" />
            <img src="assets/social icons/instagram.png" />
            <img src="assets/social icons/twitter.png" />
          </div>
        </div>
      </section>
      <section className="h-[70px] bg-black flex items-center justify-center">Copyright © CulinaryCloud. All rights reserved.</section>
    </footer>
  );
};

export default Footer;