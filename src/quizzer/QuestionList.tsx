import React from "react";
import { Song } from "../interfaces/song";
import { ListGroup } from "react-bootstrap";
import { QuestionView } from "./Questionview";

export function QuestionList({
    questions
}: {
    questions: Song[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Song) => (
                <QuestionView
                    question={question}
                    key={question.answer}
                ></QuestionView>
            ))}
        </ListGroup>
    );
}
