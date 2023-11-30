import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../services/ApiService";
import { setCharacters } from "../features/characterSlice";
import CharacterCard from "../components/CharacterCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.character.pageNumber);
    const characters = useSelector(state => state.character.characters);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await getCharacters(pageNumber);
            dispatch(setCharacters(response.results));
        }
        fetchCharacters();
    }, [pageNumber, dispatch]);

    return (
        <Container maxWidth="lg">
            <h1 className="title">Rick & Morty Characters</h1>
            <Grid container spacing={2}>
                {characters.length > 0 ? (
                    characters.map((character) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={character.id}>
                                <CharacterCard character={character} />
                            </Grid>
                        )
                    })
                ) : (
                    <div>
                        <p>No characters</p>
                    </div>
                )}
            </Grid>
        </Container>
    )
}

export default Home;