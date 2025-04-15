"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, TrendingUp, Trophy, Phone, Instagram, BarChart4, Percent, RefreshCw } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export function InvestmentOpportunity() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const cities = [
    {
      id: "ahmedabad",
      name: "Ahmedabad",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-red-500",
      population: "6.3M+",
      cricketFans: "4.2M+",
      teamName: "Gujarat Titans",
      instagram: "gujarat_titans",
      followers: "4.6M"
    },
    {
      id: "delhi",
      name: "Delhi",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-500 to-blue-500",
      population: "19M+",
      cricketFans: "12.5M+",
      teamName: "Delhi Capitals",
      instagram: "delhicapitals",
      followers: "4.9M"
    },
    {
      id: "chennai",
      name: "Chennai",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-yellow-500 to-yellow-600",
      population: "7.1M+",
      cricketFans: "5.3M+",
      teamName: "Chennai Super Kings",
      instagram: "chennaiipl",
      followers: "18.2M"
    },
    {
      id: "lucknow",
      name: "Lucknow",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-400 to-teal-500",
      population: "3.5M+",
      cricketFans: "2.1M+",
      teamName: "Lucknow Super Giants",
      instagram: "lucknowsupergiants",
      followers: "3.6M"
    },
    {
      id: "jaipur",
      name: "Jaipur",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-pink-500 to-pink-600",
      population: "3.1M+",
      cricketFans: "2.3M+",
      teamName: "Rajasthan Royals",
      instagram: "rajasthanroyals",
      followers: "4.8M"
    },
    {
      id: "kolkata",
      name: "Kolkata",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-indigo-600",
      population: "14.8M+",
      cricketFans: "9.7M+",
      teamName: "Kolkata Knight Riders",
      instagram: "kkriders",
      followers: "7.3M"
    },
    {
      id: "bangalore",
      name: "Bangalore",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-600 to-red-700",
      population: "8.4M+",
      cricketFans: "6.2M+",
      teamName: "Royal Challengers Bangalore",
      instagram: "royalchallengers.bengaluru",
      followers: "18.8M"
    },
    {
      id: "mumbai",
      name: "Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-600 to-blue-700",
      population: "20.4M+",
      cricketFans: "15.1M+",
      teamName: "Mumbai Indians",
      instagram: "mumbaiindians",
      followers: "16.7M"
    },
    {
      id: "amritsar",
      name: "Amritsar",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-amber-500 to-amber-600",
      population: "1.2M+",
      cricketFans: "850K+",
      teamName: "Punjab Kings",
      instagram: "punjabkingsipl",
      followers: "3.9M"
    },
    {
      id: "patna",
      name: "Patna",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-500 to-green-600",
      population: "2.0M+",
      cricketFans: "1.4M+",
      teamName: "",
      instagram: "",
      followers: ""
    },
    {
      id: "indore",
      name: "Indore",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-cyan-500 to-cyan-600",
      population: "2.2M+",
      cricketFans: "1.6M+",
      teamName: "",
      instagram: "",
      followers: ""
    },
  ]

  return (
    <section id="investment" className="py-12 md:py-20 bg-white mt-10 ">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
            <TrendingUp className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Investment Opportunity
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Invest in Cricket Panga City Editions
          </h2>
          <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Be part of India's fastest growing fantasy cricket platform by investing in our city-specific editions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Investment Details</h3>
            <div className="bg-blue-50 rounded-lg p-4 md:p-6 border border-blue-100">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Investment per edition</span>
                  <span className="text-2xl md:text-3xl font-bold text-blue-700">₹10,00,000</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-blue-200">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Immediate payment</span>
                    <span className="text-xl md:text-2xl font-bold">₹2,00,000</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">On signing</span>
                    <span className="text-xl md:text-2xl font-bold">₹8,00,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 md:p-6 border border-green-100">
              <h4 className="font-bold text-lg mb-4">Return on Investment</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2 flex-shrink-0">
                    <Percent className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h5 className="font-semibold">Profit Sharing</h5>
                    <p className="text-sm text-gray-600">
                      Receive 25% of profits generated annually from your city edition
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2 flex-shrink-0">
                    <RefreshCw className="h-4 w-4 text-green-700" />
                  </div>
                  <div>
                    <h5 className="font-semibold">Capital Recovery</h5>
                    <p className="text-sm text-gray-600">
                      Full investment returned within two years
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Key Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Exclusive rights to a city-specific Cricket Panga edition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Revenue sharing from all users in your city edition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Marketing and promotional support from Cricket Panga</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">Option to invest in multiple city editions</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100 flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-2 flex-shrink-0">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="font-medium">For more information about investment:</p>
                <p className="text-lg font-bold cursor-pointer" onClick={() => window.open("https://wa.me/919371942559", "_blank")}>WhatsApp: +919371942559</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-10 rounded-lg"></div>
            <div className="relative bg-white rounded-lg border p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Why Invest in Cricket Panga?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                    <Trophy className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Proven Business Model</h4>
                    <p className="text-sm text-gray-500">
                      Fantasy sports is a ₹34,000 crore industry with consistent growth
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">City-Specific Approach</h4>
                    <p className="text-sm text-gray-500">
                      Targeted marketing and localized content drives higher engagement and retention
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Growth Potential</h4>
                    <p className="text-sm text-gray-500">
                      Early investors benefit from rapid expansion and increasing platform value
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Exclusive Investment Privileges</h4>
                    <p className="text-sm text-gray-500">
                    Investors in the early edition enjoy the first right to invest in future editions prior to IPL and WPL 2026
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
                    <BarChart4 className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lucrative Returns</h4>
                    <p className="text-sm text-gray-500">
                      25% profit sharing yearly with full investment recovery within two years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={ref} className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-center">Available City Editions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {cities.map((city, index) => (
              <Card
                key={city.id}
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  selectedCity === city.id ? "ring-2 ring-blue-500" : ""
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCity(city.id === selectedCity ? null : city.id)}
              >
                <div className={`h-24 bg-gradient-to-r ${city.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white">{city.name}</h3>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Population:</span>
                      <span className="font-medium">{city.population}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cricket Fans:</span>
                      <span className="font-medium">{city.cricketFans}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">IPL Team:</span>
                      <span className="font-medium truncate max-w-32">{city.teamName || "N/A"}</span>
                    </div>
                    {city.instagram && (
                      <div className="flex justify-between items-center pt-1 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Instagram className="h-3 w-3" />
                          <span>Followers:</span>
                        </div>
                        <Link
                          href={`https://www.instagram.com/${city.instagram}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {city.followers}
                        </Link>
                      </div>
                    )}
                  </div>
                  {selectedCity === city.id && (
                    <div className="mt-3 pt-2 border-t">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Available for Investment</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-200 transition-all duration-300 group"
            >
              <Link
                href="https://wa.me/919371942559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                WhatsApp Founder to Discuss{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}