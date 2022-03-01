import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const PublishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return PublishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const NonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
    );
    return NonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const PublishedQuestions = questions.filter(
        (question: Question): boolean => question.id === id
    );
    return PublishedQuestions.length === 0 ? null : PublishedQuestions[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const Questions = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return Questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const Names = questions.map((question: Question): string => question.name);
    return Names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, questions: Question) =>
            currentSum + questions.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(getPublishedQuestions(questions));
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.=
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */

export function toCSV(questions: Question[]): string {
    const questionCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (question: Question): Answer => ({
            correct: false,
            questionId: question.id,
            text: "",
            submitted: false
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newquestion = [...questions];
    const publishAll = newquestion.map(
        (question: Question): Question =>
            question.published === false
                ? { ...question, published: true }
                : { ...question, published: true }
    );
    return publishAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const ifsameType = questions.map((question: Question) => question.type);
    const value = ifsameType[0];
    const ifsameTypetf = ifsameType.map((tf: string) => tf === value);
    const TF = ifsameTypetf.includes(false) ? false : true;
    return TF;
}
/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newquestion = makeBlankQuestion(id, name, type);
    const addNewQuestion = [...questions, newquestion];
    return addNewQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */

export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, name: newName }
                : { ...question }
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */

export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const part1 = questions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, type: newQuestionType }
                : { ...question }
    );
    return part1.map(
        (question: Question): Question =>
            question.type !== "multiple_choice_question"
                ? { ...question, options: [] }
                : { ...question }
    );
}
/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

export function changeoptions(
    question: Question,
    targetOptionIndex: number,
    newOption: string,
    targetId: number
): Question {
    let answer: Question;
    if (question.id === targetId) {
        answer = {
            ...question,
            options: [...question.options]
        };
        answer.options.splice(targetOptionIndex, 1, newOption);
    } else {
        answer = { ...question };
    }
    return answer;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    let answer: Question[];
    if (targetOptionIndex === -1) {
        answer = questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: [...question.options, newOption] }
                    : { ...question }
        );
    } else {
        answer = questions.map(
            (question: Question): Question =>
                changeoptions(question, targetOptionIndex, newOption, targetId)
        );
    }
    return answer;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function InsertIndex(
    question: Question[],
    Index: number,
    newquestion: Question
): Question[] {
    const answer = [...question];
    answer.splice(Index + 1, 0, newquestion);
    return answer;
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIdindex = questions.findIndex(
        (num: Question): boolean => num.id === targetId
    );
    const copy = duplicateQuestion(newId, questions[targetIdindex]);
    return InsertIndex(questions, targetIdindex, copy);
}
