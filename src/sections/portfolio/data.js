import Image1 from '../../assets/CUL8R2.png'
import Image2 from '../../assets/fortuna3.png'
import Image3 from '../../assets/nostalgia_game.png'
import Image4 from '../../assets/roshambogurui.png'
import Image5 from '../../assets/TTT2.png'

const data = [
  {
    id: 1,
    category: 'frontend',
    image: Image1,
    title: 'CU-L8R',
    desc: 'a localized watchlist for households that have had many a difficult movie night trying to figure out what to watch. Created using MERN (Mongoose/Express/React/Node)',
    demo: 'https://cul8r.netlify.app/',
    github: 'https://github.com/drebolivar/CU-L8R'
  },
  {
    id: 2,
    category: 'frontend',
    image: Image2,
    title: 'Fortuna',
    desc: 'A tarot card guide I created after I failed to heed the warnings of The Tower card (my basement flooded three times and had to uproot and leave). Created using React, Express, Node, and Postgres/Django for the backend. *Currently broken, but check back soon!*',
    demo: 'https://github.com/drebolivar/fortuna-backend',
    github: 'https://github.com/drebolivar/fortuna-frontend'
  },
  {
    id: 3,
    category: 'frontend',
    image: Image3,
    title: 'Nostalgia_Game',
    desc: 'A memory game with a focus on nostalgia and * a e s t h e t i c *. Created with Jaavascript',
    demo: 'https://nostalgia_game.surge.sh',
    github: 'https://github.com/drebolivar/Nostalgia_Game'
  },
  {
    id: 4,
    category: 'frontend',
    image: Image4,
    title: 'Ro-Sham-Bo-Gurui',
    desc: 'A Rock-Paper-Scissors game I created with Vue while I was weirdly obsessed with gaambling-centric Netflix anime series "Kakegurui" (highly recommend)',
    demo: 'https://roshambogurui.netlify.app/',
    github: 'https://github.com/drebolivar/Ro-Sham-Bo-Gurui'
  },
  {
    id: 5,
    category: 'frontend',
    image: Image5,
    title: 'Tic-Tac-Toe',
    desc: "First project I ever worked on, prior to any training or enrolling in General Assembly. Make sure to play through for my favorite victory sound ever created (it's nostalgia and ASMR to my brain)",
    demo: 'https://dretictactoe.surge.sh/',
    github: 'https://github.com/drebolivar/tictactoe'
  }
]

export default data
