  import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search()).toContain(
    "Decoder: Mining asteroids for minerals can help spare Earth"
  );
});
