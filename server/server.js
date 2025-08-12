const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');




app.use(cors()); // Enable CORS for all routes


app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  
    database: 'nutrifood_db' // Ensure this matches your database name
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/signup', async (req, res) => {
  const { nom, prenom, email, mot_de_passe } = req.body;

  console.log('Received signup data:', { nom, prenom, email, mot_de_passe });

  try {
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const query = 'INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe) VALUES (?, ?, ?, ?)';
    db.query(query, [nom, prenom, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
        return;
      }

      const insertedId = result.insertId;
      console.log('Inserted User ID:', insertedId);

      res.status(200).json({
        id_clients: insertedId,
        name: nom,
        email
      });
    });
  } catch (error) {
    console.error('Error processing signup:', error);
    res.status(500).send('Error processing signup');
  }
});

app.post('/signin', (req, res) => {
  const { email, mot_de_passe } = req.body;

  const query = 'SELECT * FROM utilisateurs WHERE email = ?';

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }

    if (results.length === 0) {
      // No user with this email
      return res.status(401).send('Invalid email or password');
    }

    const user = results[0];

    // Compare hashed password
    bcrypt.compare(mot_de_passe, user.mot_de_passe, (bcryptErr, isMatch) => {
      if (bcryptErr) {
        console.error('Error comparing passwords:', bcryptErr);
        return res.status(500).send('Internal error');
      }

      if (!isMatch) {
        return res.status(401).send('Invalid email or password');
      }

      // Password matched, send user info
      res.status(200).json({
        id_clients: user.id_clients,
        name: user.nom_clients,
        email: user.email,
        role: user.role
      });
    });
  });
});

   const PORT = 8081;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });