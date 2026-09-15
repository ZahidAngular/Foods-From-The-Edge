export type Photo = { src: string; width: number; height: number }

export type Product = {
  slug: string
  name: string
  description: string
  character: string
  serving: string
  overview: string
  highlights: string[]
  dietary: string[]
  ingredients: string
  image: Photo
  // Tub shot; the dips and dukkah are photographed in both a bowl and the retail tub.
  tub?: Photo
}

export type RangeGroup = {
  id: string
  title: string
  intro?: string
  products: Product[]
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#range", label: "Our Range" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#retailers", label: "Retailers" },
  { href: "#foodservice", label: "Foodservice" },
]

export const range: RangeGroup[] = [
  {
    id: "dips",
    title: "Wholefood Dips",
    products: [
      {
        slug: "poppyseed-skordalia",
        name: "Poppyseed Skordalia",
        description:
          "A distinctive Mediterranean-style dip made with potato, poppyseeds, garlic, olive oil and dairy-free yoghurt.",
        character: "Creamy, savoury and quietly different.",
        serving: "Serve with warm bread, roasted vegetables or alongside a shared table.",
        overview: "Enjoy as a dip, condiment or spread",
        highlights: [],
        dietary: ["vegetarian", "gluten free"],
        ingredients:
          "Potatoes, canola and olive oil, yoghurt, vinegar, roasted almonds, poppyseeds, fresh garlic & salt",
        image: { src: "/products/poppyseed-skordalia.webp", width: 1200, height: 800 },
        tub: { src: "/products/poppyseed-skordalia-tub.webp", width: 1200, height: 800 },
      },
      {
        slug: "hommous",
        name: "Hommous",
        description: "A dependable classic made with chickpeas, tahini, garlic, lemon and spices.",
        character: "Smooth, balanced and useful well beyond the dip bowl.",
        serving: "Spread it, spoon it, share it—or eat it straight from the tub.",
        overview: "Enjoy as a dip, condiment or spread",
        highlights: [],
        dietary: ["vegetarian", "vegan", "gluten free"],
        ingredients:
          "Chickpeas, tahini, canola & olive oil, lemon juice, lime juice, fresh garlic, salt, spices & citric acid",
        image: { src: "/products/hommous.webp", width: 1200, height: 800 },
        tub: { src: "/products/hommous-tub.webp", width: 1200, height: 800 },
      },
      {
        slug: "french-artichoke",
        name: "French Artichoke",
        description:
          "Artichokes, roasted cashews, garlic and herbs brought together with dairy-free yoghurt and dairy-free parmesan.",
        character: "Rich, textured and deeply savoury.",
        serving: "A dip, spread and condiment in one.",
        overview: "Enjoy as a dip, condiment or spread",
        highlights: [],
        dietary: ["vegetarian"],
        ingredients:
          "Artichokes, roasted cashews, canola & olive oil, yoghurt, parmesan, fresh garlic, dijon mustard, salt & spices",
        image: { src: "/products/french-artichoke.webp", width: 1200, height: 800 },
        tub: { src: "/products/french-artichoke-tub.webp", width: 1200, height: 800 },
      },
      {
        slug: "cheesy-beetroot",
        name: "Cheesy Beetroot",
        description: "Earthy beetroot combined with dairy-free cheese, garlic, vinegar and spices.",
        character: "Bright in colour and generous in flavour.",
        serving: "Made for crackers, sandwiches, grazing boards and vegetables.",
        overview: "Enjoy as a dip, condiment or spread",
        highlights: [],
        dietary: ["vegetarian", "gluten free"],
        ingredients:
          "Cream cheese, Beetroot, canola and olive oil, vinegar, fresh garlic, salt & spices",
        image: { src: "/products/cheesy-beetroot.webp", width: 1200, height: 800 },
        tub: { src: "/products/cheesy-beetroot-tub.webp", width: 1200, height: 800 },
      },
      {
        slug: "sundried-tomato-cashew",
        name: "Sundried Tomato & Cashew",
        description: "Sundried tomatoes, roasted cashews, herbs and dairy-free cheese.",
        character:
          "Sweet, savoury and full-bodied, with the richness of nuts and the intensity of slow-ripened tomato.",
        serving: "",
        overview: "Enjoy as a dip, condiment or spread",
        highlights: [],
        dietary: ["vegetarian", "gluten free"],
        ingredients:
          "Cream cheese, canola & olive oil, sweet chilli sauce, sundried tomatoes, roasted cashew, fresh garlic, fresh coriander, salt & spices",
        image: { src: "/products/sundried-tomato-cashew.webp", width: 1200, height: 800 },
        tub: { src: "/products/sundried-tomato-cashew-tub.webp", width: 1200, height: 800 },
      },
    ],
  },
  {
    id: "dressings",
    title: "Plant-Forward Dressings",
    intro:
      "Foods from the Edge – Australian owned and operated business with the ultimate tastes of dressing and sauces. Attitude the ultimate salad dressings/sauce is low in salt and no sugar. Great for prawns, salads and eggs. Tart is the ultimate balsamic vinaigrette dressing and Julius is the ultimate dressing for caesar salad.",
    products: [
      {
        slug: "attitude",
        name: "Attitude",
        description: "A dressing with enough flavour to change the entire plate.",
        character: "Made to bring vegetables, grains, salads and bowls to life.",
        serving: "Because good food sometimes needs a little attitude.",
        overview: "The ultimate Salad Dressing / Sauce",
        highlights: ["Sugar Free", "Preservative Free", "No Carb", "Low Salt"],
        dietary: ["gluten free", "vegetarian"],
        ingredients:
          "Canola & olive oil, vinegar, water, egg yolk, mustard, garlic, herbs, spices, salt & pepper",
        image: { src: "/products/attitude.webp", width: 532, height: 1280 },
      },
      {
        slug: "julius",
        name: "Julius",
        description: "Our plant-based interpretation of a classic Caesar-style dressing.",
        character:
          "Creamy, savoury and full of umami, made with dairy-free parmesan and a carefully balanced plant-based base.",
        serving: "Ideal for crisp leaves, roasted vegetables, sandwiches and wraps.",
        overview: "The ultimate caesar dressing!",
        highlights: [],
        dietary: ["gluten free", "peanut free"],
        ingredients:
          "Canola & olive oil, water, parmesan cheese, worcestershire sauce, egg yolk, sugar, salt, anchovies, citric acid, garlic & spices",
        image: { src: "/products/julius.webp", width: 529, height: 1280 },
      },
      {
        slug: "tart",
        name: "Tart",
        description: "Bright, sharp and lively.",
        character:
          "A dressing designed to cut through richness and bring freshness to salads, vegetables and shared plates.",
        serving: "",
        overview: "The ultimate balsamic vinaigrette.",
        highlights: [],
        dietary: ["gluten free", "vegetarian", "vegan"],
        ingredients:
          "Canola & olive oil, water, balsamic vinegar, white vinegar, sugar, lemon juice, garlic, vanilla, salt, herbs & spices",
        image: { src: "/products/tart.webp", width: 528, height: 1280 },
      },
    ],
  },
  {
    id: "dukkah",
    title: "Dukkah",
    products: [
      {
        slug: "original-dukkah",
        name: "Original Dukkah",
        description:
          "A fragrant blend of roasted almonds, sesame seeds, coconut, coriander, fennel, cumin and spices.",
        character:
          "Dip fresh bread into olive oil, then into the dukkah—or sprinkle it over vegetables, salads, avocado and hommous.",
        serving: "",
        overview: "Delicious with sourdough bread and olive oil!",
        highlights: [],
        dietary: ["vegetarian", "vegan", "gluten free"],
        ingredients:
          "Roasted almonds, roasted sesame seeds, dessicated coconut, coriander seeds, fennel seeds, cummin seeds, salt, sugar and spices",
        image: { src: "/products/original-dukkah.webp", width: 1200, height: 800 },
        tub: { src: "/products/original-dukkah-tub.webp", width: 1200, height: 800 },
      },
      {
        slug: "spicy-dukkah",
        name: "Spicy Dukkah",
        description: "Our original nut, seed and spice blend with additional warmth.",
        character: "Crunchy, aromatic and confidently spiced.",
        serving: "Use it anywhere that could benefit from texture, heat and a little life.",
        overview: "Delicious with sourdough bread and olive oil!",
        highlights: [],
        dietary: ["vegetarian", "vegan", "gluten free"],
        ingredients:
          "Roasted almonds, roasted sesame seeds, dessicated coconut, coriander seeds, whole white pepper, cummin seeds, salt, sugar and spices",
        image: { src: "/products/spicy-dukkah.webp", width: 1200, height: 800 },
        tub: { src: "/products/spicy-dukkah-tub.webp", width: 1200, height: 800 },
      },
    ],
  },
]

