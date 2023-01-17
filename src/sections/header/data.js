import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube
} from 'react-icons/ai'
import { RiSpotifyLine } from 'react-icons/ri'
import { SiLetterboxd } from 'react-icons/si'

const data = [
  {
    id: 1,
    link: 'https:/www.linkedin.com/in/drebolivar',
    icon: <AiFillLinkedin />
  },
  {
    id: 2,
    link: 'https://www.instagram.com/dredose',
    icon: <AiOutlineInstagram />
  },
  {
    id: 3,
    link: 'https://www.twitter.com/dredose',
    icon: <AiOutlineTwitter />
  },
  { id: 4, link: 'https://www.github.com/drebolivar', icon: <AiFillGithub /> },
  {
    id: 5,
    link: 'https://letterboxd.com/dredose/',
    icon: <SiLetterboxd />
  },
  {
    id: 6,
    link: 'https://open.spotify.com/user/dredose',
    icon: <RiSpotifyLine />
  },
  {
    id: 7,
    link: 'https://www.youtube.com/@dredose',
    icon: <AiOutlineYoutube />
  }
]

export default data
