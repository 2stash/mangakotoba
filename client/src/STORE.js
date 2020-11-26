import naruto from "./images/naruto.jpg";
import bleach from "./images/bleach.jpg";
import gintama from "./images/gintama.jpg";
import onepunchman from "./images/one-punch-man.jpg";
import onepiece from "./images/one-piece-colored.jpg";
import dragonball from "./images/dragon-ball.jpg";

const STORE = {
  booklist: ["naruto"],
  books: {
    naruto: {
      image: naruto,
      pages: {
        1: {
          vocab: [
            { hi: "greeting" },
            { hi: "greeting" },
            { hi: "greeting" },
            { hi: "greeting" },
          ],
        },
        2: {
          vocab: [
            { hi: "greeting" },
            { hi: "greeting" },
            { hi: "greeting" },
            { hi: "greeting" },
          ],
        },
      },
    },
  },
};

// const STORE = {
//   image: naruto,

// };

export default STORE;
