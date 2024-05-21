import logo from './logo.jpeg'
import search from './search.jpeg'
import cart from './cart.jpeg'
import menu_1 from "./salad.jpeg"
import menu_2 from "./rolls.jpeg"
import menu_3 from "./andwich.jpeg"
import menu_4 from "./cake.jpeg"
import menu_5 from "./veg.jpeg"
import menu_6 from "./pasta.jpeg"
import menu_7 from "./noodels.jpeg"
import menu_8 from "./deserrt.jpeg"

import food_1 from './dish1.jpeg'
import food_2 from "./dish2.jpeg"
import food_3 from "./dish3.jpeg"
import food_4 from "./dish4.jpeg"
import food_5 from "./dish5.jpeg"
import food_6 from "./noodels.jpeg"
import food_7 from "./dish7.jpeg"
import food_8 from "./dish8.jpeg"
import food_9 from "./dish9.jpeg"
import food_10 from './eggmeal.jpeg'
import food_11 from "./jollof.jpeg"
import food_12 from './jollof2.jpeg'
import food_13 from './meal1.jpeg'
import food_14 from './meal6.jpeg'
import food_15 from './meall.jpeg'
import food_16 from './mmela.jpeg'
import food_17 from './plate1.jpeg'
import food_18 from './plate2.jpeg'
import food_19 from './pasta.jpeg'
import food_20 from './icecream.jpeg'  

import rating from './rating.jpeg'
import playStore from './googleplay.jpeg'
import appStore from './appstore.jpeg'



export const assets = {
    logo,
    search,
    cart,
    rating,
    playStore,
    appStore
}

export const menu_list = [
    {
        menu_name:"Salad",
        menu_image:menu_1,
    },
    {
        menu_name:"Rolls",
        menu_image:menu_2,
    },
    {
        menu_name:"Sandwich",
        menu_image:menu_3,
    },
     {
        menu_name:"Cake",
        menu_image:menu_4,
    },
     {
        menu_name:"Pure Veg",
        menu_image:menu_5,
    },
     {
        menu_name:"Pasta",
        menu_image:menu_6,
    },
    {
        menu_name:"Noodles",
        menu_image:menu_7,
    },
     {
        menu_name:"Desert",
        menu_image:menu_8,
    },
]



export const food_list = [
    {
      _id: "1",
      name: "Greek Salad",
      image: food_1,
      price: 12,
      description: "Food salad with spicy chicken",
      category: "salad"
    },
    {
      _id: "2",
      name: "Veg Salad",
      image: food_2,
      price: 18,
      description: "Fruit salad with spicy chicken",
      category: "salad"
    },
    {
      _id: "3",
      name: "Margherita Pizza",
      image: food_3,
      price: 10,
      description: "Classic pizza with tomato, mozzarella, and basil",
      category: "pizza"
    },
    {
      _id: "4",
      name: "Pasta Carbonara",
      image: food_4,
      price: 15,
      description: "Spaghetti with creamy egg sauce, pancetta, and Parmesan cheese",
      category: "pasta"
    },
    {
      _id: "5",
      name: "Sushi Platter",
      image: food_5,
      price: 25,
      description: "Assorted sushi rolls with soy sauce and wasabi",
      category: "sushi"
    },
    {
      _id: "6",
      name: "BBQ Ribs",
      image: food_6,
      price: 20,
      description: "Slow-cooked pork ribs with tangy barbecue sauce",
      category: "grill"
    },
    {
      _id: "7",
      name: "Chicken Tikka Masala",
      image: food_7,
      price: 16,
      description: "Tender chicken pieces cooked in a creamy tomato-based sauce",
      category: "curry"
    },
    {
      _id: "8",
      name: "Beef Burger",
      image: food_8,
      price: 14,
      description: "Juicy beef patty with lettuce, tomato, and melted cheese in a sesame seed bun",
      category: "burger"
    },
    {
      _id: "9",
      name: "Tiramisu",
      image: food_9,
      price: 8,
      description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese",
      category: "dessert"
    },
    {
      _id: "10",
      name: "Egg Breakfast",
      image: food_10,
      price: 10,
      description: "Scrambled eggs, bacon, and toast served with butter and jam",
      category: "breakfast"
    },
    {
      _id: "11",
      name: "Jollof Rice",
      image: food_11,
      price: 14,
      description: "West African rice dish cooked in a spicy tomato sauce with vegetables and meat",
      category: "rice"
    },
    {
      _id: "12",
      name: "Jollof Rice 2",
      image: food_12,
      price: 16,
      description: "Another variation of the popular West African rice dish with additional spices and flavors",
      category: "rice"
    },
    {
      _id: "13",
      name: "Grilled Chicken",
      image: food_13,
      price: 18,
      description: "Tender grilled chicken breast served with steamed vegetables and rice",
      category: "grill"
    },
    {
      _id: "14",
      name: "Pasta Primavera",
      image: food_14,
      price: 16,
      description: "Colorful pasta dish with assorted vegetables and a light cream sauce",
      category: "pasta"
    },
    {
      _id: "15",
      name: "Vegetarian Curry",
      image: food_15,
      price: 12,
      description: "Spicy curry made with mixed vegetables and coconut milk, served with rice",
      category: "curry"
    },
    {
      _id: "16",
      name: "Mango Mousse",
      image: food_16,
      price: 8,
      description: "Smooth and creamy mango-flavored dessert topped with whipped cream",
      category: "dessert"
    },
    {
      _id: "17",
      name: "Seafood Platter",
      image: food_17,
      price: 30,
      description: "Assorted seafood including shrimp, mussels, and calamari served with garlic butter",
      category: "seafood"
    },
    {
      _id: "18",
      name: "Fruit Salad",
      image: food_18,
      price: 10,
      description: "Fresh fruit salad with a drizzle of honey and a sprinkle of mint leaves",
      category: "salad"
    },
    {
      _id: "19",
      name: "Creamy Mushroom Risotto",
      image: food_19,
      price: 20,
      description: "Italian rice dish cooked with mushrooms, onions, and Parmesan cheese",
      category: "rice"
    },
    {
      _id: "20",
      name: "Vanilla Ice Cream",
      image: food_20,
      price: 6,
      description: "Creamy vanilla-flavored ice cream served in a crispy waffle cone",
      category: "dessert"
    },
  ];