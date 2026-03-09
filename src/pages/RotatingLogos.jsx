import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Importing the images
// import Microbial from "../assets/tracks/Microbial.jpg";
// import Microbiome from "../assets/tracks/Microbime-Engineering.jpg"
// import HostMicrobe  from "../assets/tracks/Host–Microbe.jpg";
// import Metabolites from "../assets/tracks/Metabo.jpg"
// import FoodSecurity from "../assets/tracks/Foodbrone Microbial.jpg";
// import FoodSpoil from "../assets/tracks/Food Spoilage.jpg"
// import Bio from "../assets/tracks/Biopreservation-Microbes.jpg";
// import Ecology from "../assets/tracks/Ecology.jpg"
// import GutFood from "../assets/tracks/Gut.jpg";
// import Personal from "../assets/tracks/Personalized Nutrition.jpg"
// import Soil from "../assets/tracks/Soil & Plant Microbiomes.jpg";
// import Sustainable from "../assets/tracks/Susbistanle.jpg"
// import Processing from "../assets/tracks/Proceesig-Technologies.webp";
// import Circular from "../assets/tracks/Circular Bioeconomy.jpg"
// import Foodborne from "../assets/tracks/Foodbrone Microbial.jpg";
// import Prebiotics from "../assets/tracks/Prebiotics.jpg"
// import Fermented from "../assets/tracks/Feremented.jpg"
// import Ethical from "../assets/tracks/Ethical.webp";
// import MicrobiomeEng from "../assets/tracks/Microbime-Engineering.jpg"
// import Quorum from "../assets/tracks/Quorum.avif"


// Images for agri
import Para from "../assets/tracks/Paradigms of regeneration agriculture.jpg";
import Carbon from "../assets/tracks/Microbime-Engineering.jpg"
import Agroecology from "../assets/tracks/Agroecology.jpg";
import Biodiversity from "../assets/tracks/biodiversity.jpg";
import Pre from "../assets/tracks/precision.jpg";
import Ai from "../assets/tracks/AI remote sensing &gis for soil crop.jpg"
import iot from "../assets/tracks/IOT &sensor network for regenerative farming.jpg";
import Robotics from "../assets/tracks/robotics&automation for low impact farming.jpg"
import Carbon1 from "../assets/tracks/carbon sequestration.jpg";
import MRV from "../assets/tracks/MRV tools & climate smart agriculture.jpg"
import Biochar from "../assets/tracks/Biochar composting & biological amendments.jpg";
import Micro from "../assets/tracks/micro catchments drip optimisation & hydrology mapping.jpg"
import Plant from "../assets/tracks/plant microbiome engineering.jpg";
import Bio1 from "../assets/tracks/biofertilisers ,biostimulants &mycorrhizal innovation.jpg"
import Rege from "../assets/tracks/Regenerative pest management.jpg";
import RegenerativeHorticulture from "../assets/tracks/Rengenerative Horticulture, Agroforesty& polyculture system.jpg"
import Livestock from "../assets/tracks/Livestock integration holistic grazing &manure circularity.jpg"
import WastetoValue from "../assets/tracks/waste to value innovations in farms.jpg";
import RegenerativeSupply from "../assets/tracks/Regenerative supply chain& market incentives.jpg"
import Certification from "../assets/tracks/certification framework for regenerative farming.jpg"

