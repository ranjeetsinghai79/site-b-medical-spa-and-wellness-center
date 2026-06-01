import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "B Med Spa",
    tagline: "Rejuvenate Your Skin, Renew Your Body",
    phone: "(619) 890-9985",
    phoneHref: "tel:+16198909985",
    email: "info@bmedspa.com",
    address: "San Diego, CA",
    city: "San Diego",
    serviceAreas: ["San Diego, CA", "La Jolla, CA", "Coronado, CA"],
    license: "CA Medical License #123456",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "navy",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Hydrafacial", desc: "Deeply cleanse, extract, and hydrate your skin for an instant glow.", urgent: false },
    { icon: "scissors", title: "Botox & Dysport", desc: "Smooth away wrinkles and fine lines for a more youthful appearance.", urgent: false },
    { icon: "heart", title: "Medical Weight Loss", desc: "Personalized programs including GLP-1 injections to achieve your health goals.", urgent: false },
    { icon: "thermometer", title: "Laser Hair Removal", desc: "Achieve smooth, hair-free skin with advanced laser technology.", urgent: false },
    { icon: "shield-check", title: "Hormone Replacement Therapy", desc: "Balance your hormones for improved energy, mood, and overall well-being.", urgent: false },
    { icon: "star", title: "Microneedling", desc: "Stimulate collagen production for firmer, smoother, and more radiant skin.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "San Diego, CA", stars: 5, text: "I had a Hydrafacial at B Med Spa last month and my skin has never looked better! The esthetician was incredibly thorough and explained every step. My complexion is brighter and feels so much softer. Highly recommend for anyone wanting a real glow!" },
    { name: "Mark T.", location: "La Jolla, CA", stars: 5, text: "The team at B Med Spa helped me with their Medical Weight Loss program. The GLP-1 injections combined with their guidance made a huge difference. I've lost 20 pounds in 3 months and feel fantastic. Professional and truly supportive." },
    { name: "Jessica R.", location: "Coronado, CA", stars: 5, text: "My Botox treatment with Dr. B was flawless. She listened to my concerns and achieved a very natural look. The results are subtle yet significant, and I feel so much more confident. The clinic is beautiful and the staff are all so welcoming." }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Advanced Aesthetic Technology", "Personalized Treatment Plans", "5-Star Rated", "Licensed & Insured", "Client-Focused Care"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "sparkles", title: "Cutting-Edge Treatments", desc: "We utilize the latest advancements in medical aesthetics and wellness." },
    { icon: "heart", title: "Personalized Care", desc: "Each treatment plan is tailored to your unique needs and aesthetic goals." },
    { icon: "thumbs-up", title: "Exceptional Results", desc: "We are committed to delivering natural-looking, transformative outcomes." },
    { icon: "shield-check", title: "Safety & Comfort", desc: "Your well-being is our top priority in a luxurious, serene environment." },
    { icon: "star", title: "Comprehensive Services", desc: "From skin rejuvenation to hormone therapy, we offer a full spectrum of care." }
  ],

  formServiceOptions: [
    "Dermaplaning",
    "Diamondglow Facial",
    "Hydrafacial",
    "Facials",
    "VI Peel",
    "Botox & Dysport",
    "Dermal Fillers",
    "Medical Weight Loss",
    "Physician Prescribed Appetite Suppressants",
    "GLP-1 Injections for Weight Loss",
    "GIP",
    "Injectable Rejuvenation",
    "Kybella®",
    "Sculptra®",
    "SKINVIVE™",
    "Microneedling",
    "POTENZA RF MICRONEEDLING",
    "Skinpen Microneedling",
    "PRP Rejuvenation",
    "PRP Facial",
    "PRP Hair Loss Treatment",
    "PRP Joint Care",
    "PRP Under Eye Injections",
    "Laser Treatments",
    "Pixel Laser Skin Resurfacing",
    "IPL Photofacial",
    "Adva Bright Laser",
    "Laser Hair Removal",
    "Skin Tightening",
    "Exilis",
    "Female Health",
    "Hormone Replacement Therapy",
    "ThermiVa® Vaginal Rejuvenation",
    "Men’s Health",
    "Testosterone Replacement Therapy",
    "Hair Restoration",
    "TED Hair Restoration",
    "Vitamin Injections",
    "IV Therapy",
    "DEXA Scan Body Composition"
  ]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!