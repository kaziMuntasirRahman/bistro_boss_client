import { Helmet } from "react-helmet-async";
import OfferedMenu from "../Components/menu/OfferedMenu";
import SectionTemplate from "../Components/menu/SectionTemplate";
import PageCover from "../Components/shared/PageCover";
import useMenu from "../hooks/useMenu";

const Menu = () => {
  const [menu, loading] = useMenu()
  const salad = menu.filter(item => item.category === 'salad')
  const drinks = menu.filter(item => item.category === 'drinks')
  const popular = menu.filter(item => item.category === 'popular')
  const dessert = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const offered = menu.filter(item => item.category === 'offered')


  // const [menu, setMenu] = useState([]);
  // const [salad, SetSalad] = useState([]);
  // const [drinks, setDrinks] = useState([]);
  // const [popular, setPopular] = useState([]);
  // const [dessert, setDessert] = useState([]);
  // const [pizza, setPizza] = useState([]);
  // const [soup, setSoup] = useState([]);
  // const [offered, setOffered] = useState([]);

  // useEffect(() => {
  //   fetch('/data/menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setMenu(data);

  //       // Filtering categories from fetched 'data' directly
  //       SetSalad(data.filter(m => m.category === 'salad'));
  //       setDrinks(data.filter(m => m.category === 'drinks'));
  //       setPopular(data.filter(m => m.category === 'popular'));
  //       setDessert(data.filter(m => m.category === 'dessert'));
  //       setPizza(data.filter(m => m.category === 'pizza'));
  //       setSoup(data.filter(m => m.category === 'soup'));
  //       setOffered(data.filter(m => m.category === 'offered'));
  //     });
  // }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <PageCover
        img="/assets/menu/banner3.jpg"
        head="Our Menu"
        subHead="Would you like to try a dish?"
      />
      <OfferedMenu />

      {/* total menu item: {menu.length} */}
      <SectionTemplate
        bannerImg="/assets/menu/dessert-bg.jpeg"
        bannerHead="Desserts"
        bannerSubHead="Hello from the other side, I must've called a thousand times to tell you I'm sorry for breaking your heart"
        menu={dessert}
        sectionHead=""
        sectionSubHead=""
      />
      <SectionTemplate
        bannerImg="/assets/menu/pizza-bg.jpg"
        bannerHead="Pizza"
        bannerSubHead="Hello from the other side, I must've called a thousand times to tell you I'm sorry for breaking your heart"
        menu={pizza}
        sectionHead=""
        sectionSubHead=""
      />
      <SectionTemplate
        bannerImg="/assets/menu/salad-bg.jpg"
        bannerHead="Salads"
        bannerSubHead="Hello from the other side, I must've called a thousand times to tell you I'm sorry for breaking your heart"
        menu={salad}
        sectionHead=""
        sectionSubHead=""
      />
      <SectionTemplate
        bannerImg="/assets/menu/soup-bg.jpg"
        bannerHead="Soup"
        bannerSubHead="Hello from the other side, I must've called a thousand times to tell you I'm sorry for breaking your heart"
        menu={soup}
        sectionHead=""
        sectionSubHead=""
      />
    </div>
  );
};

export default Menu;
