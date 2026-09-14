export type ProductKind = "dip" | "dressing" | "dukkah"

export type Palette = {
  base: string
  swirl: string
  garnish: string[]
  accent: string
}

export type Product = {
  slug: string
  name: string
  kind: ProductKind
  description: string
  character: string
  serving: string
  palette: Palette
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
        kind: "dip",
        description:
          "A distinctive Mediterranean-style dip made with potato, poppyseeds, garlic, olive oil and dairy-free yoghurt.",
        character: "Creamy, savoury and quietly different.",
        serving: "Serve with warm bread, roasted vegetables or alongside a shared table.",
        palette: { base: "#E9DEC7", swirl: "#F6EFE1", garnish: ["#2A2421", "#3A3330"], accent: "#C9A13B" },
      },
      {
        slug: "hommous",
        name: "Hommous",
        kind: "dip",
        description: "A dependable classic made with chickpeas, tahini, garlic, lemon and spices.",
        character: "Smooth, balanced and useful well beyond the dip bowl.",
        serving: "Spread it, spoon it, share it—or eat it straight from the tub.",
        palette: { base: "#DDC393", swirl: "#ECDAB2", garnish: ["#B5462B", "#8F3A22"], accent: "#8C8A3A" },
      },
      {
        slug: "french-artichoke",
        name: "French Artichoke",
        kind: "dip",
        description:
          "Artichokes, roasted cashews, garlic and herbs brought together with dairy-free yoghurt and dairy-free parmesan.",
        character: "Rich, textured and deeply savoury.",
        serving: "A dip, spread and condiment in one.",
        palette: { base: "#B4B37A", swirl: "#C9C895", garnish: ["#4F6128", "#E8D5AE"], accent: "#C9A13B" },
      },
      {
        slug: "cheesy-beetroot",
        name: "Cheesy Beetroot",
        kind: "dip",
        description: "Earthy beetroot combined with dairy-free cheese, garlic, vinegar and spices.",
        character: "Bright in colour and generous in flavour.",
        serving: "Made for crackers, sandwiches, grazing boards and vegetables.",
        palette: { base: "#9C2656", swirl: "#BE4A7B", garnish: ["#F1E7D6", "#E4D6BE"], accent: "#6B1A3B" },
      },
      {
        slug: "sundried-tomato-cashew",
        name: "Sundried Tomato & Cashew",
        kind: "dip",
        description: "Sundried tomatoes, roasted cashews, herbs and dairy-free cheese.",
        character:
          "Sweet, savoury and full-bodied, with the richness of nuts and the intensity of slow-ripened tomato.",
        serving: "",
        palette: { base: "#BE4F2E", swirl: "#D6714B", garnish: ["#E8D5AE", "#4E6B2B"], accent: "#8E3520" },
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
        kind: "dressing",
        description: "A dressing with enough flavour to change the entire plate.",
        character: "Made to bring vegetables, grains, salads and bowls to life.",
        serving: "Because good food sometimes needs a little attitude.",
        palette: { base: "#CF862B", swirl: "#E2A552", garnish: ["#7A4A16"], accent: "#1F2A1E" },
      },
      {
        slug: "julius",
        name: "Julius",
        kind: "dressing",
        description: "Our plant-based interpretation of a classic Caesar-style dressing.",
        character:
          "Creamy, savoury and full of umami, made with dairy-free parmesan and a carefully balanced plant-based base.",
        serving: "Ideal for crisp leaves, roasted vegetables, sandwiches and wraps.",
        palette: { base: "#E3D6B6", swirl: "#F0E7D0", garnish: ["#5C6B3A"], accent: "#3E5A2F" },
      },
      {
        slug: "tart",
        name: "Tart",
        kind: "dressing",
        description: "Bright, sharp and lively.",
        character:
          "A dressing designed to cut through richness and bring freshness to salads, vegetables and shared plates.",
        serving: "",
        palette: { base: "#D9BC34", swirl: "#E9D36A", garnish: ["#6E7A1F"], accent: "#9E2A4F" },
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
        kind: "dukkah",
        description:
          "A fragrant blend of roasted almonds, sesame seeds, coconut, coriander, fennel, cumin and spices.",
        character:
          "Dip fresh bread into olive oil, then into the dukkah—or sprinkle it over vegetables, salads, avocado and hommous.",
        serving: "",
        palette: { base: "#B98A55", swirl: "#D8BD8E", garnish: ["#7A4E26", "#EDE2C8", "#4A3322", "#A67C44"], accent: "#3E5A2F" },
      },
      {
        slug: "spicy-dukkah",
        name: "Spicy Dukkah",
        kind: "dukkah",
        description: "Our original nut, seed and spice blend with additional warmth.",
        character: "Crunchy, aromatic and confidently spiced.",
        serving: "Use it anywhere that could benefit from texture, heat and a little life.",
        palette: { base: "#A8683F", swirl: "#CFA37A", garnish: ["#B23A26", "#EDE2C8", "#5A2E1A", "#D2592F"], accent: "#B23A26" },
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
