require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const Project = require("./models/Projects");

const MONGO_URI = "mongodb+srv://bhavukverma2001:bhavuk123@cluster0.osd5wyr.mongodb.net/erm_db?retryWrites=true&w=majority&appName=Cluster0";

const seedProjects = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing projects
    await Project.deleteMany();

    const projects = [
      {
        projectId: "P001",
        name: "E-commerce Platform",
        description: "A full-featured e-commerce platform with inventory management",
        startDate: new Date("2024-03-01"),
        endDate: new Date("2024-06-30"),
        status: "In Progress",
        priority: "High",
        requiredSkills: ["JavaScript", "React", "Node.js", "MongoDB"],
        requiredCapacity: 80, // 2 full-time engineers
        budget: 50000,
        client: "Retail Corp",
        manager: "Bhavuk Verma"
      },
      {
        projectId: "P002",
        name: "Healthcare Analytics",
        description: "Data analytics platform for healthcare providers",
        startDate: new Date("2024-04-01"),
        endDate: new Date("2024-08-31"),
        status: "Planning",
        priority: "Medium",
        requiredSkills: ["Python", "Django", "PostgreSQL", "AWS"],
        requiredCapacity: 60, // 1 full-time + 1 part-time
        budget: 75000,
        client: "HealthTech Inc",
        manager: "Bhavuk Verma"
      },
      {
        projectId: "P003",
        name: "Banking System Upgrade",
        description: "Legacy system modernization for banking operations",
        startDate: new Date("2024-05-01"),
        endDate: new Date("2024-12-31"),
        status: "Planning",
        priority: "High",
        requiredSkills: ["Java", "Spring Boot", "MySQL", "Docker"],
        requiredCapacity: 100, // 2 full-time + 1 part-time
        budget: 100000,
        client: "Global Bank",
        manager: "Bhavuk Verma"
      },
      {
        projectId: "P004",
        name: "Mobile App Development",
        description: "Cross-platform mobile application for food delivery",
        startDate: new Date("2024-03-15"),
        endDate: new Date("2024-07-15"),
        status: "In Progress",
        priority: "Medium",
        requiredSkills: ["TypeScript", "Angular", "Node.js", "MongoDB"],
        requiredCapacity: 60, // 1 full-time + 1 part-time
        budget: 60000,
        client: "FoodTech Solutions",
        manager: "Bhavuk Verma"
      }
    ];

    await Project.insertMany(projects);
    console.log("✅ Projects inserted");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting projects:", err);
    process.exit(1);
  }
};

seedProjects(); 