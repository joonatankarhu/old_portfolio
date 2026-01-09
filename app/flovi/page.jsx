"use client";

import Link from "next/link";
import WorkDetail from "./WorkDetail";

const workDetails = [
  {
    imageSrc: "/landing_page_1.png",
    title: "Reservations Dashboard",
    desc: "Reservations overview, tables, filters, sorting and dashboard widgets.",
    fullDescription:
      "The main dashboard view displays upcoming and ongoing drives, reservation table, statuses, and key metrics. Users can for example filter and sort reservations by id, date and time or location",
  },
  {
    imageSrc: "/new_reservation.png",
    title: "New Reservation",
    desc: "Multi-section form for creating bookings with validation and responsive layout.",
    fullDescription:
      "We rebuilt about five different forms (Home delivery, Service drive etc) into this one unified form to simplify user experience. This new reservation form allows customers to easily book drives from one form, and they can chose reservation type, custom schedules, vehicle details, contact details and any other preferences",
  },
  {
    imageSrc: "/profile_page.png",
    title: "User settings",
    desc: "Profile page for changing language, notification, dark mode and other preferences.",
    fullDescription:
      "The profile page allows users to update their personal information, change password, set notification preferences, toggle dark mode and change their preferred language",
  },
  {
    imageSrc: "/team_members_page.png",
    title: "Team Members",
    desc: "Manage store personnel, roles, team members and invited users",
    fullDescription:
      "The team members page allows store managers to add, remove and manage personnel, assign roles and permissions to control access to different parts of the application",
  },
];

export default function FloviPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 lg:py-12 text-center">
      <div className="mb-6 flex items-center justify-center lg:justify-between">
        <div></div>

        <h1 className="text-2xl font-bold text-center">
          <Link href="/">Flovi</Link> – Customer application
        </h1>

        <Link href="#work" className="hidden lg:block text-sm text-gray-600">
          Back
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-base text-gray-800">
          I was part of the customer focused developer team, where we built this
          application from scratch to production. The application is for booking
          vehicle drives and managing reservations.
        </p>
        <p className="text-sm text-gray-500">
          Built with Nuxt/Vue.js, TailwindCSS, TypeScript, PrimeVue and Laravel
        </p>
      </div>

      <div className="mt-20 flex flex-col lg:gap-8">
        {workDetails?.length > 0 &&
          workDetails.map((item, index) => (
            <WorkDetail key={index} data={item} />
          ))}
      </div>

      <Link href="#work" className="text-sm text-gray-600 pb-10">
        Back
      </Link>
    </div>
  );
}
