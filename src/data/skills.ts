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
      { name: 'Swift' },
      { name: 'SwiftUI' },
      { name: 'UIKit' },
      { name: 'Xcode' },
      { name: 'Objective-C' },
      { name: 'ARKit' },
      { name: 'CoreData' },
      { name: 'HealthKit'  }
    ],
  },
  {
    name: 'Cross-Platform',
    icon: Globe,
    items: [
      { name: 'Flutter' },
      { name: 'KMM' },
    ],
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    items: [
      { name: 'Figma' },
      { name: 'Sketch' },
    ],
  },
  {
    name: 'Backend & DevOps',
    icon: Database,
    items: [
      { name: 'Firebase' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'CI/CD' },
    ],
  },
  {
    name: 'Programming',
    icon: Code,
    items: [
      { name: 'Swift' },
      { name: 'Kotlin' },
      { name: 'Objective-C' },
      { name: 'Java' },
      { name: 'C#' },
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