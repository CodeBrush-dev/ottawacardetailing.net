// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.ottawacardetailing.net",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.ottawacardetailing.net/","title_tag":"Car Detailing Ottawa & Auto Detailing | Autobahn","meta_description":"Professional car detailing in Ottawa, offering interior and exterior auto detailing services to keep your vehicle spotless, protected and looking like new."},{"page_url":"https://www.ottawacardetailing.net/services-1","title_tag":"Auto Detailing Services Ottawa Packages | Autobahn","meta_description":"Explore Ottawa car detailing packages including interior and exterior detailing, shampoo, wax and ceramic options for sedans, SUVs, trucks and fleets."},{"page_url":"https://www.ottawacardetailing.net/ottawapaintcorrection","title_tag":"Paint Correction Ottawa & Scratch Removal | Autobahn","meta_description":"Expert paint correction Ottawa services removing swirls, scratches and defects with multi-stage polishing, decontamination and high gloss paint sealant."},{"page_url":"https://www.ottawacardetailing.net/ceramic-coating-ottawa","title_tag":"Ceramic Coating Ottawa & Paint Protection | Autobahn","meta_description":"Premium ceramic coating Ottawa packages with paint correction, decontamination and long-lasting gloss to protect against road salt, UV rays and contaminants."},{"page_url":"https://www.ottawacardetailing.net/commercial-fleet-dealership-detailing-in-ottawa","title_tag":"Fleet Detailing Ottawa & Dealership Services | Autobahn","meta_description":"Fleet detailing Ottawa services for commercial vehicles and dealerships, delivering professional car cleaning, protection and consistent high-volume results."},{"page_url":"https://www.ottawacardetailing.net/book-online","title_tag":"Book Auto Detailing Ottawa Online | Autobahn","meta_description":"Book Ottawa car detailing services online, including interior detailing, exterior detailing, paint correction and ceramic coating packages for all vehicles."},{"page_url":"https://www.ottawacardetailing.net/hours-locations","title_tag":"Car Detailing Ottawa Location & Hours | Autobahn","meta_description":"Visit Autobahn Detailing Ottawa on Merivale Road. View our hours and contact details for professional auto detailing and car cleaning in Ottawa."},{"page_url":"https://www.ottawacardetailing.net/f-a-q","title_tag":"Auto Detailing Ottawa FAQ & Info | Autobahn","meta_description":"Find answers about our Ottawa car detailing services, booking, interior and exterior detailing, paint correction and ceramic coating options."},{"page_url":"https://www.ottawacardetailing.net/blog","title_tag":"Car Detailing Ottawa Tips & News Blog | Autobahn","meta_description":"Ottawa car detailing blog with tips on ceramic coating, paint correction, interior and exterior care, plus promotions on auto detailing services."}],"keywords":["Car Detailing Ottawa","Ottawa car detailing","Paint correction Ottawa","Ceramic coating Ottawa","Auto detailing services","Interior detailing Ottawa","Exterior detailing Ottawa","Fleet detailing Ottawa","Car cleaning Ottawa","Auto Detailing Ottawa"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  "@id": "https://www.ottawacardetailing.net/#autodetailing",
  "url": "https://www.ottawacardetailing.net/",
  "name": "Autobahn Detailing Ottawa",
  "description": "Autobahn Detailing Ottawa provides professional car detailing services in Ottawa, including interior and exterior detailing packages, paint correction, ceramic coating, and commercial fleet detailing.",
  "image": [
    "https://static.wixstatic.com/media/4040b1_3a56ab004b1c4f1da11a6cd41f9d7cd1~mv2.png/v1/crop/x_0,y_0,w_2299,h_808/fill/w_669,h_235,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/123568.png",
    "https://static.wixstatic.com/media/4040b1_ebb63b5587a2436fac7b5b758f61ab74~mv2.png/v1/crop/x_19,y_0,w_709,h_410/fill/w_851,h_479,al_c,lg_1,q_90,enc_avif,quality_auto/image.png",
    "https://static.wixstatic.com/media/4040b1_01b2f76e35f74ccba6708a9fa44d58bd~mv2.png/v1/fill/w_346,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/European-Car-Brands.png",
    "https://static.wixstatic.com/media/4040b1_ba6ff20f7b7e4a29a48174cb3874412b~mv2.png/v1/crop/x_1,y_13,w_603,h_385/fill/w_497,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6293837230fb025780ee296a.png",
    "https://static.wixstatic.com/media/4040b1_9f980203f50340bcb1ae74bfcd60fed1%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4040b1_9f980203f50340bcb1ae74bfcd60fed1%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/4040b1_9f980203f50340bcb1ae74bfcd60fed1%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4040b1_9f980203f50340bcb1ae74bfcd60fed1%7Emv2.jpg",
  "telephone": "+1-613-233-0336",
  "email": "autobahnspaottawa@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1010(R) Merivale Rd",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "postalCode": "K1Z 6A5",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.3909,
    "longitude": -75.7223
  },
  "areaServed": {
    "@type": "City",
    "name": "Ottawa"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/",
    "https://www.facebook.com/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Car Detailing Packages and Services",
    "url": "https://www.ottawacardetailing.net/services-1",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Bronze Detailing Package",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "89",
        "priceCurrency": "CAD",
        "category": "Car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Silver Detailing Package",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "159",
        "priceCurrency": "CAD",
        "category": "Car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Gold Detailing Package",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "189",
        "priceCurrency": "CAD",
        "category": "Car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Platinum Detailing Package",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "219",
        "priceCurrency": "CAD",
        "category": "Car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Diamond Detailing Package",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "499",
        "priceCurrency": "CAD",
        "category": "Car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Interior Only Detail With Shampoo",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "159",
        "priceCurrency": "CAD",
        "category": "Interior car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Exterior Detail + 3 Month Ceramic Wax",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "69",
        "priceCurrency": "CAD",
        "category": "Exterior car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Exterior Detail + Clay Bar Treatment + Ceramic Sealant + Window Water Repellent",
        "url": "https://www.ottawacardetailing.net/services-1",
        "price": "129",
        "priceCurrency": "CAD",
        "category": "Exterior car detailing",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Stage 1 Paint Correction",
        "url": "https://www.ottawacardetailing.net/ottawapaintcorrection",
        "price": "349",
        "priceCurrency": "CAD",
        "category": "Paint correction",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Stage 2 Paint Correction",
        "url": "https://www.ottawacardetailing.net/ottawapaintcorrection",
        "price": "599",
        "priceCurrency": "CAD",
        "category": "Paint correction",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "Stage 3 Paint Correction",
        "url": "https://www.ottawacardetailing.net/ottawapaintcorrection",
        "price": "849",
        "priceCurrency": "CAD",
        "category": "Paint correction",
        "eligibleVehicleType": "Sedan"
      },
      {
        "@type": "Offer",
        "name": "2 Year Ceramic Coating with 1 Stage Paint Correction",
        "url": "https://www.ottawacardetailing.net/ceramic-coating-ottawa",
        "price": "649",
        "priceCurrency": "CAD",
        "category": "Ceramic coating",
        "eligibleVehicleType": "Sedans & Coupes"
      },
      {
        "@type": "Offer",
        "name": "3 Year Ceramic Coating with 1 Stage Paint Correction",
        "url": "https://www.ottawacardetailing.net/ceramic-coating-ottawa",
        "price": "799",
        "priceCurrency": "CAD",
        "category": "Ceramic coating",
        "eligibleVehicleType": "Sedans & Coupes"
      },
      {
        "@type": "Offer",
        "name": "5 Year Ceramic Coating (2 Layers) with 1 Stage Paint Correction",
        "url": "https://www.ottawacardetailing.net/ceramic-coating-ottawa",
        "price": "949",
        "priceCurrency": "CAD",
        "category": "Ceramic coating",
        "eligibleVehicleType": "Sedans & Coupes"
      },
      {
        "@type": "Offer",
        "name": "Ceramic Coating Maintenance Wash with Reload & Clay Bar",
        "url": "https://www.ottawacardetailing.net/ceramic-coating-ottawa",
        "price": "159",
        "priceCurrency": "CAD",
        "category": "Ceramic coating maintenance",
        "eligibleVehicleType": "Sedans & Coupes"
      },
      {
        "@type": "Offer",
        "name": "2 Year Leather Seat Coating & Restore",
        "url": "https://www.ottawacardetailing.net/ceramic-coating-ottawa",
        "price": "179",
        "priceCurrency": "CAD",
        "category": "Leather coating",
        "eligibleVehicleType": "5 Seater Vehicles"
      }
    ]
  },
  "hasPart": [
    {
      "@type": "FAQPage",
      "@id": "https://www.ottawacardetailing.net/f-a-q#faq",
      "url": "https://www.ottawacardetailing.net/f-a-q",
      "name": "Autobahn Detailing Ottawa Frequently Asked Questions",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is your location?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're located at 1010(R) Merivale Road in the back. Please take the driveway beside Maple Delight Pizza to our shop in the back. We're located 2 minutes from both east and west highway ramps and the Westgate shopping center."
          }
        },
        {
          "@type": "Question",
          "name": "What are your business hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're currently open on Mondays from 9AM to 9PM, Tuesdays to Thursdays from 9AM to 6:30PM, Fridays & Saturdays from 9AM to 9PM. We have staff on site at 8:50am daily. For early drop offs, please give us a call at 613-233-0336 or feel free to leave your keys in our drop box located to the left of our main door."
          }
        },
        {
          "@type": "Question",
          "name": "Does Autobahn Detailing Ottawa offer mobile car detailing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don't offer mobile car detailing at the moment but we do plan to launch that as a new part of our company in the near future."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take you to detail my car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Detailing your vehicle can range from 1 to 3.5 hours depending on the package you choose and the complexity of the job. Large vehicles, vehicles with pet hair, and vehicles that are extremely soiled will be subject to extra time. On days with extreme heat, there may be delays as well."
          }
        },
        {
          "@type": "Question",
          "name": "My car smells strange. How can I get rid of the smell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend doing a full interior only detail with shampoo package and a ceiling detail to remove any smells in your vehicle. If the odour is really strong, we offer a $59 ozone odour removal treatment that can be effective in removing the odour in combination with the detailing. A second ozone treatment is always offered free of charge if any stubborn smells return. For tobacco smells, it's highly recommended that you change your cabin air filter prior to your appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a discount on my detailing package?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our prices are non negotiable. We use high-end machines, tools, and products and pay our staff higher than any detailing shop or luxury dealer in the Ottawa area. We do run 3 to 4 big promotions annually and offer special pricing for clients and companies bringing in 4+ vehicles."
          }
        }
      ]
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
