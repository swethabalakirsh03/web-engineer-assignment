import hoodieImg from "$lib/assets/shopping.webp";
import SummerImg from "$lib/assets/Raina_Dress_.webp";
import FormalImg from "$lib/assets/formal_white.webp";
import JacketImg from "$lib/assets/Jacket.webp";
import Oversizedsimg from "$lib/assets/Oversizedshirt.webp";
import FitTrousers from "$lib/assets/FitTrousers.webp";

/// list of images
import SummerImg1 from "$lib/assets/Raina_Dress1.webp";
import SummerImg2 from "$lib/assets/Raina_Dress2.webp";

/// list of images
import hoodieImg1 from "$lib/assets/hoodie1.webp";
import hoodieImg2 from "$lib/assets/hoodie2.webp";

import FormalImg2 from "$lib/assets/formal_white2.webp";
import FormalImg3 from "$lib/assets/formal_white3.webp";

import JacketImg1 from "$lib/assets/jacket1.webp";

import Oversizedsimg1 from "$lib/assets/Oversizedshirt1.webp";
import Oversizedsimg2 from "$lib/assets/Oversizedshirt2.webp";
import Oversizedsimg3 from "$lib/assets/Oversizedshirt3.webp";

import FitTrousers1 from "$lib/assets/FitTrousers1.webp";
import FitTrousers2 from "$lib/assets/FitTrousers2.webp";
import FitTrousers3 from "$lib/assets/FitTrousers3.webp";

export const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    category: "Men",
    price: 1499,
    oldPrice: 1999,
    desc: "Soft cotton hoodie for everyday comfort and warmth.",
    badge: "Sale",
    popular: true,
    image: hoodieImg,
    list: [hoodieImg, hoodieImg1, hoodieImg2],
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    category: "Women",
    price: 1999,
    oldPrice: null,
    desc: "Lightweight floral dress perfect for sunny days.",
    badge: "New",
    popular: false,
    image: SummerImg,
    list: [SummerImg, SummerImg1, SummerImg2],
  },
  {
    id: 3,
    name: "Formal White Shirt",
    category: "Formal",
    price: 1299,
    oldPrice: 1599,
    desc: "Crisp and clean shirt ideal for office wear.",
    badge: "Sale",
    popular: false,
    image: FormalImg,
    list: [FormalImg, FormalImg2, FormalImg3],
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "Casual",
    price: 2499,
    oldPrice: null,
    desc: "Trendy denim jacket for a stylish look.",
    badge: "Popular",
    popular: true,
    image: JacketImg,
    list: [JacketImg, JacketImg1],
  },
  {
    id: 5,
    name: "Oversized T-shirt",
    category: "Casual",
    price: 999,
    oldPrice: null,
    desc: "Relaxed fit t-shirt for everyday street style.",
    badge: null,
    popular: false,
    image: Oversizedsimg,
    list: [Oversizedsimg, Oversizedsimg1, Oversizedsimg2, Oversizedsimg3],
  },
  {
    id: 6,
    name: "Slim Fit Trousers",
    category: "Formal",
    price: 1799,
    oldPrice: 2199,
    desc: "Perfect fit trousers for formal occasions.",
    badge: "Sale",
    popular: false,
    image: FitTrousers,
    list: [FitTrousers, FitTrousers1, FitTrousers2, FitTrousers3],
  },

  // 🔽 NEW PRODUCTS
];
