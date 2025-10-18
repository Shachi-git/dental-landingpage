import { FaMapLocationDot, FaUserDoctor } from 'react-icons/fa6'
import { MdOutlineMessage } from 'react-icons/md'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const infoItems = [
  { icon: FaMapLocationDot, label: 'Locations' },
  { icon: FaUserDoctor, label: 'Meet the Doctors' },
  { icon: IoIosCheckmarkCircleOutline, label: 'Before & After' },
  { icon: MdOutlineMessage, label: 'Our Services' },
]

export default function Infos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-7 bg-[#f7f7f7]">
      {infoItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center text-center bg-white px-3 py-4 rounded-xl w-45 cursor-pointer"
        >
          <Icon className="h-8 w-8 text-foreground mb-2" />
          <span className="text-base font-semibold text-foreground">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}
