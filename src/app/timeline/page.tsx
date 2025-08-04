import Image from "next/image"
import type React from "react"

// Timeline data
const timelineEvents = [
  {
    date: "March 2024",
    title: "FIRST World Championship - Houston",
    type: "championship",
    description:
      "Competing at the World Championship in Houston! Our team qualified through regional performance and we're excited to represent San Diego on the world stage.",
    image: "/images/timeline-1.jpg",
    status: "upcoming",
    location: "Houston, TX",
    achievement: "World Championship Qualification"
  },
  {
    date: "February 2024",
    title: "Regional Championship Victory",
    type: "win",
    description:
      "Champions at the San Diego Regional! Our alliance dominated the competition with our new autonomous routine and strategic alliance selections.",
    image: "/images/timeline-2.jpg",
    status: "completed",
    location: "San Diego, CA",
    achievement: "Regional Champions + Design Award"
  },
  {
    date: "January 2024",
    title: "Season Kickoff - CENTERSTAGE",
    type: "event",
    description:
      "Game reveal day! This year's challenge involves pixel placement and autonomous navigation. We're analyzing game strategy and beginning robot design.",
    image: "/images/timeline-3.jpg",
    status: "completed",
    location: "Virtual Event",
    achievement: "Game Analysis Complete"
  },
  {
    date: "December 2023",
    title: "Robot Redesign Complete",
    type: "milestone",
    description:
      "Major overhaul of our drivetrain and intake system. New mecanum wheel setup provides better maneuverability and our intake can handle multiple game elements.",
    image: "/images/timeline-4.jpg",
    status: "completed",
    location: "Our Workshop",
    achievement: "Performance Improvement: +40%"
  },
  {
    date: "November 2023",
    title: "Qualifier Tournament #2",
    type: "competition",
    description:
      "Strong showing at our second qualifier. Finished 3rd overall and secured advancement to regionals. Our autonomous routine is now scoring consistently.",
    image: "/images/timeline-5.jpg",
    status: "completed",
    location: "La Jolla, CA",
    achievement: "3rd Place + Regional Advancement"
  },
  {
    date: "October 2023",
    title: "First Competition of Season",
    type: "competition",
    description:
      "Debut of our new robot design. Some technical challenges but valuable learning experience. Team performed well under pressure and gained crucial match experience.",
    image: "/images/timeline-6.jpg",
    status: "completed",
    location: "San Diego, CA",
    achievement: "Rookie Inspiration Award"
  }
]

const upcomingEvents = [
  {
    date: "March 15-18, 2024",
    title: "FIRST World Championship",
    location: "Houston, TX",
    type: "Championship"
  },
  {
    date: "March 8, 2024",
    title: "Robot Shipping Deadline",
    location: "Team Workshop",
    type: "Deadline"
  },
  {
    date: "March 1, 2024",
    title: "Final Practice Session",
    location: "Team Workshop",
    type: "Practice"
  }
]

const seasonStats = [
  { label: "Competitions", value: "6", description: "Events Participated" },
  { label: "Wins", value: "15", description: "Match Victories" },
  { label: "Awards", value: "4", description: "Total Awards Won" },
  { label: "Ranking", value: "#2", description: "Regional Ranking" }
]

const EventCard: React.FC<{ event: any }> = ({ event }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "border-tiffany-300 bg-tiffany-300/10"
      case "completed":
        return "border-stone-700/30 bg-stone-800/20"
      default:
        return "border-stone-700/30 bg-stone-800/20"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "championship":
        return "🏆"
      case "win":
        return "🥇"
      case "competition":
        return "🤖"
      case "milestone":
        return "🔧"
      case "event":
        return "📅"
      default:
        return "📍"
    }
  }

  return (
    <div
      className={`rounded-lg border overflow-hidden ${getStatusColor(event.status)} hover:transform hover:scale-105 transition-all duration-300`}
    >
      <Image
        src={event.image}
        alt={event.title}
        width={600}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-tiffany-300 font-mono text-sm">
            {event.date}
          </span>
          <span className="text-2xl">{getTypeIcon(event.type)}</span>
        </div>

        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Location:</span>
            <span className="font-mono">{event.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Achievement:</span>
            <span className="font-mono text-tiffany-300">
              {event.achievement}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const TimelinePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8">
          Team <span className="italic text-tiffany-300">Timeline</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Follow our journey through the 2023-2024 FTC season. From kickoff to
          World Championship, here's our story of growth, challenges, and
          victories.
        </p>
      </div>

      {/* Current Season Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {seasonStats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-stone-800/20 rounded-lg border border-stone-700/30"
          >
            <div className="text-3xl md:text-4xl font-bold text-tiffany-300 mb-2">
              {stat.value}
            </div>
            <div className="text-lg font-bold mb-1">{stat.label}</div>
            <div className="text-sm text-gray-400 font-mono">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Upcoming <span className="italic text-tiffany-300">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-tiffany-300/10 border border-tiffany-300/50 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-tiffany-300/20 text-tiffany-200 text-xs rounded-full font-mono">
                  {event.type}
                </span>
                <span className="text-2xl">📅</span>
              </div>

              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-tiffany-200 font-mono text-sm mb-2">
                {event.date}
              </p>
              <p className="text-gray-300 text-sm">{event.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Events */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Season <span className="italic text-tiffany-300">Highlights</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      {/* Season Reflection */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Season <span className="italic text-tiffany-300">Reflection</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-stone-800/20 rounded-lg p-8 border border-stone-700/30">
            <h3 className="text-2xl font-bold mb-4 text-tiffany-300">
              What We've Learned
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>
                  Iterative design leads to better robots - we rebuilt our
                  intake 3 times!
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>
                  Alliance strategy is just as important as robot performance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>Documentation and engineering notebooks win awards</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>
                  Gracious professionalism builds lasting relationships
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-stone-800/20 rounded-lg p-8 border border-stone-700/30">
            <h3 className="text-2xl font-bold mb-4 text-tiffany-300">
              Looking Ahead
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>
                  World Championship preparation and strategy refinement
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>Mentoring younger teams in our community</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>Expanding our outreach and STEM education programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-tiffany-300 mr-3">•</span>
                <span>Building an even better robot for next season</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-stone-800/20 rounded-lg p-8 border border-stone-700/30">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Follow Our <span className="italic text-tiffany-300">Journey</span>
        </h3>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Want to stay updated on our competition progress and see
          behind-the-scenes content? Follow us on social media and subscribe to
          our newsletter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-tiffany-300 text-black font-bold rounded-lg hover:bg-tiffany-200 transition-colors"
          >
            Follow Updates
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-tiffany-300 text-tiffany-300 font-bold rounded-lg hover:bg-tiffany-300/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default TimelinePage
