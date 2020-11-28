import naruto from "./images/naruto.jpg";
import bleach from "./images/bleach.jpg";
import gintama from "./images/gintama.jpg";
import onepunchman from "./images/one-punch-man.jpg";
import onepiece from "./images/one-piece-colored.jpg";
import dragonball from "./images/dragon-ball.jpg";

const STORE = {
  booklist: ["onePieceOne"],
  books: {
    onePieceOne: {
      image: onepiece,
      pages: {
        1: {
          vocab: [
            { hi: "greeting" },
            { hi: "a" },
            { hi: "b" },
            { hi: "c" },
          ],
        },
        2: {
          vocab: [
            { hi: "d" },
            { hi: "e" },
            { hi: "f" },
            { hi: "g" },
          ],
        },
        3: {
          vocab: [
            { hi: "h" },
            { hi: "j" },
            { hi: "k" },
            { hi: "l" },
          ],
        },
        4: {
          vocab: [
            { hi: "m" },
            { hi: "n" },
            { hi: "o" },
            { hi: "p" },
          ],
        },
        5: {
          vocab: [
            { hi: "q" },
            { hi: "r" },
            { hi: "s" },
            { hi: "t" },
          ],
        },
        6: {
          vocab: [
            { hi: "u" },
            { hi: "v" },
            { hi: "w" },
            { hi: "x" },
          ],
        },
        7: {
          vocab: [
            { hi: "y" },
            { hi: "z" },
            { hi: "aa" },
            { hi: "bb" },
          ],
        },
        8: {
          vocab: [
            { hi: "cc" },
            { hi: "dd" },
            { hi: "ee" },
            { hi: "ff" },
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
