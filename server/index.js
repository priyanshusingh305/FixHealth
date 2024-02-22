const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' module
const path = require('path');

const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://priyanshusinghs:123456789Ah@cluster0.eefphmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const formDataSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  age: Number,
  city: String,
  company: String,
  experience: Boolean
});

const FormData = mongoose.model('FormData', formDataSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

app.post('/submit-form', (req, res) => {
  const { name, phoneNumber, age, city, company, experience } = req.body;
  const cityl = req.body.city.toLowerCase();
  
  const formData = new FormData({
    name: name,
    phoneNumber: phoneNumber,
    age: age,
    city: city,
    company: company,
    experience: experience
  });

  formData.save()
    .then((data) => {
      console.log('Data saved successfully:', data);
      res.sendFile(path.join(__dirname, `${cityl}.json`));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving to database');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
