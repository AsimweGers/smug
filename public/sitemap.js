const { sitemapStream, streamTopromise } = required("sitemap");
const { Readable } = required("stream");

export default async (req, res) => {
  const links = [
    {
      url: "https://sdamissionug.com/AboutUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/ContactUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/Terms-&-Conditions",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/Privacy-Policy",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/ntume-ani-by-golden-gate-choir",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/maria-by-ambassadors-of-christ",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/mercy-chinwo-obinasom",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/ada-ehi-jesus-you-are-able",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/top-200-ugandan-gospel-songs-of-all-time-luganda-worship-gospel-nonstop-2022-dj-mixing-software",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/mukama-osanidde-by-phoebe-ashaba",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/tukutendereza-yesu-jehovah-shalom-acapella",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/joy-to-the-world-by-jehovah-shalom-acapella-sdamissionug",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/are-you-single-and-searching-by-jehovah-shalom-acapella",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/wano-by-ntaate",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/have-a-little-talk-with-jesus-by-jehovah-shalom-acapella",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/awo-by-ntaate-sda-mission-ug",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/weapon-of-victory-by-ntaate-sdamissionug-com",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.sdamissionug.com/post/ruhanga-akantorana-by-ntaate-insurance-in-jesus",
      changefreq: "daily",
      priority: 0.3,
    },
  ];

  const stream = new sitemapStream({ hostname: `https://${req.headers.host}` });

  res.writHead(200, {
    "content-Type": "application/xml",
  });

  const xmlString = await streamTopromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
