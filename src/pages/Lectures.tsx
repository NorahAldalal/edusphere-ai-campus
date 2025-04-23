
import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookAudio, Search, Clock, Play, Bookmark, BookmarkPlus, Star, Download, Share2, Volume2, ThumbsUp, ThumbsDown, ListFilter, User, Eye, Headphones, Hand, Book, Settings, Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

// -- Sample avatars/gestures --
const personaStyles = [
  { key: "formal", label: "Formal", icon: <User className="h-6 w-6 text-ksu-blue" /> },
  { key: "friendly", label: "Friendly", icon: <User className="h-6 w-6 text-sky-400" /> },
  { key: "dynamic", label: "Dynamic", icon: <User className="h-6 w-6 text-yellow-400" /> },
];

const learningModes = [
  {
    key: "visual",
    label: "Visual",
    icon: <Eye className="h-5 w-5 text-ksu-blue" />,
    description: "Learn best with diagrams, illustrations, visual flows, and highlighted concepts.",
  },
  {
    key: "auditory",
    label: "Auditory",
    icon: <Headphones className="h-5 w-5 text-ksu-blue" />,
    description: "Lecture focuses on clear speech and sound cues. Listen to the virtual professor.",
  },
  {
    key: "kinesthetic",
    label: "Kinesthetic",
    icon: <Hand className="h-5 w-5 text-ksu-blue" />,
    description: "Explore with hands-on interactive examples and simulations.",
  },
  {
    key: "reading",
    label: "Reading/Writing",
    icon: <Book className="h-5 w-5 text-ksu-blue" />,
    description: "Content is text-heavy with transcript and note-taking features.",
  },
];

// Placeholder KSU logo
const KSU_LOGO_PLACEHOLDER = "https://via.placeholder.com/80x80?text=KSU+Logo";

const professorPersona = {
  name: "Dr. Abdullah Al-Rashid",
  title: "AI Virtual Professor (Mimicking: Dr. Abdullah Al-Rashid)",
  avatar: (style: string) => (
    <div className="relative justify-center flex items-center flex-col">
      {/* Avatar style -- change backdrop/outline based on persona */}
      <div className={`rounded-full w-32 h-32 bg-gradient-to-br
        ${style === "formal" ? "from-ksu-blue to-ksu-dark-blue" : ""}
        ${style === "friendly" ? "from-blue-300 to-blue-100" : ""}
        ${style === "dynamic" ? "from-yellow-300 to-blue-400" : ""}
        flex justify-center items-center border-4 border-white shadow-lg mb-2`}>
        {/* Stylized avatar: default, can be improved later */}
        <User
          className={
            `w-20 h-20 ${style === "dynamic" ? "text-yellow-400" :
              style === "friendly" ? "text-blue-400" : "text-ksu-blue"}
            `
          }
        />
        {/* Gesture - add a subtle animation/smile/wave etc */}
        <span className={`absolute right-4 bottom-4 rounded-full
          ${style === "dynamic" ? "bg-yellow-400" :
            style === "friendly" ? "bg-blue-400" : "bg-ksu-blue"}
            border-2 border-white p-1`}>
          {style === "dynamic" ? <Hand className="h-5 w-5 text-white" /> :
            style === "friendly" ? <ThumbsUp className="h-5 w-5 text-white" /> :
            <BookAudio className="h-5 w-5 text-white" />}
        </span>
      </div>
      <span className="font-semibold text-gray-900 text-lg">{professorPersona.name}</span>
      <span className="text-xs text-ksu-blue/80 mb-2">{professorPersona.title}</span>
      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-ksu-blue">AI Persona</span>
    </div>
  ),
};

