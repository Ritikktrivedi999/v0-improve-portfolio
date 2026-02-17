"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"
import { showToast } from "@/lib/toast"
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    terms: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      topic: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      showToast.error('Please fill in all required fields')
      return
    }

    if (!formData.terms) {
      showToast.error('Please accept the terms and conditions')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      showToast.success('Message sent successfully! I\'ll get back to you soon.')

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        terms: false,
      })
    } catch (error) {
      showToast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 dark:from-gray-900 dark:to-black relative overflow-hidden">
      <ToastContainer position="bottom-right" autoClose={3000} />
      
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">Contact Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-effect-ai hover:shadow-lg hover:ai-glow transition-all duration-300 bg-white/5 border border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
                    >
                      <Mail className="h-6 w-6 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300 text-sm">ritikktrivedi9999@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="glass-effect-ai hover:shadow-lg hover:ai-glow transition-all duration-300 bg-white/5 border border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
                    >
                      <Phone className="h-6 w-6 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-300 text-sm">Available on request</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-effect-ai hover:shadow-lg hover:ai-glow transition-all duration-300 bg-white/5 border border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center"
                    >
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-gray-300 text-sm">Rewa, M.P., India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-400 mb-3">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/40 transition-colors border border-blue-500/20 hover:border-blue-500/40"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect-ai bg-white/5 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-white gradient-text">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-200">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                        className="bg-white/10 border border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/30 transition-colors glass-effect-ai"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-200">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                        className="bg-white/10 border border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/30 transition-colors glass-effect-ai"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-200">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="bg-white/10 border border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/30 transition-colors glass-effect-ai"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-200">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="bg-white/10 border border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/30 transition-colors glass-effect-ai"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-gray-200">Choose a topic</Label>
                    <Select value={formData.topic} onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-white/10 border border-blue-500/20 text-white focus:border-blue-500/50 focus:ring-blue-500/30 transition-colors glass-effect-ai">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900/90 border border-blue-500/20 text-white">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">Project Discussion</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="job">Job Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      className="bg-white/10 border border-blue-500/20 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/30 transition-colors glass-effect-ai resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked }))}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer">
                      I accept the terms and conditions
                    </Label>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 ai-glow transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            className="h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
