// app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const fetchDataRoutes = require('./routes/fetchDataRoutes');
// const projectRoutes = require('./routes/projectRoutes')
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();

// Load seed functions
const seedUsers = require("./seed");
const seedProjects = require("./seedProjects");
const seedEngineers = require("./seedEngineers");
const seedAssignments = require("./seedAssignments");
const seedEngineerUsers = require("./seedEngineerUsers");

// Seeding Routes (TEMPORARY)
app.get("/run-seed", async (req, res) => {
  try {
    await seedUsers();
    res.send("✅ Main seed completed!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to run main seed");
  }
});

app.get("/run-project-seed", async (req, res) => {
  try {
    await seedProjects();
    res.send("✅ Project seed completed!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to seed projects");
  }
});

app.get("/run-engineer-seed", async (req, res) => {
  try {
    await seedEngineers();
    res.send("✅ Engineer seed completed!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to seed engineers");
  }
});

app.get("/run-engineerusers-seed", async (req, res) => {
  try {
    await seedEngineerUsers();
    res.send("✅ Engineer seed completed!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to seed engineers");
  }
});

app.get("/run-assignment-seed", async (req, res) => {
  try {
    await seedAssignments();
    res.send("✅ Assignment seed completed!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to seed assignments");
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', fetchDataRoutes);
// app.use('/api', projectRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/stats', require('./routes/statsRoutes'));


app.get('/', (req, res) => {
  res.send('MongoDB + Express App Running');
});

module.exports = app;
