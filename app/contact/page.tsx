import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Contact() {
  return (
    <main className="min-h-screen relative">
      {/* Modern gradient background with animated elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-600 via-slate-600 to-gray-700 .dark:from-gray-950 .dark:via-slate-950 .dark:to-gray-950">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-pink-500/10 .dark:from-transparent .dark:via-cyan-400/5 .dark:to-pink-400/5" />

        {/* Floating orbs effect */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-400/15 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content with glass morphism */}
      <div className="relative z-10">
        <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/10 .dark:bg-black/20 backdrop-blur-xl shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-lg hover:text-cyan-200 transition-colors duration-300"
            >
              ✨ Fancy Text Generator
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-gray-500 hover:from-cyan-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-gray-500 hover:from-purple-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-gray-500 hover:from-pink-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                FAQ
              </Link>
              <Link
                href="/posts"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-gray-500 hover:from-purple-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Blog
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center gap-3">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <MobileMenu themeToggle={<ThemeToggle />} />
            </div>
          </div>
        </nav>

        {/* Content container with glass morphism */}
        <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl min-h-screen">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-6xl font-black mb-6 text-white drop-shadow-2xl uppercase tracking-tight">
                  📧 Contact Us
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  We'd love to hear from you! Get in touch with any questions,
                  feedback, or suggestions
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                {/* Contact Methods */}
                <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    💬 How to Reach Us
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Email Contact */}
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/20">
                        <div className="text-4xl mb-4">📧</div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          Email
                        </h3>
                        <p className="text-white/80 mb-4">
                          Send us an email anytime and we'll get back to you
                          within 24 hours.
                        </p>
                        <a
                          href="mailto:contact@fancytextgenerator.com"
                          className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          Send Email
                        </a>
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20">
                        <div className="text-4xl mb-4">💭</div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          Feedback
                        </h3>
                        <p className="text-white/80 mb-4">
                          Have an idea for a new feature or found a bug? We'd
                          love to hear about it!
                        </p>
                        <a
                          href="mailto:feedback@fancytextgenerator.com"
                          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          Send Feedback
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-4xl font-bold text-white mb-6 text-center">
                    🔍 Quick Help
                  </h2>
                  <div className="text-center">
                    <p className="text-white/90 text-lg mb-6">
                      Before reaching out, you might find your answer in our FAQ
                      section. We've compiled the most common questions and
                      detailed answers to help you quickly.
                    </p>
                    <Link
                      href="/faq"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                    >
                      View FAQ
                    </Link>
                  </div>
                </div>

                {/* Social Media Usage Showcase */}
                <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-4xl font-bold text-white mb-6 text-center">
                    🌟 See It In Use
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed mb-8 text-center">
                    See how others are using fancy text across social media
                    platforms
                  </p>

                  <div className="relative rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/social-media-usage.jpg"
                      alt="Social media platforms using fancy text"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-bold text-2xl mb-2">
                        Social Media Integration
                      </h3>
                      <p className="text-white/90 text-lg">
                        Instagram, Facebook, Twitter, TikTok and more platforms
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-4xl font-bold text-white mb-6 text-center">
                    ⏱️ Response Times
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-3">🚀</div>
                      <h3 className="text-xl font-bold text-cyan-200 mb-2">
                        General Inquiries
                      </h3>
                      <p className="text-white/80">Within 24 hours</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-3">🐛</div>
                      <h3 className="text-xl font-bold text-cyan-200 mb-2">
                        Bug Reports
                      </h3>
                      <p className="text-white/80">Within 12 hours</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-3">💡</div>
                      <h3 className="text-xl font-bold text-cyan-200 mb-2">
                        Feature Requests
                      </h3>
                      <p className="text-white/80">Within 48 hours</p>
                    </div>
                  </div>
                </div>

                {/* Support Topics */}
                <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    🆘 How We Can Help
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">❓</div>
                        <div>
                          <h3 className="font-bold text-cyan-200">
                            Technical Support
                          </h3>
                          <p className="text-white/80">
                            Issues with text generation, browser compatibility,
                            or functionality
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-xl">🔧</div>
                        <div>
                          <h3 className="font-bold text-cyan-200">
                            Feature Requests
                          </h3>
                          <p className="text-white/80">
                            Suggestions for new text styles or improved
                            functionality
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-xl">🎨</div>
                        <div>
                          <h3 className="font-bold text-cyan-200">
                            UI/UX Feedback
                          </h3>
                          <p className="text-white/80">
                            Suggestions to improve user experience and interface
                            design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">🌐</div>
                        <div>
                          <h3 className="font-bold text-cyan-200">
                            Language Support
                          </h3>
                          <p className="text-white/80">
                            Requests for support of additional languages or
                            character sets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-xl">🤝</div>
                        <div>
                          <h3 className="font-bold text-cyan-200">
                            Partnerships
                          </h3>
                          <p className="text-white/80">
                            Collaboration opportunities and integration requests
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-xl">📝</div>
                        <div>
                          <h3 className="font-bold text-cyan-200">
                            Content Issues
                          </h3>
                          <p className="text-white/80">
                            Questions about text transformation accuracy or
                            character support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form Alternative */}
                <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 .dark:from-purple-400/10 .dark:to-pink-400/10 rounded-3xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    📝 Prefer a Different Method?
                  </h2>
                  <p className="text-white/90 text-lg mb-6">
                    While we don't have a contact form, we encourage direct
                    email communication. It's more personal and ensures we can
                    address your specific needs thoroughly.
                  </p>
                  <div className="space-x-4">
                    <a
                      href="mailto:contact@fancytextgenerator.com?subject=General Inquiry"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      General Contact
                    </a>
                    <a
                      href="mailto:support@fancytextgenerator.com?subject=Technical Support"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Get Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
