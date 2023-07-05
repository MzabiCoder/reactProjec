import images from './images';

const wines = [
  {
    title: 'Myra Reserve Shiraz',
    price: '$90',
    tags: 'AU | Bottle',
  },
  {
    title: 'KRSMA Sangiovese',
    price: '$89',
    tags: 'AU | Bottle',
  },
  {
    title: 'Zampa Chene Grande Reserve',
    price: '$54',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Charosa Sauvignon Blanc',
    price: '$33',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Grover Zampa La Reserve',
    price: '$99',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Daiquiri',
    price: '$30',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dry Martini.",
    price: '$60',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Margarita',
    price: '$20',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Espresso Martini.',
    price: '$41',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Whiskey Sour',
    price: '$36',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
