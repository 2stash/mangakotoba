import naruto from "./images/naruto.jpg";
import bleach from "./images/bleach.jpg";
import gintama from "./images/gintama.jpg";
import onepunchman from "./images/one-punch-man.jpg";
import onepiece from "./images/one-piece-colored.jpg";
import dragonball from "./images/dragon-ball.jpg";
import campIMG from './images/laid-back-camp-1.jpg';

// Data Files
import CAMP from './store/camp-volume-1';
import onePieceOne from './store/one-piece-1';
import onePieceTwo from './store/one-piece-2';

const STORE = {
  booklist: ["one-piece", "camp"],
  "one-piece": { list: ["one-piece-1", "one-piece-2"], image: onepiece },
  "camp": {list: ["camp-1"],
          image: campIMG},
  nameconversion: { "one-piece": "One Piece" },
  books: {
    "one-piece-1": onePieceOne,
    "one-piece-2": onePieceTwo,
    "camp-1": CAMP,
    /// add next book here

  },
};

export default STORE;
