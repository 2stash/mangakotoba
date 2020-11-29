import naruto from "./images/naruto.jpg";
import bleach from "./images/bleach.jpg";
import gintama from "./images/gintama.jpg";
import onepunchman from "./images/one-punch-man.jpg";
import onepiece from "./images/one-piece-colored.jpg";
import dragonball from "./images/dragon-ball.jpg";

const STORE = {
  booklist: ["one-piece"],
  "one-piece": { list: ["one-piece-1"], image: onepiece },
  nameconversion: { "one-piece": "One Piece"},
  books: {
    "one-piece-1": {
      1: {
        image: onepiece,
        pages: {
          5: {
            vocab: [
              {
                page: "5",
                kanji: "夜明け",
                hirigana: "よあけ",
                definition: "dawn; daybreak;",
              },
              {
                page: "5",
                kanji: "富",
                hirigana: "とみ",
                definition: "riches; wealth; fortune;",
              },
              {
                page: "5",
                kanji: "名声",
                hirigana: "めいせい",
                definition: "fame; reputation; renown",
              },
              {
                page: "5",
                kanji: "力",
                hirigana: "ちから",
                definition: "power",
              },
              {
                page: "5",
                kanji: "かつて",
                hirigana: "",
                definition: "once; before; formerly; ever; former",
              },
              {
                page: "5",
                kanji: "海賊",
                hirigana: "かいぞく",
                definition: "pirate",
              },
              {
                page: "5",
                kanji: "際",
                hirigana: "ぎわ",
                definition: "brink; verge; side; (2) time; moment of",
              },
              {
                page: "5",
                kanji: "一言",
                hirigana: "ひとこと",
                definition: " single word; a few words; brief comment",
              },
              {
                page: "5",
                kanji: "放す",
                hirigana: "はなす",
                definition:
                  "to release; to let go; to free; to set free; to let loose; to turn loose",
              },
              {
                page: "5",
                kanji: "駆り立てる",
                hirigana: "かりたてる",
                definition: "to urge; to spur on; to push on; to impel ",
              },
              {
                page: "5",
                kanji: "財宝",
                hirigana: "ざいほう",
                definition: "treasure ",
              },
              {
                page: "5",
                kanji: "欲しい",
                hirigana: "ほしい",
                definition: " wanted; wished for; in need of; desired;",
              },
              {
                page: "5",
                kanji: "時代",
                hirigana: "じだい",
                definition: "period; epoch; era; age",
              },
              {
                page: "5",
                kanji: "迎える",
                hirigana: "むかえる",
                definition: " to approach",
              },
            ],
          },
          6: {
            vocab: [
              {
                page: "6",
                kanji: "程",
                hirigana: "ほど",
                definition: "means ぐらい",
              },
            ],
          },
          8: {
            vocab: [
              {
                page: "8",
                kanji: "停泊",
                hirigana: "ていはく",
                definition: " anchorage; moorings",
              },
              {
                page: "8",
                kanji: "気",
                hirigana: "き",
                definition: "何をするつもりですか",
              },
              {
                page: "8",
                kanji: "いたって",
                hirigana: "very much; exceedingly; extremely;",
                definition: "very much; exceedingly; extremely;",
              },
            ],
          },
          9: {
            vocab: [
              {
                page: "9",
                kanji: "なんかじゃない",
                hirigana: "",
                definition: "",
              },
              {
                page: "9",
                kanji: "証拠",
                hirigana: "しょうこ",
                definition: "evidence; proof",
              },
            ],
          },
          10: {
            vocab: [
              {
                page: "10",
                kanji: "根性",
                hirigana: "こんじょう",
                definition: "willpower; guts; determination; grit; spirit;",
              },
              {
                page: "10",
                kanji: "見苦しい",
                hirigana: "みぐるしい",
                definition: " unsightly; ugly;",
              },
              {
                page: "10",
                kanji: "連れる",
                hirigana: "つれる",
                definition: "to lead; to take (a person);",
              },
            ],
          },
          11: {
            vocab: [
              {
                page: "11",
                kanji: "致命的",
                hirigana: "ちめいてき",
                definition: "fatal; lethal;",
              },
            ],
          },
          12: {
            vocab: [
              {
                page: "12",
                kanji: "吹き込む",
                hirigana: "ふきこむ",
                definition: "to inspire; to indoctrinate;",
              },
            ],
          },
          13: {
            vocab: [
              {
                page: "13",
                kanji: "味方",
                hirigana: "みかた",
                definition: "friend; ally; supporter",
              },
              {
                page: "13",
                kanji: "要するに",
                hirigana: "ようするに",
                definition:
                  "In a word; after all; the point is ...; in short ...; to put simply; ",
              },
            ],
          },
          14: {
            vocab: [
              {
                page: "14",
                kanji: "一応",
                hirigana: "いちおう",
                definition: "more or less",
              },
              {
                page: "14",
                kanji: "一統",
                hirigana: "いっとう",
                definition: "lineage; line; unification; all (of you)",
              },
              {
                page: "14",
                kanji: "率いる",
                hirigana: "ひきいる",
                definition: "to lead; to spearhead",
              },
              {
                page: "14",
                kanji: "苛酷",
                hirigana: "かこく",
                definition: "severe; harsh; hard; cruel; rigorous;",
              },
              {
                page: "14",
                kanji: "危険",
                hirigana: "きけん",
                definition: "danger; peril; hazard; (2) risk;",
              },
              {
                page: "14",
                kanji: "身にしみる",
                hirigana: "みにしみる",
                definition:
                  "to sink deeply into one's mind; to come home to; to go to one's heart; ",
              },
            ],
          },
          15: {
            vocab: [
              {
                page: "15",
                kanji: "からかう",
                hirigana: "",
                definition: "to ridicule; to tease",
              },
            ],
          },
          16: {
            vocab: [
              {
                page: "16",
                kanji: "拠点",
                hirigana: "きょてん",
                definition: "position; location; base; point",
              },
            ],
          },
          17: {
            vocab: [
              {
                page: "17",
                kanji: "輩",
                hirigana: "やから",
                definition:
                  "party (of people); set (of people); clan; family; fellow",
              },
              {
                page: "17",
                kanji: "間抜け",
                hirigana: "まぬけ",
                definition: "stupid; foolish; idiotic",
              },
            ],
          },
          18: {
            vocab: [
              {
                page: "18",
                kanji: "樽",
                hirigana: "たる",
                definition: "cask; barrel;",
              },
            ],
          },
          19: {
            vocab: [
              {
                page: "19",
                kanji: "飲みつくす",
                hirigana: "のみつくす",
                definition:
                  " to drink away one's money; to be a sot; to get wasted; (2) to drink someone under the table",
              },
            ],
          },
          20: {
            vocab: [
              {
                page: "20",
                kanji: "びしょびしょ",
                hirigana: "",
                definition: "soaked; drenched",
              },
            ],
          },
          21: {
            vocab: [
              {
                page: "21",
                kanji: "ぞうきん",
                hirigana: "",
                definition: "dust cloth",
              },
            ],
          },
          22: {
            vocab: [
              {
                page: "22",
                kanji: "伸びる",
                hirigana: "のびる",
                definition: "to stretch; to extend",
              },
            ],
          },
          26: {
            vocab: [
              {
                page: "26",
                kanji: "近頃",
                hirigana: "ちかごろ",
                definition: "lately; recently; ",
              },
              {
                page: "26",
                kanji: "一段",
                hirigana: "いちだん",
                definition: "more; much more; ",
              },
              {
                page: "26",
                kanji: "汚点",
                hirigana: "おてん",
                definition: "flaw; disgrace",
              },
            ],
          },
          30: {
            vocab: [
              {
                page: "30",
                kanji: "新種",
                hirigana: "しんしゅ",
                definition: "new species",
              },
              {
                page: "30",
                kanji: "発見",
                hirigana: "はっけん",
                definition: "discovery",
              },
            ],
          },
          31: {
            vocab: [
              {
                page: "31",
                kanji: "しつこい",
                hirigana: "",
                definition: " persistent; tenacious; ",
              },
            ],
          },
          32: {
            vocab: [
              {
                page: "32",
                kanji: "逆らう",
                hirigana: "さからう",
                definition: "to go against; to oppose",
              },
              {
                page: "32",
                kanji: "争う",
                hirigana: "あらそう",
                definition: " to quarrel、to oppose",
              },
            ],
          },
          33: {
            vocab: [
              {
                page: "33",
                kanji: "不愉快",
                hirigana: "ふゆかい",
                definition: "disagreeableness; unhappiness",
              },
              {
                page: "33",
                kanji: "極まり",
                hirigana: "きわまり",
                definition: "extremity; end; bound; limit ",
              },
              {
                page: "33",
                kanji: "見逃し",
                hirigana: "みのがし",
                definition: "overlooking;",
              },
            ],
          },

          35: {
            vocab: [
              {
                page: "35",
                kanji: "威し",
                hirigana: "おどし",
                definition: "bluff; showing off ",
              },
            ],
          },
          36: {
            vocab: [
              {
                page: "36",
                kanji: "卑怯",
                hirigana: "ひきょう",
                definition: "cowardice; meanness; unfairness;",
              },
            ],
          },
          37: {
            vocab: [
              { page: "37", kanji: "つば", hirigana: "", definition: "saliva" },
              {
                page: "37",
                kanji: "吐きかける",
                hirigana: "はきかける",
                definition: "to spit",
              },
            ],
          },
          38: {
            vocab: [
              {
                page: "38",
                kanji: "プカプカ",
                hirigana: "",
                definition: "lightly (floating)",
              },
              {
                page: "38",
                kanji: "ヘラヘラ",
                hirigana: "",
                definition: "foolishly (laughing); ",
              },
            ],
          },
          40: {
            vocab: [
              {
                page: "40",
                kanji: "軍艦",
                hirigana: "ぐんかん",
                definition: "battleship",
              },
            ],
          },
          41: {
            vocab: [
              {
                page: "41",
                kanji: "煙幕",
                hirigana: "えんまく",
                definition: "smoke bomb",
              },
              {
                page: "41",
                kanji: "油断",
                hirigana: "ゆだん",
                definition: "carelessness",
              },
            ],
          },
          42: {
            vocab: [
              {
                page: "42",
                kanji: "思うまい",
                hirigana: "おもうまい",
                definition: "",
              },
            ],
          },
          47: {
            vocab: [
              {
                page: "47",
                kanji: "恩",
                hirigana: "おん",
                definition: "debt of gratitude",
              },
            ],
          },
          48: {
            vocab: [
              {
                page: "48",
                kanji: "苛酷",
                hirigana: "かこく",
                definition: "severe; harsh; hard; cruel; rigorous; (",
              },
              {
                page: "48",
                kanji: "己",
                hirigana: "おのれ",
                definition: "oneself ",
              },
              {
                page: "48",
                kanji: "非力",
                hirigana: "ひりき",
                definition: "powerless",
              },
              {
                page: "48",
                kanji: "偉大",
                hirigana: "いだい",
                definition: "greatness",
              },
            ],
          },
          49: {
            vocab: [
              {
                page: "49",
                kanji: "拠点",
                hirigana: "きょてん",
                definition: "location; base",
              },
            ],
          },
          50: {
            vocab: [
              {
                page: "50",
                kanji: "預ける",
                hirigana: "あずける",
                definition: "to entrust",
              },
            ],
          },
          52: {
            vocab: [
              {
                page: "52",
                kanji: "本気で行っちまうとはな",
                hirigana: "",
                definition: "",
              },
            ],
          },
          59: {
            vocab: [
              {
                page: "59",
                kanji: "無謀",
                hirigana: "むぼう",
                definition:
                  "reckless; thoughtless; rash; ill-advised; impulsive; mad (e.g. scheme);",
              },
              {
                page: "59",
                kanji: "ひとまず",
                hirigana: "",
                definition: "for now",
              },
              {
                page: "59",
                kanji: "遭難",
                hirigana: "そうなん",
                definition: "shipwreck",
              },
            ],
          },
          60: {
            vocab: [
              {
                page: "60",
                kanji: "のまれる",
                hirigana: "",
                definition: "to be swallowed up; to be engulfed; ",
              },
              {
                page: "60",
                kanji: "うかつ",
                hirigana: "",
                definition: "careless; stupid; thoughtless; ",
              },
              {
                page: "60",
                kanji: "泳げまい",
                hirigana: "およげまい",
                definition: "",
              },
            ],
          },
          65: {
            vocab: [
              {
                page: "65",
                kanji: "雑用",
                hirigana: "ざつよう",
                definition: "chores; odd jobs;",
              },
            ],
          },
          67: {
            vocab: [
              {
                page: "67",
                kanji: "樽",
                hirigana: "たる",
                definition: "Barrel",
              },
            ],
          },
          70: {
            vocab: [
              {
                page: "70",
                kanji: "棺桶",
                hirigana: "かんおけ",
                definition: "coffin",
              },
            ],
          },
          71: {
            vocab: [
              {
                page: "71",
                kanji: "漂流",
                hirigana: "ひょうりゅう",
                definition: "drift",
              },
              {
                page: "71",
                kanji: "度胸",
                hirigana: "どきょう",
                definition: "courage, guts",
              },
            ],
          },
          72: {
            vocab: [
              {
                page: "72",
                kanji: "称号",
                hirigana: "しょうごう",
                definition: "title, name",
              },
            ],
          },
          76: {
            vocab: [
              {
                page: "76",
                kanji: "雇う",
                hirigana: "やとう",
                definition: "to hire",
              },
            ],
          },
          83: {
            vocab: [
              {
                page: "83",
                kanji: "血に飢える",
                hirigana: "ちにうえる",
                definition: "blood hungry",
              },
              {
                page: "83",
                kanji: "野犬",
                hirigana: "やけん",
                definition: "wild dog",
              },
              {
                page: "83",
                kanji: "かぎまわり",
                hirigana: "",
                definition:
                  "to sniff around; (2) to snoop around; to nose about",
              },
              {
                page: "83",
                kanji: "さすらう",
                hirigana: "",
                definition: "to wander; to roam",
              },
            ],
          },
          84: {
            vocab: [
              {
                page: "84",
                kanji: "最低限",
                hirigana: "さいていげん",
                definition: "minimum; (n-adv) (2) at the very least;",
              },
            ],
          },
          85: {
            vocab: [
              {
                page: "85",
                kanji: "航海士",
                hirigana: "こうかいし",
                definition: "navigator",
              },
              {
                page: "85",
                kanji: "張り紙",
                hirigana: "はりがみ",
                definition: "poster; sticker; label;",
              },
              {
                page: "85",
                kanji: "脱走",
                hirigana: "だっそう",
                definition: "escape; flight; breakout; fleeing; desertion",
              },
              {
                page: "85",
                kanji: "とは限らない",
                hirigana: "とはかぎらない",
                definition: "not necessarily so; is not always true",
              },
              {
                page: "85",
                kanji: "吹っ飛ぶ",
                hirigana: "ふっとぶ",
                definition: "to blow off; to be blown off",
              },
            ],
          },
          89: {
            vocab: [
              {
                page: "89",
                kanji: "迫力",
                hirigana: "はくりょく",
                definition:
                  "impressiveness; impact; force; intensity; appeal; strength; punch; edge; vigor;",
              },
            ],
          },
          94: {
            vocab: [
              {
                page: "94",
                kanji: "七光り",
                hirigana: "ななひかり",
                definition:
                  "benefiting from the influence of a master or parent",
              },
            ],
          },
          98: {
            vocab: [
              {
                page: "98",
                kanji: "悪党",
                hirigana: "あくとう",
                definition: "scoundrel; rascal; villain",
              },
              {
                page: "98",
                kanji: "御苦労",
                hirigana: "ごくろう",
                definition: "trouble (I have put you through)",
              },
              {
                page: "98",
                kanji: "評判",
                hirigana: "ひょうばん",
                definition:
                  "fame; reputation; popularity; (2) rumour (rumor); talk;",
              },
            ],
          },
          100: {
            vocab: [
              {
                page: "100",
                kanji: "ドロ",
                hirigana: "どろ",
                definition: "mud; slush; (wet) dirt; mire;",
              },
              {
                page: "100",
                kanji: "かたまり",
                hirigana: "",
                definition: "lump; mass; bundle; clump; clod; cluster;",
              },
              {
                page: "100",
                kanji: "ガタガタ",
                hirigana: "",
                definition: "rattling; clattering",
              },
              {
                page: "100",
                kanji: "ぬかす",
                hirigana: "",
                definition: "to omit; to leave out; to skip",
              },
            ],
          },
          101: {
            vocab: [
              {
                page: "101",
                kanji: "狼",
                hirigana: "おおかみ",
                definition: "wolf",
              },
              {
                page: "101",
                kanji: "気性",
                hirigana: "きしょう",
                definition: "disposition; temperament; ",
              },
            ],
          },
          108: {
            vocab: [
              {
                page: "108",
                kanji: "貢",
                hirigana: "みつぎ",
                definition: "tribuite",
              },
              {
                page: "108",
                kanji: "納金",
                hirigana: "のうきん",
                definition: "payment",
              },
              {
                page: "108",
                kanji: "懐",
                hirigana: "ふところ",
                definition: "purse, breast pocket, refering to money",
              },
              {
                page: "108",
                kanji: "敬服",
                hirigana: "けいふく",
                definition: "great admiration; deep respect",
              },
            ],
          },
          109: {
            vocab: [
              {
                page: "109",
                kanji: "勧誘",
                hirigana: "かんゆう",
                definition: "invitation; solicitation;",
              },
              {
                page: "109",
                kanji: "断る",
                hirigana: "ことわる",
                definition:
                  "to refuse; to reject; to dismiss; to turn down; to decline;",
              },
            ],
          },
          112: {
            vocab: [
              {
                page: "112",
                kanji: "仕返し",
                hirigana: "しかえし",
                definition:
                  "being even with; reprisal; tit for tat; retaliation; revenge",
              },
            ],
          },
          113: {
            vocab: [
              {
                page: "113",
                kanji: "尻ぬぐい",
                hirigana: "しりぬぐい",
                definition: "cleaning up or covering for another;",
              },
              {
                page: "113",
                kanji: "偉い",
                hirigana: "えら",
                definition: "great; excellent; admirable;",
              },
              {
                page: "113",
                kanji: "勘違い",
                hirigana: "かんちがい",
                definition: "misunderstanding; wrong guess;",
              },
            ],
          },
          114: {
            vocab: [
              {
                page: "114",
                kanji: "磔",
                hirigana: "はりつけ",
                definition: "crucifixion ",
              },
              {
                page: "114",
                kanji: "幼い",
                hirigana: "おさない",
                definition: "very young; (2) childish; immature;",
              },
              {
                page: "114",
                kanji: "中尉",
                hirigana: "ちゅうい",
                definition: "first lieutenant; lieutenant junior grade;",
              },
            ],
          },
          115: {
            vocab: [
              {
                page: "115",
                kanji: "たてつく",
                hirigana: "",
                definition:
                  "to defy; to disobey; to rebel against; to oppose; to resist;",
              },
              {
                page: "115",
                kanji: "権利",
                hirigana: "けんり",
                definition: "right; privilege",
              },
              {
                page: "115",
                kanji: "直々",
                hirigana: "じきじき",
                definition: "personal; direct",
              },
            ],
          },
          116: {
            vocab: [
              {
                page: "116",
                kanji: "腕っぷし",
                hirigana: "うでっぷし",
                definition: "physical strength ",
              },
              {
                page: "116",
                kanji: "上り詰める",
                hirigana: "のぼりつめる",
                definition: " to go to the top; to climb to the top; ",
              },
              {
                page: "116",
                kanji: "優れる",
                hirigana: "すぐれる",
                definition: "",
              },
            ],
          },
          117: {
            vocab: [
              {
                page: "117",
                kanji: "待ち望む",
                hirigana: "まちのぞむ",
                definition: "to wait eagerly for; to look forward to;",
              },
              {
                page: "117",
                kanji: "修繕",
                hirigana: "しゅうぜん",
                definition: "repair; mending;",
              },
              {
                page: "117",
                kanji: "思い知れ",
                hirigana: "おもいしれ",
                definition: "to make someone realize (e.g. their mistake);",
              },
            ],
          },
          128: {
            vocab: [
              {
                page: "128",
                kanji: "処刑",
                hirigana: "しょけい",
                definition: "execution",
              },
            ],
          },
          129: {
            vocab: [
              {
                page: "129",
                kanji: "真剣",
                hirigana: "しんけん",
                definition: " serious; earnest; ",
              },
              {
                page: "129",
                kanji: "生き抜く",
                hirigana: "いきぬく",
                definition: "to live through; to survive ",
              },
              {
                page: "129",
                kanji: "踏みにじる",
                hirigana: "ふみにじる",
                definition:
                  "to trample underfoot; to tread on; to crush with a foot",
              },
              {
                page: "129",
                kanji: "恩人",
                hirigana: "おんじん",
                definition: "benefactor; patron",
              },
            ],
          },
          131: {
            vocab: [
              {
                page: "131",
                kanji: "気絶",
                hirigana: "きぜつ",
                definition: "faint; swoon",
              },
            ],
          },
          132: {
            vocab: [
              {
                page: "132",
                kanji: "評判",
                hirigana: "ひょうばん",
                definition: "fame; reputation; popularity;",
              },
            ],
          },
          133: {
            vocab: [
              {
                page: "133",
                kanji: "情けない",
                hirigana: "なさけない",
                definition:
                  "miserable; pitiable; shameful; deplorable; pathetic;",
              },
              {
                page: "133",
                kanji: "腹立つ",
                hirigana: "はらたつ",
                definition: "",
              },
            ],
          },
          134: {
            vocab: [
              {
                page: "134",
                kanji: "特訓",
                hirigana: "とっくん",
                definition:
                  "special training; intensive training; crash course",
              },
            ],
          },
          137: {
            vocab: [
              {
                page: "137",
                kanji: "悔しい",
                hirigana: "くやしい",
                definition:
                  "vexing; annoying; frustrating; regrettable; mortifying; ",
              },
              {
                page: "137",
                kanji: "追い抜く",
                hirigana: "おいぬく",
                definition: "pursuit; overtaking ",
              },
              {
                page: "137",
                kanji: "卑怯",
                hirigana: "ひきょう",
                definition: " cowardice; meanness; unfairness; ",
              },
            ],
          },
          140: {
            vocab: [
              {
                page: "140",
                kanji: "射殺",
                hirigana: "しゃさつ",
                definition: "shooting to death",
              },
            ],
          },
          145: {
            vocab: [
              {
                page: "145",
                kanji: "解ける",
                hirigana: "とける",
                definition: "to loosen; to come untied; ",
              },
            ],
          },
          147: {
            vocab: [
              {
                page: "147",
                kanji: "結び目",
                hirigana: "むすびめ",
                definition: "knot",
              },
            ],
          },
          149: {
            vocab: [
              {
                page: "149",
                kanji: "じっと",
                hirigana: "",
                definition: "be still",
              },
            ],
          },
          150: {
            vocab: [
              {
                page: "150",
                kanji: "野望",
                hirigana: "やぼう",
                definition: "ambition; aspiration",
              },
              {
                page: "150",
                kanji: "不浄",
                hirigana: "ふじょう",
                definition:
                  "uncleanliness; dirtiness; impurity; filthiness; defilement",
              },
              {
                page: "150",
                kanji: "断念",
                hirigana: "だんねん",
                definition: "abandoning (hope, plans); giving up;",
              },
            ],
          },
          157: {
            vocab: [
              {
                page: "157",
                kanji: "死刑",
                hirigana: "しけい",
                definition: "death penalty; capital punishment;",
              },
            ],
          },
          171: {
            vocab: [
              {
                page: "171",
                kanji: "極限",
                hirigana: "きょくげん",
                definition: "utmost limits; extremity",
              },
            ],
          },
          172: {
            vocab: [
              {
                page: "172",
                kanji: "屈強",
                hirigana: "くっきょう",
                definition: " robust; brawny; muscular; strong; sturdy",
              },
            ],
          },
          174: {
            vocab: [
              {
                page: "174",
                kanji: "無謀",
                hirigana: "むぼう",
                definition:
                  "reckless; thoughtless; rash; ill-advised; impulsive; mad",
              },
              {
                page: "174",
                kanji: "みくびる",
                hirigana: "",
                definition:
                  "to underrate; to belittle; to look down on; to despise",
              },
              {
                page: "174",
                kanji: "素性",
                hirigana: "すじょう",
                definition:
                  "birth; lineage; parentage; origin; (2) identity; background; history; past;",
              },
            ],
          },
          176: {
            vocab: [
              {
                page: "176",
                kanji: "即刻",
                hirigana: "そっこく",
                definition: "immediately; at once; instantly",
              },
              {
                page: "176",
                kanji: "立ち去る",
                hirigana: "たちさる",
                definition: "to leave; to depart; to take one's leave",
              },
            ],
          },
          185: {
            vocab: [
              {
                page: "185",
                kanji: "芝居",
                hirigana: "しばい",
                definition: "play; drama",
              },
            ],
          },
          186: {
            vocab: [
              {
                page: "186",
                kanji: "敬礼",
                hirigana: "けいれい",
                definition: "salute; bow",
              },
              {
                page: "186",
                kanji: "軍法",
                hirigana: "ぐんぽう",
                definition: "military law",
              },
              {
                page: "186",
                kanji: "犯す",
                hirigana: "おかす",
                definition: "to commit (e.g. crime)",
              },
              {
                page: "186",
                kanji: "規律",
                hirigana: "きりつ",
                definition:
                  "order; observance; discipline; (2) rules; law; regulations",
              },
              {
                page: "186",
                kanji: "引き込む",
                hirigana: "ひきこむ",
                definition:
                  "to pull into; to draw in; to bring in; (2) to win ove",
              },
              {
                page: "186",
                kanji: "征く",
                hirigana: "ゆく",
                definition: " to conquer; to subjugate",
              },
            ],
          },
          191: {
            vocab: [
              {
                page: "191",
                kanji: "呆れる",
                hirigana: "あきえる",
                definition:
                  "to be amazed; to be shocked; to be astonished; to be astounded; to be disgusted; to be exasperated",
              },
            ],
          },
          197: {
            vocab: [
              {
                page: "197",
                kanji: "褒美",
                hirigana: "ほうび",
                definition: "reward; prize",
              },
              {
                page: "197",
                kanji: "ぐったり",
                hirigana: "",
                definition: "completely exhausted; dead tired; limp; senseless",
              },
            ],
          },
          199: {
            vocab: [
              {
                page: "199",
                kanji: "差し上げる",
                hirigana: "さしあげる",
                definition:
                  "to give; to offer; (v1,vt) (2) (hum) to lift up; to hold up; to raise",
              },
              {
                page: "199",
                kanji: "積む",
                hirigana: "つむ",
                definition:
                  "to pile up; to stack; (2) to load (car, ship, etc.); to pack; (3) to acquire; to accumulate",
              },
            ],
          },
          200: {
            vocab: [
              {
                page: "200",
                kanji: "寒冷",
                hirigana: "かんれい",
                definition: "cold; coldness; chilliness",
              },
              {
                page: "200",
                kanji: "前線",
                hirigana: "ぜんせん",
                definition: "(weather) front;",
              },
              {
                page: "200",
                kanji: "発見",
                hirigana: "はっけん",
                definition: "discovery; detection; finding",
              },
            ],
          },
          201: {
            vocab: [
              {
                page: "201",
                kanji: "天候",
                hirigana: "てんこう",
                definition: "weather",
              },
              {
                page: "201",
                kanji: "操る",
                hirigana: "あやつる",
                definition:
                  "to manipulate; to operate; to handle; to operate (e.g. a machine); to steer (a ship)",
              },
            ],
          },
          203: {
            vocab: [
              {
                page: "203",
                kanji: "砲弾",
                hirigana: "ほうだん",
                definition: "shell; cannonball;",
              },
              {
                page: "203",
                kanji: "大砲",
                hirigana: "たいほう",
                definition: "gun; cannon; artillery",
              },
              {
                page: "203",
                kanji: "撃ち落とす",
                hirigana: "うちおとす",
                definition: "to knock down; to shoot down; to lop off",
              },
            ],
          },
        },
      },
    },
  },
};

// const STORE = {
//   image: naruto,

// };

export default STORE;
