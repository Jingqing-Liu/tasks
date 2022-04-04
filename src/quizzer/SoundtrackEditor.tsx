import React, { useState } from "react";
import { ListGroup, Form } from "react-bootstrap";
import { Song } from "../interfaces/song";
import { Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

interface SongProps {
    song: Song;
    setSong: (id: string, newSong: Song) => void;
}

interface AddMovieBoxParams {
    // Consumes a function that consumes the name and answer date
    //  and returns nothing (because it's passed to a React State Setter).
    // This is passed in much later
    appendMovie: (n: string, r: string, s: number) => void;
}

export function AddMovieBox({ appendMovie }: AddMovieBoxParams): JSX.Element {
    // These will be the values for the new Movie
    const [name, setName] = useState<string>("");
    const [answer, setanswer] = useState<string>("");
    const [choice1, setchoice1] = useState<string>("");
    const [multileVisible, setMultilesVisible] = useState<boolean>(false);
    const [shortVisible, setShortVisible] = useState<boolean>(false);
    const [points, setPoints] = useState<number>(0);
    function flipMultilesVisibility(): void {
        setMultilesVisible(!multileVisible);
    }

    function flipShortsVisibility(): void {
        setShortVisible(!shortVisible);
    }
    // Provide forms for editing the new movie
    // And also a button to append the movie
    return (
        <div>
            <Button
                onClick={flipMultilesVisibility}
                className="float-right me-3"
            >
                Add Short Answer Question
            </Button>
            {multileVisible && (
                <div>
                    <Form>
                        <Form.Group controlId="formMovieName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(event: ChangeEvent) =>
                                    setName(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formMovieanswer">
                            <Form.Label>Answer:</Form.Label>
                            <Form.Control
                                type="text"
                                value={answer}
                                onChange={(event: ChangeEvent) =>
                                    setanswer(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group controlId="formPoints">
                            <Form.Label>Points:</Form.Label>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(event: ChangeEvent) =>
                                    setPoints(parseInt(event.target.value))
                                }
                            />
                        </Form.Group>
                    </Form>

                    <Button onClick={() => appendMovie(name, answer, points)}>
                        Append Short Answer Question
                    </Button>
                </div>
            )}

            <Button onClick={flipShortsVisibility} className="float-right me-3">
                Add True or False Question
            </Button>
            {shortVisible && (
                <div>
                    <Form>
                        <Form.Group controlId="formShorteName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(event: ChangeEvent) =>
                                    setName(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group controlId="formMovieanswer">
                            <Form.Label>ENTER True or False</Form.Label>
                            <Form.Control
                                type="text"
                                value={choice1}
                                onChange={(event: ChangeEvent) =>
                                    setchoice1(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group controlId="formPoints">
                            <Form.Label>Points:</Form.Label>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(event: ChangeEvent) =>
                                    setPoints(parseInt(event.target.value))
                                }
                            />
                        </Form.Group>
                    </Form>

                    <Button onClick={() => appendMovie(name, choice1, points)}>
                        Append True or False Question
                    </Button>
                </div>
            )}
        </div>
    );
}

export function SongNameEditor({ song, setSong }: SongProps): JSX.Element {
    return (
        <Form.Control
            value={song.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSong(song.name, {
                    ...song,
                    name: event.target.value
                })
            }
        />
    );
}

export function SongByEditor({ song, setSong }: SongProps): JSX.Element {
    return (
        <Form.Control
            value={song.answer}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSong(song.name, {
                    ...song,
                    answer: event.target.value
                })
            }
        />
    );
}

export function SoundtrackEditor({
    songs,
    setSongs
}: {
    songs: Song[];
    setSongs: (songs: Song[]) => void;
}): JSX.Element {
    function setSong(id: string, newSong: Song) {
        setSongs(
            songs.map((song: Song) => (song.name === id ? newSong : song))
        );
    }
    function appendMovie(name: string, answer: string, points: number) {
        // Making a new array of movies, with an additional extra one
        const modifiedMovies = [
            ...songs,
            {
                name: name,
                answer: answer,
                points: points
            }
        ];
        // Update the movies array to be the new version
        setSongs(modifiedMovies);
    }
    return (
        <div>
            <ListGroup as="ol" numbered>
                <div>
                    <AddMovieBox appendMovie={appendMovie}></AddMovieBox>
                </div>
                {songs.map((song: Song) => (
                    <ListGroup.Item
                        as="li"
                        key={song.name}
                        className="d-flex align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            {/* Song Title */}
                            <SongNameEditor
                                song={song}
                                setSong={setSong}
                            ></SongNameEditor>
                            {/* Song By */}
                            <SongByEditor
                                song={song}
                                setSong={setSong}
                            ></SongByEditor>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
