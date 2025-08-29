import { useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  const introRef = useRef(null);

  const handleScroll = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-opacity-30 backdrop-blur-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold">SwiftQ</h1>
        <div className="flex gap-6 text-lg font-medium">
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#features" className="hover:text-gray-200">Features</a>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/register" className="hover:text-gray-200">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to SwiftQ
        </motion.h2>
        <p className="text-xl mb-8 max-w-2xl">
          Monitor workforce productivity & engagement seamlessly.
        </p>
        <Button
          onClick={handleScroll}
          className="px-6 py-3 text-lg rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Get Started
        </Button>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} id="about" className="px-10 py-24 bg-white text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h3 className="text-4xl font-bold mb-6">What is SwiftQ?</h3>
          <p className="text-lg leading-relaxed mb-12">
            SwiftQ is a modern Queue Management System designed to enhance efficiency
            in various sectors like clinics, government offices, and more. This project
            specifically focuses on providing seamless queue management for clinics,
            helping healthcare providers reduce waiting times, organize patient flow,
            and improve service delivery.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Efficient Flow</h4>
                <p>Minimize waiting time and improve  satisfaction by automating queues.</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Real-Time Updates</h4>
                <p>Keep customer and staff informed with real-time queue updates and notifications.</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3">Scalable Solution</h4>
                <p>Easily adaptable for clinics of any size, with scope to expand into other sectors.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
}