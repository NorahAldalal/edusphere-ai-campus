
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Briefcase, LayoutDashboard, Star, BookOpen, FlaskRound, BookAudio } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      title: "AI Lecture Playback",
      description: "Miss a lecture? No problem. Our AI recreates the professor's teaching style for you to replay anytime.",
      icon: <BookAudio className="feature-icon" />,
      path: "/lectures"
    },
    {
      title: "Job & Scholarship Portal",
      description: "Connect with opportunities tailored specifically for KSU students with anonymous academic profiles.",
      icon: <Briefcase className="feature-icon" />,
      path: "/jobs"
    },
    {
      title: "Career Support",
      description: "Get personalized guidance and book one-on-one consultations with professors and industry experts.",
      icon: <LayoutDashboard className="feature-icon" />,
      path: "/career"
    },
    {
      title: "Professor Evaluation",
      description: "Evaluate professors based on how they contribute to student success and career outcomes.",
      icon: <Star className="feature-icon" />,
      path: "/evaluations"
    },
    {
      title: "Smart Learning Modes",
      description: "Choose your preferred learning style and let AI customize lecture delivery just for you.",
      icon: <BookOpen className="feature-icon" />,
      path: "/learning"
    },
    {
      title: "Virtual Labs",
      description: "Access fully interactive lab simulations with collaborative features and auto-generated reports.",
      icon: <FlaskRound className="feature-icon" />,
      path: "/labs"
    },
    {
      title: "AI Teaching Assistant",
      description: "Get personalized support with an AI that adapts to your comprehension level and learning pace.",
      icon: <GraduationCap className="feature-icon" />,
      path: "/assistant"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ksu-blue to-ksu-light-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Transform Your University Experience with AI
              </h1>
              <p className="mt-4 text-xl text-white/90 max-w-lg">
                EduSphere AI helps King Saud University students excel academically and prepare for future careers through personalized learning and innovative tools.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-white text-ksu-blue hover:bg-gray-100">
                  <Link to="/register" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://via.placeholder.com/800x450?text=EduSphere+AI+Demo" 
                    alt="EduSphere AI Platform Demo" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://via.placeholder.com/40?text=KSU" 
                        alt="KSU Logo" 
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Exclusive for</p>
                      <p className="text-sm font-bold text-ksu-blue">King Saud University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-ksu-blue">25,000+</p>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-ksu-blue">1,500+</p>
              <p className="text-gray-600">Professors</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-ksu-blue">5,000+</p>
              <p className="text-gray-600">Courses</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-ksu-blue">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              EduSphere AI offers innovative tools to enhance your academic journey and career preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="feature-card group"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-ksu-blue font-medium group-hover:underline">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Students Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from fellow students who have enhanced their academic journey with EduSphere AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/50?text=S1" 
                    alt="Student 1" 
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Sarah Al-Ghamdi</h4>
                  <p className="text-sm text-gray-600">Computer Science, Year 3</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The AI lecture playback feature saved my semester when I had to miss classes due to illness. I could keep up with all my coursework without falling behind."
              </p>
              <div className="mt-4 flex">
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/50?text=S2" 
                    alt="Student 2" 
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Mohammed Al-Otaibi</h4>
                  <p className="text-sm text-gray-600">Mechanical Engineering, Year 4</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The virtual labs are incredible. I was able to perform complex experiments from home during COVID restrictions and still got hands-on experience."
              </p>
              <div className="mt-4 flex">
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/50?text=S3" 
                    alt="Student 3" 
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Norah Al-Fadhli</h4>
                  <p className="text-sm text-gray-600">Business Administration, Year 2</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The job portal connected me with an internship that perfectly matched my skills. The career support was so helpful in preparing me for interviews."
              </p>
              <div className="mt-4 flex">
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-ksu-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your University Experience?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of KSU students already using EduSphere AI to excel academically and prepare for future careers.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-ksu-blue hover:bg-gray-100">
              <Link to="/register" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
