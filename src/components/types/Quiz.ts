export interface Quiz {
  id: number;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
    explication: string;
  }[];
  code?: string;
}
