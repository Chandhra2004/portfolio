"use client"

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skills = {
    languages: ["Python", "C", "SQL", "Java", "JavaScript", "HTML", "CSS"],
    tools: ["Git", "GitHub", "VS Code", "Arduino IDE", "Firebase", "Google Colab", "Insomnia", "Android Studio"],
    development: ["Frontend Development", "Backend Development", "Computer Networks"],
    soft: ["Critical Thinking", "Communication skills", "Interpersonal skills", "Problem Solving", "Time Management"],
  }

  const projects = [
    {
      title: "AI SkillConnect – Web Application for Skill Exchange",
      description:
        "A cross-platform app that enables users to exchange skills within gated communities with AI-powered skill detection.",
      technologies: ["AI/ML", "NLP", "OpenAI APIs", "Express.js", "MongoDB"],
      features: [
        "AI-powered skill detection and validation using NLP models",
        "Real-time chat system and skill-based matching algorithm",
        "Cross-platform compatibility",
      ],
      github: "#",
    },
    {
      title: "Image Segmentation and Object Detection",
      description:
        "Advanced Image Segmentation and Object Detection System with enhanced accuracy for multiple object detection.",
      technologies: ["YoloV3", "Pointrend Model", "Computer Vision", "Python"],
      features: [
        "Enhanced object detection accuracy",
        "Multiple object detection within images",
        "Advanced segmentation algorithms",
      ],
      github: "#",
    },
  ]

  const certifications = [
    { name: "Data Analytics with Python", issuer: "NPTEL", date: "May 2025" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "April 2025" },
    { name: "Data Science for Engineers", issuer: "NPTEL", date: "September 2024" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Guduru Chandhra Siddharrdha</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Aspiring Software Engineer passionate about developing scalable solutions that solve real-world problems
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>chandhra.guduru@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+91 9392977134</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/chandhra-siddharrdha-guduru-65b415307/", "_blank")
                }
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                onClick={() => window.open("https://github.com/Chandhra2004/", "_blank")}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                An aspiring software engineer passionate about Software Development. Experience in leading projects that
                solve real-world problems through scalable software solutions. Looking for an opportunity to contribute
                my problem solving skills and technical expertise in a collaborative environment. Dedicated to
                continuous learning and innovation, with a strong drive to develop impactful software solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-xl">B.Tech in Computer Science and Engineering</CardTitle>
                <CardDescription className="text-blue-100">
                  Gokaraju Rangaraju Institute of Engineering and Technology
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>November 2022 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-lg">CGPA: 9.37/10</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardTitle className="text-xl">Higher Secondary Education, MPC</CardTitle>
                <CardDescription className="text-purple-100">Sigma Junior College - TSBIE</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>June 2020 – May 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-lg">Percentage: 96%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-blue-600">Intern - Packaged App Development Associate</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">Accenture in India</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    May 2025 – July 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developing and customizing enterprise applications within a dynamic team.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Collaborating with cross-functional teams to meet project deliverables using Agile and DevOps
                      methodologies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Gaining hands-on experience in application lifecycle management, integration, and deployment
                      within client environments.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-blue-600">AI ML Virtual Intern</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      Google for Developers
                    </CardDescription>
                  </div>
                  <Badge variant="outline">January 2024 - March 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Gained foundational knowledge of AI/ML algorithms, data structures, and programming languages.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Developed hands-on experience in neural networks, NLP, and computer vision through real-world
                      projects.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Applied ethical AI practices to ensure responsible model development.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-blue-600">{project.title}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open("https://github.com/Chandhra2004/", "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                  <CardDescription className="text-gray-700">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code className="w-5 h-5 text-blue-500" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="border-blue-200 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Database className="w-5 h-5 text-green-500" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="border-green-200 text-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="w-5 h-5 text-purple-500" />
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="border-purple-200 text-purple-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-orange-500" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="border-orange-200 text-orange-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{cert.name}</h3>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {cert.date}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="secondary" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              onClick={() =>
                window.open("https://www.linkedin.com/in/chandhra-siddharrdha-guduru-65b415307/", "_blank")
              }
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              onClick={() => window.open("https://github.com/Chandhra2004/", "_blank")}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Guduru Chandhra Siddharrdha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
