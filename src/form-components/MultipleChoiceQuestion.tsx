import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const DEFAULT_OPTION = options[0];
    const [option, setOption] = useState<string>(DEFAULT_OPTION);
    function updateOption(event: ChangeEvent) {
        setOption(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Label>What is the right answer?</Form.Label>
            <Form.Select value={option} onChange={updateOption}>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {options}
                    </option>
                ))}
            </Form.Select>
            <div>{option === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
