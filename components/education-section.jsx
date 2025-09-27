import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Rewa Engineering College, Rewa M.P.",
    branch: "Electronics and Communication Engineering (ECE)",
    duration: "2020-2024",
    grade: "7.94/10 CGPA",
    type: "Undergraduate",
    achievements: ["Dean's List", "Technical Society Member"],
  },
  {
    id: 2,
    degree: "Senior Secondary (12th)",
    institution: "Sanskar Valley Public School Rewa M.P.",
    branch: "Science (Mathematics)",
    duration: "2019-20",
    grade: "76.60%",
    type: "Higher Secondary",
    achievements: ["Science Stream Topper", "Mathematics Excellence"],
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    institution: "Sanskar Valley Public School Rewa M.P.",
    branch: "",
    duration: "2017-18",
    grade: "89.40%",
    type: "Secondary",
    achievements: ["Academic Excellence Award", "All-rounder Student"],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">My Education</p>
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Academic Journey</h2>
          <p className="text-secondary-custom max-w-2xl mx-auto">
            My educational background and academic achievements that laid the foundation for my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <Card
              key={edu.id}
              className="group glass-effect border-0 shadow-custom hover:shadow-custom-lg hover-lift transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 gradient-primary"></div>

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="outline" className="mb-2 w-fit mx-auto border-primary text-primary">
                  {edu.type}
                </Badge>
                <CardTitle className="text-xl text-primary-custom">{edu.degree}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold text-primary text-lg mb-2">{edu.institution}</h3>
                  {edu.branch && <p className="text-secondary-custom font-medium">{edu.branch}</p>}
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm text-secondary-custom">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-semibold text-lg text-primary-custom">{edu.grade}</span>
                  </div>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary-custom">Achievements:</p>
                    <div className="flex flex-wrap gap-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="secondary" className="text-xs glass-effect border-0">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
