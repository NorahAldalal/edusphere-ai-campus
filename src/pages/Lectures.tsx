
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { BookAudio, Search, Clock, Play, Bookmark, BookmarkPlus, Star, Download, Share2, Volume2, ThumbsUp, ThumbsDown, ListFilter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Lectures = () => {
  const [volume, setVolume] = useState([50]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterFaculty, setFilterFaculty] = useState('');
  const [filterCourse, setFilterCourse] = useState('');

  const faculties = [
    { value: "computer-science", label: "Computer Science" },
    { value: "engineering", label: "Engineering" },
    { value: "medicine", label: "Medicine" },
    { value: "business", label: "Business Administration" }
  ];

  const courses = [
    { value: "cs101", label: "CS101 - Introduction to Programming" },
    { value: "cs202", label: "CS202 - Data Structures" },
    { value: "cs303", label: "CS303 - Algorithms" },
    { value: "cs404", label: "CS404 - Artificial Intelligence" }
  ];

  const featuredLectures = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      professor: "Dr. Abdullah Al-Rashid",
      faculty: "Computer Science",
      course: "CS404",
      duration: "45 min",
      image: "https://via.placeholder.com/400x225?text=Machine+Learning",
      rating: 4.8,
      bookmarked: true
    },
    {
      id: 2,
      title: "Database Design Principles",
      professor: "Dr. Layla Al-Nasser",
      faculty: "Computer Science",
      course: "CS303",
      duration: "50 min",
      image: "https://via.placeholder.com/400x225?text=Database+Design",
      rating: 4.6,
      bookmarked: false
    },
    {
      id: 3,
      title: "Network Security Fundamentals",
      professor: "Dr. Mohammed Al-Saad",
      faculty: "Computer Science",
      course: "CS505",
      duration: "60 min",
      image: "https://via.placeholder.com/400x225?text=Network+Security",
      rating: 4.7,
      bookmarked: true
    }
  ];

  const recentLectures = [
    {
      id: 4,
      title: "Advanced Data Structures",
      professor: "Dr. Ahmed Al-Faisal",
      faculty: "Computer Science",
      course: "CS202",
      duration: "55 min",
      image: "https://via.placeholder.com/400x225?text=Data+Structures",
      rating: 4.5,
      bookmarked: false,
      progress: 75
    },
    {
      id: 5,
      title: "Web Development with React",
      professor: "Dr. Sarah Al-Mousa",
      faculty: "Computer Science",
      course: "CS404",
      duration: "65 min",
      image: "https://via.placeholder.com/400x225?text=Web+Development",
      rating: 4.9,
      bookmarked: true,
      progress: 30
    },
    {
      id: 6,
      title: "Mobile App Development",
      professor: "Dr. Khalid Al-Harbi",
      faculty: "Computer Science",
      course: "CS606",
      duration: "70 min",
      image: "https://via.placeholder.com/400x225?text=Mobile+Apps",
      rating: 4.4,
      bookmarked: false,
      progress: 50
    }
  ];

  const bookmarkedLectures = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      professor: "Dr. Abdullah Al-Rashid",
      faculty: "Computer Science",
      course: "CS404",
      duration: "45 min",
      image: "https://via.placeholder.com/400x225?text=Machine+Learning",
      rating: 4.8,
      bookmarked: true
    },
    {
      id: 5,
      title: "Web Development with React",
      professor: "Dr. Sarah Al-Mousa",
      faculty: "Computer Science",
      course: "CS404",
      duration: "65 min",
      image: "https://via.placeholder.com/400x225?text=Web+Development",
      rating: 4.9,
      bookmarked: true,
      progress: 30
    },
    {
      id: 3,
      title: "Network Security Fundamentals",
      professor: "Dr. Mohammed Al-Saad",
      faculty: "Computer Science",
      course: "CS505",
      duration: "60 min",
      image: "https://via.placeholder.com/400x225?text=Network+Security",
      rating: 4.7,
      bookmarked: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">AI Lecture Playback</h1>
            <p className="text-gray-600 mt-2">
              Rewatch your lectures with our AI that mimics each professor's teaching style and voice. 
              Never miss a critical concept, even when you can't attend class in person.
            </p>
          </div>

          {/* Featured Lecture */}
          <div className="mb-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <div className="md:flex">
              <div className="md:w-2/3">
                <div className="relative bg-black aspect-video">
                  <img 
                    src="https://via.placeholder.com/800x450?text=Featured+Lecture" 
                    alt="Featured Lecture" 
                    className="w-full h-full object-cover opacity-70" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                      <Play className="h-12 w-12 text-ksu-blue" fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    45:30
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-6">
                <h2 className="text-2xl font-bold text-gray-900">Data Science and Machine Learning</h2>
                <p className="text-ksu-blue font-medium mt-1">Dr. Abdullah Al-Rashid</p>
                <p className="text-gray-500 text-sm mt-1">College of Computer and Information Sciences</p>
                
                <div className="flex items-center mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.8 (245 ratings)</span>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">Volume:</span>
                    <div className="flex items-center flex-1">
                      <Volume2 className="h-4 w-4 text-gray-600 mr-2" />
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <span className="ml-2 text-sm text-gray-600 w-8">{volume}%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <BookmarkPlus className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-0 border-t border-gray-200 mt-6">
              <h3 className="text-lg font-medium">About this lecture</h3>
              <p className="text-gray-600 mt-2">
                In this lecture, Dr. Abdullah Al-Rashid introduces the fundamental concepts of data science and machine learning. 
                Learn about supervised and unsupervised learning, regression models, classification algorithms, and real-world 
                applications of machine learning techniques in various industries.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Machine Learning</span>
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Data Science</span>
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Algorithms</span>
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">Computer Science</span>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search lectures..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={filterFaculty} onValueChange={setFilterFaculty}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select Faculty" />
                  </SelectTrigger>
                  <SelectContent>
                    {faculties.map((faculty) => (
                      <SelectItem key={faculty.value} value={faculty.value}>
                        {faculty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterCourse} onValueChange={setFilterCourse}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.value} value={course.value}>
                        {course.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <ListFilter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Lecture Collections */}
          <div>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All Lectures</TabsTrigger>
                <TabsTrigger value="recent">Recently Watched</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Lectures</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredLectures.map((lecture) => (
                      <Card key={lecture.id} className="overflow-hidden hover:shadow-md transition-all">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <img 
                            src={lecture.image} 
                            alt={lecture.title} 
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {lecture.duration}
                          </div>
                          <button className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors">
                            {lecture.bookmarked ? (
                              <Bookmark className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ) : (
                              <BookmarkPlus className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-lg">{lecture.title}</CardTitle>
                          <CardDescription>{lecture.professor}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 pb-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{lecture.course}</span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span>{lecture.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-2">
                          <Button className="w-full" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Watch Lecture
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">All Lectures</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...featuredLectures, ...recentLectures].map((lecture) => (
                      <Card key={lecture.id} className="overflow-hidden hover:shadow-md transition-all">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <img 
                            src={lecture.image} 
                            alt={lecture.title} 
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {lecture.duration}
                          </div>
                          <button className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors">
                            {lecture.bookmarked ? (
                              <Bookmark className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ) : (
                              <BookmarkPlus className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-lg">{lecture.title}</CardTitle>
                          <CardDescription>{lecture.professor}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 pb-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{lecture.course}</span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span>{lecture.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-2">
                          <Button className="w-full" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Watch Lecture
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently Watched</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentLectures.map((lecture) => (
                    <Card key={lecture.id} className="overflow-hidden hover:shadow-md transition-all">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img 
                          src={lecture.image} 
                          alt={lecture.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {lecture.duration}
                        </div>
                        <button className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors">
                          {lecture.bookmarked ? (
                            <Bookmark className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ) : (
                            <BookmarkPlus className="h-5 w-5" />
                          )}
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                          <div 
                            className="h-full bg-ksu-blue" 
                            style={{ width: `${lecture.progress}%` }}
                          />
                        </div>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{lecture.title}</CardTitle>
                        <CardDescription>{lecture.professor}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{lecture.course}</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span>{lecture.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-ksu-blue mt-1">Continue watching ({lecture.progress}%)</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-2">
                        <Button className="w-full" size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Continue Watching
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bookmarked" className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Bookmarked Lectures</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookmarkedLectures.map((lecture) => (
                    <Card key={lecture.id} className="overflow-hidden hover:shadow-md transition-all">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img 
                          src={lecture.image} 
                          alt={lecture.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {lecture.duration}
                        </div>
                        <button className="absolute top-2 right-2 text-white hover:text-yellow-400 transition-colors">
                          <Bookmark className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </button>
                        {lecture.progress && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                            <div 
                              className="h-full bg-ksu-blue" 
                              style={{ width: `${lecture.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{lecture.title}</CardTitle>
                        <CardDescription>{lecture.professor}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{lecture.course}</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span>{lecture.rating}</span>
                          </div>
                        </div>
                        {lecture.progress && (
                          <p className="text-sm text-ksu-blue mt-1">Continue watching ({lecture.progress}%)</p>
                        )}
                      </CardContent>
                      <CardFooter className="p-4 pt-2">
                        <Button className="w-full" size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          {lecture.progress ? "Continue Watching" : "Watch Lecture"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Lectures;
