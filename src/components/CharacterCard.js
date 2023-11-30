import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CharacterCard = ({ character }) => {

    //function to check a given string starts with a vowel
    const isStartWithVowel = (string) => {
        let firstLetter = string.charAt(0).toLowerCase();
        return /^[aeiou]/i.test(firstLetter);
    }
    return (
        <div className="char-card-container">
            <Card sx={{ width: 300 }} >
                <CardMedia
                    sx={{ height: 300 }}
                    image={character.image}
                    title={character.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {character.name} is {isStartWithVowel(character.species) ? "an" : "a"} {character.species} from {character.origin.name}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default CharacterCard;