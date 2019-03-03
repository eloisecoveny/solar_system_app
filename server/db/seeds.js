use solarSystem
db.dropDatabase()

db.planets.insertMany([
  {
    name: "Sun",
    image: 'https://i.ytimg.com/vi/orqeYbqSiLg/maxresdefault.jpg',
    description: "The Sun—the heart of our solar system—is a yellow dwarf star, a hot ball of glowing gases. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit. Electric currents in the Sun generate a magnetic field that is carried out through the solar system by the solar wind—a stream of electrically charged gas blowing outward from the Sun in all directions.",
    funFacts: {
      noMoons: 0,
      lengthOfYears: null,

    }
  },
  {
    name: "Mercury",
    image: 'https://images.wallpaperscraft.com/image/mercury_planet_space_133139_1920x1080.jpg',
    description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.",
    funFacts: {
      noMoons: 0,
      lengthOfYears: "88 Earth Days",
    }
  },
  {
    name: "Venus",
    image: 'https://ak0.picdn.net/shutterstock/videos/19562020/thumb/1.jpg',
    description: "Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.",
    funFacts: {
      noMoons: 0,
      lengthOfYears: "225 Earth Days",
    }
  },
  {
    name: "Earth",
    image: 'https://wallpapermemory.com/uploads/194/earth-wallpaper-1080p-189649.jpg',
    description: "Our home planet is the third from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.",
    funFacts: {
      noMoons: 1,
      lengthOfYears: "365 Earth Days",
    }
  },
  {
    name: "Mars",
    image: 'https://hdqwalls.com/download/mars-4k-qhd-1920x1200.jpg',
    description: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
    funFacts: {
      noMoons: 2,
      lengthOfYears: "687 Earth Days",
    }
  },
  {
    name: "Jupiter",
    image: 'https://wallpapermemory.com/uploads/540/jupiter-background-hd-1080p-74649.jpg',
    description: "Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
    funFacts: {
      noMoons: 79,
      lengthOfYears: "4333 Earth Days",
    }
  },
  {
    name: "Saturn",
    image: 'https://i.ytimg.com/vi/zRkuzKQlms8/maxresdefault.jpg',
    description: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's.",
    funFacts: {
      noMoons: 53,
      lengthOfYears: "10759 Earth Days",
    }
  },
  {
    name: "Uranus",
    image: 'http://www.trbimg.com/img-51955bc6/turbine/la-sci-sn-neptune-uranus-windy-atmosphere-ice--001/600/600x591',
    description: "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.",
    funFacts: {
      noMoons: 27,
      lengthOfYears: "30687 Earth Days",
    }
  },
  {
    name: "Neptune",
    image: 'https://voyager.jpl.nasa.gov/assets/images/galleries/images-voyager-took/neptune/neptunex.gif',
    description: "Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    funFacts: {
      noMoons: 13,
      lengthOfYears: "60190 Earth Days",
    }
  },
  {
    name: "Pluto",
    image: 'https://i.imgur.com/lLqoqlH.png',
    description: "Is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered and is the largest known plutoid (or ice dwarf).",
    funFacts: {
      noMoons: 5,
      lengthOfYears: "90530 Earth Days",
    }
  }
])
