use solarSystem
db.dropDatabase()

db.planets.insertMany([
  {
    name: "Sun",
    description: "Hello sun"
  },
  {
    name: "Mercury",
    description: "Mercury",
  },
  {
    name: "Venus",
    description: "Venus",
  },
  {
    name: "Earth",
    description: "Earth",
  },
  {
    name: "Mars",
    description: "Mars",
  },
  {
    name: "Jupiter",
    description: "Jupiter",
  },
  {
    name: "Saturn",
    description: "Saturn",
  },
  {
    name: "Uranus",
    description: "Uranus",
  },
  {
    name: "Neptune",
    description: "Neptune",
  },
  {
    name: "Pluto",
    description: "Pluto",
  }
])
