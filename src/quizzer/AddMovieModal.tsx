import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Movie } from "../interfaces/movie";
import { Song } from "../interfaces/song";
import { EditableSongList } from "./EditableSongList";

export function AddMovieModal({
    show,
    handleClose,
    addMovie
}: {
    show: boolean;
    handleClose: () => void;
    addMovie: (newMovie: Movie) => void;
}) {
    const [title, setTitle] = useState<string>("");
    const [songs, setSongs] = useState<string[]>([]);

    function saveChanges() {
        addMovie({
            id: "",
            title: title,
            rating: 0,
            description: "",
            creationyear: 0,
            soundtrack: songs.map(
                (song: string): Song => ({
                    name: song,
                    answer: "",
                    points: 0
                })
            ),
            watched: {
                seen: false,
                liked: false,
                when: null
            }
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="formMovieId" as={Row}>
                    <Form.Label column sm={3}>
                        New Quiz:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* Soundtrack */}
                <span>New question:</span>
                <EditableSongList
                    songs={songs}
                    setSongs={setSongs}
                ></EditableSongList>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
