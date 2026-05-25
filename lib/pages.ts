/**
 * Data-driven page registry.
 *
 * Service pages and city pages share a common shape so the page templates
 * can render from this data instead of duplicating markup.
 */

export type FAQ = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  path: string;
  serviceName: string;
  city: string;
  state: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  directAnswer: string;
  intro: string;
  whatIncluded: string[];
  serviceAreaNote: string;
  howItWorks: Array<{ step: string; description: string }>;
  faqs: FAQ[];
};

export type CityPage = {
  slug: string;
  path: string;
  city: string;
  state: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  directAnswer: string;
  intro: string;
  neighborhoods: string[];
  faqs: FAQ[];
};

const HOW_IT_WORKS: ServicePage["howItWorks"] = [
  {
    step: "Submit your request",
    description:
      "Fill out the short quote request form with your vehicle, location, and the service you need. It takes about a minute.",
  },
  {
    step: "Get connected with a local provider",
    description:
      "Your request may be shared with available mobile detailing providers serving your area in Oakland County.",
  },
  {
    step: "Confirm and book",
    description:
      "A provider will reach out to confirm pricing, scheduling, and the exact services they offer for your vehicle.",
  },
  {
    step: "Detailing comes to you",
    description:
      "On the scheduled day, the provider arrives at your home, office, or wherever your vehicle is parked.",
  },
];

