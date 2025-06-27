import itemImg from "../assets/img/items.jpeg";
import itemImg2 from "../assets/img/itemes1.jpeg";
import thumb1 from "../assets/img/1.jpeg";
import thumb2 from "../assets/img/2.jpeg";
import thumb3 from "../assets/img/3.jpeg";
import thumb4 from "../assets/img/4.jpeg"; // ✅ This was missing

export const products = [
  {
    id: 1,
    name: "3 Flavour Combo Pack (Thekua 250g each)",
    img: itemImg2,
    thumbnails: [itemImg2, thumb1, thumb2 , thumb3],
    originalPrice: 1400,
    discountedPrice: 749,
    discount: "47%",
    rating: 5,
  },
  {
    id: 2,
    name: "Maida & Sooji Thekua 250g",
    img: itemImg,
    thumbnails: [itemImg, thumb3, thumb4 , thumb2],
    originalPrice: 499,
    discountedPrice: 270,
    discount: "46%",
    rating: 5,
  },
  {
    id: 3,
    name: "Sooji & Coconut + Wheat & Jaggery Thekua (Combo Pack)",
    img: itemImg2,
    thumbnails: [itemImg2, thumb1, thumb3 , thumb4],
    originalPrice: 1000,
    discountedPrice: 499,
    discount: "50%",
    rating: 5,
  },
  {
    id: 4,
    name: "Sooji & Coconut Desi Ghee Thekua 250g",
    img: itemImg,
    thumbnails: [itemImg, thumb2, thumb4, thumb1],
    originalPrice: 499,
    discountedPrice: 280,
    discount: "44%",
    rating: 5,
  },
];
