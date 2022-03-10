import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [leftattempts, setLeftattempts] = useState<string>("3");
    const [newattempts, setNewattempts] = useState<string>("0");
    const add = parseInt(newattempts) + parseInt(leftattempts);
    const reduceAttempts = () =>
        setLeftattempts((parseInt(leftattempts) - 1).toString());
    const makegain = () =>
        newattempts === ""
            ? setLeftattempts(leftattempts)
            : setLeftattempts(add.toString());

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <Form.Control
                    type="number"
                    value={newattempts}
                    onChange={(event: ChangeEvent) =>
                        setNewattempts(event.target.value)
                    }
                />
            </div>
            <div>
                <span>
                    <Button
                        onClick={reduceAttempts}
                        disabled={parseInt(leftattempts) === 0}
                    >
                        use
                    </Button>
                </span>
                <span>
                    <Button onClick={makegain}>gain</Button>
                </span>
            </div>
            <div>You have {leftattempts} attempts left.</div>
        </div>
    );
}
