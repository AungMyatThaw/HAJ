import { ArrowRight, Briefcase, Users, Target, Award, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="bg-white text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-brand-light-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JKT</span>
            </div>
            <span className="font-bold text-lg text-primary">JKT IT</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition">Why Join</a>
            <a href="#internship" className="text-foreground hover:text-primary transition">Internship</a>
            <a href="#positions" className="text-foreground hover:text-primary transition">Positions</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">Apply Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-blue-900 py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light-blue/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-brand-light-blue/20 rounded-full border border-brand-light-blue/30">
              <span className="text-brand-light-blue text-sm font-semibold">🇯🇵 Hiring Now</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Career Working with Japan
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Join JKT IT and collaborate directly with Japanese team-members and clients. Start your career with stability, growth, and international experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-primary font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                Apply for Internship <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg">
                View Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join JKT Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose JKT?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer something unique in Myanmar's tech landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Japanese Team Collaboration */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Work with Japanese Teams</h3>
              <p className="text-gray-600">
                Collaborate directly with experienced Japanese professionals and clients. Gain international experience and cultural exchange.
              </p>
            </div>

            {/* Card 2: Stability & Growth */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Stability & Growth</h3>
              <p className="text-gray-600">
                A reliable company backed by Japanese standards. Clear career paths, professional development, and long-term opportunities.
              </p>
            </div>

            {/* Card 3: Competitive Compensation */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Competitive Packages</h3>
              <p className="text-gray-600">
                Salary and benefits that reflect international standards. Support for professional growth, training, and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section id="internship" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-brand-light-blue/10 rounded-full border border-brand-light-blue/30">
                <span className="text-primary text-sm font-semibold">🎓 Our Programs</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Launch Your Tech Career
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Our internship program is designed to give you real-world experience working on meaningful projects with mentorship from experienced professionals.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-gold font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Hands-on Project Experience</h4>
                    <p className="text-gray-600">Work on real client projects from day one</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-gold font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Mentorship & Training</h4>
                    <p className="text-gray-600">Learn from experienced developers and Japanese team leads</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-gold font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Competitive Internship Salary</h4>
                    <p className="text-gray-600">Fair compensation for your contributions</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-gold font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Potential Full-Time Conversion</h4>
                    <p className="text-gray-600">Top performers often transition to full-time roles</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                Apply for Internship <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-brand-light-blue/10 rounded-xl p-8 border border-brand-light-blue/20">
              <div className="aspect-square bg-gradient-to-br from-primary to-blue-900 rounded-lg flex items-center justify-center">
                <Code className="w-24 h-24 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Developer Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-brand-light-blue/10 to-primary/5 rounded-xl p-8 border border-brand-light-blue/20 order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-brand-light-blue/20 to-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-24 h-24 text-primary/30" />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-brand-gold/10 rounded-full border border-brand-gold/30">
                <span className="text-primary text-sm font-semibold">👨‍💼 For Professionals</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Join as a Junior Developer
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                If you're a recent graduate or have 1-3 years of experience, we're looking for talented individuals to grow with our team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-light-blue/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">1-3 Years Experience Welcome</h4>
                    <p className="text-gray-600">We believe in investing in emerging talent</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-light-blue/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Structured Learning Path</h4>
                    <p className="text-gray-600">Clear progression from junior to senior roles</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-light-blue/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Competitive Junior Salary</h4>
                    <p className="text-gray-600">Better than average for Myanmar market</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                View Junior Positions <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're actively recruiting. Find roles that match your experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Internship Position */}
            <div className="bg-white border-2 border-brand-light-blue/30 rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Frontend Intern</h3>
                  <p className="text-gray-600 mt-1">React • TypeScript</p>
                </div>
                <span className="inline-block px-3 py-1 bg-brand-light-blue/20 text-primary text-sm font-semibold rounded-full">Internship</span>
              </div>
              <p className="text-gray-600 mb-6">
                Help build beautiful web interfaces for international clients. Work with React and TypeScript while learning from experienced developers.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg">
                Apply Now
              </Button>
            </div>

            {/* Junior Position */}
            <div className="bg-white border-2 border-brand-gold/30 rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Backend Developer (Junior)</h3>
                  <p className="text-gray-600 mt-1">Node.js • PostgreSQL</p>
                </div>
                <span className="inline-block px-3 py-1 bg-brand-gold/20 text-primary text-sm font-semibold rounded-full">Junior</span>
              </div>
              <p className="text-gray-600 mb-6">
                Build robust APIs and server-side solutions. Join our backend team and collaborate with Japanese engineering leads on production systems.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg">
                Apply Now
              </Button>
            </div>

            {/* Manager Position */}
            <div className="bg-white border-2 border-primary/30 rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Tech Lead / Manager</h3>
                  <p className="text-gray-600 mt-1">5+ years experience</p>
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">Management</span>
              </div>
              <p className="text-gray-600 mb-6">
                Lead a team of developers and work directly with our Japanese headquarters. Help build JKT's engineering culture and direction.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg">
                Apply Now
              </Button>
            </div>

            {/* QA Position */}
            <div className="bg-white border-2 border-brand-light-blue/30 rounded-xl p-8 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">QA Engineer</h3>
                  <p className="text-gray-600 mt-1">Automation • Manual Testing</p>
                </div>
                <span className="inline-block px-3 py-1 bg-brand-light-blue/20 text-primary text-sm font-semibold rounded-full">All Levels</span>
              </div>
              <p className="text-gray-600 mb-6">
                Ensure quality of our software products. Work with both automated and manual testing strategies for international clients.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg">
                Apply Now
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Don't see what you're looking for?</p>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg">
              View All Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Hear from our team members about their journey at JKT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-gold">★</span>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "Joining JKT as an intern was the best decision for my career. I went from learning React tutorials to shipping features for real clients in a few months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <span className="text-brand-gold font-bold">NT</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Nay Thiha</p>
                  <p className="text-blue-100 text-sm">Junior Frontend Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-gold">★</span>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "Working with the Japanese team has completely changed how I think about software quality and professionalism. It's accelerated my growth as a developer."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-light-blue/20 flex items-center justify-center">
                  <span className="text-brand-light-blue font-bold">KK</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Khin Kyaw</p>
                  <p className="text-blue-100 text-sm">Backend Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-gold">★</span>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed">
                "The company's commitment to stability and growth is genuine. They invest in your career, not just your labor. Plus, the compensation is fair."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <span className="text-brand-gold font-bold">MS</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Min Soe</p>
                  <p className="text-blue-100 text-sm">Tech Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Join JKT?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Don't miss this opportunity to build your career working with Japanese professionals. Apply now and let's grow together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-lg flex items-center justify-center gap-2">
              Apply Today <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-10 py-6 text-lg rounded-lg">
              Learn More
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-primary mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Email us at <a href="mailto:careers@jkt-it.com" className="text-primary hover:underline font-semibold">careers@jkt-it.com</a>
            </p>
            <p className="text-gray-600">
              Or fill out an application and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">JKT</span>
                </div>
                <span className="font-bold">JKT IT</span>
              </div>
              <p className="text-blue-100 text-sm">Building bridges between Myanmar and Japan's tech communities.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Culture</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Careers</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#internship" className="hover:text-white transition">Internship</a></li>
                <li><a href="#positions" className="hover:text-white transition">Open Roles</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8">
            <p className="text-center text-blue-100 text-sm">
              © 2024 JKT IT Team. All rights reserved. | Building Myanmar's IT Future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
