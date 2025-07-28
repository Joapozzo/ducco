import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Duccó Mueblería Premium",
    default: "Duccó | Mueblería Premium - Diseño que transforma espacios"
  },
  description: "Descubre muebles únicos y de calidad excepcional en Duccó. Más de 35 años creando espacios únicos que reflejan tu personalidad. Mesas, sillones y sillas premium en Córdoba.",
  keywords: [
    "muebles córdoba",
    "mueblería córdoba",
    "mesas de comedor",
    "sillones premium",
    "sillas de diseño",
    "muebles de calidad",
    "decoración hogar",
    "diseño interior",
    "muebles modernos",
    "amoblamientos córdoba",
    "muebles contemporáneos",
    "mesa ratona",
    "sillón reclinable",
    "muebles guatambú",
    "vidrio templado",
    "mueblería argentina",
    "duccó muebles"
  ],
  authors: [{ name: "Duccó Mueblería" }],
  creator: "Duccó Mueblería",
  publisher: "Duccó Mueblería",
  category: "furniture",
  classification: "Mueblería y Decoración",
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ducco.com.ar",
    siteName: "Duccó Mueblería Premium",
    title: "Duccó | Mueblería Premium - Diseño que transforma espacios",
    description: "Más de 35 años creando muebles únicos en Córdoba. Descubre nuestra colección de mesas, sillones y sillas de diseño premium.",
    images: [
      {
        url: "/og-image.jpg", // Necesitarás crear esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: "Duccó Mueblería Premium - Muebles de diseño en Córdoba",
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@ducco_muebles", // Si tienen Twitter
    creator: "@ducco_muebles",
    title: "Duccó | Mueblería Premium - Diseño que transforma espacios",
    description: "Más de 35 años creando muebles únicos en Córdoba. Mesas, sillones y sillas de diseño premium.",
    images: ["/og-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons y Favicon
  icons: {
    icon: [
      { url: "/logo.svg", sizes: "any" },
    ],
    apple: [
      { url: "/logo.svg", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: "#f24026",
      },
    ],
  },

  // Manifest para PWA (opcional)
  manifest: "/site.webmanifest",

  // Otros meta tags importantes
  other: {
    "theme-color": "#f24026",
    "msapplication-TileColor": "#f24026",
    "msapplication-config": "/browserconfig.xml",
  },

  // Geolocalización para SEO local
  alternates: {
    canonical: "https://ducco.com.ar",
  },

  // Verificación de propietario (agregar cuando tengas las propiedades)
  verification: {
    google: "tu-codigo-de-verificacion-google", // Reemplazar cuando tengas Google Search Console
    // bing: "tu-codigo-de-verificacion-bing", // Si usas Bing Webmaster Tools
  },
};

// JSON-LD Schema Markup para SEO estructurado
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ducco.com.ar/#organization",
      "name": "Duccó Mueblería",
      "url": "https://ducco.com.ar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ducco.com.ar/logos/logo2-ducco.svg",
        "width": 200,
        "height": 60
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-351-XXX-XXXX", // Agregar teléfono real
        "contactType": "customer service",
        "areaServed": "AR",
        "availableLanguage": "Spanish"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Castro Barros 773", // Dirección real
        "addressLocality": "Córdoba",
        "addressRegion": "Córdoba",
        "addressCountry": "AR"
      },
      "sameAs": [
        "https://www.facebook.com/ducco", // Agregar redes sociales reales
        "https://www.instagram.com/ducco_muebles"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ducco.com.ar/#localbusiness",
      "name": "Duccó Mueblería",
      "description": "Mueblería premium en Córdoba especializada en mesas, sillones y sillas de diseño contemporáneo",
      "url": "https://ducco.com.ar",
      "telephone": "+54-351-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Castro Barros 773",
        "addressLocality": "Córdoba",
        "addressRegion": "Córdoba",
        "postalCode": "5000", // Código postal real
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.4201, // Coordenadas reales de Córdoba
        "longitude": -64.1888
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-13:00"
      ],
      "priceRange": "$$",
      "image": "https://ducco.com.ar/og-image.jpg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Viewport adicional para mejor mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Información adicional */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Duccó" />
      </head>
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}