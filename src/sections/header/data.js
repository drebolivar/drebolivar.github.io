import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube
} from 'react-icons/ai'
import { RiSpotifyLine } from 'react-icons/ri'

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
    link: 'https://open.spotify.com/user/dredose',
    icon: <RiSpotifyLine />
  },
  {
    id: 6,
    link: 'https://www.youtube.com/@dredose',
    icon: <AiOutlineYoutube />
  }
]

export default data
