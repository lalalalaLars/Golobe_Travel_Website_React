import {
  baku,
  dubai,
  istanbul,
  london,
  malé,
  newyork,
  paris,
  sydney,
  tokyo,
  fligtsCard,
  hotelsCard,
  paperPlane,
  review_id_1,
  review_id_2,
  review_id_3,
} from "../assets";

export const popularCities = [
  {
    id: 1,
    country: "Turkey",
    city: "Istanbul",
    image: istanbul,
  },
  {
    id: 2,
    country: "Australia",
    city: "Sydney",
    image: sydney,
  },
  {
    id: 3,
    country: "Azerbaijan",
    city: "Baku",
    image: baku,
  },
  {
    id: 4,
    country: "Maldives",
    city: "Malé",
    image: malé,
  },
  {
    id: 5,
    country: "France",
    city: "Paris",
    image: paris,
  },
  {
    id: 6,
    country: "US",
    city: "New York",
    image: newyork,
  },
  {
    id: 7,
    country: "UK",
    city: "London",
    image: london,
  },
  {
    id: 8,
    country: "Japan",
    city: "Tokyo",
    image: tokyo,
  },
  {
    id: 9,
    country: "UAE",
    city: "Dubai",
    image: dubai,
  },
];

export const largeImageCards = [
  {
    id: 1,
    cardBackground: fligtsCard,
    title: "Fligth",
    subtitle: "Search Flights & Places Hire to our most popular destinations",
    buttonChild: "Show Flights",
    buttonIcon: paperPlane,
  },
  {
    id: 2,
    cardBackground: hotelsCard,
    title: "Hotels",
    subtitle: "Search hotels & Places Hire to our most popular destinations",
    buttonChild: "Show Hotels",
    buttonIcon: paperPlane,
  },
];

export const reviewCards = [
  {
    id: 1,
    title: "A real sense of community, nurtured",
    comment:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    rating: 5,
    username: "Olga",
    image: review_id_1,
  },
  {
    id: 2,
    title: "The facilities are superb. Clean, slick, bright.",
    comment:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    rating: 5,
    username: "Thomas",
    image: review_id_2,
  },
  {
    id: 3,
    title: "A real sense of community, nurtured",
    comment:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    rating: 4,
    username: "Elliot",
    image: review_id_3,
  },
];
