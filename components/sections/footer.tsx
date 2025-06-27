"use client"

import { motion } from "framer-motion"
import { Code2, Mail, MapPin, Phone, Github, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/buet-sdc", label: "GitHub" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/buet.sdc", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/buet-sdc", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Join Us", href: "#join" },
    { name: "Contact", href: "#footer" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      scrollToSection(href.substring(1))
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <footer id="footer" className="relative py-16 border-t border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-100">Software Development Club</h3>
                <p className="text-sm text-cyan-300/60">BUET</p>
              </div>
            </div>
            <p className="text-cyan-100/70 mb-6 leading-relaxed">
              Empowering BUET students to excel in software development through collaborative learning, innovative
              projects, and industry connections.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cyan-100/70 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-100 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cyan-100/70">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">BUET Campus, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-100/70">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:sdc@buet.ac.bd"
                  className="text-sm hover:text-cyan-400 transition-colors duration-200"
                >
                  sdc@buet.ac.bd
                </a>
              </div>
              <div className="flex items-center space-x-3 text-cyan-100/70">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+8801234567890"
                  className="text-sm hover:text-cyan-400 transition-colors duration-200"
                >
                  +880 1234 567890
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 mt-12 pt-8 text-center"
        >
          <p className="text-cyan-100/60">© 2024 Software Development Club, BUET. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
