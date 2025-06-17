import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Container, Typography, Paper, Box } from '@mui/material';

export default function Weatherapp() {
    let [weatherData, setWeatherData] = useState({
        city: "bangalore",
        temp: 25,
        humidity: 60,
        pressure: 1012,
        wind: 5.5,
        weather: "clear sky",
        tempMin: 5,
        tempMax: 28,
        feelslike: 26,
    });

    let updateInfo = (data) => {
        setWeatherData(data);
    }

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2, background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)' }}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Weather App
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Search for the weather in your city!
                    </Typography>
                </Box>
                <Box className="app-content" sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <SearchBox updateInfo={updateInfo}/>
                    <InfoBox info={weatherData}/>
                </Box>
            </Paper>
        </Container>
    );
}