export const allProducts = range.flatMap((group) => group.products.map((product) => ({ ...product, group })))

export const madeFrom = [
  { ingredient: "Chickpeas", product: "Hommous" },
  { ingredient: "Artichokes and roasted cashews", product: "French Artichoke" },
  { ingredient: "Beetroot", product: "Cheesy Beetroot" },
  { ingredient: "Almonds, sesame and spices", product: "Dukkah" },
]

export const philosophy = [
  {
    title: "Start with good ingredients",
    body: "Every product begins with ingredients that contribute something meaningful—flavour, texture, colour or nourishment.",
  },
  {
    title: "Keep the recipe honest",
    body: "We favour recognisable ingredients and purposeful recipes. Complexity is only worthwhile when it makes the food better.",
  },
  {
    title: "Make plants interesting",
    body: "Plant-forward food should be generous, satisfying and full of flavour—not something people choose only because it fits a label.",
  },
  {
    title: "Let taste lead",
    body: "Dietary credentials may help someone pick up the product. Taste is what brings them back.",
  },
  {
    title: "Improve carefully",
    body: "We continue to refine our recipes, but we do not change things simply for the appearance of innovation. A product should become better, not merely newer.",
  },
]

export const retailerPoints = [
  "Recognisable wholefood ingredients",
  "Distinctive products beyond standard category flavours",
  "Dairy-free and plant-forward options",
  "Multiple eating occasions",
  "Strong visual and flavour variety",
  "Retail and foodservice applications",
  "Australian manufacturing capability",
]

export const foodserviceUses = [
  "Sandwiches and wraps",
  "Grazing boards",
  "Salads and grain bowls",
  "Burgers",
  "Roasted vegetables",
  "Pizza and flatbreads",
  "Catering",
  "Prepared meals",
  "Sauces and finishing applications",
]

export const ingredients = ["Vegetables", "Legumes", "Nuts", "Seeds", "Herbs", "Spices"]
