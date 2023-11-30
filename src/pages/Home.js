import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../services/ApiService";
import { setCharacters, setPage } from "../features/characterSlice";
import CharacterCard from "../components/CharacterCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from "@mui/material/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.character.pageNumber);
    const characters = useSelector(state => state.character.characters);
    const totalPages = useSelector(state => state.character.totalPages);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await getCharacters(pageNumber);
            dispatch(setCharacters(response));
        }
        fetchCharacters();
    }, [pageNumber, dispatch]);

    const handlePageSelect = (event, value) => {
        dispatch(setPage(value))
    }

    return (
        <div>
            <Container maxWidth="lg" >
                <h1 className="title">Characters</h1>
                <Grid container spacing={5}>
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

            <div className="pagination-container">
                <Pagination
                    count={totalPages}
                    boundaryCount={3}
                    siblingCount={2}
                    color="primary"
                    size="large"
                    sx={{ p: 2 }} onChange={handlePageSelect} />
            </div>
        </div>
    )
}

export default Home;