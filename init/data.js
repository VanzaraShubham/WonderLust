const sampleListings = [
  {
    title: "Tranquil Dome Escape",
    description: "Unique dome home surrounded by greenery.",
    image: { url: "https://picsum.photos/seed/dome1/300/200", filename: "dome1" },
    price: 110,
    location: "Rishikesh",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [78.2767, 30.0869] }
  },
  {
    title: "Iconic City Apartment",
    description: "Modern apartment in the heart of the city.",
    image: { url: "https://picsum.photos/seed/city1/300/200", filename: "city1" },
    price: 160,
    location: "New York",
    country: "USA",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Charming Mountain Cottage",
    description: "Breathtaking mountain views and cool air.",
    image: { url: "https://picsum.photos/seed/mountain1/300/200", filename: "mountain1" },
    price: 130,
    location: "Shimla",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },
  {
    title: "Boho Beach Room",
    description: "Stay near the beach with a bohemian vibe.",
    image: { url: "https://picsum.photos/seed/room1/300/200", filename: "room1" },
    price: 80,
    location: "Goa",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Secluded Camping Retreat",
    description: "Reconnect with nature in a forest campground.",
    image: { url: "https://picsum.photos/seed/camping1/300/200", filename: "camping1" },
    price: 70,
    location: "Sundarbans",
    country: "India",
    category: "Campings",
    geometry: { type: "Point", coordinates: [88.7265, 21.9497] }
  },
  {
    title: "Royal Heritage Castle",
    description: "Live the royal life in this heritage palace.",
    image: { url: "https://picsum.photos/seed/castle2/300/200", filename: "castle2" },
    price: 300,
    location: "Jaipur",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Luxury Pool Villa",
    description: "Private villa with amazing pool and garden.",
    image: { url: "https://picsum.photos/seed/pool1/300/200", filename: "pool1" },
    price: 220,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
  },
  {
    title: "Scenic Arctic Cabin",
    description: "Experience the arctic circle in style.",
    image: { url: "https://picsum.photos/seed/arctic2/300/200", filename: "arctic2" },
    price: 200,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctics",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
  },
  {
    title: "Rustic Farm Cottage",
    description: "Farm life experience with homegrown food.",
    image: { url: "https://picsum.photos/seed/farm2/300/200", filename: "farm2" },
    price: 100,
    location: "Pune",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Floating Houseboat Retreat",
    description: "Sleep on water with all comforts onboard.",
    image: { url: "https://picsum.photos/seed/boat2/300/200", filename: "boat2" },
    price: 150,
    location: "Alleppey",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.3375, 9.4981] }
  },
  {
    title: "Forest Dome",
    description: "Surreal dome in peaceful forest scenery.",
    image: { url: "https://picsum.photos/seed/dome2/300/200", filename: "dome2" },
    price: 125,
    location: "Munnar",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [77.0603, 10.0889] }
  },
  {
    title: "Tokyo Sky Apartment",
    description: "High-rise apartment with stunning city views.",
    image: { url: "https://picsum.photos/seed/city2/300/200", filename: "city2" },
    price: 190,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Mountain Hideaway",
    description: "Private cottage with hiking trails nearby.",
    image: { url: "https://picsum.photos/seed/mountain2/300/200", filename: "mountain2" },
    price: 115,
    location: "Mussoorie",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [78.0707, 30.4598] }
  },
  {
    title: "Modern Beach Flat",
    description: "Steps away from the ocean and nightlife.",
    image: { url: "https://picsum.photos/seed/room2/300/200", filename: "room2" },
    price: 90,
    location: "Miami",
    country: "USA",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
  },
  {
    title: "Eco Camping Spot",
    description: "Sustainable living close to nature.",
    image: { url: "https://picsum.photos/seed/camping2/300/200", filename: "camping2" },
    price: 60,
    location: "Coorg",
    country: "India",
    category: "Campings",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] }
  },
  {
    title: "Classic French Castle",
    description: "A fairytale castle stay with ancient charm.",
    image: { url: "https://picsum.photos/seed/castle3/300/200", filename: "castle3" },
    price: 270,
    location: "Loire Valley",
    country: "France",
    category: "Castles",
    geometry: { type: "Point", coordinates: [0.3273, 47.3492] }
  },
  {
    title: "Infinity Pool Heaven",
    description: "Enjoy the view from your infinity pool.",
    image: { url: "https://picsum.photos/seed/pool2/300/200", filename: "pool2" },
    price: 240,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
    geometry: { type: "Point", coordinates: [98.3915, 7.8804] }
  },
  {
    title: "Iceland Igloo Pod",
    description: "Modern igloo in the Arctic wild.",
    image: { url: "https://picsum.photos/seed/arctic3/300/200", filename: "arctic3" },
    price: 210,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctics",
    geometry: { type: "Point", coordinates: [-21.827774, 64.128288] }
  },
  {
    title: "Organic Farm Bungalow",
    description: "Live off the grid and grow your food.",
    image: { url: "https://picsum.photos/seed/farm3/300/200", filename: "farm3" },
    price: 95,
    location: "Ooty",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [76.7491, 11.4064] }
  },
  {
    title: "Kashmir Lake Boat House",
    description: "Sail and sleep on the peaceful lake.",
    image: { url: "https://picsum.photos/seed/boat3/300/200", filename: "boat3" },
    price: 145,
    location: "Srinagar",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  }
];

module.exports = { data: sampleListings };
