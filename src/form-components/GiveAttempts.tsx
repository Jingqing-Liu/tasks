import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [lefttempts, setLeftattempts] = useState<number>(3);
    const [newattempts, setNewattempts] = useState<number>(0);
    const reduceAttempts = () => setLeftattempts(lefttempts - 1);
    const makegain = () => setLeftattempts(newattempts + lefttempts);

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <Form.Control
                    type="number"
                    value={newattempts}
                    onChange={(event: ChangeEvent) =>
                        setNewattempts(parseInt(event.target.value))
                    }
                />
            </div>
            <div>
                <span>
                    <Button
                        onClick={reduceAttempts}
                        disabled={lefttempts === 0}
                    >
                        use
                    </Button>
                </span>
                <span>
                    <Button onClick={makegain}>gain</Button>
                </span>
            </div>
            <div>{lefttempts}</div>
        </div>
    );
}
