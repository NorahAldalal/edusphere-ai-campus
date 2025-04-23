
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookAudio, Briefcase, LayoutDashboard, Star, BookOpen, FlaskRound, GraduationCap, ArrowRight, Bell, Calendar, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "CS101 - Introduction to Programming",
      date: "Today, 2:00 PM",
      type: "lecture"
    },
    {
      id: 2,
      title: "Virtual Lab: Physics Experiment",
      date: "Tomorrow, 10:00 AM",
      type: "lab"
    },
    {
      id: 3,
      title: "Career Consultation with Dr. Abdullah",
      date: "Apr 25, 11:30 AM",
      type: "meeting"
    },
    {
      id: 4,
      title: "AI in Healthcare - Guest Lecture",
      date: "Apr 26, 3:00 PM",
      type: "lecture"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "New Job Opening",
      message: "Software Engineer position at Saudi Aramco is now available.",
      time: "10 min ago",
      read: false
    },
    {
      id: 2,
      title: "Professor Evaluation",
      message: "Please complete your evaluation for Dr. Mohammed by Friday.",
      time: "1 hour ago",
      read: true
    },
    {
      id: 3,
      title: "Virtual Lab Report",
      message: "Your lab report has been graded. Check your results.",
      time: "2 hours ago",
      read: true
    }
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      professor: "Dr. Sarah Al-Mousa",
      progress: 65,
      image: "https://via.placeholder.com/300x200?text=ML"
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      professor: "Dr. Ahmed Al-Faisal",
      progress: 42,
      image: "https://via.placeholder.com/300x200?text=DSA"
    },
    {
      id: 3,
      title: "Advanced Database Systems",
      professor: "Dr. Layla Al-Nasser",
      progress: 78,
      image: "https://via.placeholder.com/300x200?text=DB"
    }
  ];

  const features = [
    {
      title: "AI Lecture Playback",
      icon: <BookAudio className="h-6 w-6" />,
      path: "/lectures",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Job Portal",
      icon: <Briefcase className="h-6 w-6" />,
      path: "/jobs",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Career Support",
      icon: <LayoutDashboard className="h-6 w-6" />,
      path: "/career",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Professor Evaluations",
      icon: <Star className="h-6 w-6" />,
      path: "/evaluations",
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Smart Learning Modes",
      icon: <BookOpen className="h-6 w-6" />,
      path: "/learning",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Virtual Labs",
      icon: <FlaskRound className="h-6 w-6" />,
      path: "/labs",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      title: "AI Teaching Assistant",
      icon: <GraduationCap className="h-6 w-6" />,
      path: "/assistant",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, Ahmad. Here's an overview of your academic journey.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button>
                <Bell className="h-5 w-5 mr-2" />
                Notifications (3)
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 Width */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Access Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Access</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {features.map((feature, index) => (
                    <Link key={index} to={feature.path}>
                      <Card className="h-full hover:border-ksu-blue hover:shadow-md transition-all">
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <div className={`p-3 rounded-full mb-2 ${feature.color}`}>
                            {feature.icon}
                          </div>
                          <p className="font-medium text-sm">{feature.title}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Course Progress */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Continue Learning</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {recommendedCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-md transition-all">
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.professor}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </CardContent>
                      <CardFooter>
                        <Button size="sm" className="w-full">
                          Continue Learning
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Lecture Recommendations */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Recommended for You</h2>
                  <Button variant="ghost" size="sm">
                    View all
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <Card>
                  <Tabs defaultValue="lectures">
                    <CardHeader className="pb-0">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="lectures">Lectures</TabsTrigger>
                        <TabsTrigger value="labs">Virtual Labs</TabsTrigger>
                        <TabsTrigger value="jobs">Job Opportunities</TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <TabsContent value="lectures" className="space-y-4">
                        <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                              <BookAudio className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Introduction to AI Ethics</h4>
                            <p className="text-sm text-gray-600">Dr. Abdullah Al-Rashid • 45 min</p>
                            <div className="mt-2">
                              <Button size="sm" variant="outline">Watch Now</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                              <BookAudio className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Database Optimization Techniques</h4>
                            <p className="text-sm text-gray-600">Dr. Layla Al-Nasser • 60 min</p>
                            <div className="mt-2">
                              <Button size="sm" variant="outline">Watch Now</Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="labs" className="space-y-4">
                        <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center">
                              <FlaskRound className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Molecular Biology Lab Simulation</h4>
                            <p className="text-sm text-gray-600">Dr. Fatima Al-Harbi • 90 min</p>
                            <div className="mt-2">
                              <Button size="sm" variant="outline">Enter Lab</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center">
                              <FlaskRound className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Circuit Design Lab</h4>
                            <p className="text-sm text-gray-600">Dr. Omar Al-Jabri • 60 min</p>
                            <div className="mt-2">
                              <Button size="sm" variant="outline">Enter Lab</Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="jobs" className="space-y-4">
                        <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                              <Briefcase className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Software Engineer Intern</h4>
                            <p className="text-sm text-gray-600">Saudi Aramco • Riyadh</p>
                            <div className="mt-2">
                              <Button size="sm" variant="outline">Apply Now</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                              <Briefcase className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">Data Analyst</h4>
                            <p className="text-sm text-gray-600">National Bank • Jeddah</p>
                            <div className="mt-2">
                              <Button size="sm" variant="outline">Apply Now</Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </CardContent>
                  </Tabs>
                </Card>
              </div>
            </div>
            
            {/* Right Sidebar - 1/3 Width */}
            <div className="space-y-8">
              {/* Calendar Events */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your schedule for the next few days</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Calendar className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start">
                        <div className={`flex-shrink-0 h-3 w-3 rounded-full mt-2 mr-3 ${
                          event.type === 'lecture' ? 'bg-blue-500' : 
                          event.type === 'lab' ? 'bg-cyan-500' : 'bg-purple-500'
                        }`} />
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" size="sm">
                      View Full Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Notifications */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Stay updated with the latest alerts</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start">
                        <div className={`flex-shrink-0 h-2 w-2 rounded-full mt-2 mr-3 ${!notification.read ? 'bg-red-500' : 'bg-gray-300'}`} />
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" size="sm">
                      View All Notifications
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Support Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>Contact our support team or AI assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Chat with AI Assistant
                    </Button>
                    <Button className="w-full" variant="outline">
                      Contact Support
                    </Button>
                    <Button className="w-full" variant="link">
                      View FAQs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
