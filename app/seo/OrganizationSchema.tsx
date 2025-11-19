export default function OrganizationSchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DrB & Co",
            url: "https://drbandco.com",
            foundingDate: "2020",
            logo: "/images/logo.png",
            sameAs: [
              "https://linkedin.com/company/drbandco",
              "https://instagram.com/drbandco"
            ],
            description:
              "DrB & Co is a multinational business group operating across travel, logistics, and global trade sectors."
          }),
        }}
      />
    );
  }
  