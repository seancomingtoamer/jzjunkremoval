"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          address: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1a0f]/95 backdrop-blur-md border-b border-[#2d6a2e]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="JZ's Junk Removal Services"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="text-lg sm:text-xl font-bold text-[#4CAF50]">
                JZ&apos;s Junk Removal
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-[#a5d6a7] hover:text-[#4CAF50] transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#a5d6a7] hover:text-[#4CAF50] transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#why-us"
                className="text-[#a5d6a7] hover:text-[#4CAF50] transition-colors font-medium"
              >
                Why Us
              </a>
              <a
                href="#quote"
                className="text-[#a5d6a7] hover:text-[#4CAF50] transition-colors font-medium"
              >
                Get a Quote
              </a>
            </div>
            <a
              href="tel:4707556084"
              className="bg-[#4CAF50] hover:bg-[#66BB6A] text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-all hover:scale-105 text-sm sm:text-base"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a0f] via-[#1a3a1a] to-[#0f1a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(76,175,80,0.15)_0%,_transparent_70%)]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(76,175,80,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <Image
              src="/logo.png"
              alt="JZ's Junk Removal Services"
              width={200}
              height={200}
              className="mx-auto mb-8 drop-shadow-[0_0_30px_rgba(76,175,80,0.4)]"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 animate-fade-in-up-delay">
            <span className="text-white">Atlanta&apos;s </span>
            <span className="text-[#4CAF50]">Go-To</span>
            <br />
            <span className="text-white">Junk Removal Crew</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#a5d6a7] mb-8 max-w-3xl mx-auto animate-fade-in-up-delay-2">
            Junk removal, lawn care, moving & cleaning.
            <br className="hidden sm:block" />
            <span className="text-[#FFD54F] font-semibold">
              Fast. Affordable. No job too big or small.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <a
              href="#quote"
              className="bg-[#4CAF50] hover:bg-[#66BB6A] text-white font-bold py-4 px-10 rounded-full text-lg transition-all hover:scale-105 pulse-glow"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:4707556084"
              className="border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white font-bold py-4 px-10 rounded-full text-lg transition-all hover:scale-105"
            >
              (470) 755-6084
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 text-[#a5d6a7]/70 text-sm animate-fade-in-up-delay-2">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4CAF50]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4CAF50]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Same Day Service
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4CAF50]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Serving All of Atlanta
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#4CAF50]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-[#1a3a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Our <span className="text-[#4CAF50]">Services</span>
            </h2>
            <p className="text-[#a5d6a7] text-lg max-w-2xl mx-auto">
              Whatever you need done, we got you. Professional service at prices
              that work for everybody.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Junk Removal */}
            <div className="group bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-8 hover:border-[#4CAF50] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(76,175,80,0.2)]">
              <div className="w-16 h-16 bg-[#2d6a2e]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                <svg
                  className="w-8 h-8 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Junk Removal
              </h3>
              <p className="text-[#a5d6a7]/80">
                Furniture, appliances, construction debris, yard waste — we haul
                it all. Fast pickup, responsible disposal.
              </p>
            </div>

            {/* Lawn Care */}
            <div className="group bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-8 hover:border-[#4CAF50] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(76,175,80,0.2)]">
              <div className="w-16 h-16 bg-[#2d6a2e]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                <svg
                  className="w-8 h-8 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lawn Care</h3>
              <p className="text-[#a5d6a7]/80">
                Mowing, edging, trimming, leaf removal, and full yard cleanups.
                Keep your property looking fresh year-round.
              </p>
            </div>

            {/* Moving */}
            <div className="group bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-8 hover:border-[#4CAF50] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(76,175,80,0.2)]">
              <div className="w-16 h-16 bg-[#2d6a2e]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                <svg
                  className="w-8 h-8 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Moving Help
              </h3>
              <p className="text-[#a5d6a7]/80">
                Local moves, apartment cleanouts, heavy lifting — we handle the
                hard part so you don&apos;t have to.
              </p>
            </div>

            {/* Cleaning */}
            <div className="group bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-8 hover:border-[#4CAF50] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(76,175,80,0.2)]">
              <div className="w-16 h-16 bg-[#2d6a2e]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                <svg
                  className="w-8 h-8 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cleaning</h3>
              <p className="text-[#a5d6a7]/80">
                Deep cleaning, post-construction cleanup, move-in/move-out
                cleaning. Leave it spotless, guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
                Young Entrepreneurs
                <br />
                <span className="text-[#4CAF50]">
                  Building From the Ground Up
                </span>
              </h2>
              <p className="text-[#a5d6a7] text-lg mb-6 leading-relaxed">
                JZ&apos;s Junk Removal is run by{" "}
                <span className="text-white font-semibold">Jamaury</span> and{" "}
                <span className="text-white font-semibold">Zayvion</span> — two
                young entrepreneurs from Atlanta who aren&apos;t afraid to put
                in the work. We started this business to serve our community
                with honest, reliable service at fair prices.
              </p>
              <p className="text-[#a5d6a7] text-lg mb-8 leading-relaxed">
                We&apos;re hungry, we show up on time, and we don&apos;t leave
                until the job is done right. Whether it&apos;s hauling junk,
                cutting grass, helping you move, or deep cleaning a space — we
                bring the same energy and work ethic to every single job.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#2d6a2e]/20 border border-[#2d6a2e]/40 rounded-xl px-6 py-4 text-center">
                  <div className="text-2xl font-black text-[#4CAF50]">ATL</div>
                  <div className="text-sm text-[#a5d6a7]/70">
                    Born & Raised
                  </div>
                </div>
                <div className="bg-[#2d6a2e]/20 border border-[#2d6a2e]/40 rounded-xl px-6 py-4 text-center">
                  <div className="text-2xl font-black text-[#4CAF50]">4</div>
                  <div className="text-sm text-[#a5d6a7]/70">Services</div>
                </div>
                <div className="bg-[#2d6a2e]/20 border border-[#2d6a2e]/40 rounded-xl px-6 py-4 text-center">
                  <div className="text-2xl font-black text-[#4CAF50]">
                    24hr
                  </div>
                  <div className="text-sm text-[#a5d6a7]/70">
                    Response Time
                  </div>
                </div>
                <div className="bg-[#2d6a2e]/20 border border-[#2d6a2e]/40 rounded-xl px-6 py-4 text-center">
                  <div className="text-2xl font-black text-[#4CAF50]">$0</div>
                  <div className="text-sm text-[#a5d6a7]/70">Free Quotes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2d6a2e]/30 to-[#1a3a1a] rounded-3xl p-10 border border-[#2d6a2e]/40">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#4CAF50]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        We Show Up
                      </h4>
                      <p className="text-[#a5d6a7]/70">
                        On time, every time. We respect your schedule because we
                        respect our reputation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#4CAF50]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Fair Prices
                      </h4>
                      <p className="text-[#a5d6a7]/70">
                        We work with your budget. No hidden fees, no surprise
                        charges. What we quote is what you pay.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#4CAF50]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Community First
                      </h4>
                      <p className="text-[#a5d6a7]/70">
                        We&apos;re building this business to serve Atlanta. Your
                        neighborhood is our neighborhood.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#4CAF50]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        No Job Too Small
                      </h4>
                      <p className="text-[#a5d6a7]/70">
                        One item or a full truckload. Single room or whole
                        property. We handle it all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 sm:py-28 bg-[#1a3a1a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Why <span className="text-[#4CAF50]">Atlanta</span> Chooses
              JZ&apos;s
            </h2>
            <p className="text-[#a5d6a7] text-lg max-w-2xl mx-auto">
              We&apos;re not a big corporation — we&apos;re your neighbors. And
              that means we care more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#4CAF50]/10 border-2 border-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Quick Response
              </h3>
              <p className="text-[#a5d6a7]/80">
                Call or text us and we&apos;ll get back to you fast. Need
                same-day service? We&apos;ll make it happen whenever possible.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#4CAF50]/10 border-2 border-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Honest Pricing
              </h3>
              <p className="text-[#a5d6a7]/80">
                We give you a fair price upfront. No bait-and-switch, no hidden
                fees. We&apos;re flexible and work within your budget.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#4CAF50]/10 border-2 border-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                100% Satisfaction
              </h3>
              <p className="text-[#a5d6a7]/80">
                We don&apos;t leave until you&apos;re happy. Period. Your
                satisfaction is how we build our reputation and grow our
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#0f1a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Proudly Serving{" "}
            <span className="text-[#4CAF50]">Metro Atlanta</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Atlanta",
              "East Point",
              "College Park",
              "Decatur",
              "Sandy Springs",
              "Marietta",
              "Smyrna",
              "Douglasville",
              "Lithonia",
              "Stone Mountain",
              "Conyers",
              "Jonesboro",
              "Forest Park",
              "Hapeville",
              "Riverdale",
            ].map((area) => (
              <span
                key={area}
                className="bg-[#2d6a2e]/20 border border-[#2d6a2e]/50 text-[#a5d6a7] px-4 py-2 rounded-full text-sm font-medium hover:border-[#4CAF50] hover:text-[#4CAF50] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 sm:py-28 bg-[#1a3a1a]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Get Your <span className="text-[#4CAF50]">Free Quote</span>
            </h2>
            <p className="text-[#a5d6a7] text-lg">
              Fill out the form below and we&apos;ll get back to you ASAP. Or
              call us directly!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[#a5d6a7] text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#1a3a1a]/50 border border-[#2d6a2e]/50 rounded-xl px-4 py-3 text-white placeholder-[#a5d6a7]/40 focus:outline-none focus:border-[#4CAF50] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#a5d6a7] text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#1a3a1a]/50 border border-[#2d6a2e]/50 rounded-xl px-4 py-3 text-white placeholder-[#a5d6a7]/40 focus:outline-none focus:border-[#4CAF50] transition-colors"
                      placeholder="(470) 555-0000"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[#a5d6a7] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#1a3a1a]/50 border border-[#2d6a2e]/50 rounded-xl px-4 py-3 text-white placeholder-[#a5d6a7]/40 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-[#a5d6a7] text-sm font-medium mb-2">
                    Service Needed *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-[#1a3a1a]/50 border border-[#2d6a2e]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4CAF50] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="junk-removal">Junk Removal</option>
                    <option value="lawn-care">Lawn Care</option>
                    <option value="moving">Moving Help</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-[#a5d6a7] text-sm font-medium mb-2">
                    Address / Location
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full bg-[#1a3a1a]/50 border border-[#2d6a2e]/50 rounded-xl px-4 py-3 text-white placeholder-[#a5d6a7]/40 focus:outline-none focus:border-[#4CAF50] transition-colors"
                    placeholder="Your address or area"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#a5d6a7] text-sm font-medium mb-2">
                    Tell Us About the Job
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#1a3a1a]/50 border border-[#2d6a2e]/50 rounded-xl px-4 py-3 text-white placeholder-[#a5d6a7]/40 focus:outline-none focus:border-[#4CAF50] transition-colors resize-none"
                    placeholder="What do you need help with? How much stuff? Any special requirements?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-[#4CAF50] hover:bg-[#66BB6A] disabled:bg-[#2d6a2e] text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02]"
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : formStatus === "success"
                      ? "Quote Request Sent!"
                      : "Request Free Quote"}
                </button>

                {formStatus === "success" && (
                  <p className="text-[#4CAF50] text-center mt-4 font-medium">
                    We got your request! We&apos;ll be in touch real soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-400 text-center mt-4 font-medium">
                    Something went wrong. Please call us directly!
                  </p>
                )}
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {/* Call Card */}
              <div className="bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">
                  Call or Text Us
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:4707556084"
                    className="flex items-center gap-3 text-[#4CAF50] hover:text-[#66BB6A] transition-colors text-lg font-semibold"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (470) 755-6084
                  </a>
                  <a
                    href="tel:4706807810"
                    className="flex items-center gap-3 text-[#4CAF50] hover:text-[#66BB6A] transition-colors text-lg font-semibold"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (470) 680-7810
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">
                  Email Us
                </h3>
                <a
                  href="mailto:Zayvionbrooks645@gmail.com"
                  className="text-[#4CAF50] hover:text-[#66BB6A] transition-colors font-medium break-all"
                >
                  Zayvionbrooks645@gmail.com
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-[#0f1a0f] border border-[#2d6a2e]/40 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">
                  We&apos;re Available
                </h3>
                <div className="space-y-2 text-[#a5d6a7]">
                  <div className="flex justify-between">
                    <span>Mon - Sat</span>
                    <span className="text-white font-medium">7 AM - 7 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white font-medium">By Request</span>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2d6a2e] rounded-2xl p-6 text-center">
                <p className="text-white font-bold text-lg mb-2">
                  Need it done today?
                </p>
                <p className="text-white/80 text-sm mb-4">
                  Call now for same-day service availability
                </p>
                <a
                  href="tel:4707556084"
                  className="inline-block bg-white text-[#2d6a2e] font-bold py-3 px-8 rounded-full hover:bg-[#e8f5e9] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a120a] border-t border-[#2d6a2e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="JZ's Junk Removal"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-white font-bold">
                  JZ&apos;s Junk Removal Services
                </span>
                <p className="text-[#a5d6a7]/50 text-sm">Atlanta, Georgia</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-[#a5d6a7]/60 text-sm">
              <a
                href="tel:4707556084"
                className="hover:text-[#4CAF50] transition-colors"
              >
                (470) 755-6084
              </a>
              <a
                href="tel:4706807810"
                className="hover:text-[#4CAF50] transition-colors"
              >
                (470) 680-7810
              </a>
              <a
                href="mailto:Zayvionbrooks645@gmail.com"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Zayvionbrooks645@gmail.com
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-[#a5d6a7]/30 text-sm">
            &copy; {new Date().getFullYear()} JZ&apos;s Junk Removal Services.
            All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:4707556084"
        className="fixed bottom-6 right-6 md:hidden bg-[#4CAF50] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#4CAF50]/30 z-50 hover:bg-[#66BB6A] transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </div>
  );
}
