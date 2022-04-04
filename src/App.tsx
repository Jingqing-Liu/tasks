import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { MovieList } from "./quizzer/MovieList";
import { AddMovieModal } from "./quizzer/AddMovieModal";
import ghibli from "./data/ghibli_movies.json";
import { Movie } from "./interfaces/movie";
import { Button } from "react-bootstrap";
import ApplicationSketch from "./assets/sketch.png";

const MOVIES = ghibli.map(
    (movie): Movie => ({
        ...movie,
        watched: { seen: false, liked: false, when: null }
    })
);

function watchMovie(movie: Movie, seen: boolean, liked: boolean): Movie {
    return {
        ...movie,
        watched: {
            ...movie.watched,
            seen: seen,
            liked: liked,
            when: new Date().toLocaleString()
        }
    };
}

function App(): JSX.Element {
    const [movies, setMovies] = useState<Movie[]>(MOVIES);
    const [showAddModal, setShowAddModal] = useState(false);

    function setMovieWatched(id: string, seen: boolean, liked: boolean) {
        setMovies(
            movies.map(
                (movie: Movie): Movie =>
                    id === movie.id ? watchMovie(movie, seen, liked) : movie
            )
        );
    }

    function editMovie(id: string, newMovie: Movie) {
        setMovies(
            movies.map(
                (movie: Movie): Movie => (movie.id === id ? newMovie : movie)
            )
        );
    }

    function deleteMovie(id: string) {
        setMovies(movies.filter((movie: Movie): boolean => movie.id !== id));
    }

    function addMovie(newMovie: Movie) {
        const existing = movies.find(
            (movie: Movie): boolean => movie.id === newMovie.id
        );
        if (existing === undefined) {
            setMovies([...movies, newMovie]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <div>
                    <MovieList
                        movies={movies}
                        editMovie={editMovie}
                        deleteMovie={deleteMovie}
                        setMovieWatched={setMovieWatched}
                    ></MovieList>
                </div>
                <div>
                    <Button
                        variant="success"
                        className="m-4"
                        onClick={handleShowAddModal}
                    >
                        Add New Quiz
                    </Button>
                    <AddMovieModal
                        show={showAddModal}
                        handleClose={handleCloseAddModal}
                        addMovie={addMovie}
                    ></AddMovieModal>
                </div>
                <img src={ApplicationSketch}></img>
            </div>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
