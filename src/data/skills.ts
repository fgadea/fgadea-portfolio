import { Code, Smartphone, Globe, Database, Palette, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: 'iOS Development',
    icon: Smartphone,
    items: [
      { 
        name: 'Swift', 
        icon: 'https://img.icons8.com/color/48/swift.png' 
      },
      { 
        name: 'SwiftUI', 
        icon: 'https://img.icons8.com/ios-filled/50/swiftui.png' 
      },
      { 
        name: 'UIKit', 
        icon: 'https://img.icons8.com/ios/50/settings--v1.png' 
      },
      { 
        name: 'Xcode', 
        icon: 'https://img.icons8.com/fluency/48/xcode.png' 
      },
      { 
        name: 'Objective-C', 
        icon: 'https://img.icons8.com/ios-filled/50/c-programming.png' 
      },
      { 
        name: 'ARKit', 
        icon: 'https://img.icons8.com/ios/50/augmented-reality.png' 
      },
      { 
        name: 'CoreData', 
        icon: 'https://img.icons8.com/ios/50/database.png' 
      },
      { 
        name: 'HealthKit', 
        icon: 'https://img.icons8.com/fluency/48/like--v1.png' 
      }
    ],
  },
  {
    name: 'Cross-Platform',
    icon: Globe,
    items: [
      { name: 'React Native' },
      { name: 'Flutter' },
      { name: 'Kotlin' },
      { name: 'Xamarin' },
    ],
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    items: [
      { name: 'Figma' },
      { name: 'Sketch' },
      { name: 'Adobe XD' },
      { name: 'Prototyping' },
      { name: 'Animation' },
    ],
  },
  {
    name: 'Backend & DevOps',
    icon: Database,
    items: [
      { name: 'Firebase' },
      { name: 'Node.js' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'CI/CD' },
    ],
  },
  {
    name: 'Programming',
    icon: Code,
    items: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C++' },
    ],
  },
  {
    name: 'Tools & Frameworks',
    icon: Terminal,
    items: [
      { name: 'Git' },
      { name: 'Jira' },
      { name: 'Fastlane' },
      { name: 'TestFlight' },
      { name: 'App Store Connect' },
    ],
  },
];