"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const images = [
  { src: '/landing_page_1.png', title: 'Reservations', desc: 'Reservations overview, tables, filters, sorting and dashboard widgets.', fullDescription: 'The main dashboard view displays upcoming and ongoing drives, reservation table, statuses, and key metrics. Users can for example filter and sort reservations by id, date and time or location' },
  { src: '/new_reservation.png', title: 'New Reservation', desc: 'Multi-section form for creating bookings with validation and responsive layout.', fullDescription: 'We rebuilt about five different forms (Home delivery, Service drive etc) into this one unified form to simplify user experience. This new reservation form allows customers to easily book drives from one form, and they can chose reservation type, custom schedules, vehicle details, contact details and any other preferences' },
  { src: '/profile_page.png', title: 'Profile & Settings', desc: 'Profile page for changing language, notification, dark mode and other preferences.', fullDescription: 'The profile page allows users to update their personal information, change password, set notification preferences, toggle dark mode and change their preferred language' },
  { src: '/team_members_page.png', title: 'Team Members', desc: 'Manage store personnel, roles, team members and invited users', fullDescription: 'The team members page allows store managers to add, remove and manage personnel, assign roles and permissions to control access to different parts of the application' },
]

export default function FloviPage() {
  const params = useSearchParams()
  const selected = params?.get('img') || null

  const active = images.find((it) => it.src === selected) || null

  if (active) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">{active.title}</h1>
          <Link href="/flovi" className="text-sm text-gray-600">Back to gallery</Link>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-2/3 flex justify-center">
              <img src={active.src} alt={active.title} className="w-full max-h-[72vh] object-contain" />
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-semibold mb-3">{active.title}</h2>
              <p className="text-gray-700 mb-4">{active.fullDescription}</p>
              <p className="text-sm text-gray-500">Built with Vue.js, TailwindCSS, TypeScript and PrimeVue. Click <Link href="/flovi" className="text-sm text-gray-600">Back</Link> to view other screenshots.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold"><Link href="/">Flovi</Link> - Work Showcase</h1>

        <Link href="/" className="text-sm text-gray-600">Back</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
        {images.map((img) => (
          <div key={img.src} className={`block border rounded-xl overflow-hidden p-3 md:p-5 shadow-md lg:shadow-sm hover:shadow-lg transition-shadow ${selected === img.src ? 'ring-2 ring-indigo-300' : 'border-gray-200'}`}>
            <div className="mb-3">
              <img src={img.src} alt={img.title} className="w-full h-48 object-contain bg-white" />
            </div>
            <h3 className="font-semibold">{img.title}</h3>
            <p className="text-gray-600 mt-1">{img.desc}</p>
            <Link href={`/flovi?img=${encodeURIComponent(img.src)}`}>
            <div className="mt-3 flex w-full md:w-auto md:justify-end">
              <span  className="block text-black border-black/80 border-[1px] w-full text-center font-bold bg-white hover:bg-black hover:text-white transition-all duration-300 py-2 rounded-md mt-1 smaller:py-2 smaller:text-sm lessSmall:mt-3 lessSmall:mb-4 my-3 mobileX:py-2 lg:mt-8">
                Read more
              </span>
            </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}
