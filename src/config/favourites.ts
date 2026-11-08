export type Favourite = {
  title: string;
  cover: string;
};

// TODO: add favourite movies/series (covers go in public/assets/favourites/).
// The Favourites page is hidden from navigation while both lists are empty.
export const favouriteMovies: Favourite[] = [];

export const favouriteSeries: Favourite[] = [];
