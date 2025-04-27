export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  links: {
    live?: string;
    code?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'fitness-app',
    title: 'FitTrack',
    description: 'A comprehensive fitness tracking iOS app with workout plans, nutrition tracking, and progress monitoring.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['ios', 'ui'],
    technologies: ['Swift', 'UIKit', 'CoreData', 'HealthKit'],
    links: {
      live: 'https://apps.apple.com',
      code: 'https://github.com',
    },
  },
  {
    id: 'delivery-app',
    title: 'QuickBite',
    description: 'Food delivery application with real-time order tracking, payment integration, and personalized recommendations.',
    image: 'https://images.pexels.com/photos/6166033/pexels-photo-6166033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['ios', 'cross-platform'],
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'MapKit'],
    links: {
      live: 'https://apps.apple.com',
      code: 'https://github.com',
    },
  },
  {
    id: 'finance-app',
    title: 'WealthWise',
    description: 'Personal finance management app with budget tracking, expense categorization, and financial insights.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['ios', 'ui'],
    technologies: ['Swift', 'CoreAnimation', 'Charts', 'CloudKit'],
    links: {
      live: 'https://apps.apple.com',
      code: 'https://github.com',
    },
  },
  {
    id: 'social-app',
    title: 'ConnectMe',
    description: 'Social networking platform focused on professional connections and career development.',
    image: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['cross-platform', 'ui'],
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
    links: {
      live: 'https://apps.apple.com',
      code: 'https://github.com',
    },
  },
  {
    id: 'travel-app',
    title: 'JourneyJoy',
    description: 'Travel planning app with itinerary management, location recommendations, and travel tips.',
    image: 'https://images.pexels.com/photos/7534364/pexels-photo-7534364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['ios', 'cross-platform'],
    technologies: ['SwiftUI', 'CoreLocation', 'MapKit', 'Combine'],
    links: {
      live: 'https://apps.apple.com',
      code: 'https://github.com',
    },
  },
  {
    id: 'productivity-app',
    title: 'FocusFlow',
    description: 'Productivity tool with pomodoro timer, task management, and habit tracking features.',
    image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['ios', 'ui'],
    technologies: ['Swift', 'UserNotifications', 'CoreData', 'WidgetKit'],
    links: {
      live: 'https://apps.apple.com',
      code: 'https://github.com',
    },
  },
];