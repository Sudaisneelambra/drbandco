import DestinationCard from "../../components/travelPageComponents/destinationCard";
import TravelHero from "../../components/travelPageComponents/travelHero";

const TravelAndTours = ()=>{

    const destinations = [
    {
      title: "Georgia",
      subtitle: "explore Georgia",
      description:
        "Discover the enchanting beauty of Georgia, where ancient traditions meet breathtaking landscapes. From the majestic Caucasus Mountains to the historic streets of Tbilisi, experience a destination that captivates the soul.",
      highlights: [
        "UNESCO World Heritage Sites including ancient monasteries and fortresses",
        "World-renowned wine regions with 8,000 years of winemaking tradition",
        "Stunning mountain scenery and pristine natural landscapes",
        "Rich cultural heritage blending European and Asian influences",
      ],
      images: [
        { src: "/images/eastern-europe.webp", alt: "Georgia landscape" },
        { src: "/images/eastern-europe1.webp", alt: "Tbilisi city view" },
        { src: "/images/eastern-europe2.webp", alt: "Caucasus mountains" },
        { src: "/images/eastern-europe3.webp", alt: "Historic streets" },
      ],
    },
    {
      title: "Eastern Europe",
      subtitle: "Historic Grandeur",
      description:
        "Journey through Eastern Europe's most captivating destinations. Explore medieval castles, baroque palaces, and charming cobblestone streets that tell stories of centuries past in cities like Prague, Budapest, and Krakow.",
      highlights: [
        "Magnificent castles and imperial palaces steeped in history",
        "Vibrant capital cities combining old-world charm with modern sophistication",
        "Traditional cuisine and world-class dining experiences",
        "Art nouveau architecture and stunning historic city centers",
      ],
      images: [
        { src: "/images/eastern-europe.webp", alt: "Georgia landscape" },
        { src: "/images/eastern-europe1.webp", alt: "Tbilisi city view" },
        { src: "/images/eastern-europe2.webp", alt: "Caucasus mountains" },
        { src: "/images/eastern-europe3.webp", alt: "Historic streets" },
      ],
      reverse: true,
    },
  ];


    return (
        <>
            <div className="mt-4">
                <TravelHero />
                {destinations.map((destination, index) => (
                    <DestinationCard key={index} {...destination} />
                ))}
            </div>
        </>
    )
}

export default TravelAndTours;