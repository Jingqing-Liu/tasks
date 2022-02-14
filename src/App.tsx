import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
            </div>

            <div>
                <h1>Hatsune Miku</h1>
            </div>

            <img
                src={process.env.PUBLIC_URL + "/MIKU.jpeg"}
                width="600"
                height="403"
                alt="logo"
            />

            <div>
                <ul>
                    <li>Introduction</li>
                    <li>Facts</li>
                    <li>Profile</li>
                </ul>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="APP-Col_1"
                                style={{
                                    border: "1px solid red",
                                    padding: "4px"
                                }}
                            >
                                Outstanding work
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="APP-Col_2"
                                style={{
                                    border: "1px solid red",
                                    padding: "4px"
                                }}
                            >
                                Creator‘s recommendation
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. This webiste is edited by Jingqing
                    Liu. Hello World
                </p>
            </div>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
