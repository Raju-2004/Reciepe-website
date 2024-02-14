require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require('cors');
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
app.use(express.json());
const { default: mongoose } = require("mongoose");
const { mongoDbUrl, PORT } = require("./config/configuration");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const User = require("./models/users");

const secretKey = "my_secret_key";
const refreshTokens = [];

mongoose.connect(
  "mongodb+srv://kusaraju202:kOeb4KYKJRxBjKRI@cluster0.3m85fgj.mongodb.net/Recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/dashboard", authenticateToken, (req, res) => {
  res.send("hii");
});

function generateRefreshToken(user) {
  const refreshToken = jwt.sign({ username: user.username }, secretKey);
  refreshTokens.push(refreshToken);
  return refreshToken;
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
}

app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const HashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: HashedPassword,
      email,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" ,user:newUser});
  } catch (error) {
    console.error("Error in signup", error);
    res.status(500).json({ message: "Interval server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.sendStatus(401);
    }
    if (user == null) return res.sendStatus(401);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ email: user.email });
    const refreshToken = generateRefreshToken(user);
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error("Error in login", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ email: user.email });
    res.json({ accessToken });
  });
});

app.post('/logout',(req,res)=>{
    const refreshToken = req.body.token 
    if(refreshToken == null) return res.sendStatus(401)
    const index = refreshTokens.indexOf(refreshToken)
    if(index!=-1)
    {
        refreshToken.splice(index,-1)
    }
    res.status(200).json({message:'Logged out successfully'});
})

app.listen(4000, () => {
  console.log("listening at port 4000");
});
