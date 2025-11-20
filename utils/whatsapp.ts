export const connectToWhatsapp = (message: string = "Hi") => {
    const phoneNumber = "919747491562"; // change once here
  
    if (typeof window !== "undefined") {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
    }
  };
  