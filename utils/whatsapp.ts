export const connectToWhatsapp = (message: string = "Hi") => {
    const phoneNumber = "995595899374"; // change once here
  
    if (typeof window !== "undefined") {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
    }
  };
  