const Lectures = () => {
  // UI State
  const [selectedPersona, setSelectedPersona] = useState("formal"); // teaching style
  const [selectedMode, setSelectedMode] = useState(""); // learning style
  const [lectureStarted, setLectureStarted] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState("");
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

  // Mock delivers lecture differently depending on mode/persona
  const getLectureContent = () => {
    switch (selectedMode) {
      case "visual":
        return (
          <div>
            <h3 className="mb-3 font-bold text-lg flex items-center gap-2">{<Eye className="h-5 w-5" />} Key Visual Concepts</h3>
            <div className="flex flex-wrap gap-4 mb-2">
              <img src="https://via.placeholder.com/120x80/1976d2/fff?text=Diagram+1" alt="diagram" className="rounded shadow border" />
              <img src="https://via.placeholder.com/120x80/1976d2/fff?text=Flowchart+AI" alt="diagram2" className="rounded shadow border" />
              <img src="https://via.placeholder.com/120x80/1976d2/fff?text=Data+Pipeline" alt="diagram3" className="rounded shadow border" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              This lecture uses diagrams and concept flows to visualize <span className="font-bold text-ksu-blue">machine learning models</span>,
              highlighting how data moves through each learning stage. Key visual metaphors help simplify concepts such as <span className="text-blue-700 font-semibold">classification</span> and <span className="text-blue-700 font-semibold">regression</span>.
            </p>
          </div>
        );
      case "auditory":
        return (
          <div>
            <h3 className="mb-3 font-bold text-lg flex items-center gap-2">{<Headphones className="h-5 w-5" />} Audio-Focused Delivery</h3>
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="h-4 w-4 text-ksu-blue" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1 max-w-xs mx-2"
              />
              <span className="text-xs text-ksu-blue">{volume}%</span>
              <Button variant="outline" size="sm" className="ml-2 font-medium">Replay Audio</Button>
            </div>
            <audio controls className="w-full mb-2" style={{ background: "#f0f5fc" }}>
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-gray-700">
              In this auditory mode, the AI professor speaks <span className="font-bold">clearly and with expressive tone</span> to emphasize major points,
              using sound cues to draw attention to pivotal concepts.
            </p>
          </div>
        );
      case "kinesthetic":
        return (
          <div>
            <h3 className="mb-3 font-bold text-lg flex items-center gap-2">{<Hand className="h-5 w-5" />} Interactive Simulation</h3>
            <div className="mb-2">
              <Button variant="default" size="sm" className="mr-2">Start Mini Simulation</Button>
              <span className="text-xs text-gray-600">Try building a simple ML model with drag & drop!</span>
            </div>
            <div className="rounded border border-blue-200 bg-blue-50 p-4 mb-2">
              <p className="font-medium text-ksu-blue">Task:</p>
              <p className="text-gray-700">Classify sample data into two groups using <b>decision tree logic</b>. Drag each data point to <b>Group A</b> or <b>Group B</b>.</p>
            </div>
            <p className="text-gray-700 mb-2">Participating in interactive exercises helps solidify your understanding of the lecture topic. The AI will provide instant feedback and hints based on your choices.</p>
            <Button variant="outline" size="sm" onClick={() => alert("Demo only - simulation coming soon!")}>Show Solution</Button>
          </div>
        );
      case "reading":
        return (
          <div>
            <h3 className="mb-3 font-bold text-lg flex items-center gap-2">{<Book className="h-5 w-5" />} Transcript & Notes</h3>
            <div className="bg-blue-50 rounded p-2 mb-4" style={{ maxHeight: 150, overflow: "auto" }}>
              <p className="text-xs text-gray-700">
                <b>[Transcript]</b> Machine learning is a branch of artificial intelligence that enables systems to learn from data and make predictions...
                Regression models help identify relationships between variables, while classification algorithms sort data into categories...
              </p>
            </div>
            <Button variant="outline" size="sm" className="mb-2 mr-2" onClick={() => setShowNoteInput((shown) => !shown)}>
              {showNoteInput ? "Hide Note-taking" : "Take Notes"}
            </Button>
            {showNoteInput &&
              <div className="mb-3 flex flex-col">
                <Input
                  placeholder="Write your note..."
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  className="mb-2"
                />
                <Button size="sm" onClick={() => {
                  if (currentNote.trim()) {
                    setNotes([...notes, currentNote]);
                    setCurrentNote("");
                  }
                }}>Save Note</Button>
                {notes.length > 0 && (
                  <ul className="mt-2 text-xs">
                    {notes.map((nt, i) => <li key={i} className="mb-1 border-b last:border-none py-1">{nt}</li>)}
                  </ul>
                )}
              </div>
            }
            <p className="text-gray-700">Use transcript and note-taking to review and reinforce your learning at your own pace.</p>
          </div>
        );
      default:
        return null;
    }
  };

  // -- END UI logic --

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="grow bg-gray-50 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {/* Title and branding */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <img src={KSU_LOGO_PLACEHOLDER} alt="KSU Logo" className="w-16 h-16 rounded-full border-4 border-ksu-blue bg-white shadow" />
            <div>
              <h1 className="text-3xl font-extrabold text-ksu-blue flex items-center">AI Lecture Playback <span className="ml-3">{<Settings className="h-5 w-5 text-gray-500" />}</span></h1>
              <p className="text-gray-600 mt-1">Experience personalized lectures from your virtual professor, powered by AI.<br />
                <span className="font-semibold text-ksu-blue">Choose your preferred learning and teaching styles below!</span>
              </p>
            </div>
          </div>

          {/* STEP 1: Learning Style Selector */}
          {!lectureStarted ? (
            <div className="relative z-10 bg-white rounded-xl shadow-feature border border-border p-6 mb-10 animate-fade-in">
              <div className="absolute top-0 right-0">
                {/* The KSU color accent/branding */}
                <div className="w-12 h-2 bg-ksu-blue rounded-bl-full"></div>
              </div>
              <h2 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                <Layers className="h-5 w-5 text-ksu-blue" />
                Select Your Learning Style
              </h2>
              <p className="mb-4 text-gray-700">
                Pick how you'd like the AI professor to deliver the lecture! Each mode optimizes your learning experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {learningModes.map((mode) => (
                  <Button
                    key={mode.key}
                    className={`flex items-center w-full justify-start gap-3 border-2 transition-all px-4 py-3 rounded-xl
                      ${selectedMode === mode.key ? "bg-ksu-blue text-white border-ksu-blue shadow-lg" : "bg-white border-gray-200 hover:border-ksu-blue"}
                    `}
                    variant={selectedMode === mode.key ? "default" : "outline"}
                    onClick={() => setSelectedMode(mode.key)}
                  >
                    <span>{mode.icon}</span>
                    <span>
                      <span className="font-semibold">{mode.label}</span>
                      <span className="block text-xs text-gray-500">{mode.description}</span>
                    </span>
                  </Button>
                ))}
              </div>
              <Button
                disabled={!selectedMode}
                className="w-full mt-2 bg-gradient-to-r from-ksu-blue to-blue-400 text-white shadow"
                size="lg"
                onClick={() => setLectureStarted(true)}
              >
                Start AI Lecture
              </Button>
            </div>
          ) : (
            <>
              {/* STEP 2: AI Persona Section */}
              <div className="relative z-10 bg-white rounded-xl shadow-feature border border-border mb-6 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 animate-fade-in">
                {/* Persona avatar */}
                <div>{professorPersona.avatar(selectedPersona)}</div>
                {/* Teaching style customization */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg mb-2 flex items-center gap-1">
                    <Settings className="h-5 w-5 text-gray-500" />
                    Customize Teaching Style
                  </h2>
                  <div className="flex gap-2 mb-4">
                    {personaStyles.map((persona) => (
                      <Button
                        key={persona.key}
                        size="sm"
                        className={`flex flex-col items-center px-4 py-2 transition-all border-2 rounded-xl
                          ${selectedPersona === persona.key ? "bg-ksu-blue text-white border-ksu-blue" : "bg-white border-gray-200 hover:border-ksu-blue"}
                        `}
                        variant={selectedPersona === persona.key ? "default" : "outline"}
                        onClick={() => setSelectedPersona(persona.key)}
                      >
                        {persona.icon}
                        <span className="text-xs mt-1">{persona.label}</span>
                      </Button>
                    ))}
                  </div>
                  <div className="rounded bg-blue-50 px-4 py-2 text-xs text-blue-800 mb-2 w-max">
                    <b>Mode:</b> {learningModes.find((m) => m.key === selectedMode)?.label}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setLectureStarted(false);
                      setSelectedPersona("formal");
                    }}
                  >
                    &larr; Change Learning Style
                  </Button>
                </div>
              </div>

              {/* STEP 3: Lecture Delivery (by AI professor, with dynamic content) */}
              <div className="bg-white rounded-xl shadow-feature border border-border p-6 animate-fade-in mb-6">
                <h2 className="font-bold text-xl text-ksu-blue mb-3 flex items-center gap-2">
                  AI Lecture Delivery
                  {/* Animate small KSU blue dot */}
                  <span className="inline-block h-3 w-3 rounded-full bg-ksu-blue animate-pulse ml-2" />
                </h2>
                <div>
                  {getLectureContent()}
                </div>
              </div>
            </>
          )}

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