export const tracks = [
  {
    image: Para,
    title: "Paradigms of Regenerative Agriculture",
    description: (
      <>
        Explore transformative paradigms in regenerative agriculture that restore soil health, enhance biodiversity, and strengthen climate resilience. This track examines innovative practices, policy frameworks, and technologies empowering farmers to regenerate ecosystems, boost productivity, and build sustainable food systems while delivering economic, environmental, and social value for future-ready{" "}
        <Link
          to="/executive-panel-members/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          global agriculture systems worldwide.
        </Link>

      </>
    ),
  },

  {
    image: Carbon,
    title: "Carbon, Microbes & Nutrient Cycling",
    description: (
      <>
        This track explores the critical interactions between{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          carbon, soil microbes, and nutrient cycling.
        </Link>{" "}
        Discover how microbial communities drive carbon sequestration, improve soil fertility, and optimize nutrient availability, enabling resilient agroecosystems, reduced emissions, and regenerative practices that enhance productivity while supporting long-term ecosystem health and climate-positive agriculture.
      </>
    ),
  },

  {
    image: Agroecology,
    title: "Agroecology",
    description: (
      <>
        This track delves into {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          agroecology
        </Link> as a science and practice integrating ecology, culture, and farming systems. It highlights diversified cropping, local knowledge, and resilient landscapes that enhance biodiversity, soil health, and livelihoods while promoting sustainable, climate-adaptive, and socially inclusive agricultural systems.
      </>
    ),
  },

  {
    image: Biodiversity,
    title: "Biodiversity",
    description: (
      <>
        {" "}
        <Link
          to="/Agrigegen-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Biodiversity
        </Link>{" "}
        examines the role of biodiversity in regenerative agriculture, focusing on species-rich farms, habitat restoration, and ecosystem services. Learn how biodiversity enhances resilience, productivity, and climate adaptation while supporting pollinators, soil life, and balanced food systems across agricultural landscapes.
      </>
    ),
  },

  {
    image: Pre,
    title: "Precision Agriculture for Regenerative Farming",
    description: (
      <>
        This track focuses on{" "}
        <Link
          to="/Agrigegen-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          precision agriculture
        </Link>{" "}
        as a driver of regenerative farming. It highlights smart sensors, AI, drones, and decision tools that optimize resource use, rebuild soil health, cut emissions, and enhance productivity while supporting adaptive, climate-resilient farm management systems.
      </>
    ),
  },

  {
    image: Ai,
    title: "AI, Remote Sensing & GIS for Soil, Crops",
    description: (
      <>
        Examines advanced tools for monitoring soil health and crop performance. It highlights real-time insights, predictive analytics, and spatial intelligence that enable precision decisions, optimize inputs, enhance resilience, and accelerate regenerative outcomes across diverse agricultural landscapes.
        {/* <Link
          to="/Agrigegen-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      
        </Link>{" "} */}

      </>
    ),
  },

  {
    image: iot,
    title: "IoT & Sensor Networks for Regenerative Farming",
    description: (
      <>
        This track explores how IoT devices and advanced sensor networks enable regenerative farming. Learn how real-time soil, water, crop, and climate data drive smarter decisions, improve soil health, optimize resources, reduce inputs, and support resilient, sustainable agricultural systems at scale.{" "}
        <Link
          to="/Agrigegen-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >

        </Link>{" "}
      </>
    ),
  },

  {
    image: Robotics,
    title: "Robotics & Automation for Low-Impact Farming",
    description: (
      <>
        Examines how{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          robotics and automation
        </Link>{" "}
        are transforming low-impact farming. Discover autonomous machinery, precision robotics, and AI-driven systems that reduce soil compaction, minimize chemical use, lower labor intensity, and improve efficiency while supporting environmentally responsible and regenerative agricultural practices.
      </>
    ),
  },

  {
    image: Carbon1,
    title: "Carbon Sequestration",
    description: (
      <>
        This track focuses on{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          carbon sequestration
        </Link>{" "}
        strategies in agriculture. Explore soil-based solutions, regenerative practices, measurement technologies, and policy frameworks that capture and store carbon, enhance soil fertility, reduce emissions, and create verifiable climate benefits while improving long-term farm productivity and resilience.
      </>
    ),
  },

  {
    image: MRV,
    title: "MRV Tools & Climate-Smart Agriculture",
    description: (
      <>
        This track highlights MRV tools for climate-smart agriculture. Explore methods to measure, report, and verify emissions and outcomes using digital platforms, remote sensing, and data analytics enabling transparency, credible carbon accounting, informed decision-making, and scalable adoption of sustainable farming practices.{" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       
        </Link>{" "} */}

      </>
    ),
  },

  {
    image: Biochar,
    title: "Biochar, Composting & Biological Amendments",
    description: (
      <>
        {" "}
        {/* <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Soil & Plant Microbiomes
        </Link>  */}
        Explores biochar, composting, and biological amendments as tools for regenerative agriculture. Learn how these inputs improve soil structure, enhance microbial activity, increase nutrient availability, sequester carbon, and reduce reliance on synthetic fertilizers while boosting long-term farm productivity.
      </>
    ),
  },

  {
    image: Micro,
    title: "Micro-Catchments, Drip Optimisations & Hydrology Mapping",
    description: (
      <>
        This track focuses on {" "}
        <Link
          to="/Agrigegen-conference-tracks/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          micro-catchments
        </Link>{" "}  drip irrigation optimization, and hydrology mapping for efficient water use. Discover techniques and digital tools that improve water capture, distribution, and monitoring, reduce losses, enhance crop resilience, and support sustainable, climate-adaptive farming systems.

      </>
    ),
  },

  {
    image: Plant,
    title: "Plant–Microbiome Engineering",
    description: (
      <>
        Explores{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          plant–microbiome engineering
        </Link> to enhance crop performance and resilience. Learn how beneficial microbes, root interactions, and biological innovations improve nutrient uptake, stress tolerance, disease resistance, and soil health unlocking new pathways for sustainable and regenerative agriculture.

      </>
    ),
  },

  {
    image: Bio1,
    title: "Biofertilisers, Biostimulants & Mycorrhizal Innovations",
    description: (
      <>
        This highlights {" "}
        <Link
          to="/Agrigegen-conference-tracks/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          biofertilisers, biostimulants, and mycorrhizal
        </Link> innovations for sustainable farming. Explore how these natural inputs enhance nutrient uptake, stimulate plant growth, improve soil health, boost crop resilience, and reduce dependency on chemical fertilizers, driving regenerative and eco-friendly agricultural practices.

      </>
    ),
  },

  {
    image: Rege,
    title: "Regenerative Pest Management",
    description: (
      <>
        {" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Foodborne Microbial 
        </Link> */}
        This track focuses on regenerative pest management strategies that balance crop protection with ecosystem health. Learn how integrated approaches, biological controls, habitat management, and precision monitoring reduce chemical use, enhance biodiversity, and promote resilient, sustainable farming systems.

      </>
    ),
  },

  {
    image: RegenerativeHorticulture,
    title: "Regenerative Horticulture, Agroforestry & Polyculture Systems",
    description: (
      <>
        Examines {" "}
        <Link
          to="/about-Agrigegen-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          regenerative horticulture, agroforestry, and polyculture systems.
        </Link>
        Discover how diverse planting strategies, tree–crop integration, and multi-species cultivation enhance soil health, biodiversity, and ecosystem resilience while increasing productivity and promoting sustainable, climate-smart agricultural landscapes.
      </>
    ),
  },

  {
    image: Livestock,
    title: "Livestock Integration, Holistic Grazing & Manure Circularity",
    description: (
      <>
        {" "}
        {/* <Link
          to="/Agrigegen-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Fermented Foods – Health Benefits & Innovation
        </Link>  */}
        This track examines livestock integration, holistic grazing, and manure circularity in regenerative farming. Learn how strategic grazing, nutrient recycling, and livestock–crop synergy enhance soil fertility, boost pasture productivity, reduce waste, and support sustainable, climate-resilient agricultural systems.
      </>
    ),
  },
  // Ethical

  {
    image: WastetoValue,
    title: "Waste-to-Value Innovations in Farms",
    description: (
      <>
        {" "}
        {/* <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microbiome research 
        </Link>  */}
        This track highlights waste-to-value innovations in farming. Explore technologies and practices that convert agricultural residues, by-products, and organic waste into valuable resources like bioenergy, compost, and bio-based inputs—reducing waste, enhancing sustainability, and supporting circular, regenerative farm systems.
      </>
    ),
  },
  // Microbiome Engineering

  {
    image: RegenerativeSupply,
    title: "Regenerative Supply Chains & Market Incentives",
    description: (
      <>
        Explores    {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          regenerative supply chains and market incentives
        </Link>  Discover strategies to connect farmers with sustainable markets, leverage carbon credits, promote eco-friendly certifications, and create economic models that reward regenerative practices while enhancing transparency, resilience, and long-term value across the agricultural ecosystem.
      </>
    ),
  },
  {
    image: Certification,
    title: "Certification Frameworks for Regenerative Farming",
    description: (
      <>
        This track focuses on {" "}
        <Link
          to="/Agrigegen-conference-tracks/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          certification frameworks for regenerative farming.
        </Link>{" "} Explore standards, protocols, and verification methods that validate sustainable practices, ensure transparency, enhance market credibility, and incentivize farmers to adopt environmentally responsible, soil-friendly, and climate-smart agricultural approaches.

      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2 text-justify">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed text-justify">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
