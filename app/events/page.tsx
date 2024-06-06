import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/my-layout";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Assistants API and Trulens",
      description: "Harness the power of Assistants API and Trulens technology to build cutting-edge apps! Unleash your creativity and compete for the best solutions.",
      dateRange: "APR 26 - MAY 3",
      eventType: "HACKATHON",
      participants: 2198,
      imgSrc: "/placeholder.svg",
      status: "Finished",
    },
    {
      id: 2,
      title: "Startup Founders Meetup",
      description: "Join us for an evening of networking, idea sharing, and support for startup founders in our community.",
      dateRange: "MAY 15, 2023",
      eventType: "MEETUP",
      participants: 1200,
      imgSrc: "/placeholder.svg",
      status: "",
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      description: "Learn the fundamentals of design thinking and how to apply it to your startup or project.",
      dateRange: "JUNE 5, 2023",
      eventType: "WORKSHOP",
      participants: 800,
      imgSrc: "/placeholder.svg",
      status: "",
    },
    {
      id: 4,
      title: "Startup Hackathon",
      description: "Join us for a 24-hour hackathon and build innovative solutions to real-world problems.",
      dateRange: "JULY 1, 2023",
      eventType: "HACKATHON",
      participants: 1500,
      imgSrc: "/placeholder.svg",
      status: "",
    },
    {
      id: 5,
      title: "Startup Conference",
      description: "Attend our annual startup conference and connect with industry leaders, investors, and fellow entrepreneurs.",
      dateRange: "AUGUST 10, 2023",
      eventType: "CONFERENCE",
      participants: 3000,
      imgSrc: "/placeholder.svg",
      status: "",
    },
    {
      id: 6,
      title: "Startup Networking Event",
      description: "Join us for an evening of networking, idea sharing, and building connections with other entrepreneurs.",
      dateRange: "SEPTEMBER 20, 2023",
      eventType: "NETWORKING",
      participants: 900,
      imgSrc: "/placeholder.svg",
      status: "",
    },
  ];

  return (
    <Layout pageTitle="Events">
      <div className="flex min-h-screen w-full flex-col">
        <header className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Discover Upcoming Events in Our Startup Community
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore a diverse range of events, workshops, and meetups tailored to support and connect entrepreneurs,
                  developers, and innovators in our vibrant startup community.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Explore Events
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width="600"
                  height="600"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
            {events.map(event => (
              <Card key={event.id} className="relative overflow-hidden rounded-lg shadow-md">
                <Link href="#" className="group block h-full w-full" prefetch={false}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.imgSrc}
                      width="600"
                      height="450"
                      alt="Event"
                      className="h-full w-full object-cover transition-all group-hover:scale-105"
                    />
                    {event.status && (
                      <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded-br-lg">
                        {event.status}
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-semibold py-1 px-2 rounded-full">
                      {event.eventType}
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div>{event.dateRange}</div>
                      <div className="flex items-center gap-1">
                        <UserIcon className="h-4 w-4" />
                        {event.participants}
                      </div>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">{event.title}</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
                      {event.description}
                    </p>
                    <Button variant="link" className="mt-4">
                      Enroll
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function CalendarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UserIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
