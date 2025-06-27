"use client"

import { motion } from "framer-motion"
import { Calendar, Code, Users, Trophy, Presentation, Coffee } from "lucide-react"
import { Timeline } from "@/components/ui/timeline"

export function ActivitiesSection() {
  const activities = [
    {
      title: "Weekly Coding Sessions",
      content: (
        <div>
          <p className="text-cyan-100/80 mb-4">
            Every Wednesday evening, we gather for collaborative coding sessions where members work on personal
            projects, solve algorithmic challenges, and help each other debug code.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
              <Code className="w-6 h-6 text-cyan-400 mb-2" />
              <h4 className="text-cyan-100 font-semibold">Problem Solving</h4>
              <p className="text-cyan-100/60 text-sm">LeetCode, Codeforces challenges</p>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
              <Users className="w-6 h-6 text-cyan-400 mb-2" />
              <h4 className="text-cyan-100 font-semibold">Peer Learning</h4>
              <p className="text-cyan-100/60 text-sm">Code reviews and mentorship</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Monthly Tech Talks",
      content: (
        <div>
          <p className="text-cyan-100/80 mb-4">
            Industry professionals and senior students share insights on emerging technologies, career guidance, and
            real-world software development practices.
          </p>
          <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
            <Presentation className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="text-cyan-100 font-semibold">Recent Topics</h4>
            <ul className="text-cyan-100/60 text-sm space-y-1">
              <li>• Machine Learning in Production</li>
              <li>• Cloud Architecture Patterns</li>
              <li>• Mobile App Development Trends</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Hackathons & Competitions",
      content: (
        <div>
          <p className="text-cyan-100/80 mb-4">
            Regular participation in national and international hackathons, programming contests, and innovation
            challenges. Our teams have won multiple awards and recognition.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
              <Trophy className="w-6 h-6 text-cyan-400 mb-2" />
              <h4 className="text-cyan-100 font-semibold">Recent Wins</h4>
              <p className="text-cyan-100/60 text-sm">3rd place in National Hackathon</p>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
              <Calendar className="w-6 h-6 text-cyan-400 mb-2" />
              <h4 className="text-cyan-100 font-semibold">Upcoming</h4>
              <p className="text-cyan-100/60 text-sm">BUET CSE Fest 2024</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Social Events",
      content: (
        <div>
          <p className="text-cyan-100/80 mb-4">
            Beyond coding, we organize social events, game nights, and informal meetups to build lasting friendships and
            create a supportive community atmosphere.
          </p>
          <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
            <Coffee className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="text-cyan-100 font-semibold">Community Building</h4>
            <p className="text-cyan-100/60 text-sm">Monthly social gatherings and team building activities</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="activities" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Our Activities
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            From coding sessions to hackathons, discover what makes our community vibrant and engaging
          </p>
        </motion.div>

        <Timeline data={activities} />
      </div>
    </section>
  )
}
