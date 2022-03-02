import { BiHotel, BiMapAlt, BiRestaurant, BiStar } from "react-icons/bi";

export const data = [
  {
    name: "Choose Ratings",
    icons: <BiStar />,
    menu: "All Ratings",
    submenus: [1, 2, 3, 4, 5]
  },
  {
    name: "Restaurants",
    icons: <BiRestaurant fontSize={25} />
  },
  {
    name: "Hotels",
    icons: <BiHotel fontSize={25} />
  },
  {
    name: "Attractions",
    icons: <BiMapAlt />
  }
];
