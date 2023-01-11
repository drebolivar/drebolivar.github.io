import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandTelegram, TbBrandDiscord } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'

const data = [
  { id: 1, icon: <HiOutlineMail />, link: 'mailto:dre.bolivar@gmail.com' },
  { id: 2, icon: <GiRotaryPhone />, link: 'tel: 16463272864' },
  { id: 3, icon: <TbBrandTelegram />, link: 'https://t.me/dredose' },
  { id: 4, icon: <FaWhatsapp />, link: 'https://wa.me/+16463272864' },
  { id: 5, icon: <TbBrandDiscord />, link: 'https://discordapp.com/users/5909' }
]

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data