const CORE_FAQS: FAQ[] = [
  {
    question: "Are you the detailing company?",
    answer:
      "No. Oakland County Mobile Detailing is a local request and referral service. We connect visitors with available mobile detailing providers serving Oakland County, Michigan.",
  },
  {
    question: "How much does mobile detailing cost in Oakland County?",
    answer:
      "Pricing varies by vehicle size, condition, and the specific services requested. The provider who contacts you will confirm pricing before any work is scheduled.",
  },
  {
    question: "Do I need to provide water or electricity?",
    answer:
      "Most mobile detailing providers in the area arrive fully self-contained with water and power. Confirm specific requirements with the provider when they reach out.",
  },
  {
    question: "How long does a detailing appointment take?",
    answer:
      "A basic mobile car wash typically takes 30–60 minutes. Interior detailing or full detail packages can take 2–5 hours depending on vehicle size and condition.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Providers in our network serve Birmingham, Bloomfield Hills, Rochester Hills, Troy, and surrounding Oakland County, Michigan communities.",
  },
];

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "mobile-car-detailing-birmingham-mi",
    path: "/mobile-car-detailing-birmingham-mi",
    serviceName: "Mobile Car Detailing",
    city: "Birmingham",
    state: "MI",
    h1: "Mobile Car Detailing in Birmingham, MI",
    metaTitle: "Mobile Car Detailing in Birmingham, MI | Request a Quote",
    metaDescription:
      "Request mobile car detailing in Birmingham, MI. Get connected with available local detailing providers who come to your home or office.",
    targetKeyword: "mobile car detailing Birmingham MI",
    directAnswer:
      "Mobile car detailing in Birmingham, MI is a service where a detailing provider travels to your home, office, or another location in Birmingham to clean and detail your vehicle. Submit a request and we will connect you with available local providers serving Birmingham.",
    intro:
      "Birmingham drivers don't have to take a half day off to keep their vehicle looking sharp. Mobile detailing brings the wash, vacuum, and interior treatment to your driveway, your office parking lot, or wherever your car spends the day.",
    whatIncluded: [
      "Hand wash and dry of exterior surfaces",
      "Wheel and tire cleaning",
      "Window cleaning, inside and out",
      "Interior vacuum and surface wipe-down",
      "Optional add-ons: clay bar, paint sealant, leather conditioning, pet hair removal",
    ],
    serviceAreaNote:
      "Providers in our network commonly cover all of Birmingham, including neighborhoods around Quarton Lake, Poppleton Park, downtown Birmingham, and Pembroke Park.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "Do providers come to homes or offices in Birmingham?",
        answer:
          "Yes. Mobile detailing providers in the network commonly service homes, condos, and office parking lots throughout Birmingham, MI.",
      },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "mobile-car-wash-birmingham-mi",
    path: "/mobile-car-wash-birmingham-mi",
    serviceName: "Mobile Car Wash",
    city: "Birmingham",
    state: "MI",
    h1: "Mobile Car Wash in Birmingham, MI",
    metaTitle: "Mobile Car Wash in Birmingham, MI | Request a Quote",
    metaDescription:
      "Request a mobile car wash in Birmingham, MI. Get connected with available local providers who hand wash your vehicle at your home or office.",
    targetKeyword: "mobile car wash Birmingham MI",
    directAnswer:
      "A mobile car wash in Birmingham, MI is a service where a provider hand washes your vehicle at your location. Submit a request to be connected with available local mobile car wash providers who serve Birmingham.",
    intro:
      "A mobile car wash is the quickest way to get a freshly washed vehicle without driving to a wash bay. It usually includes a hand wash, wheels and tires, window cleaning, and a quick interior tidy.",
    whatIncluded: [
      "Hand wash and dry of all exterior surfaces",
      "Wheel and tire cleaning",
      "Window cleaning",
      "Quick interior vacuum and wipe-down",
      "Optional spray wax or sealant",
    ],
    serviceAreaNote:
      "Mobile car wash requests are accepted for Birmingham and surrounding Oakland County areas including Bloomfield Hills, Rochester Hills, and Troy.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "How long does a mobile car wash take?",
        answer:
          "A standard exterior mobile car wash in Birmingham typically takes 30–45 minutes. Adding interior cleaning extends the appointment to about 60–90 minutes.",
      },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "interior-car-detailing-birmingham-mi",
    path: "/interior-car-detailing-birmingham-mi",
    serviceName: "Interior Car Detailing",
    city: "Birmingham",
    state: "MI",
    h1: "Interior Car Detailing in Birmingham, MI",
    metaTitle: "Interior Car Detailing in Birmingham, MI | Request a Quote",
    metaDescription:
      "Request interior car detailing in Birmingham, MI. Get connected with local providers offering deep vacuuming, shampoo, and interior treatment.",
    targetKeyword: "interior car detailing Birmingham MI",
    directAnswer:
      "Interior car detailing in Birmingham, MI is a deep-clean service for the inside of your vehicle, typically including vacuuming, surface cleaning, and conditioning of seats and trim. Submit a request to be connected with local providers.",
    intro:
      "Interior detailing goes beyond a quick vacuum. It targets carpets, upholstery, headliner, dashboard, vents, and door panels — restoring the inside of your vehicle to a much cleaner state.",
    whatIncluded: [
      "Full interior vacuum, including under seats and trunk",
      "Carpet and floor mat cleaning",
      "Upholstery or leather treatment",
      "Dashboard, console, and trim wipe-down",
      "Window cleaning, inside",
      "Pet hair removal on request",
    ],
    serviceAreaNote:
      "Interior detailing requests are accepted throughout Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "Can interior detailing remove pet hair?",
        answer:
          "Many providers in the network offer pet hair removal as a standard or add-on service. Mention pet hair in the request form so the provider can plan accordingly.",
      },
      {
        question: "Can it remove stains from car seats?",
        answer:
          "Most stains can be reduced or removed with proper extraction and treatment, but extremely old or set-in stains may not come out fully. The provider will set realistic expectations during the quote.",
      },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "exterior-car-detailing-birmingham-mi",
    path: "/exterior-car-detailing-birmingham-mi",
    serviceName: "Exterior Car Detailing",
    city: "Birmingham",
    state: "MI",
    h1: "Exterior Car Detailing in Birmingham, MI",
    metaTitle: "Exterior Car Detailing in Birmingham, MI | Request a Quote",
    metaDescription:
      "Request exterior car detailing in Birmingham, MI. Get connected with local providers offering hand wash, clay bar, polish, and paint protection.",
    targetKeyword: "exterior car detailing Birmingham MI",
    directAnswer:
      "Exterior car detailing in Birmingham, MI is a multi-step service that restores your vehicle's exterior — typically including a hand wash, decontamination, polish, and a layer of protection. Submit a request to be connected with local providers.",
    intro:
      "Exterior detailing focuses on the paint, wheels, glass, and trim. It removes road grime, embedded contaminants, and surface defects, then adds a layer of protection that helps the finish last.",
    whatIncluded: [
      "Hand wash and dry",
      "Clay bar decontamination",
      "Wheel, tire, and wheel well cleaning",
      "Polish or paint enhancement on request",
      "Spray sealant or wax topcoat",
      "Exterior glass and trim treatment",
    ],
    serviceAreaNote:
      "Exterior detailing providers in the network commonly cover Birmingham, Bloomfield Hills, Rochester Hills, and Troy.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "What is the difference between a wash and exterior detailing?",
        answer:
          "A wash cleans the surface. Exterior detailing decontaminates the paint, addresses light defects, and adds a protective layer. The result lasts longer and looks deeper.",
      },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "ceramic-coating-birmingham-mi",
    path: "/ceramic-coating-birmingham-mi",
    serviceName: "Ceramic Coating",
    city: "Birmingham",
    state: "MI",
    h1: "Ceramic Coating in Birmingham, MI",
    metaTitle: "Ceramic Coating in Birmingham, MI | Request a Quote",
    metaDescription:
      "Request ceramic coating in Birmingham, MI. Get connected with local providers offering long-term paint protection and hydrophobic finishes.",
    targetKeyword: "ceramic coating Birmingham MI",
    directAnswer:
      "A ceramic coating is a liquid polymer applied to a vehicle's paint that cures into a durable, hydrophobic protective layer. Submit a request to be connected with available local ceramic coating providers serving Birmingham, MI.",
    intro:
      "Ceramic coatings add a long-lasting layer of protection on top of your vehicle's paint. They help repel water and contaminants, make washing easier, and keep the finish looking sharp through Michigan winters.",
    whatIncluded: [
      "Full exterior decontamination wash",
      "Iron and tar removal",
      "Clay bar treatment",
      "Optional paint correction or polish",
      "Application of a ceramic coating product",
      "Cure time and inspection",
    ],
    serviceAreaNote:
      "Ceramic coating requests are accepted for Birmingham, Bloomfield Hills, Rochester Hills, Troy, and nearby Oakland County areas. Many providers prefer a controlled environment for application.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "How long does a ceramic coating last?",
        answer:
          "Durability depends on the product and prep work. Many coatings are rated for 2–5 years with proper maintenance. The provider will confirm the rated durability of the product they apply.",
      },
      {
        question: "Can ceramic coating be applied at my home?",
        answer:
          "Some coatings can be applied on location in dry conditions, but many providers prefer a covered, dust-controlled space. The provider will let you know what works best for your vehicle.",
      },
      ...CORE_FAQS,
    ],
  },
];

