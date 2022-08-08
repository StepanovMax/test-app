const brands = [
  {
    title: "BMW",
    slug: "bmw",
    checked: false,
  },
  {
    title: "Mercedes Benz",
    slug: "mercedes-benz",
    checked: false,
  },
]

const models = [
  {
    title: "X3",
    slug: "x3",
    brandSlug: 'bmw',
    checked: false,
  },
  {
    title: "X4",
    slug: "x4",
    brandSlug: 'bmw',
    checked: false,
  },
  {
    title: "A class",
    slug: "a-class",
    brandSlug: 'mercedes-benz',
    checked: false,
  },
  {
    title: "B class",
    slug: "b-class",
    brandSlug: 'mercedes-benz',
    checked: false,
  },
]

const complectations = [
  {
    title: "Basic X3",
    slug: "basic",
    modelSlug: 'x3',
    abs: false,
    signaling: false,
    airbags: false,
    airbagsCount: 0,
    checked: false,
  },
  {
    title: "Premium X3",
    slug: "premium",
    modelSlug: 'x3',
    abs: false,
    signaling: false,
    airbags: true,
    airbagsCount: 1,
    checked: false,
  },
  {
    title: "Basic X4",
    slug: "basic",
    modelSlug: 'x4',
    abs: false,
    signaling: true,
    airbags: true,
    airbagsCount: 1,
    checked: false,
  },
  {
    title: "Premium X4",
    slug: "premium",
    modelSlug: 'x4',
    abs: true,
    signaling: true,
    airbags: true,
    airbagsCount: 2,
    checked: false,
  },
  {
    title: "Basic A Class",
    slug: "basic",
    modelSlug: 'a-class',
    abs: false,
    signaling: true,
    airbags: true,
    airbagsCount: 1,
    checked: false,
  },
  {
    title: "Premium A Class",
    slug: "premium",
    modelSlug: 'a-class',
    abs: true,
    signaling: true,
    airbags: true,
    airbagsCount: 2,
    checked: false,
  },
  {
    title: "Basic B Class",
    slug: "basic",
    modelSlug: 'b-class',
    abs: false,
    signaling: true,
    airbags: true,
    airbagsCount: 1,
    checked: false,
  },
  {
    title: "Premium B Class",
    slug: "premium",
    modelSlug: 'b-class',
    abs: true,
    signaling: true,
    airbags: true,
    airbagsCount: 2,
    checked: false,
  },
]

export { brands, models, complectations }