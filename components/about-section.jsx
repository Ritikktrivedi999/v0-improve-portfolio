"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/ritik-photo.png"
              alt="About Ritik"
              width={500}
              height={600}
              className="rounded-2xl shadow-custom-lg hover-lift transition-all duration-300 object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 gradient-primary text-white p-6 rounded-2xl shadow-custom-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-white/90">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold text-lg mb-2">About Me</p>
              <h2 className="text-4xl font-bold text-primary-custom mb-6">Passionate Full Stack Developer</h2>
            </div>

            <div className="space-y-4 text-secondary-custom leading-relaxed">
              <p>
                Highly skilled Full Stack Developer with experience in building and optimizing web applications. Proven
                ability to increase conversion rates and improve user experience through innovative solutions and modern
                development practices.
              </p>
              <p>
                Experience with front-end frameworks (React, Next.js, Tailwind CSS) and back-end technologies (Node.js,
                Express.js). Strong proficiency in databases (MongoDB, SQL) and version control (Git/GitHub). Leadership
                and communication skills honed through event coordination roles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="glass-effect border-0 shadow-custom hover-lift">
                <CardContent className="p-4 flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-primary-custom">Location</p>
                    <p className="text-sm text-secondary-custom">Rewa, M.P., India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0 shadow-custom hover-lift">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-primary-custom">Experience</p>
                    <p className="text-sm text-secondary-custom">3+ Years</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="gradient-primary text-white hover-glow"
              onClick={() => window.open("mailto:ritikktrivedi9999@gmail.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
