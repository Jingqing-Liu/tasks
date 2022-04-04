export type QuestionType = "multiple_choice_question" | "short_answer_question";

export interface Song {
    name: string;
    answer: string;
    points: number;
}
