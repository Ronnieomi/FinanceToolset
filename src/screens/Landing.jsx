import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Check, ChartLineIcon, Shield, Zap, Users, BarChart4, Brain } from 'lucide-react';
//import { Card, CardContent } from '@/components/ui/card';
import heroImage from '../assets/hero.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <motion.nav
       
      className={`fixed nav-bar left-1/2 -translate-x-1/2 w-[90%] z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              FinanceToolSet
            </motion.div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#why-us">Why Us</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <motion.button
              className="bg-accent text-white px-6 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <MobileNavLink href="#services">Services</MobileNavLink>
          <MobileNavLink href="#about">About</MobileNavLink>
          <MobileNavLink href="#why-us">Why Us</MobileNavLink>
          <MobileNavLink href="#pricing">Pricing</MobileNavLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-primary"
    whileHover={{ y: -2 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ icon: Icon, title }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Icon className="w-12 h-12 text-primary mb-4" />
    <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
    <div className="h-3 w-full bg-gray-100 rounded mb-2" />
    <div className="h-3 w-5/6 bg-gray-100 rounded" />
  </motion.div>
);

const PriceCard = ({ featured }) => (
  <motion.div
    className={`relative p-6 rounded-2xl ${
      featured ? 'bg-primary text-white scale-105' : 'bg-white'
    } shadow-xl`}
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {featured && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm">
        Recommended
      </div>
    )}
    <div className="h-6 w-1/3 bg-gray-200 rounded mb-4" />
    <div className="h-10 w-2/3 bg-gray-200 rounded mb-6" />
    <div className="space-y-3">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="flex items-center space-x-2">
          <Check className="w-5 h-5" />
          <div className="h-4 w-full bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  </motion.div>
);

const Testimonial = () => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full" />
      <div>
        <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
        <div className="h-3 w-32 bg-gray-100 rounded" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 w-full bg-gray-100 rounded" />
      <div className="h-3 w-5/6 bg-gray-100 rounded" />
      <div className="h-3 w-4/6 bg-gray-100 rounded" />
    </div>
  </motion.div>
);

const FAQ = () => (
  <motion.div
    className="border-b border-gray-200"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="py-4 flex justify-between items-center cursor-pointer">
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <ChevronDown className="w-5 h-5 text-gray-500" />
    </div>
    <div className="h-0 overflow-hidden">
      <div className="py-4 space-y-2">
        <div className="h-3 w-full bg-gray-100 rounded" />
        <div className="h-3 w-5/6 bg-gray-100 rounded" />
      </div>
    </div>
  </motion.div>
);

const Landing = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 md:px-0 py-16 md:py-24">
        <div className="sm:max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
            <div className="space-y-6">
                <div className="h-12 w-3/4 bg-gray-200 rounded">Hero Section</div>
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
                <motion.button
                className="bg-primary text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                Get Started <ArrowRight className="ml-2" />
                </motion.button>
            </div>
            </motion.div>
            <motion.div
            className="h-96 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <img src={heroImage} alt="Hero" className="w-full h-full object-cover rounded-lg" />
            </motion.div>
        </div>
        </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="sm:max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4">Services Section</div>
            <div className="h-4 w-96 bg-gray-100 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={ChartLineIcon} title="Portfolio Analysis" />
            <ServiceCard icon={Brain} title="AI Trading" />
            <ServiceCard icon={Shield} title="Risk Management" />
            <ServiceCard icon={Zap} title="Real-time Updates" />
            <ServiceCard icon={Users} title="Social Trading" />
            <ServiceCard icon={BarChart4} title="Performance Tracking" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="sm:max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4">Pricing Section</div>
            <div className="h-4 w-96 bg-gray-100 rounded mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard />
            <PriceCard featured={true} />
            <PriceCard />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="sm:max-w-7xl w-full mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4">Testimonials</div>
            <div className="h-4 w-96 bg-gray-100 rounded mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="sm:max-w-3xl w-full mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4">FAQ Section</div>
            <div className="h-4 w-96 bg-gray-100 rounded mx-auto" />
          </div>
          <div className="space-y-4">
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="h-8 w-32 bg-gray-700 rounded" />
            <div className="h-4 w-48 bg-gray-700 rounded" />
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="space-y-4">
              <div className="h-6 w-24 bg-gray-700 rounded" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map(j => (
                  <div key={j} className="h-4 w-32 bg-gray-700 rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Landing;