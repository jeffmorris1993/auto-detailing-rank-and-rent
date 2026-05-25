/**
 * Data-driven page registry.
 *
 * MVP language rules:
 * - We do not claim guaranteed availability or same-day service.
 * - We do not refer to "our network" or "active technicians".
 * - We collect requests; if a local provider becomes available, they may
 *   contact the visitor.
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
    step: "We check availability",
    description:
      "Your request is reviewed to see whether a local mobile detailing provider can serve your area in Oakland County.",
  },
  {
    step: "A local provider may contact you",
    description:
      "If service becomes available in your area, a local provider may reach out by phone or email to confirm pricing and scheduling. Availability is not guaranteed.",
  },
  {
    step: "Service comes to you",
    description:
      "If an appointment is booked, the provider arrives at your home, office, or wherever your vehicle is parked.",
  },
];

const CORE_FAQS: FAQ[] = [
  {
    question: "Are you the detailing company?",
    answer:
      "No. Oakland County Mobile Detailing is a demand-validation and referral service. We collect mobile car wash and detailing requests across Oakland County, Michigan. If service becomes available in your area, your request may be shared with a local provider.",
  },
  {
    question: "How much does mobile detailing cost in Oakland County?",
    answer:
      "Pricing varies by vehicle size, condition, and the specific services requested. If a local provider becomes available, they will confirm pricing directly with you before any work is scheduled.",
  },
  {
    question: "Do I need to provide water or electricity?",
    answer:
      "Most mobile detailing providers in the area arrive with their own water and power, but specifics vary. If a local provider becomes available, they will confirm requirements when they contact you.",
  },
  {
    question: "How long does a detailing appointment take?",
    answer:
      "A basic mobile car wash typically takes 30–60 minutes. Interior detailing or a full detail can take 2–5 hours depending on vehicle size and condition. The provider who contacts you, if any, will confirm the time needed for your vehicle.",
  },
  {
    question: "What areas do you accept requests from?",
    answer:
      "We accept requests from Birmingham, Bloomfield Hills, Rochester Hills, Troy, and surrounding Oakland County, Michigan communities. Service availability is not guaranteed.",
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
      "Request mobile car detailing in Birmingham, MI. Submit a quote request to check availability — if a local provider can serve your area, they may contact you.",
    targetKeyword: "mobile car detailing Birmingham MI",
    directAnswer:
      "Mobile car detailing in Birmingham, MI is a service in which a detailing provider travels to your home, office, or another location in Birmingham to clean and detail your vehicle. Submit a request to check availability — if a local provider can serve your area, they may contact you.",
    intro:
      "Birmingham drivers don't have to take half a day off to keep their vehicle clean. Mobile detailing — when available — brings the wash, vacuum, and interior treatment to your driveway, your office parking lot, or wherever your car spends the day.",
    whatIncluded: [
      "Hand wash and dry of exterior surfaces",
      "Wheel and tire cleaning",
      "Window cleaning, inside and out",
      "Interior vacuum and surface wipe-down",
      "Common add-ons: clay bar, paint sealant, leather conditioning, pet hair removal",
    ],
    serviceAreaNote:
      "We accept requests from all of Birmingham, including neighborhoods around Quarton Lake, Poppleton Park, downtown Birmingham, and Pembroke Park. Service availability is not guaranteed.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "Do you accept requests from homes and offices in Birmingham?",
        answer:
          "Yes. We accept requests for homes, condos, and office parking lots throughout Birmingham, MI. Whether a local provider is currently available varies.",
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
      "Request a mobile car wash in Birmingham, MI. Submit a request to check whether a local provider can hand wash your vehicle at your home or office.",
    targetKeyword: "mobile car wash Birmingham MI",
    directAnswer:
      "A mobile car wash in Birmingham, MI is a service in which a provider hand washes your vehicle at your location. Submit a request to check availability — if a local provider is available, they may contact you.",
    intro:
      "A mobile car wash — when available — is the quickest way to get a freshly washed vehicle without driving to a wash bay. A typical wash includes a hand wash, wheels and tires, window cleaning, and a quick interior tidy.",
    whatIncluded: [
      "Hand wash and dry of all exterior surfaces",
      "Wheel and tire cleaning",
      "Window cleaning",
      "Quick interior vacuum and wipe-down",
      "Common add-on: spray wax or sealant",
    ],
    serviceAreaNote:
      "We accept mobile car wash requests from Birmingham and surrounding Oakland County areas including Bloomfield Hills, Rochester Hills, and Troy. Service availability is not guaranteed.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "How long does a mobile car wash take?",
        answer:
          "A standard exterior mobile car wash typically takes 30–45 minutes. Adding interior cleaning extends the appointment to about 60–90 minutes. If a local provider becomes available, they will confirm timing for your vehicle.",
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
      "Request interior car detailing in Birmingham, MI. Submit a request to check whether a local provider is available for deep vacuuming, upholstery, and interior treatment.",
    targetKeyword: "interior car detailing Birmingham MI",
    directAnswer:
      "Interior car detailing in Birmingham, MI is a deep-clean service for the inside of your vehicle — typically including vacuuming, surface cleaning, and conditioning of seats and trim. Submit a request to check whether a local provider is available in your area.",
    intro:
      "Interior detailing — when available — goes beyond a quick vacuum. It targets carpets, upholstery, headliner, dashboard, vents, and door panels.",
    whatIncluded: [
      "Full interior vacuum, including under seats and trunk",
      "Carpet and floor mat cleaning",
      "Upholstery or leather treatment",
      "Dashboard, console, and trim wipe-down",
      "Interior window cleaning",
      "Pet hair removal (where offered)",
    ],
    serviceAreaNote:
      "We accept interior detailing requests from Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI. Service availability is not guaranteed.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "Can interior detailing remove pet hair?",
        answer:
          "Pet hair removal is a common add-on, though not every provider offers it. Mention pet hair in your request so we can pass that detail along if a local provider becomes available.",
      },
      {
        question: "Can it remove stains from car seats?",
        answer:
          "Most stains can be reduced or removed with proper extraction and treatment, but extremely old or set-in stains may not come out fully. If a local provider becomes available, they will set realistic expectations.",
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
      "Request exterior car detailing in Birmingham, MI. Submit a request to check whether a local provider offers hand wash, clay bar, polish, or paint protection.",
    targetKeyword: "exterior car detailing Birmingham MI",
    directAnswer:
      "Exterior car detailing in Birmingham, MI is a multi-step service that restores a vehicle's exterior — typically a hand wash, decontamination, polish, and a layer of protection. Submit a request to check whether a local provider is available.",
    intro:
      "Exterior detailing — when available — focuses on the paint, wheels, glass, and trim. It removes road grime, embedded contaminants, and surface defects, then adds a layer of protection.",
    whatIncluded: [
      "Hand wash and dry",
      "Clay bar decontamination",
      "Wheel, tire, and wheel well cleaning",
      "Polish or paint enhancement (where offered)",
      "Spray sealant or wax topcoat",
      "Exterior glass and trim treatment",
    ],
    serviceAreaNote:
      "We accept exterior detailing requests from Birmingham, Bloomfield Hills, Rochester Hills, and Troy. Service availability is not guaranteed.",
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
      "Request ceramic coating in Birmingham, MI. Submit a request to check whether a local provider is available for long-term paint protection.",
    targetKeyword: "ceramic coating Birmingham MI",
    directAnswer:
      "A ceramic coating is a liquid polymer applied to a vehicle's paint that cures into a durable, hydrophobic protective layer. Submit a request to check whether a local ceramic coating provider is available in Birmingham, MI.",
    intro:
      "Ceramic coatings add a long-lasting layer of protection on top of paint. They help repel water and contaminants, make washing easier, and keep the finish looking sharp through Michigan winters.",
    whatIncluded: [
      "Full exterior decontamination wash",
      "Iron and tar removal",
      "Clay bar treatment",
      "Paint correction or polish (where offered)",
      "Application of a ceramic coating product",
      "Cure time and inspection",
    ],
    serviceAreaNote:
      "We accept ceramic coating requests for Birmingham, Bloomfield Hills, Rochester Hills, Troy, and nearby Oakland County areas. Many ceramic products are best applied in a controlled environment, so application location depends on the provider. Service availability is not guaranteed.",
    howItWorks: HOW_IT_WORKS,
    faqs: [
      {
        question: "How long does a ceramic coating last?",
        answer:
          "Durability depends on the product and prep work. Many coatings are rated for 2–5 years with proper maintenance. If a local provider becomes available, they will confirm the rated durability of the product they apply.",
      },
      {
        question: "Can ceramic coating be applied at my home?",
        answer:
          "Some coatings can be applied on location in dry conditions, but many providers prefer a covered, dust-controlled space. If a local provider becomes available, they will let you know what works best for your vehicle.",
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
      "Mobile car detailing in Bloomfield Hills, MI. Submit a request to check whether a local provider is available for homes and gated communities throughout Bloomfield Hills.",
    targetKeyword: "mobile car detailing Bloomfield Hills MI",
    directAnswer:
      "Mobile car detailing in Bloomfield Hills, MI brings a wash, vacuum, and detailing service to your location. Submit a request to check availability — if a local provider can serve your area, they may contact you.",
    intro:
      "Bloomfield Hills residents who request mobile detailing skip the trip to a wash bay. If a local provider is available, they typically bring everything they need — water, power, and tools — to wash, vacuum, and detail on site.",
    neighborhoods: [
      "Vaughan Estates",
      "Bloomfield Village",
      "Heron Bay",
      "Lone Pine Estates",
      "Wabeek",
    ],
    faqs: [
      {
        question: "Do you accept requests from gated communities in Bloomfield Hills?",
        answer:
          "Yes. We accept requests from gated communities in Bloomfield Hills. Include gate or access details so a provider can coordinate entry if service becomes available.",
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
      "Mobile car detailing across Rochester Hills, MI — from downtown Rochester to neighborhoods near Oakland University. Submit a request to check availability in your area.",
    targetKeyword: "mobile car detailing Rochester Hills MI",
    directAnswer:
      "Mobile car detailing in Rochester Hills, MI brings the wash, vacuum, and detailing service to your home or office. Submit a request to check whether a local provider is available in your area.",
    intro:
      "Whether you're near downtown Rochester, by Oakland University, or in a neighborhood off Adams Road, you can submit a request to check whether a local mobile detailing provider can serve your location.",
    neighborhoods: [
      "Stoney Creek",
      "Christian Hills",
      "Avondale",
      "Hampton Village",
      "Brewster Heights",
    ],
    faqs: [
      {
        question: "Can I request detailing at a workplace parking lot in Rochester Hills?",
        answer:
          "Yes — we accept workplace parking lot requests in Rochester Hills, where permitted. If a local provider becomes available, they will confirm whether they can service that location.",
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
      "Mobile car detailing in Troy, MI for residents and commuters. Submit a request to check whether a local provider is available for your driveway, condo lot, or office parking spot.",
    targetKeyword: "mobile car detailing Troy MI",
    directAnswer:
      "Mobile car detailing in Troy, MI is a service that comes to your location to wash, vacuum, and detail your vehicle. Submit a request to check availability in your area.",
    intro:
      "Troy residents and commuters can submit a request to check whether a local mobile detailing provider can come to the office or the house — from a quick wash to a full interior and exterior detail.",
    neighborhoods: [
      "Big Beaver Corridor",
      "Northfield Hills",
      "Wattles Park",
      "Beach Park",
      "Sylvan Glen",
    ],
    faqs: [
      {
        question:
          "Can I request detailing near Somerset Collection or nearby offices?",
        answer:
          "Yes — we accept requests for office and shopping district parking lots in Troy, where the location permits it. If a local provider becomes available, they will confirm whether the location works.",
      },
      ...CORE_FAQS,
    ],
  },
];

export const GLOBAL_FAQS: FAQ[] = [
  {
    question: "What is Oakland County Mobile Detailing?",
    answer:
      "Oakland County Mobile Detailing is a demand-validation and referral service. We collect requests for mobile car wash and detailing across Oakland County, Michigan. If service becomes available in your area, your request may be shared with a local provider.",
  },
  {
    question: "Are you a physical detailing shop?",
    answer:
      "No. We do not operate a physical detailing shop and we do not employ technicians.",
  },
  {
    question: "Do you guarantee service?",
    answer:
      "No. We do not guarantee that a provider will be available in your area, and we do not promise same-day service. Submitting a request helps us understand demand. If service becomes available, your request may be shared with a local provider.",
  },
  {
    question: "Which cities do you accept requests from?",
    answer:
      "We focus on Birmingham, Bloomfield Hills, Rochester Hills, and Troy, MI, plus nearby Oakland County communities.",
  },
  {
    question: "How much does mobile detailing cost?",
    answer:
      "Pricing depends on vehicle size, condition, and the package selected. If a local provider becomes available and contacts you, they will confirm pricing directly.",
  },
  {
    question: "How quickly can I be contacted?",
    answer:
      "Response time is not guaranteed. Availability of local providers varies. If service becomes available in your area, a provider may reach out to confirm scheduling.",
  },
  {
    question: "Do mobile detailers need water and power on site?",
    answer:
      "Most providers in the area arrive with their own water and power, but specifics vary. If a local provider becomes available, they will confirm requirements directly with you.",
  },
  {
    question: "What happens to my request after I submit it?",
    answer:
      "Your request helps us understand local demand. If service becomes available in your area, your request may be shared with a local provider, who may then contact you by phone or email.",
  },
  {
    question: "Do you accept ceramic coating requests?",
    answer:
      "Yes. We accept ceramic coating requests in Birmingham and surrounding cities. Whether a provider is currently available varies.",
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
