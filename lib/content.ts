export type Product = {
  slug: string
  name: string
  description: string
  character: string
  serving: string
  image: { src: string; width: number; height: number }
}

export type RangeGroup = {
  id: string
  title: string
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
        image: { src: "/products/poppyseed-skordalia.webp", width: 1200, height: 800 },
      },
      {
        slug: "hommous",
        name: "Hommous",
        description: "A dependable classic made with chickpeas, tahini, garlic, lemon and spices.",
        character: "Smooth, balanced and useful well beyond the dip bowl.",
        serving: "Spread it, spoon it, share it—or eat it straight from the tub.",
        image: { src: "/products/hommous.webp", width: 1200, height: 800 },
      },
      {
        slug: "french-artichoke",
        name: "French Artichoke",
        description:
          "Artichokes, roasted cashews, garlic and herbs brought together with dairy-free yoghurt and dairy-free parmesan.",
        character: "Rich, textured and deeply savoury.",
        serving: "A dip, spread and condiment in one.",
        image: { src: "/products/french-artichoke.webp", width: 1200, height: 800 },
      },
      {
        slug: "cheesy-beetroot",
        name: "Cheesy Beetroot",
        description: "Earthy beetroot combined with dairy-free cheese, garlic, vinegar and spices.",
        character: "Bright in colour and generous in flavour.",
        serving: "Made for crackers, sandwiches, grazing boards and vegetables.",
        image: { src: "/products/cheesy-beetroot.webp", width: 1200, height: 800 },
      },
      {
        slug: "sundried-tomato-cashew",
        name: "Sundried Tomato & Cashew",
        description: "Sundried tomatoes, roasted cashews, herbs and dairy-free cheese.",
        character:
          "Sweet, savoury and full-bodied, with the richness of nuts and the intensity of slow-ripened tomato.",
        serving: "",
        image: { src: "/products/sundried-tomato-cashew.webp", width: 1200, height: 800 },
      },
    ],
  },
  {
    id: "dressings",
    title: "Plant-Forward Dressings",
    products: [
      {
        slug: "attitude",
        name: "Attitude",
        description: "A dressing with enough flavour to change the entire plate.",
        character: "Made to bring vegetables, grains, salads and bowls to life.",
        serving: "Because good food sometimes needs a little attitude.",
        image: { src: "/products/attitude.webp", width: 532, height: 1280 },
      },
      {
        slug: "julius",
        name: "Julius",
        description: "Our plant-based interpretation of a classic Caesar-style dressing.",
        character:
          "Creamy, savoury and full of umami, made with dairy-free parmesan and a carefully balanced plant-based base.",
        serving: "Ideal for crisp leaves, roasted vegetables, sandwiches and wraps.",
        image: { src: "/products/julius.webp", width: 529, height: 1280 },
      },
      {
        slug: "tart",
        name: "Tart",
        description: "Bright, sharp and lively.",
        character:
          "A dressing designed to cut through richness and bring freshness to salads, vegetables and shared plates.",
        serving: "",
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
        image: { src: "/products/original-dukkah.webp", width: 1200, height: 800 },
      },
      {
        slug: "spicy-dukkah",
        name: "Spicy Dukkah",
        description: "Our original nut, seed and spice blend with additional warmth.",
        character: "Crunchy, aromatic and confidently spiced.",
        serving: "Use it anywhere that could benefit from texture, heat and a little life.",
        image: { src: "/products/spicy-dukkah.webp", width: 1200, height: 800 },
      },
    ],
  },
]

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
