import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Control value={answer} onChange={updateAnswer} />
            <h3>Check Answer</h3>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}. </div>
        </div>
    );
}
