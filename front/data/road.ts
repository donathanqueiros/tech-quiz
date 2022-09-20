export interface Alternative {
  id: number;
  content: string;
}

export interface Question {
  id: number;
  name: string;
  answerId: number;
  alternatives: Alternative[];
  level: number;
}

export interface Topic {
  id: number;
  name: string;
  description: string;
  questions: Question[];
}

export interface Road {
  id: number;
  name: string;
  description?: string;
  color: string;
  topics: Topic[];
}
