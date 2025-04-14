const puneData = [
  {
    id: 1,
    name: "Chitale Bandhu Mithaiwale",
    type: "Food & Sweets",
    rating: 4.6,
    address: "132, Bajirao Road, Shukrawar Peth, Pune",
    latitude: 18.5102,
    longitude: 73.8554
  },
  {
    id: 2,
    name: "Vaishali Restaurant",
    type: "Restaurant",
    rating: 4.4,
    address: "Fergusson College Road, Pune",
    latitude: 18.52093,
    longitude: 73.841156
  },
  {
    id: 3,
    name: "Bunkar Clothing",
    type: "Retail – Fashion",
    rating: 4.2,
    address: "Seasons Mall, Magarpatta, Pune",
    latitude: 18.5194929,
    longitude: 73.9315537
  },
  {
    id: 4,
    name: "E-Square Multiplex",
    type: "Entertainment",
    rating: 4.3,
    address: "University Road, Shivajinagar, Pune",
    latitude: 18.5378,
    longitude: 73.8355
  },
  {
    id: 5,
    name: "Phoenix Marketcity",
    type: "Shopping Mall",
    rating: 4.5,
    address: "Viman Nagar, Pune",
    latitude: 18.5612877,
    longitude: 73.9172253
  },
  {
    id: 6,
    name: "The Daily Bean Cafe",
    type: "Cafe",
    rating: 4.7,
    address: "Koregaon Park, Pune",
    latitude: 18.536207,
    longitude: 73.893974
  },
  {
    id: 7,
    name: "TechSpark Co-Working",
    type: "Co-Working Space",
    rating: 4.4,
    address: "Baner Road, Pune",
    latitude: 18.559658,
    longitude: 73.779938
  },
  {
    id: 8,
    name: "Nandadeep Electronics",
    type: "Electronics Retail",
    rating: 4.1,
    address: "Tilak Road, Pune",
    latitude: 18.5087,
    longitude: 73.8535
  },
  {
    id: 9,
    name: "Wadeshwar",
    type: "Restaurant",
    rating: 4.3,
    address: "Law College Road, Pune",
    latitude: 18.5167,
    longitude: 73.8412
  },
  {
    id: 10,
    name: "Book World",
    type: "Bookstore",
    rating: 4.6,
    address: "FC Road, Pune",
    latitude: 18.5220938,
    longitude: 73.8412187
  },
  {
    id: 11,
    name: "Mulberry Lifestyle",
    type: "Fashion Boutique",
    rating: 4.5,
    address: "Aundh, Pune",
    latitude: 18.5618834,
    longitude: 73.8101957
  },
  {
    id: 12,
    name: "Cafe Peter",
    type: "Cafe",
    rating: 4.2,
    address: "Deccan Gymkhana, Pune",
    latitude: 18.5184,
    longitude: 73.8406
  },
  {
    id: 13,
    name: "Decathlon",
    type: "Sports Store",
    rating: 4.7,
    address: "Wagholi, Pune",
    latitude: 18.5679,
    longitude: 73.9855
  },
  {
    id: 14,
    name: "Urban Monkey",
    type: "Streetwear Store",
    rating: 4.0,
    address: "JM Road, Pune",
    latitude: 18.5308,
    longitude: 73.8470
  },
  {
    id: 15,
    name: "German Bakery",
    type: "Cafe & Bakery",
    rating: 4.4,
    address: "Koregaon Park, Pune",
    latitude: 18.5375532,
    longitude: 73.8939252
  },
  {
    id: 16,
    name: "Symphony Music Shop",
    type: "Musical Instruments",
    rating: 4.3,
    address: "Camp, Pune",
    latitude: 18.5120,
    longitude: 73.8797
  },
  {
    id: 17,
    name: "Indulge Salon",
    type: "Salon & Spa",
    rating: 4.6,
    address: "Kalyani Nagar, Pune",
    latitude: 18.5486,
    longitude: 73.9010
  },
  {
    id: 18,
    name: "FC Fitness Studio",
    type: "Fitness Center",
    rating: 4.5,
    address: "Fergusson College Road, Pune",
    latitude: 18.5197,
    longitude: 73.8411
  },
  {
    id: 19,
    name: "Cafe Durga",
    type: "Fast Food",
    rating: 4.1,
    address: "Model Colony, Pune",
    latitude: 18.5300,
    longitude: 73.8440
  },
  {
    id: 20,
    name: "INOX Multiplex",
    type: "Cinema",
    rating: 4.3,
    address: "Bund Garden Road, Pune",
    latitude: 18.5378,
    longitude: 73.8773
  },
  {
    id: 21,
    name: "Kaka Halwai",
    type: "Sweets & Snacks",
    rating: 4.5,
    address: "Tilak Road, Pune",
    latitude: 18.5087,
    longitude: 73.8535
  },
  {
    id: 22,
    name: "Planet Fashion",
    type: "Clothing Store",
    rating: 4.2,
    address: "Camp, Pune",
    latitude: 18.5120,
    longitude: 73.8797
  },
  {
    id: 23,
    name: "Aga Khan Palace",
    type: "Historical Site",
    rating: 4.7,
    address: "Nagar Road, Pune",
    latitude: 18.5525,
    longitude: 73.9012
  },
  {
    id: 24,
    name: "Darshan Museum",
    type: "Museum",
    rating: 4.8,
    address: "Solapur Road, Pune",
    latitude: 18.5167,
    longitude: 73.876
  },
  {
    id: 25,
    name: "Marz-O-Rin",
    type: "Bakery & Cafe",
    rating: 4.4,
    address: "MG Road, Pune",
    latitude: 18.5163,
    longitude: 73.8798
  },
  {
    id: 26,
    name: "The Pav Bhaji Shop",
    type: "Street Food",
    rating: 4.3,
    address: "Kothrud, Pune",
    latitude: 18.5074,
    longitude: 73.8077
  },
  {
    id: 27,
    name: "The Urban Foundry",
    type: "Bar & Restaurant",
    rating: 4.5,
    address: "Baner, Pune",
    latitude: 18.5585,
    longitude: 73.7862
  },
  {
    id: 28,
    name: "Arctic Ice Creams",
    type: "Ice Cream Parlour",
    rating: 4.6,
    address: "Vishrantwadi, Pune",
    latitude: 18.5744,
    longitude: 73.8903
  },
  {
    id: 29,
    name: "H&M",
    type: "Clothing Store",
    rating: 4.4,
    address: "Phoenix Marketcity, Pune",
    latitude: 18.5612877,
    longitude: 73.9172253
  },
  {
    id: 30,
    name: "FabIndia",
    type: "Handicrafts & Apparel",
    rating: 4.3,
    address: "KP Annexe, Pune",
    latitude: 18.5365,
    longitude: 73.9015
  },

  // New 30 entries below
  {
    id: 31,
    name: "Chai Pe Charcha",
    type: "Tea Cafe",
    rating: 4.2,
    address: "Viman Nagar, Pune",
    latitude: 18.5654,
    longitude: 73.9156
  },
  {
    id: 32,
    name: "Pune Central Mall",
    type: "Shopping Mall",
    rating: 4.3,
    address: "Shivajinagar, Pune",
    latitude: 18.5311,
    longitude: 73.8442
  },
  {
    id: 33,
    name: "Rolls Mania",
    type: "Fast Food",
    rating: 4.0,
    address: "Hinjewadi, Pune",
    latitude: 18.5979,
    longitude: 73.7083
  },
  {
    id: 34,
    name: "Beardo Lounge",
    type: "Men's Salon",
    rating: 4.5,
    address: "JM Road, Pune",
    latitude: 18.5298,
    longitude: 73.8461
  },
  {
    id: 35,
    name: "Chopsticks Express",
    type: "Chinese Restaurant",
    rating: 4.3,
    address: "Hadapsar, Pune",
    latitude: 18.4989,
    longitude: 73.9264
  },
  {
    id: 36,
    name: "The Book Lounge",
    type: "Bookstore & Cafe",
    rating: 4.6,
    address: "Aundh, Pune",
    latitude: 18.5645,
    longitude: 73.8061
  },
  {
    id: 37,
    name: "Keventers",
    type: "Milkshake Bar",
    rating: 4.2,
    address: "MG Road, Pune",
    latitude: 18.5170,
    longitude: 73.8801
  },
  {
    id: 38,
    name: "Trufitt & Hill",
    type: "Luxury Salon",
    rating: 4.7,
    address: "Kalyani Nagar, Pune",
    latitude: 18.5481,
    longitude: 73.9019
  },
  {
    id: 39,
    name: "Petzo World",
    type: "Pet Store",
    rating: 4.5,
    address: "Baner, Pune",
    latitude: 18.5564,
    longitude: 73.7921
  },
  {
    id: 40,
    name: "House of Mandarin",
    type: "Fine Dining",
    rating: 4.6,
    address: "Koregaon Park, Pune",
    latitude: 18.5376,
    longitude: 73.8940
  },
  {
    id: 41,
    name: "Hop In Bar",
    type: "Pub",
    rating: 4.2,
    address: "Viman Nagar, Pune",
    latitude: 18.5661,
    longitude: 73.9170
  },
  {
    id: 42,
    name: "Dough & Cream",
    type: "Bakery",
    rating: 4.4,
    address: "Camp, Pune",
    latitude: 18.5143,
    longitude: 73.8782
  },
  {
    id: 43,
    name: "Happy Feet",
    type: "Shoe Store",
    rating: 4.3,
    address: "Tilak Road, Pune",
    latitude: 18.5091,
    longitude: 73.8542
  },
  {
    id: 44,
    name: "CraftsVilla",
    type: "Handmade Boutique",
    rating: 4.6,
    address: "Pashan, Pune",
    latitude: 18.5472,
    longitude: 73.7929
  },
  {
    id: 45,
    name: "Frozen Bottle",
    type: "Dessert Shop",
    rating: 4.3,
    address: "Deccan, Pune",
    latitude: 18.5191,
    longitude: 73.8427
  },
  {
    id: 46,
    name: "Click Point",
    type: "Photo Studio",
    rating: 4.2,
    address: "Swargate, Pune",
    latitude: 18.5011,
    longitude: 73.8632
  },
  {
    id: 47,
    name: "Green Soul Organics",
    type: "Organic Store",
    rating: 4.5,
    address: "Karve Nagar, Pune",
    latitude: 18.4888,
    longitude: 73.8156
  },
  {
    id: 48,
    name: "Qilaa",
    type: "Luxury Dining",
    rating: 4.7,
    address: "Koregaon Park, Pune",
    latitude: 18.5379,
    longitude: 73.8941
  },
  {
    id: 49,
    name: "The French Window",
    type: "Cafe",
    rating: 4.6,
    address: "Koregaon Park, Pune",
    latitude: 18.5370,
    longitude: 73.8938
  },
  {
    id: 50,
    name: "Style Hub",
    type: "Unisex Salon",
    rating: 4.3,
    address: "Erandwane, Pune",
    latitude: 18.5075,
    longitude: 73.8296
  },
  {
    id: 51,
    name: "Kalyani Sports",
    type: "Sports Store",
    rating: 4.4,
    address: "Kalyani Nagar, Pune",
    latitude: 18.5492,
    longitude: 73.9005
  },
  {
    id: 52,
    name: "PlayZone",
    type: "Gaming Arcade",
    rating: 4.5,
    address: "Seasons Mall, Pune",
    latitude: 18.5197,
    longitude: 73.9313
  },
  {
    id: 53,
    name: "GreenLeaf Cafe",
    type: "Healthy Food",
    rating: 4.2,
    address: "Aundh, Pune",
    latitude: 18.5611,
    longitude: 73.8092
  },
  {
    id: 54,
    name: "Star Bazaar",
    type: "Supermarket",
    rating: 4.1,
    address: "Hadapsar, Pune",
    latitude: 18.5098,
    longitude: 73.9242
  },
  {
    id: 55,
    name: "Snap Salon",
    type: "Hair & Beauty",
    rating: 4.3,
    address: "Wakad, Pune",
    latitude: 18.5991,
    longitude: 73.7612
  },
  {
    id: 56,
    name: "The Cookie Jar",
    type: "Bakery",
    rating: 4.5,
    address: "Model Colony, Pune",
    latitude: 18.5322,
    longitude: 73.8450
  },
  {
    id: 57,
    name: "Print Palace",
    type: "Stationery & Printing",
    rating: 4.0,
    address: "Shivajinagar, Pune",
    latitude: 18.5302,
    longitude: 73.8431
  },
  {
    id: 58,
    name: "Sapphire Spa",
    type: "Spa & Wellness",
    rating: 4.6,
    address: "Viman Nagar, Pune",
    latitude: 18.5649,
    longitude: 73.9177
  },
  {
    id: 59,
    name: "The Beer Cafe",
    type: "Bar",
    rating: 4.3,
    address: "Phoenix Marketcity, Pune",
    latitude: 18.5610,
    longitude: 73.9175
  },
  {
    id: 60,
    name: "Trendy Threads",
    type: "Clothing Store",
    rating: 4.2,
    address: "Kothrud, Pune",
    latitude: 18.5071,
    longitude: 73.8080
  }
];

export default puneData;


 
