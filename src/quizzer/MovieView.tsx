import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { QuizDifficulty } from "./QuizDifficulty";
import { QuestionList } from "./QuestionList";
import { Movie } from "../interfaces/movie";
import { RecordControls } from "./RecordControls";
import { MovieEditor } from "./MovieEditor";

export function MovieView({
    movie,
    deleteMovie,
    editMovie,
    setMovieWatched
}: {
    movie: Movie;
    deleteMovie: (id: string) => void;
    editMovie: (id: string, newMovie: Movie) => void;
    setMovieWatched: (id: string, s: boolean, l: boolean) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [questionsVisible, setQuestionsVisible] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    function makeQuestionsVisible(): void {
        setQuestionsVisible(true);
    }

    function makeQuestionsInvisible(): void {
        setQuestionsVisible(false);
    }

    return editing ? (
        <MovieEditor
            changeEditing={changeEditing}
            movie={movie}
            editMovie={editMovie}
            deleteMovie={deleteMovie}
        ></MovieEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{movie.title}</h3>
                    <RecordControls
                        setMovieWatched={(seen: boolean, liked: boolean) =>
                            setMovieWatched(movie.id, seen, liked)
                        }
                        watched={movie.watched}
                        changeEditing={changeEditing}
                    ></RecordControls>
                    Difficulty:
                    <QuizDifficulty rating={movie.rating}></QuizDifficulty>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{movie.description}</p>{" "}
                    <Col>
                        <Button onClick={makeQuestionsVisible}>
                            Take Quiz
                        </Button>
                        <div>
                            {questionsVisible ? (
                                <div>
                                    <QuestionList
                                        questions={movie.soundtrack}
                                    ></QuestionList>
                                    <Button onClick={makeQuestionsInvisible}>
                                        End Quiz
                                    </Button>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}
