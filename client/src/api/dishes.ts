
export interface Dish {
  id: number
  name: string
  nameUz: string
  description: string
  descriptionUz: string
  category: string
  price: number
  image: string
  ingredients: string[]
  preparationTime: string
  isPopular: boolean
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Plov (Osh)",
    nameUz: "Osh",
    description: "Traditional Uzbek rice dish cooked with meat, carrots, and special spices",
    descriptionUz: "O'zbekistonning eng mashhur milliy taomi, go'sht, sabzi va maxsus ziravorlar bilan tayyorlangan",
    category: "Main Course",
    price: 35000,
    image: "/uzbek-plov-with-meat-and-carrots.jpg",
    ingredients: ["Rice", "Lamb/Beef", "Carrots", "Onions", "Cumin", "Garlic"],
    preparationTime: "2-3 hours",
    isPopular: true,
  },
  {
    id: 2,
    name: "Lagman",
    nameUz: "Lag'mon",
    description: "Hand-pulled noodles with meat and vegetables in savory broth",
    descriptionUz: "Qo'lda cho'zilgan xamir, go'sht va sabzavotlar bilan tayyorlangan sho'rva",
    category: "Soup/Noodles",
    price: 28000,
    image: "/uzbek-lagman-noodles-with-vegetables.jpg",
    ingredients: ["Hand-pulled noodles", "Beef", "Bell peppers", "Tomatoes", "Garlic", "Spices"],
    preparationTime: "1-1.5 hours",
    isPopular: true,
  },
  {
    id: 3,
    name: "Manti",
    nameUz: "Manti",
    description: "Steamed dumplings filled with seasoned meat and onions",
    descriptionUz: "Bug'da pishirilgan, go'sht va piyoz bilan to'ldirilgan chuchvara",
    category: "Dumplings",
    price: 25000,
    image: "/uzbek-manti-steamed-dumplings.jpg",
    ingredients: ["Dough", "Ground meat", "Onions", "Black pepper", "Cumin"],
    preparationTime: "1.5 hours",
    isPopular: true,
  },
  {
    id: 4,
    name: "Shashlik",
    nameUz: "Shashlik",
    description: "Grilled meat skewers marinated in spices and vinegar",
    descriptionUz: "Ziravorlar va sirka bilan marinadlangan, mangalda pishirilgan go'sht",
    category: "Grilled",
    price: 30000,
    image: "/uzbek-shashlik-grilled-meat-skewers.jpg",
    ingredients: ["Lamb/Beef", "Onions", "Vinegar", "Black pepper", "Salt"],
    preparationTime: "30 minutes + marinating",
    isPopular: true,
  },
  {
    id: 5,
    name: "Samsa",
    nameUz: "So'msa",
    description: "Baked pastry filled with meat, onions, and spices",
    descriptionUz: "Go'sht, piyoz va ziravorlar bilan to'ldirilgan, tandirda pishirilgan pirojnoe",
    category: "Pastry",
    price: 8000,
    image: "/uzbek-samsa-meat-pastry.jpg",
    ingredients: ["Puff pastry", "Ground meat", "Onions", "Cumin", "Black pepper"],
    preparationTime: "1 hour",
    isPopular: true,
  },
  {
    id: 6,
    name: "Norin",
    nameUz: "No'rin",
    description: "Cold noodle dish with horse meat and vegetables",
    descriptionUz: "Ot go'shti va sabzavotlar bilan sovuq xamir taomi",
    category: "Cold Dish",                                                                                                                                                              
    price: 32000,
    image: "/uzbek-norin-cold-noodles.jpg",
    ingredients: ["Thin noodles", "Horse meat/Beef", "Onions", "Radish", "Spices"],
    preparationTime: "2 hours",
    isPopular: false,
  },
  {
    id: 7,
    name: "Mastava",
    nameUz: "Mastava",
    description: "Hearty rice soup with meat and vegetables",
    descriptionUz: "Go'sht va sabzavotlar bilan to'yimli guruch sho'rvasi",
    category: "Soup",
    price: 22000,
    image: "/uzbek-mastava-rice-soup.jpg",
    ingredients: ["Rice", "Lamb", "Carrots", "Tomatoes", "Potatoes", "Spices"],
    preparationTime: "1.5 hours",
    isPopular: false,
  },
  {
    id: 8,
    name: "Dimlama",
    nameUz: "Dimlama",
    description: "Slow-cooked stew with meat and assorted vegetables",
    descriptionUz: "Go'sht va turli sabzavotlar bilan sekin pishirilgan qovurma",
    category: "Stew",
    price: 30000,
    image: "/uzbek-dimlama-vegetable-stew.jpg",
    ingredients: ["Lamb/Beef", "Potatoes", "Cabbage", "Carrots", "Tomatoes", "Bell peppers"],
    preparationTime: "2 hours",
    isPopular: false,
  },
  {
    id: 9,
    name: "Shurva",
    nameUz: "Sho'rva",
    description: "Traditional meat soup with vegetables and herbs",
    descriptionUz: "Sabzavotlar va ko'katlar bilan an'anaviy go'sht sho'rvasi",
    category: "Soup",
    price: 20000,
    image: "/uzbek-shurva-meat-soup.jpg",
    ingredients: ["Lamb", "Potatoes", "Carrots", "Onions", "Tomatoes", "Fresh herbs"],
    preparationTime: "1.5 hours",
    isPopular: true,
  },
  {
    id: 10,
    name: "Chuchvara",
    nameUz: "Chuchvara",
    description: "Small dumplings in clear broth",
    descriptionUz: "Tiniq sho'rvada kichik chuchvaralar",
    category: "Soup/Dumplings",
    price: 24000,
    image: "/uzbek-chuchvara-dumplings-soup.jpg",
    ingredients: ["Small dumplings", "Ground meat", "Onions", "Broth", "Fresh herbs"],
    preparationTime: "1.5 hours",
    isPopular: true,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const popular = searchParams.get("popular")

  let filteredDishes = dishes

  // Filter by category if provided
  if (category) {
    filteredDishes = filteredDishes.filter((dish) => dish.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by popular if provided
  if (popular === "true") {
    filteredDishes = filteredDishes.filter((dish) => dish.isPopular)
  }

  return NextResponse.json({
    success: true,
    count: filteredDishes.length,
    dishes: filteredDishes,
  })
}
