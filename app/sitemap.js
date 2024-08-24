import { createClient } from "@/prismicio";

const websiteUrl = `https://${process.env.PRISMIC_ID}.${process.env.TLD}`;

const generateSiteMap = async () => {
  const links = [
    { uid: "" },
    { uid: "about" },
    { uid: "collections" },
    { uid: "categories" },
    { uid: "deals" },
    { uid: "blogs" },
    { uid: "customize" },
    { uid: "contact" },
    { uid: "shop" },
    { uid: "return-exchange-policy" },
    { uid: "shipping-policy" },
    { uid: "privacy-policy" },
    { uid: "terms-conditions" },
  ];

  const client = createClient();

  const product = await client.getAllByType("product_page");

  const category = await client.getAllByType("category_page");
  const collection = await client.getAllByType("collection_page");

  const blog = await client.getAllByType("blog_post");

  // Wait for the promises to resolve
  const [product_page, category_page, collection_page, blog_post] =
    await Promise.all([product, category, collection, blog]);

  const data = [...links, ...product_page];

  const slug = data.map((item) => ({
    url: `${websiteUrl}/${item?.uid}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const categorySlug = category_page.map((item) => ({
    url: `${websiteUrl}/category/${item?.uid}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const collectionSlug = collection_page.map((item) => ({
    url: `${websiteUrl}/collection/${item?.uid}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const blogSlug = blog_post.map((item) => ({
    url: `${websiteUrl}/blog/${item?.uid}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const sitemap = [...slug, ...categorySlug, ...collectionSlug, ...blogSlug];

  return sitemap;
};

const sitemap = async () => {
  const res = await generateSiteMap();
  return res;
};

export default sitemap;
