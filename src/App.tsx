/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Zap, 
  ShoppingBag, 
  Wrench, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  Tv,
  Refrigerator,
  Smartphone,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const colors = {
  primary: 'bg-[#0f172a]', // Deep blue
  secondary: 'text-[#38bdf8]', // Light blue/cyan
  accent: 'bg-[#f97316]', // Soft orange
  accentHover: 'hover:bg-[#ea580c]',
  textPrimary: 'text-[#0f172a]',
  textSecondary: 'text-slate-500',
  cardBg: 'bg-white',
};

const services = [
  {
    id: 1,
    title: 'Electrical Installation',
    description: 'Professional wiring and installation for new builds and renovations with smart home integration.',
    icon: <Zap className="w-8 h-8 text-[#38bdf8]" />,
  },
  {
    id: 2,
    title: 'Appliance Sales',
    description: 'Premium energy-efficient appliances from leading brands with full warranty and delivery.',
    icon: <ShoppingBag className="w-8 h-8 text-[#38bdf8]" />,
  },
  {
    id: 3,
    title: 'Maintenance Services',
    description: '24/7 emergency repairs and scheduled maintenance to keep your electrical systems safe.',
    icon: <Wrench className="w-8 h-8 text-[#38bdf8]" />,
  },
];

const products = [
  {
    id: 1,
    name: 'Smart OLED TV',
    category: 'Entertainment',
    price: '₦950,000',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
    icon: <Tv className="w-5 h-5" />,
  },
  {
    id: 2,
    name: 'Smart Refrigerator',
    category: 'Kitchen',
    price: '₦1,850,000',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    icon: <Refrigerator className="w-5 h-5" />,
  },
  {
    id: 3,
    name: 'Home Automation Hub',
    category: 'Smart Home',
    price: '₦150,000',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: 4,
    name: 'Premium Soundbar',
    category: 'Audio',
    price: '₦380,000',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
    icon: <Smartphone className="w-5 h-5" />,
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
];

const testimonials = [
  {
    id: 1,
    name: 'Oluwaseun Adeyemi',
    role: 'Homeowner in Akure',
    content: 'Voltix transformed our home with their smart lighting installation. Professional, clean, and highly efficient.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Chidi Okafor',
    role: 'Business Owner',
    content: 'The maintenance team is top-notch. They handle all our electrical issues across multiple properties with ease.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Amina Bello',
    role: 'Architect',
    content: 'I always recommend Voltix to my clients. Their attention to detail in electrical design is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=200'
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0f172a] rounded-lg flex items-center justify-center">
              <Zap className="text-[#38bdf8] w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-[#0f172a]">VOLTIX</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Products', 'Gallery', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium hover:text-[#38bdf8] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {['Services', 'Products', 'Gallery', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-60"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-60"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Next-Gen Electrical Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] leading-[1.1] mb-6">
                Powering Your <span className="text-[#38bdf8]">Smart Future</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Premium electrical installations, smart home automation, and expert maintenance tailored for the modern lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`${colors.accent} ${colors.accentHover} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-200 flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] active:scale-95`}>
                  Start Your Project <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-[#0f172a] border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  View Our Work
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100"
                  ].map((url, i) => (
                    <img 
                      key={i}
                      src={url} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-orange-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="font-medium text-slate-600">Trusted by 450+ homeowners</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Smart Home" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="text-sky-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certified Experts</p>
                    <p className="text-lg font-bold text-[#0f172a]">Licensed & Insured</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
              Our Core Services
            </motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg text-slate-600">
              We provide comprehensive electrical solutions designed to make your home safer, smarter, and more efficient.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-sky-100 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-[#0f172a] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#38bdf8] hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                Premium Appliances
              </motion.h2>
              <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-lg text-slate-600">
                Explore our curated selection of high-end, energy-efficient appliances for your modern home.
              </motion.p>
            </div>
            <button className="text-sm font-bold text-[#0f172a] flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                    {product.icon}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-1">{product.category}</p>
                  <h4 className="text-lg font-bold text-[#0f172a] mb-4">{product.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-extrabold text-[#0f172a]">{product.price}</span>
                    <button className="p-2 rounded-full bg-slate-100 hover:bg-[#0f172a] hover:text-white transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 {...fadeIn} className="text-4xl font-bold text-[#0f172a] mb-4">Our Work in Action</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-slate-600">A glimpse into our recent installations and featured products.</motion.p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative group rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={img} 
                  alt="Gallery" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">Project 0{idx + 1}</p>
                    <p className="text-lg font-bold">Modern Installation</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Decades of Expertise in Every Wire</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Founded with a vision to revolutionize home electrical systems, Voltix has grown into a leading provider of smart home solutions. We combine traditional craftsmanship with cutting-edge technology.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#38bdf8] mb-2">15+</p>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#38bdf8] mb-2">5k+</p>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Projects Done</p>
                </div>
              </div>
              <button className="mt-12 group flex items-center gap-3 text-lg font-bold text-white">
                Learn More About Us <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0f172a] transition-all"><ChevronRight className="w-5 h-5" /></div>
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#38bdf8] p-8 rounded-3xl hidden lg:block">
                <p className="text-5xl font-black text-[#0f172a]">100%</p>
                <p className="text-sm font-bold text-[#0f172a]/70 uppercase tracking-widest">Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Real feedback from people who trust Voltix.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100"
              >
                <div className="flex text-orange-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-slate-700 italic mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f172a]">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-[#0f172a] text-white">
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                <p className="text-slate-400 mb-12 text-lg">Ready to start your next project? Our team is here to help you power up your vision.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Mail className="text-[#38bdf8] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Email Us</p>
                      <p className="text-xl font-medium">hello@voltix.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Phone className="text-[#38bdf8] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Call Us</p>
                      <p className="text-xl font-medium">08104922415</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                      <MapPin className="text-[#38bdf8] w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Visit Us</p>
                      <p className="text-xl font-medium">Suite 12, Oyemekun Plaza, Oyemekun Road, Akure, Ondo State</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 focus:border-[#38bdf8] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 focus:border-[#38bdf8] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 focus:border-[#38bdf8] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 focus:border-[#38bdf8] transition-all resize-none"
                    />
                  </div>
                  <button className={`w-full ${colors.accent} ${colors.accentHover} text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 transition-all active:scale-[0.98]`}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#0f172a] rounded-lg flex items-center justify-center">
                  <Zap className="text-[#38bdf8] w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-[#0f172a]">VOLTIX</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Leading the way in smart home electrical solutions. We provide premium services for the modern homeowner.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#0f172a] mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#services" className="hover:text-[#38bdf8] transition-colors">Services</a></li>
                <li><a href="#products" className="hover:text-[#38bdf8] transition-colors">Products</a></li>
                <li><a href="#gallery" className="hover:text-[#38bdf8] transition-colors">Gallery</a></li>
                <li><a href="#about" className="hover:text-[#38bdf8] transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0f172a] mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Cookie Policy</a></li>
                <li><a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">© 2026 Voltix Electrical Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              {/* Social Icons Placeholder */}
              <div className="w-5 h-5 bg-slate-200 rounded-full" />
              <div className="w-5 h-5 bg-slate-200 rounded-full" />
              <div className="w-5 h-5 bg-slate-200 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
