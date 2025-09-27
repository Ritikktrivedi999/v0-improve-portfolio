"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const GEMINI_API_KEY = "AIzaSyAEjJ5VCrsdHaxbc7o3ftVTIVHo62TdmVA"
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`

const SYSTEM_PROMPT = `You are Ritik Trivedi's AI assistant on his portfolio website. You should help visitors learn about Ritik's skills, experience, and projects. Here's information about Ritik:

ABOUT RITIK:
- Full Stack Developer with 3+ years of experience
- Specializes in MERN stack (MongoDB, Express.js, React.js, Node.js)
- Graduate from Rewa Engineering College (ECE, 2020-2024, 7.94 CGPA)
- Located in Rewa, M.P., India
- Email: ritikktrivedi9999@gmail.com

EXPERIENCE:
1. 5G Internet Of IOT Builders at FIIT, IIT Delhi (Jan-Mar 2024)
   - Led Capstone project on Wokwi utilizing Blynk IoT
   - Implemented MQTT communication with NodeRed
   - Technologies: C++, STL, Wokwi, Sensor, ThingSpeak Cloud

2. Web Developer Intern at Zetpeak, Bangalore (Jul-Oct 2023)
   - Rebuilt E-commerce website using MERN stack
   - Increased conversion rate by 20%, reduced load time by 35%
   - Developed HR management system
   - Technologies: React.js, Node.js, Express.js, Tailwind CSS, RTK

3. Frontend Developer Intern at IBM SkillBuild and Edunet (Jun-Jul 2023)
   - Explored frontend technologies and frameworks
   - Led group Capstone Project based on React
   - Technologies: React.js, Redux, HTML5, CSS3

SKILLS:
- Frontend: HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB, SQL, REST APIs
- Tools: Git, GitHub, VS Code, Postman, MongoDB Compass
- Other: Redux RTK, C, C++, MATLAB

PROJECTS:
1. OpportuneHub: Full Stack Job Portal (React.js, Node.js, MongoDB, Express.js)
2. MERN Blog Application (MongoDB, Express.js, React.js, Node.js, Redux)
3. API Based Movie App (React.js, Axios, Movie API)
4. Food-Street-Redux (React.js, Redux Toolkit)

Keep responses helpful, professional, and focused on Ritik's qualifications. If asked about topics outside his portfolio, politely redirect to his contact information. Always be encouraging about potential collaborations.`

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Ritik's AI assistant. I can help you learn about his skills, experience, and projects. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const getGeminiResponse = async (userMessage) => {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\n\nAssistant:`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Gemini API Error:", error)
      return "I apologize, but I'm having trouble connecting right now. For immediate assistance, please feel free to contact Ritik directly via WhatsApp or email at ritikktrivedi9999@gmail.com."
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputMessage
    setInputMessage("")
    setIsTyping(true)

    try {
      const aiResponseText = await getGeminiResponse(currentInput)

      const aiResponse = {
        id: messages.length + 2,
        text: aiResponseText,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
    } catch (error) {
      const errorResponse = {
        id: messages.length + 2,
        text: "I apologize, but I'm experiencing technical difficulties. Please try again or contact Ritik directly.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const connectToWhatsApp = () => {
    const message = encodeURIComponent("Hi Ritik! I visited your portfolio and would like to connect with you.")
    window.open(`https://wa.me/917049950018?text=${message}`, "_blank")
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <>
      {/* Floating Assistant Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsOpen(true)}
                className="h-14 w-14 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Bot className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96"
          >
            <Card className="h-full flex flex-col shadow-2xl border-0 bg-white dark:bg-gray-800">
              <CardHeader className="bg-indigo-600 text-white p-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-5 w-5" />
                    <div>
                      <CardTitle className="text-sm">AI Assistant</CardTitle>
                      <p className="text-xs opacity-90">Powered by Gemini</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-0 flex flex-col min-h-0">
                {/* Messages - Scrollable Area */}
                <div
                  className="flex-1 overflow-y-auto p-4 space-y-3 h-64 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
                  ref={(el) => {
                    if (el) {
                      el.scrollTop = el.scrollHeight
                    }
                  }}
                >
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "flex items-start space-x-2",
                          message.sender === "user" ? "justify-end" : "justify-start",
                        )}
                      >
                        {message.sender === "ai" && (
                          <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                        )}
                        <div
                          className={cn(
                            "max-w-[70%] p-3 rounded-lg text-sm leading-relaxed",
                            message.sender === "user"
                              ? "bg-indigo-600 text-white rounded-br-none"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none",
                          )}
                        >
                          {message.text}
                        </div>
                        {message.sender === "user" && (
                          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-bl-none">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                              }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="p-3 border-t bg-gray-50 dark:bg-gray-700 flex-shrink-0">
                  <Button
                    onClick={connectToWhatsApp}
                    className="w-full mb-2 bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Connect on WhatsApp
                  </Button>
                </div>

                {/* Input */}
                <div className="p-3 border-t flex-shrink-0">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask me anything about Ritik..."
                      onKeyPress={(e) => e.key === "Enter" && !isTyping && handleSendMessage()}
                      disabled={isTyping}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="px-3 bg-indigo-600 hover:bg-indigo-700"
                      disabled={isTyping || !inputMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