export const CITY_PAGES: CityPage[] = [
  {
    slug: "mobile-car-detailing-bloomfield-hills-mi",
    path: "/mobile-car-detailing-bloomfield-hills-mi",
    city: "Bloomfield Hills",
    state: "MI",
    h1: "Mobile Car Detailing in Bloomfield Hills, MI",
    metaTitle: "Mobile Car Detailing in Bloomfield Hills, MI | Request a Quote",
    metaDescription:
      "Request mobile car detailing in Bloomfield Hills, MI. Get connected with available local detailing providers who come to your home or office.",
    targetKeyword: "mobile car detailing Bloomfield Hills MI",
    directAnswer:
      "Mobile car detailing in Bloomfield Hills, MI lets you book detailing without leaving home. Submit a request and we will connect you with available local providers serving Bloomfield Hills.",
    intro:
      "Bloomfield Hills homeowners get the convenience of a clean vehicle without leaving the driveway. Mobile detailing providers in the area bring everything they need — water, power, and tools — to wash, vacuum, and detail on site.",
    neighborhoods: [
      "Vaughan Estates",
      "Bloomfield Village",
      "Heron Bay",
      "Lone Pine Estates",
      "Wabeek",
    ],
    faqs: [
      {
        question: "Do providers come to gated communities in Bloomfield Hills?",
        answer:
          "Yes. Providers commonly service gated communities in Bloomfield Hills. Include gate or access details in your request so the provider can coordinate entry.",
      },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "mobile-car-detailing-rochester-hills-mi",
    path: "/mobile-car-detailing-rochester-hills-mi",
    city: "Rochester Hills",
    state: "MI",
    h1: "Mobile Car Detailing in Rochester Hills, MI",
    metaTitle: "Mobile Car Detailing in Rochester Hills, MI | Request a Quote",
    metaDescription:
      "Request mobile car detailing in Rochester Hills, MI. Get connected with available local detailing providers who come to your home or office.",
    targetKeyword: "mobile car detailing Rochester Hills MI",
    directAnswer:
      "Mobile car detailing in Rochester Hills, MI brings the wash, vacuum, and detailing service to your home or office. Submit a request to be connected with available local providers serving Rochester Hills.",
    intro:
      "Whether you're near downtown Rochester, by Oakland University, or in a neighborhood off Adams Road, mobile detailing providers in the network can come to you.",
    neighborhoods: [
      "Stoney Creek",
      "Christian Hills",
      "Avondale",
      "Hampton Village",
      "Brewster Heights",
    ],
    faqs: [
      {
        question: "Can I book detailing at a workplace parking lot in Rochester Hills?",
        answer:
          "Yes, as long as the workplace permits it. Many providers in the network service office parking lots throughout Rochester Hills during business hours.",
      },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "mobile-car-detailing-troy-mi",
    path: "/mobile-car-detailing-troy-mi",
    city: "Troy",
    state: "MI",
    h1: "Mobile Car Detailing in Troy, MI",
    metaTitle: "Mobile Car Detailing in Troy, MI | Request a Quote",
    metaDescription:
      "Request mobile car detailing in Troy, MI. Get connected with available local detailing providers who come to your home or office.",
    targetKeyword: "mobile car detailing Troy MI",
    directAnswer:
      "Mobile car detailing in Troy, MI is a service that comes to your location to wash, vacuum, and detail your vehicle. Submit a request to be connected with available local providers serving Troy.",
    intro:
      "Troy residents and commuters can request a full mobile detailing appointment without ever leaving the office or the house. Providers handle everything from a quick wash to a full interior and exterior detail.",
    neighborhoods: [
      "Big Beaver Corridor",
      "Northfield Hills",
      "Wattles Park",
      "Beach Park",
      "Sylvan Glen",
    ],
    faqs: [
      {
        question: "Do providers detail vehicles at Somerset Collection or nearby offices?",
        answer:
          "Many providers will service vehicles in office or shopping district parking lots in Troy. Confirm the location works for both you and the provider when scheduling.",
      },
      ...CORE_FAQS,
    ],
  },
];

export const GLOBAL_FAQS: FAQ[] = [
  {
    question: "What is Oakland County Mobile Detailing?",
    answer:
      "Oakland County Mobile Detailing is a local request and referral service. We help visitors request mobile car wash and detailing services and connect them with available local detailing providers serving Oakland County, Michigan.",
  },
  {
    question: "Are you a physical detailing shop?",
    answer:
      "No. We do not operate a physical detailing shop. We are a request and referral service that connects visitors with mobile detailing providers who travel to the customer.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "We focus on Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI, plus nearby Oakland County communities.",
  },
  {
    question: "How much does mobile detailing cost?",
    answer:
      "Pricing depends on vehicle size, condition, and the package selected. The provider who contacts you will confirm pricing before any work is scheduled.",
  },
  {
    question: "How quickly can I book an appointment?",
    answer:
      "Availability varies by provider and season. Many requests can be scheduled within a few days. Providers typically work 7 days a week, weather permitting.",
  },
  {
    question: "Do mobile detailers need water and power on site?",
    answer:
      "Most providers in the network arrive fully self-contained with their own water and power. Confirm requirements directly with the provider when they contact you.",
  },
  {
    question: "What happens to my request after I submit it?",
    answer:
      "Your request may be shared with available local detailing providers who serve your area. A provider will reach out by phone or email to confirm pricing, scheduling, and the services they offer.",
  },
  {
    question: "Do you offer ceramic coating?",
    answer:
      "Providers in the network commonly offer ceramic coating in Birmingham and surrounding cities. Select ceramic coating on the request form to be matched with a provider who offers it.",
  },
];

export const ALL_PUBLIC_PATHS: Array<{
  path: string;
  priority: number;
  label: string;
}> = [
  { path: "/", priority: 1.0, label: "Home" },
  { path: "/mobile-car-detailing-birmingham-mi", priority: 0.9, label: "Birmingham" },
  { path: "/mobile-car-wash-birmingham-mi", priority: 0.8, label: "Mobile Car Wash" },
  { path: "/interior-car-detailing-birmingham-mi", priority: 0.8, label: "Interior Detailing" },
  { path: "/exterior-car-detailing-birmingham-mi", priority: 0.8, label: "Exterior Detailing" },
  { path: "/ceramic-coating-birmingham-mi", priority: 0.8, label: "Ceramic Coating" },
  { path: "/mobile-car-detailing-bloomfield-hills-mi", priority: 0.8, label: "Bloomfield Hills" },
  { path: "/mobile-car-detailing-rochester-hills-mi", priority: 0.8, label: "Rochester Hills" },
  { path: "/mobile-car-detailing-troy-mi", priority: 0.8, label: "Troy" },
  { path: "/faq", priority: 0.7, label: "FAQ" },
  { path: "/llm.html", priority: 0.6, label: "AI Summary" },
];
