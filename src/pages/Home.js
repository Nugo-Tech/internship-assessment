import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCharacters } from "../services/ApiService";
import { setCharacters, setPage } from "../features/characterSlice";
import CharacterCard from "../components/CharacterCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from "@mui/material/Pagination";
import { cacheExpTime } from "../constants/Constants";

const Home = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.character.pageNumber);
    const characters = useSelector(state => state.character.characters);
    const totalPages = useSelector(state => state.character.totalPages);

    useEffect(() => {
        const fetchCharacters = async () => {

            const cachedData = JSON.parse(localStorage.getItem(pageNumber));
            if (cachedData) {
                const timestamp = cachedData.timestamp;

                // Check if data is not older than cache expiration time
                if (new Date().getTime() - timestamp < cacheExpTime) {
                    dispatch(setCharacters(cachedData.data));
                    return;
                }
            }
            //if cached data is not available or expired
            const response = await getCharacters(pageNumber);

            const newCachedData = { timestamp: new Date().getTime(), data: response };
            localStorage.setItem(pageNumber, JSON.stringify(newCachedData));

            dispatch(setCharacters(response));
        }
       
        fetchCharacters();       
    }, [pageNumber, dispatch]);

    //function to handle page select from pagination
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
                            <h3>No characters</h3>
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