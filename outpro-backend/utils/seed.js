require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Admin = require("../models/Admin");
const Service = require("../models/Service");
const Testimonial = require("../models/Testimonial");
const Stats = require("../models/Stats");
const Event = require("../models/Event");

const seedData = async () => {
  await connectDB();
  console.log("🌱 Seeding database...");

  // ── Admin ──────────────────────────────────────────────
  await Admin.deleteMany({});
  await Admin.create({
    name: process.env.ADMIN_NAME || "Sambhav Choudhary",
    email: process.env.ADMIN_EMAIL || "admin@outpro.india",
    password: process.env.ADMIN_PASSWORD || "Admin@123",
    role: "superadmin",
  });
  console.log("✅ Admin created");

  // ── Services ───────────────────────────────────────────
  await Service.deleteMany({});
  await Service.insertMany([
    {
      key: "event_management",
      title: "Event Management",
      tagline: "Zero-chaos execution",
      description:
        "End-to-end tournament and event execution. Fixtures, ground ops, referees, crowd control — we own every detail so you can focus on your game.",
      icon: "🏆",
      features: [
        "Fixture generation & scheduling",
        "Referee & official coordination",
        "Crowd & venue management",
        "Real-time match-day support",
        "Post-event summary report",
      ],
      startingPrice: 1099,
      order: 1,
    },
    {
      key: "logistics",
      title: "Logistics & Operations",
      tagline: "Everything in place, on time",
      description:
        "Equipment sourcing, venue setup, AV systems, transportation, and vendor coordination. Ground-ready before you arrive.",
      icon: "🚛",
      features: [
        "Equipment sourcing & setup",
        "AV & sound systems",
        "Transportation coordination",
        "Vendor management",
        "Venue dressing",
      ],
      startingPrice: 2999,
      order: 2,
    },
    {
      key: "event_marketing",
      title: "Event Marketing",
      tagline: "Buzz before, during & after",
      description:
        "Social media coverage, promo graphics, fan engagement, and digital campaigns that build hype and extend event reach.",
      icon: "📣",
      features: [
        "Social media campaigns",
        "Custom promo graphics",
        "Live event coverage",
        "Fan engagement activations",
        "Post-event content",
      ],
      startingPrice: 1999,
      order: 3,
    },
    {
      key: "athlete_management",
      title: "Athlete Management",
      tagline: "Athletes focused, not stressed",
      description:
        "Player registrations, team liaisoning, accommodation, transport, and pre-match logistics — handled from arrival to departure.",
      icon: "🏃",
      features: [
        "Online player registration",
        "Team communication",
        "Accommodation coordination",
        "Transport logistics",
        "Arrival to departure handling",
      ],
      startingPrice: 999,
      order: 4,
    },
    {
      key: "brand_activation",
      title: "Brand Activation",
      tagline: "Sponsors get seen",
      description:
        "On-site branding, sponsor placements, VIP zones, photo-op setups, and barter deals that deliver real visibility.",
      icon: "🎯",
      features: [
        "On-site branding & banners",
        "Sponsor placement strategy",
        "VIP zone setup",
        "Photo-op installations",
        "Barter deal facilitation",
      ],
      startingPrice: 3999,
      order: 5,
    },
    {
      key: "consulting",
      title: "Consulting & Outsourcing",
      tagline: "Expert ops without overhead",
      description:
        "Need ops muscle for your club or federation? We deploy trained ground staff and take single-point ownership of execution.",
      icon: "🤝",
      features: [
        "Trained ground staff deployment",
        "Single-point ownership",
        "Club & federation support",
        "SOP development",
        "Event strategy consulting",
      ],
      startingPrice: 4999,
      order: 6,
    },
  ]);
  console.log("✅ Services seeded");

  // ── Testimonials ───────────────────────────────────────
  await Testimonial.deleteMany({});
  await Testimonial.insertMany([
    {
      quote:
        "Outpro handled our corporate football league end-to-end. Zero chaos, exactly as promised. The team was always two steps ahead.",
      author: "Rajat Sharma",
      role: "HR Head",
      organization: "Tech Corp, Jaipur",
      rating: 5,
      isFeatured: true,
      order: 1,
    },
    {
      quote:
        "We outsourced our college sports fest to Outpro and it was the best decision we made. 400+ students, 6 sports, 2 days — everything ran like clockwork.",
      author: "Priya Mehta",
      role: "Cultural Secretary",
      organization: "MNIT Jaipur",
      rating: 5,
      isFeatured: true,
      order: 2,
    },
    {
      quote:
        "Their brand activation work for our sponsorship was spot on. Our logo was visible everywhere and the VIP zone was a hit with clients.",
      author: "Anuj Kapoor",
      role: "Marketing Director",
      organization: "Ideal Multi Sports",
      rating: 5,
      isFeatured: true,
      order: 3,
    },
    {
      quote:
        "Sambhav and his team managed our RUFC tournament seamlessly. Professional, proactive, and great value for money.",
      author: "Vikram Singh",
      role: "Club President",
      organization: "Rajasthan United FC",
      rating: 5,
      isFeatured: false,
      order: 4,
    },
  ]);
  console.log("✅ Testimonials seeded");

  // ── Stats ──────────────────────────────────────────────
  await Stats.deleteMany({});
  await Stats.create({
    eventsExecuted: 50,
    athletesManaged: 500,
    onTimePercent: 100,
    proClients: 4,
    citiesCovered: 8,
    yearsActive: 1,
  });
  console.log("✅ Stats seeded");

  // ── Sample Events ──────────────────────────────────────
  await Event.deleteMany({});
  await Event.insertMany([
    {
      title: "Rajasthan United FC Season Tournament",
      description:
        "End-to-end management of RUFC's seasonal football tournament including fixtures, ground setup, referee coordination, and live scoring.",
      shortDescription: "Full management of RUFC's flagship seasonal tournament.",
      eventType: "tournament",
      sport: "Football",
      client: { name: "Vikram Singh", organization: "Rajasthan United FC" },
      location: { city: "Jaipur", venue: "SMS Stadium Ground", state: "Rajasthan" },
      date: new Date("2025-10-15"),
      stats: { participants: 120, teams: 16, duration: "3 days", matches: 30 },
      services: ["event_management", "logistics", "athlete_management"],
      isFeatured: true,
      tags: ["football", "tournament", "jaipur"],
    },
    {
      title: "Aashray Corporate Sports Day",
      description:
        "Organized a full-day corporate sports fest for Aashray including cricket, badminton, and fun games. Complete logistics and brand activation.",
      shortDescription: "Multi-sport corporate fun day for Aashray employees.",
      eventType: "corporate_league",
      sport: "Multi-sport",
      client: { name: "Aashray HR Team", organization: "Aashray" },
      location: { city: "Jaipur", venue: "Private Ground", state: "Rajasthan" },
      date: new Date("2025-11-20"),
      stats: { participants: 80, teams: 10, duration: "1 day", matches: 15 },
      services: ["event_management", "logistics", "brand_activation", "event_marketing"],
      isFeatured: true,
      tags: ["corporate", "sports-day", "multi-sport"],
    },
    {
      title: "Ideal Multi Sports E-Sports League",
      description:
        "Managed player registrations, brackets, and live event operations for a city-level e-sports competition.",
      shortDescription: "City-level e-sports tournament with full ops management.",
      eventType: "tournament",
      sport: "E-Sports",
      client: { name: "Anuj Kapoor", organization: "Ideal Multi Sports" },
      location: { city: "Jaipur", venue: "Gaming Lounge, Malviya Nagar", state: "Rajasthan" },
      date: new Date("2025-12-05"),
      stats: { participants: 64, teams: 32, duration: "1 day", matches: 63 },
      services: ["event_management", "event_marketing", "brand_activation"],
      isFeatured: false,
      tags: ["esports", "gaming", "jaipur"],
    },
  ]);
  console.log("✅ Sample events seeded");

  console.log("\n🎉 Database seeded successfully!");
  console.log(`   Admin login: ${process.env.ADMIN_EMAIL || "admin@outpro.india"}`);
  console.log(`   Password:    ${process.env.ADMIN_PASSWORD || "Admin@123"}`);
  process.exit(0);
};

seedData().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
