"use client"
// /team/resources page, ported from ripples
import React from "react"
// import Link from "next/link" // Remove unused Link import
// import { Scene } from "../../(three)/water-matcap/scene"
// import { eventManagerFactory } from "../../(three)/water-matcap/scene/event-manager"

// Resource categories and items
const resources = {
  programming: [
    {
      title: "FTC Programming Guide",
      description:
        "Complete guide to programming your FTC robot with Java and Android Studio",
      type: "PDF Guide",
      size: "2.3 MB",
      downloadUrl: "#",
      tags: ["Java", "Android Studio", "Beginner"]
    },
    {
      title: "Autonomous Programming Templates",
      description:
        "Pre-built autonomous routines and templates for common game elements",
      type: "Code Package",
      size: "856 KB",
      downloadUrl: "#",
      tags: ["Java", "Autonomous", "Templates"]
    },
    {
      title: "Sensor Integration Examples",
      description:
        "Working examples for cameras, encoders, IMU, and other sensors",
      type: "Code Examples",
      size: "1.2 MB",
      downloadUrl: "#",
      tags: ["Sensors", "Vision", "Advanced"]
    }
  ],
  mechanical: [
    {
      title: "Robot Design Principles",
      description:
        "Essential mechanical design concepts for competitive FTC robots",
      type: "PDF Guide",
      size: "4.1 MB",
      downloadUrl: "#",
      tags: ["Design", "Mechanical", "Strategy"]
    },
    {
      title: "CAD Templates & Parts Library",
      description:
        "SolidWorks templates and common FTC part models for quick prototyping",
      type: "CAD Files",
      size: "15.7 MB",
      downloadUrl: "#",
      tags: ["CAD", "SolidWorks", "Templates"]
    },
    {
      title: "Drive Train Comparison",
      description:
        "Analysis of different drive train types with pros/cons for each",
      type: "Analysis",
      size: "892 KB",
      downloadUrl: "#",
      tags: ["Drive Train", "Analysis", "Strategy"]
    }
  ],
  strategy: [
    {
      title: "Game Analysis Framework",
      description:
        "Step-by-step guide to analyzing new game challenges and developing strategy",
      type: "PDF Guide",
      size: "1.8 MB",
      downloadUrl: "#",
      tags: ["Strategy", "Analysis", "Planning"]
    },
    {
      title: "Alliance Selection Guide",
      description:
        "How to evaluate teams and make smart alliance selections at competitions",
      type: "PDF Guide",
      size: "1.1 MB",
      downloadUrl: "#",
      tags: ["Strategy", "Alliances", "Competition"]
    },
    {
      title: "Match Strategy Templates",
      description:
        "Customizable templates for developing match strategies and contingency plans",
      type: "Templates",
      size: "654 KB",
      downloadUrl: "#",
      tags: ["Strategy", "Templates", "Planning"]
    }
  ],
  business: [
    {
      title: "Engineering Notebook Guide",
      description:
        "Complete guide to creating award-winning engineering notebooks",
      type: "PDF Guide",
      size: "3.2 MB",
      downloadUrl: "#",
      tags: ["Notebook", "Documentation", "Awards"]
    },
    {
      title: "Sponsorship Proposal Template",
      description: "Professional sponsorship proposal template with examples",
      type: "Template",
      size: "1.5 MB",
      downloadUrl: "#",
      tags: ["Sponsorship", "Business", "Funding"]
    },
    {
      title: "Presentation Templates",
      description: "Award presentation templates for judges and sponsors",
      type: "PowerPoint",
      size: "2.8 MB",
      downloadUrl: "#",
      tags: ["Presentations", "Awards", "Templates"]
    }
  ]
}

const categoryColors = {
  programming: "blue",
  mechanical: "tiffany",
  strategy: "green",
  business: "purple"
}

const categoryIcons = {
  programming: "💻",
  mechanical: "⚙️",
  strategy: "🏯",
  business: "📊"
}

const ResourceCard: React.FC<{
  resource: any
  categoryColor: string
}> = ({ resource, categoryColor }) => (
  <div className="bg-stone-800/20 rounded-lg p-6 border border-stone-700/30 hover:border-tiffany-300/50 transition-all duration-300 hover:transform hover:scale-105">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
      <span
        className={`px-3 py-1 rounded-full text-xs font-mono text-${categoryColor}-200 bg-${categoryColor}-500/20`}
      >
        {resource.type}
      </span>
    </div>
    <p className="text-gray-300 mb-4 leading-relaxed">{resource.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {resource.tags.map((tag: string, index: number) => (
        <span
          key={index}
          className="px-2 py-1 bg-stone-700/50 text-stone-300 text-xs rounded font-mono"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-400 font-mono">{resource.size}</span>
      <button
        onClick={() =>
          alert("Download functionality would be implemented with real files")
        }
        className="px-4 py-2 bg-tiffany-300 text-black font-bold rounded hover:bg-tiffany-200 transition-colors text-sm"
      >
        Download
      </button>
    </div>
  </div>
)

const ResourcesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#1c1c1c] text-white overflow-x-hidden">
      {/* <WaterMatCapBackground /> */}
      <div className="relative z-10">
        <main className="pt-24 pb-4">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-8">
                <span className="italic text-tiffany-300">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Everything we've learned competing in FIRST Tech Challenge,
                shared freely with the community. Download guides, templates,
                and code to accelerate your team's success.
              </p>
            </div>
            {/* Resource Categories */}
            {Object.entries(resources).map(([category, items]) => (
              <div key={category} className="mb-16">
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold capitalize">
                    {category}{" "}
                    <span className="italic text-tiffany-300">Resources</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((resource, index) => (
                    <ResourceCard
                      key={index}
                      resource={resource}
                      categoryColor={
                        categoryColors[category as keyof typeof categoryColors]
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ResourcesPage
