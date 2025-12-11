import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Info({ info }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <Card sx={{ width: 400, padding: 2, borderRadius: 4 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop"
          title={info.city}
        />

        <CardContent>
       {info.city &&   <Typography gutterBottom variant="h4">
            {info.city}'s Report
          </Typography>}

          <Typography variant="body1" color="text.secondary">
            Temperature: {info.temp}°C <br />
            Feels Like: {info.feelslike}°C <br />
            Min Temperature: {info.tempMin}°C <br />
            Max Temperature: {info.tempMax}°C <br />
            Humidity: {info.humidity}% <br />
            Condition: {info.weather}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
