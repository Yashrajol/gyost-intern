import React from 'react';
import { BookOpen, Users, Clock, Award, BarChart, Calendar, BookCheck, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Basics",
      progress: 65,
      nextLesson: "CSS Flexbox and Grid",
      nextLessonTime: "Today, 3:00 PM",
      instructor: "Yash Rajole"
    },
    {
      id: 2,
      title: "Advanced React Development",
      progress: 30,
      nextLesson: "State Management with Redux",
      nextLessonTime: "Tomorrow, 4:00 PM",
      instructor: "Tanvi Deore"
    }
  ];

  const upcomingLessons = [
    {
      id: 1,
      title: "CSS Flexbox and Grid",
      course: "Web Development Basics",
      time: "Today, 3:00 PM",
      duration: "1 hour"
    },
    {
      id: 2,
      title: "State Management with Redux",
      course: "Advanced React Development",
      time: "Tomorrow, 4:00 PM",
      duration: "1.5 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
          
          <nav className="mt-8 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
              <BarChart className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <BookOpen className="w-5 h-5" />
              <span>My Courses</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span>Schedule</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <BookCheck className="w-5 h-5" />
              <span>Assignments</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg mt-8">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Track your progress and upcoming lessons</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Enrolled Courses</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Hours</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Certificates</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Instructors</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enrolled Courses */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Enrolled Courses</h2>
            <div className="space-y-6">
              {enrolledCourses.map(course => (
                <div key={course.id} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <span className="text-sm text-blue-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Next: {course.nextLesson}</span>
                    <span>{course.nextLessonTime}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Instructor: {course.instructor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Lessons */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Lessons</h2>
            <div className="space-y-4">
              {upcomingLessons.map(lesson => (
                <div key={lesson.id} className="flex items-start space-x-4 border-b last:border-0 pb-4 last:pb-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                    <p className="text-sm text-gray-500">{lesson.course}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{lesson.time} • {lesson.duration}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;