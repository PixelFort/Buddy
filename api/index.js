const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');
const crypto = require('crypto')
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

const User = require('./models/user');
const Game = require('./models/game');
const Venue = require('./models/venue');

mongoose
  .connect(
    (MONGO_URI =
      'mongodb+srv://ronitkhanuja:Ronit123@cluster0.odejoiu.mongodb.net/Buddy?retryWrites=true&w=majority'),
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.listen(port, () => {
  console.log('Server running on port 8000');
});

const venues = [
    {
      name: "Badminton Court MP HALL",
      rating: 4.4,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/wCGLb69A42twExBr6",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.61998,
      lng: 81.87704,
      icon: "https://maps.app.goo.gl/wCGLb69A42twExBr6",
      filter_by: ["Badminton"],
      sportsAvailable:[ {
        id: '1',
        name: 'Badminton',
        icon: 'badminton',
        price: 500,
        courts: [
            {
                id: '10',
                name: 'Court 1',
                number: 1,
            },
            {
                id: '11',
                name: 'Court 2',
                number: 2,
            }
        ],
      }],
      image: "https://lh5.googleusercontent.com/p/AF1QipMyY2E9pnLIDeubwj8ACObykYb4Iiyd24_eWKao=w425-h240-k-no",
      location: " MP HALL ,MNNIT",
      address: "Barrister Mullah Colony, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211004",
      bookings: [],
    },
    {
      name: "Tennis Court , Near Gymkhana Ground",
      rating: 4.3,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/Koc5ftygYBVtZUyL7",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49410,
      lng: 81.86592,
      icon: "https://maps.app.goo.gl/Koc5ftygYBVtZUyL7",
      filter_by: ["Tennis"],
      sportsAvailable:[ {
        id: '1',
        name: 'Tennis',
        icon: 'Tennis',
        price: 500,
      }],
      image: "https://lh5.googleusercontent.com/p/AF1QipMo_bcTpiMtkQ1rHkRSola2ZXy2N33-ampvUycc=w408-h834-k-no",
      location: "Near  Gymkhana Ground ,MNNIT",
      address: "FVV8+H9M, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: " Gymkhana Ground, Near Boys Gym",
      rating: 4.5,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/ZHWBkBfYtyoJMJnN7",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.492372,
      lng: 81.866113,
      icon: "https://maps.app.goo.gl/ZHWBkBfYtyoJMJnN7",
      filter_by: ["Football", "Cricket", "Hockey","Kabbadi"],
      sportsAvailable:[ 
        {
          id: '2',
          name: 'Football',
          icon: 'football',
          price: 500,
        },
        {
          id: '3',
          name: 'Cricket',
          icon: 'cricket',
          price: 500,
        },
        {
          id: '4',
          name: 'Hockey',
          icon: 'hockey',
          price: 500,
        },
        {
          id: '5',
          name: 'Kabbadi',
          icon: 'kabbadi',
          price: 500,
        },
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipOn6Pcg4NjO6jW_AoxK-ImMf8ACXJn42-hrHP4l=w408-h306-k-no",
      location: "Near Gym ,MNNIT",
      address: "FVV8+993, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: "Basketball Court , Near MP HALL",
      rating: 4.0,
      deferLink: "https://mnnit.ac.in/sports",
      fullLink: "https://maps.app.goo.gl/bMoWkk8gG7vRVAW19",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49240,
      lng: 81.86608,
      icon: "https://maps.app.goo.gl/bMoWkk8gG7vRVAW19",
      filter_by: ["BasketBall"],
      sportsAvailable:[ {
        id: '1',
        name: 'Basketball',
        icon: 'basketball',
        price: 500,
      }],
      image: "https://lh3.googleusercontent.com/p/AF1QipOOMMPIcTahqv5pny1oYS9UaQd4Ayy_RcNvSUKH=w426-h240-k-no",
      location: "Near  MP HALL ,MNNIT",
      address: "Barrister Mullah Colony, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211004",
      bookings: [],
    },
    {
      name: "Badminton Court  CV Raman Hostel",
      rating: 4.4,
      deferLink: "https://maps.app.goo.gl/UcFCarVLn24tEgcD9",
      fullLink: "https://maps.app.goo.gl/UcFCarVLn24tEgcD9",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49822,
      lng: 81.87014,
      icon: "https://maps.app.goo.gl/UcFCarVLn24tEgcD9",
      filter_by: ["Badminton"],
      sportsAvailable:[ 
        {
          id: '1',
          name: 'Badminton',
          icon: 'badminton',
          price: 500,
        },
        {
          id: '2',
          name: 'Table Tennis',
          icon: 'table-tennis',
          price: 500,
        }
      ],
      image: "https://i.ytimg.com/vi/-gv_rB84u3s/maxresdefault.jpg",
      location: " Raman Hostel ,MNNIT",
      address: "FVX9+6XF, Shivkuti, Govindpur, Teliarganj, Prayagraj, Uttar Pradesh 211004",
      bookings: [],
    },
    {
      name: "Student Activity Centre, MNNIT",
      rating: 3.8,
      deferLink: "https://maps.app.goo.gl/wUZBotUWqdbtgkVi6",
      fullLink: "https://maps.app.goo.gl/wUZBotUWqdbtgkVi6",
      avgRating: 4.5,
      ratingCount: 25,
      lat: 25.49498,
      lng: 81.86769,
      icon: "https://maps.app.goo.gl/wUZBotUWqdbtgkVi6",
      filter_by: ["Chess,Table Tennis"],
      sportsAvailable:[ 
        {
          id: '1',
          name: 'Chess',
          icon: 'chess-king',
          price: 500,
        },
        {
          id: '2',
          name: 'Table Tennis',
          icon: 'table-tennis',
          price: 500,
        }
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipNTbXqyf3ccAvYgFVaHyMzsoftvDfd51zYVUdi5=w408-h255-k-no",
      location: "Near Tilak Hostel,MNNIT",
      address: "FVV9+X3P, MNNIT Allahabad Campus, Lukarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: "Gym MNNIT",
      rating: 3.5,
      deferLink: "https://maps.app.goo.gl/pxaDTZM2h5QQzT4t7",
      fullLink: "https://maps.app.goo.gl/pxaDTZM2h5QQzT4t7",
      avgRating: 4.0,
      ratingCount: 94,
      lat: 25.49279,
      lng: 81.86582,
      icon: "https://maps.app.goo.gl/pxaDTZM2h5QQzT4t7",
      filter_by: ["Gym"],
      sportsAvailable:[
        {
          id: '1',
          name: 'Gym',
          icon: 'sports-gymnastics',
          price: 500,
        }
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipPNqP8Ty8aBMDU2pWRjU5NbcrzFaUi3yua1I4yX=w408-h306-k-no",
      location: "Near Diamond Jubilee UnderPass,MNNIT",
      address: "FVV8+38W, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
    {
      name: "MNNIT Stadium",
      rating: 3.5,
      deferLink: "https://maps.app.goo.gl/GXXZHAhZ6iroVUQ8A",
      fullLink: "https://maps.app.goo.gl/GXXZHAhZ6iroVUQ8A",
      avgRating: 4.0,
      ratingCount: 94,
      lat: 25.49502,
      lng: 81.86473,
      icon: "https://maps.app.goo.gl/GXXZHAhZ6iroVUQ8A",
      filter_by: ["Runnig","Cricket","FootBall"],
      sportsAvailable:[ 
        {
          id: '2',
          name: 'Football',
          icon: 'football',
          price: 500,
        },
        {
          id: '3',
          name: 'Cricket',
          icon: 'cricket',
          price: 500,
        },
        {
          id: '4',
          name: 'Running',
          icon: 'running',
          price: 500,
        }
      ],
      image: "https://lh5.googleusercontent.com/p/AF1QipMy-irDmhDLVB_sIFfXKIUQceJLeiU1xOHvbG92=w408-h306-k-no",
      location: "Near Diamond Jubilee UnderPass,MNNIT",
      address: "FVV7+XWR, MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh 211002",
      bookings: [],
    },
];

async function addVenues() {
    for(const venueData of venues) {
        const existingVenue = await Venue.findOne({name:venueData?.name});
        
        if(existingVenue) {
            console.log(`Venue ${venueData.name} already exists. Skipping`);
        } else {
            const newVenue = new Venue(venueData);
            await newVenue.save();
            console.log(`Venue ${venueData.name} added successfully`);
        }
    }
}
  
addVenues().catch(err => {
    console.log("Error adding venues", err);
});

app.get("/venues", async (req, res) => {
    try {
        const venues = await Venue.find({});
        res.status(200).json(venues);
    } catch (err) {
        console.log("Error", err);
        res.status(500).json({ message: "Failed to fetch venues" });
    }
});

app.post('/register', async (req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({userId: newUser._id}, secretKey);

    res.status(200).json({token});
  } catch (error) {
    console.log('Error creating user', error);
    res.status(500).json({error: 'Internal server error'});
  } 
});

app.post('/login', async (req, res) => {
    try {
      const {email, password} = req.body;
  
      const user = await User.findOne({email});
      if (!user) {
        return res.status(401).json({message: 'Invalid email'});
      }
  
      if (user.password !== password) {
        return res.status(401).json({message: 'Invalid password'});
      }
  
      const secretKey = crypto.randomBytes(32).toString('hex');
  
      const token = jwt.sign({userId: user._id}, secretKey);
  
      res.status(200).json({token});
    } catch (error) {
      console.log('Error loggin in', error);
      res.status(500).json({message: 'Error loggin In'});
    }
  });

app.post("/creategame",async(req, res) => {
  try{
      const {sport, area, date, time, admin, totalPlayers} = req.body; l

      const activityAccess = "Public";  

      const newGame = new Game({
        sport,
        area,
        date,
        time,
        admin,
        totalPlayers,
        players: [admin],
      });

      const savedGame = newGame.save();
      res.status(200).json(savedGame);

  } catch(err) {
      console.log("Error", err);
      res.status(500).json({message:"Failed to create a game"})
  }
})