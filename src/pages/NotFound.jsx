import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowRight } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 bg-navy-950 overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
              animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              style={{ willChange: 'transform' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-peacock-blue/5 rounded-full filter blur-3xl"
              animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
              transition={{ duration: 18, repeat: Infinity }}
              style={{ willChange: 'transform' }}
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-6 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 404 Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-9xl md:text-[10rem] font-bold bg-gradient-to-r from-gold-DEFAULT via-gold-mid to-gold-light bg-clip-text text-transparent">
                  404
                </h1>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-offwhite mb-4"
              >
                Page Not Found
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
              >
                Sorry! The page you're looking for doesn't exist. It might have been moved or removed, but our team is here to help you get back on track.
              </motion.p>

              {/* Go Home Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-lg font-semibold text-navy-950 hover:shadow-glow-gold-lg transition-all duration-300 shine"
              >
                Go Back Home
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
