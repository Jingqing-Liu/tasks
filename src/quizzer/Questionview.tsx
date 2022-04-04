import React, { useState } from "react";
import { Row, Button, Col, Form } from "react-bootstrap";
import { Song } from "../interfaces/song";

export function QuestionView({ question }: { question: Song }): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function clearAnswer() {
        setAnswer("");
    }

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        //enterAnswer(question.name, answer);
    }

    function TrueAnswer() {
        setAnswer(question.answer);
    }

    function FalseAnswer() {
        setAnswer("Not answer");
    }

    return (
        <div>
            <div>
                <Row>
                    Score:{question.points}
                    <Col>
                        <h3>{question.name}</h3>
                        <Row>
                            <Form.Group as={Row}>
                                <Form.Label>Answer: </Form.Label>
                                {question.answer === "True" ? (
                                    <div>
                                        <Button onClick={TrueAnswer}>
                                            True
                                        </Button>
                                        <Button onClick={FalseAnswer}>
                                            False
                                        </Button>
                                    </div>
                                ) : question.answer === "False" ? (
                                    <div>
                                        <Button onClick={FalseAnswer}>
                                            True
                                        </Button>
                                        <Button onClick={TrueAnswer}>
                                            False
                                        </Button>
                                    </div>
                                ) : (
                                    <Form.Control
                                        value={answer}
                                        onChange={changeAnswer}
                                    />
                                )}
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                {answer === question.answer ? "✔️" : "❌"}.
                            </Col>
                            <Col>
                                <Button onClick={clearAnswer}>
                                    Clear Answer
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
            </div>
        </div>
    );
}
