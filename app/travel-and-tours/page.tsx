"use client";

import dynamic from "next/dynamic";

const TravelHero = dynamic(() => import("../../components/travelPageComponents/travelHero"), {
  ssr: false,
});

const DestinationCard = dynamic(() => import("../../components/travelPageComponents/destinationCard"), {
  ssr: false,
});

const TravelToursSection = dynamic(() => import("../../components/travelPageComponents/travelAndTours"), {
  ssr: false,
});

const TravelAndTours = ()=>{

    const destinations = [
    {
      subtitle: "Eastern Europe",
      description:
        "Eastern Europe is a beautiful blend of history, culture, and breathtaking landscapes. From medieval cities to peaceful mountains and charming old towns, this region offers affordable travel, rich traditions, and unforgettable experiences. Perfect for travelers looking for culture, adventure, and amazing value.",
      highlights: [
        "Poland",
        "Czech Republic",
        "Slovakia",
        "Hungary",
        "Romania",
        "Bulgaria",
        "Serbia",
        "Bosnia & Herzegovina",
        "Montenegro",
        "North Macedonia",
        "Albania",
        "Kosovo",
        "Moldova",
        "Ukraine",
        "Belarus",
        "Russia"
      ],
      images: [
        { src: "/images/eastern-europe.webp", alt: "Georgia landscape" },
        { src: "/images/eastern-europe1.webp", alt: "Tbilisi city view" },
        { src: "/images/eastern-europe2.webp", alt: "Caucasus mountains" },
        { src: "/images/eastern-europe3.webp", alt: "Historic streets" },
      ],
      amount: "$699",
      threeCountries:false,
    },
    {
      subtitle: "Schengen Countries",
      description:
        "The Schengen Zone opens the door to seamless European travel—one visa, multiple stunning destinations. Explore iconic cities, scenic coastlines, fairy-tale landscapes, and world-famous attractions with ease and comfort. Perfect for travelers who want freedom, convenience, and unforgettable European adventures.",
      highlights: [
          "Austria",
          "Belgium",
          "Czech Republic",
          "Denmark",
          "Estonia",
          "Finland",
          "France",
          "Germany",
          "Greece",
          "Hungary",
          "Iceland",
          "Italy",
          "Latvia",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Malta",
          "Netherlands",
          "Norway",
          "Poland",
          "Portugal",
          "Slovakia",
          "Slovenia",
          "Spain",
          "Sweden",
          "Switzerland"
      ],
      images: [
        { src: "/images/eastern-europe.webp", alt: "Georgia landscape" },
        { src: "/images/eastern-europe1.webp", alt: "Tbilisi city view" },
        { src: "/images/eastern-europe2.webp", alt: "Caucasus mountains" },
        { src: "/images/eastern-europe3.webp", alt: "Historic streets" },
      ],
      amount: "€1299",
      threeCountries:true,
      reverse: true,
    },
  ];


    return (
        <>
            <div className="mt-4">
                <TravelHero />
                <TravelToursSection/>
                {destinations.map((destination, index) => (
                    <DestinationCard key={index} {...destination} />
                ))}
            </div>
        </>
    )
}

export default TravelAndTours;