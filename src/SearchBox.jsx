import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper, Typography, Fade } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let apiKey = "95f43ffb2d4c807cc55e47762a8b2233"
    const apiurl="https://api.openweathermap.org/data/2.5/weather";

    let getWeather = async (city) => {
        try {
            let res = await fetch(`${apiurl}?q=${city}&appid=${apiKey}&units=metric`);
            let jsonRes = await res.json();
            let result = {
                city: city,
                temp: jsonRes.main.temp,
                humidity: jsonRes.main.humidity,
                pressure: jsonRes.main.pressure,
                wind: jsonRes.wind.speed,
                weather: jsonRes.weather[0].description,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                feelslike: jsonRes.main.feels_like,
            };  
            return result;
        } catch (error) {
            throw(error);
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newinfo = await getWeather(city);
            updateInfo(newinfo);
        } catch (error) {
            console.error("Error in handleSubmit:", error);
            setError(true);
        }
    }

    return (
        <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2
            }}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: 'primary.main',
                            },
                        },
                    }}
                />
                <Button 
                    variant="contained" 
                    type='submit'
                    startIcon={<SearchIcon />}
                    sx={{
                        minWidth: '200px',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
                        },
                    }}
                >
                    Search
                </Button>
                <Fade in={error}>
                    <Typography color="error" sx={{ mt: 1 }}>
                        City not found. Please try again.
                    </Typography>
                </Fade>
            </Box>
        </Paper>
    );
}