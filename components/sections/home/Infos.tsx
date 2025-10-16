import {
  MapPinIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline'

const infoItems = [
  { icon: MapPinIcon, label: 'Locations' },
  { icon: UserGroupIcon, label: 'Meet the Doctors' },
  { icon: CheckCircleIcon, label: 'Before & After' },
  { icon: ChatBubbleBottomCenterTextIcon, label: 'Our Services' },
]

export default function Infos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-7 bg-[#f7f7f7]">
      {infoItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center text-center bg-white px-3 py-4 rounded-xl w-45 cursor-pointer"
        >
          <Icon className="h-10 w-10 text-foreground mb-2" />
          <span className="text-base font-semibold text-foreground">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}
