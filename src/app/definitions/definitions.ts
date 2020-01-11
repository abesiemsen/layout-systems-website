export interface Configuration {
  course: Course;
}

export interface Entity {
  slug: string;
  name: string;
}

export interface Person {
  slug: string;
  firstName: string;
  lastName: string;
  basePath: string;
}

export interface Instructor extends Person {
  email: string;
}

export interface Student extends Person {
  id?: number;
}

export interface Course extends Entity {
  meetingTimes: MeetingTime[];
  instructors: Instructor[];
  syllabus: string;
  students: Student[];
  sessions: Session[];
  projects: Project[];
}

export interface Session {
  date: string;
  holiday?: string;
  location?: Location;
}

export interface MeetingTime {
  days: string;
  time: string;
  location: string;
  purpose: string;
}

export interface Location extends Entity {
  building: string;
  room: string;
}

export interface Project extends Entity {
  hidden?: boolean;
  description?: string;
  instructions?: string;
  deliverables?: Deliverable[];
  references?: Reference[];
  examples?: Example[];
}

export interface Deliverable extends Entity {
  projectSlug?: string;
  hidden?: boolean;
  assigned: string;
  due: string;
  file: string;
  description?: string;
  instructions?: string;
  references?: Reference[];
  examples?: Example[];
}

export interface Reference {
  name?: string;
  link: string;
  description?: string;
}

export interface Example {
  name?: string;
  link: string;
}

export interface DeliverableConfig {
  entrypoints?: Entrypoint[];
}

export interface Entrypoint {
  name: string;
  file: string;
}
