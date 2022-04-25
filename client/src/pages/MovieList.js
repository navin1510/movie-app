import React, { useEffect, useState } from 'react';
import {
    Container,
    Card, CardBody, CardHeader, Col, Row,
    Form, Input, Button
} from 'reactstrap';
import axios from 'axios';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        const response = await axios({
            url: `http://localhost:4000/movies?title=${searchText}`,
            method: 'get'
        });
        setMovies(response.data);
    }

    const onChangeInput = (event) => {
        setSearchText(event.target.value);
    }

    const onClickSearch = () => {
        getMovies();
    }

    return (
        <main>
            <Container>
                <section className="content" style={{
                    marginTop: 60
                }}>
                    <h2>List of Movies</h2>
                    <Form inline>
                        <Input type="text" onChange={onChangeInput} style={{ width: '80%' }} />
                        <Button color="primary" onClick={onClickSearch}>Search</Button>
                    </Form>
                    <hr />
                    <Row>
                        {movies.map((movie, idx) => (
                            <Col md="4" key={idx}>
                                <Card>
                                    <CardHeader>{movie.title}</CardHeader>
                                    <CardBody>
                                        {movie.title}
                                        <img src={movie.poster} alt="Movie Poster" style={{ width: '100%' }} />
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>
        </main>
    );
}

export default MovieList;
