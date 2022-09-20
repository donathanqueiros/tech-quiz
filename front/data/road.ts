export interface Option {
  id: number;
  content: string;
}

export interface Question {
  question: string;
  answer: number;
  options: Option[];
}

export interface Topic {
  name: string;
  description: string;
  questions: Question[];
}

export interface Road {
  id: string;
  name: string;
  description?: string;
  color: string;
  topics: Topic[];
}
