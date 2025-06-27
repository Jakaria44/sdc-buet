"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Joining BUET SDC was the best decision I made during my university years. The collaborative environment and mentorship helped me land my dream job at Google.",
      name: "Rashid Ahmed",
      title: "Software Engineer at Google, CSE'22",
    },
    {
      quote:
        "The hackathons and coding competitions organized by SDC pushed me to think creatively and solve complex problems. It's where I discovered my passion for AI.",
      name: "Fatima Khan",
      title: "ML Engineer at Microsoft, CSE'21",
    },
    {
      quote:
        "SDC provided me with a platform to work on real-world projects and collaborate with talented peers. The experience was invaluable for my career growth.",
      name: "Mahmud Hassan",
      title: "Full Stack Developer at Pathao, CSE'23",
    },
    {
      quote:
        "The technical workshops and industry connections through SDC gave me insights into the latest technologies and helped me stay ahead in the competitive tech landscape.",
      name: "Nusrat Jahan",
      title: "DevOps Engineer at Samsung, CSE'20",
    },
    {
      quote:
        "Being part of SDC taught me not just coding, but also leadership, teamwork, and project management skills that are essential in the tech industry.",
      name: "Karim Rahman",
      title: "Tech Lead at bKash, CSE'19",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Hear from our alumni who are now making their mark in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  )
}
