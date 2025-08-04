"use client"
// /team/contact page, ported from ripples
import React from "react"
// import Navigation from "../Navigation"
// import { Canvas } from "@react-three/fiber"
// import { Scene } from "../../(three)/water-matcap/scene"
// import { eventManagerFactory } from "../../(three)/water-matcap/scene/event-manager"

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      detail: "team@3fault.com",
      description: "Best for general inquiries and collaboration requests"
    },
    {
      icon: "📱",
      title: "Social Media",
      detail: "@TripleFaultFTC",
      description: "Follow us for updates and competition highlights"
    },
    {
      icon: "🏫",
      title: "School",
      detail: "San Diego High School",
      description: "Located in beautiful San Diego, California"
    },
    {
      icon: "🤝",
      title: "Mentorship",
      detail: "Available for Teams",
      description: "We offer mentoring for new and developing FTC teams"
    }
  ]

  return (
    <div className="relative min-h-screen bg-[#1c1c1c] text-white overflow-x-hidden">
      {/* <WaterMatCapBackground /> */}
      <div className="relative z-10">
        {/* <Navigation current="/team/contact" /> */}
        <main className="pt-24 pb-4">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-8">
                Get In <span className="italic text-tiffany-300">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Have questions about FTC? Want to collaborate? Need mentorship
                for your team? We'd love to hear from you and help however we
                can.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Contact <span className="italic text-tiffany-300">Info</span>
                </h2>
                <div className="space-y-6 mb-12">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-stone-800/20 rounded-lg border border-stone-700/30"
                    >
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {method.title}
                        </h3>
                        <p className="text-tiffany-300 font-mono mb-2">
                          {method.detail}
                        </p>
                        <p className="text-sm text-gray-400">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Team Hours */}
                <div className="bg-stone-800/20 rounded-lg p-6 border border-stone-700/30">
                  <h3 className="text-xl font-bold mb-4">Team Meeting Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="font-mono text-tiffany-300">
                        3:30 PM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="font-mono text-tiffany-300">
                        9:00 AM - 3:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="font-mono text-tiffany-300">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    *Hours may vary during competition season
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactPage
