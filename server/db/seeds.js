use solarSystem
db.dropDatabase()

db.planets.insertMany([
  {
    name: "Sun",
    image: 'https://i.ytimg.com/vi/orqeYbqSiLg/maxresdefault.jpg',
    description: "The Sun—the heart of our solar system—is a hot ball of glowing gases. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit. Electric currents in the Sun generate a magnetic field that is carried out through the solar system by the solar wind—a stream of electrically charged gas blowing outward from the Sun in all directions.",
    funFacts: {
      noMoons: "0",
      gravity: "28 times stronger than the force of gravity on the surface of the Earth",
      starType: "Yellow Dwarf",
      temperature: "10,000 degrees Fahrenheit/ 5538 degrees Celsius."
    },
    quizFacts: {
      noMoons: "No moons",
      gravity: "28 times Earth's gravity",
      starType: "Yellow Dwarf",
      temperature: "10,000°F / 5538°C"
    },
    frequency:"https://www.youtube.com/embed/sGsyvN-egkA"
  },
  {
    name: "Mercury",
    image: 'https://images.wallpaperscraft.com/image/mercury_planet_space_133139_1920x1080.jpg',
    description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.",
    funFacts: {
      noMoons: "0",
      lengthOfYears: "88 Earth days",
      daysEarth: "59 Earth days",
      gravity: "87 times weaker than the force of gravity on the surface of the Earth",
      planetType: "Terrestrial",
      temperature: "Temperatures are extreme, both hot and cold 800 degrees Fahrenheit /  430 degrees Celsius, during the day. Because the planet has no atmosphere to retain that heat, nighttime temperatures on the surface can drop to  -290 degrees Fahrenheit /  -180 degrees Celsius."
    },
    quizFacts: {
      noMoons: "No moons",
      lengthOfYears: "One year is 88 Earth days",
      daysEarth: "One day is 59 Earth days",
      gravity: "87 times weaker than Earth's gravity",
      starType: "Terrestrial",
      temperature: "800°F / 430°C to -290°F / -180°C"
    },
    frequency:"https://www.youtube.com/embed/R-B7nM7zHfM"

  },
  {
    name: "Venus",
    image: 'https://ak0.picdn.net/shutterstock/videos/19562020/thumb/1.jpg',
    description: "Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.",
    funFacts: {
      noMoons: "0",
      lengthOfYears: "225 Earth days",
      daysEarth: "243 Earth days",
      gravity: "Almost the same force of gravity than the surface of the Earth",
      planetType: "Terrestrial",
      temperature: "1880 degrees Fahrenheit / 470 degrees Celsius."
    },
    quizFacts: {
      noMoons: "No moons",
      lengthOfYears: "One year is 225 Earth days",
      daysEarth: "One day is 243 Earth days",
      gravity: "Almost the same as Earth",
      planetType: "Terrestrial",
      temperature: "1880°F / 470°C"
    },
    frequency:"https://www.youtube.com/embed/4SdfCTl0TQE"
  },
  {
    name: "Earth",
    image: 'https://wallpapermemory.com/uploads/194/earth-wallpaper-1080p-189649.jpg',
    description: "Our home planet is the third from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.",
    funFacts: {
      noMoons: 1,
      lengthOfYears: "365 Earth days",
      daysEarth: "24 hours",
      gravity: "9.8 m/s²",
      planetType: "Terrestrial",
      temperature: "Average temperatures rose 1.62 degrees Fahrenheit / 0.9 degrees Celsius."
    },
    quizFacts: {
      noMoons: "1 moon",
      lengthOfYears: "One year is 365 Earth days",
      daysEarth: "One day is 24 Earth hours",
      gravity: "Gravity is 9.8 m/s²",
      planetType: "Terrestrial",
    },
    frequency: "https://www.youtube.com/embed/BJ9pkEiI4OQ"
  },
  {
    name: "Mars",
    image: 'https://ak2.picdn.net/shutterstock/videos/4810832/thumb/1.jpg',
    description: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
    funFacts: {
      noMoons: 2,
      lengthOfYears: "687 Earth days",
      daysEarth: "25 Earth hours",
      gravity: "3 times weaker than the force of gravity on the surface of the Earth",
      planetType: "Terrestrial",
      temperature: "Can be as high as 70 degrees Fahrenheit / 20 degrees Celsius, or as low as about -225 degrees Fahrenheit / -153 degrees Celsius."
    },
    quizFacts: {
      noMoons: "2 moons",
      lengthOfYears: "One year is 687 Earth days",
      daysEarth: "One day is 25 Earth hours",
      gravity: "Gravity is 3 times weaker than Earth",
      planetType: "Terrestrial",
      temperature: "70°F / 20°C to -225°F / -153°C"
    },
    frequency: "https://www.youtube.com/embed/gYyn5kJ7sPk"
  },
  {
    name: "Jupiter",
    image: 'https://wallpapermemory.com/uploads/540/jupiter-background-hd-1080p-74649.jpg',
    description: "Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
    funFacts: {
      noMoons: 79,
      lengthOfYears: "4333 Earth days",
      daysEarth: "10 Earth hours",
      gravity: "3 times stronger than the force of gravity on the surface of the Earth",
      planetType: "Gas Giant",
      temperature: "The temperature ranges from about -190 degrees Fahrenheit / -128 degrees Celsius, for the visible surface of the atmosphere, to 9°F / -13°C at lower cloud levels. Certain regions reach as high as 40°F / 4°C at still lower cloud levels near the equator. Jupiter gives off four times as much heat as it gets from the sun."
    },
    quizFacts: {
      noMoons: "79 moons",
      lengthOfYears: "One year is 4333 Earth days",
      daysEarth: "One day is 10 Earth hours",
      gravity: "Gravity is 3 times stronger than Earth",
      planetType: "Gas Giant",
      temperature: "-190°F / -128°C to 9°F / -13°C"
    },
    frequency: "https://www.youtube.com/embed/dnG1sQNvBiA"
  },
  {
    name: "Saturn",
    image: 'https://i.ytimg.com/vi/zRkuzKQlms8/maxresdefault.jpg',
    description: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's.",
    funFacts: {
      noMoons: 53,
      lengthOfYears: "10759 Earth days",
      daysEarth: "11 Earth hours",
      gravity: "Almost the same force of gravity than the surface of the Earth",
      planetType: "Gas Giant",
      temperature: "One Cool Planet. With an average temperature of minus 288 degrees Fahrenheit / -178 degrees Celsius."
    },
    quizFacts: {
      noMoons: "53 moons",
      lengthOfYears: "One year is 10759 Earth days",
      daysEarth: "One day is 11 Earth hours",
      gravity: "Gravity is almost the same as Earth",
      planetType: "Gas Giant",
      temperature: "-288°F / -178°C"
    },
    frequency: "https://www.youtube.com/embed/Zts0fSf08DM"
  },
  {
    name: "Uranus",
    image: 'http://mediad.publicbroadcasting.net/p/krcc/files/styles/medium/public/201808/82_carousel_neptune_1.jpg',
    description: "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.",
    funFacts: {
      noMoons: 27,
      lengthOfYears: "30687 Earth days",
      daysEarth: "17 Earth hours",
      gravity: "Almost the same force of gravity than the surface of the Earth",
      planetType: "Ice Giant",
      temperature: "With a minimum temperature of -371 degrees Fahrenheit / -224 degrees Celsius, makes it even colder than Neptune in some places."
    },
    quizFacts: {
      noMoons: "27 moons",
      lengthOfYears: "One year is 30687 Earth days",
      daysEarth: "One day is 17 Earth hours",
      gravity: "Gravity is almost the same as Earth",
      planetType: "Ice Giant",
      temperature: "-371°F / -224°C"
    },
    frequency: "https://www.youtube.com/embed/5Mfp9f8a7QM"
  },
  {
    name: "Neptune",
    image: 'https://i1.wp.com/images.wallpapersden.com/image/download/ios-11-ipad-earth_58644_3840x2160.jpg',
    description: "Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    funFacts: {
      noMoons: 13,
      lengthOfYears: "60190 Earth days",
      daysEarth: "16 Earth hours",
      gravity: "Almost the same force of gravity than the surface of the Earth",
      planetType: "Ice Giant",
      temperature: "The average temperature on Neptune is about -392 degrees Fahrenheit / -200 degrees Celsius."
    },
    quizFacts: {
      noMoons: "13 moons",
      lengthOfYears: "One year is 60190 Earth days",
      daysEarth: "One day is 16 Earth hours",
      gravity: "Gravity is almost the same as Earth",
      planetType: "Ice Giant",
      temperature: "-392°F / -200°C"
    },
    frequency: "https://www.youtube.com/embed/3gxzPhp2bL0"
  },
  {
    name: "Pluto",
    image: 'https://i.imgur.com/lLqoqlH.png',
    description: "Is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered and is the largest known plutoid (or ice dwarf).",
    funFacts: {
      noMoons: 5,
      lengthOfYears: "90530 Earth days",
      daysEarth: "6 Earth days",
      gravity: "Its gravity is only one-fifteenth that of Earth's, so you'd only weigh 10 lbs. (4.5 kilograms) on Pluto if you weighed 150 lbs. (68 kg) on Earth.",
      planetType: "Dwarf",
      temperature: "Can range from a low temperature of -400 degrees Fahrenheit / -240 and -360 degrees Fahrenheit / -218 degrees Celsius."
    },
    quizFacts: {
      noMoons: "5 moons",
      lengthOfYears: "One year is 90530 Earth days",
      daysEarth: "One day is 6 Earth days",
      gravity: "Gravity is one-fifteenth of Earth's",
      planetType: "Dwarf",
      temperature: "-400°F / -240°C to -360°F / -218°C"
    },
    frequency: "https://www.youtube.com/embed/x0hbFWeGMOg"
  }
])
