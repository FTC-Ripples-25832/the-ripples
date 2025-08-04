import Image from "next/image"
import type React from "react"

// Team member data
const teamMembers = [
  {
    name: "Alex Chen",
    role: "Team Captain & Lead Programmer",
    grade: "12th Grade",
    bio: "Passionate about autonomous programming and robot design. Leading the team to Worlds 2024!",
    skills: ["Java", "Python", "CAD Design", "Leadership"],
    image: "/images/team-alex.jpg"
  },
  {
    name: "Maya Rodriguez",
    role: "Lead Designer & CAD Specialist",
    grade: "11th Grade",
    bio: "Expert in mechanical design and 3D modeling. Loves solving complex engineering challenges.",
    skills: [
      "SolidWorks",
      "3D Printing",
      "Mechanical Design",
      "Problem Solving"
    ],
    image: "/images/team-maya.jpg"
  },
  {
    name: "Jordan Kim",
    role: "Hardware Engineer & Electronics",
    grade: "12th Grade",
    bio: "Specializes in robot electronics, sensors, and hardware integration. Future engineering major.",
    skills: ["Electronics", "Sensors", "Wiring", "Hardware Design"],
    image: "/images/team-jordan.jpg"
  },
  {
    name: "Emma Thompson",
    role: "Strategy & Operations Lead",
    grade: "10th Grade",
    bio: "Focuses on game strategy, alliance coordination, and team operations management.",
    skills: [
      "Strategic Planning",
      "Team Coordination",
      "Analysis",
      "Communication"
    ],
    image: "/images/team-emma.jpg"
  },
  {
    name: "Marcus Johnson",
    role: "Build Team & Fabrication",
    grade: "11th Grade",
    bio: "Hands-on builder who brings designs to life. Expert in fabrication and assembly.",
    skills: ["Fabrication", "Assembly", "Tool Operation", "Quality Control"],
    image: "/images/team-marcus.jpg"
  },
  {
    name: "Zoe Zhang",
    role: "Programmer & Autonomous Specialist",
    grade: "10th Grade",
    bio: "Rising sophomore with exceptional programming skills. Focuses on autonomous routines.",
    skills: ["Java", "Autonomous Programming", "Debugging", "Innovation"],
    image: "/images/team-zoe.jpg"
  }
]

// Team stats
const teamStats = [
  { label: "Team Founded", value: "2019" },
  { label: "Competition Wins", value: "15+" },
  { label: "Regional Championships", value: "3" },
  { label: "Years Active", value: "5" }
]

const TeamPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#1c1c1c] text-white overflow-x-hidden">
      <div className="relative z-10 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8">
              Meet Our <span className="italic text-tiffany-300">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a passionate group of high school students from San Diego
              who love robotics, engineering, and pushing the boundaries of
              what's possible in FIRST Tech Challenge.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-stone-800/20 rounded-lg border border-stone-700/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-tiffany-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Team Photo Section */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Triple Fault Robotics
            </h2>
            <div className="relative">
              <Image
                src="/images/team-photo.jpg"
                alt="Team Photo"
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-tiffany-300/10 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded">
                <span className="text-tiffany-300 font-mono text-sm">
                  Team #23251 at Regionals 2024
                </span>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Our <span className="italic text-tiffany-300">Members</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-stone-800/20 rounded-lg p-6 border border-stone-700/30 hover:border-tiffany-300/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-tiffany-300/30"
                    />

                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-tiffany-300 font-mono text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">{member.grade}</p>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-tiffany-300/20 text-tiffany-200 text-xs rounded font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Values */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="italic text-tiffany-300">Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push boundaries and explore new solutions to
                  complex engineering challenges.
                </p>
              </div>

              <div className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  Teamwork makes the dream work. We support each other and grow
                  together.
                </p>
              </div>

              <div className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from design to
                  competition.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center bg-stone-800/20 rounded-lg p-8 border border-stone-700/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to <span className="italic text-tiffany-300">Join Us?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students who want to learn
              about robotics, engineering, and STEM. No experience necessary -
              just bring your enthusiasm!
            </p>
            <a
              href="mailto:team@3fault.com"
              className="inline-block px-8 py-3 bg-tiffany-300 text-black font-bold rounded-lg hover:bg-tiffany-200 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
