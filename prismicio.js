import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
  // Examples:
  {
    type: "home_page",
    path: "/",
  },
  {
    type: "about_page",
    path: "/about",
  },
  {
    type: "collections_page",
    path: "/collections",
  },
  {
    type: "categories_page",
    path: "/categories",
  },
  {
    type: "category_page",
    path: "/categories/:uid",
  },
  {
    type: "blogs_page",
    path: "/blogs",
  },
  {
    type: "blog_post",
    path: "/blog/:uid",
  },
  {
    type: "product_page",
    path: "/:uid",
  },
  {
    type: "customize_page",
    path: "/customize",
  },
  {
    type: "contact_page",
    path: "/contact",
  },
  {
    type: "return_exchange_policy",
    path: "/return-exchange-policy",
  },
  {
    type: "shipping_policy_page",
    path: "/shipping-policy",
  },
  {
    type: "privacy_policy_page",
    path: "/privacy-policy",
  },
  {
    type: "terms_condition_page",
    path: "/terms-conditions",
  },

  // {
  //   type: "category_page",
  //   path: "/categories/:slug",
  // },
  // {
  //   type: "privacy_policy_page",
  //   path: "/privacy-policy",
  // },
  // {
  //   type: "terms_and_conditions_page",
  //   path: "/terms-conditions",
  // },
  // {
  //   type: "return_exchange_policy_page",
  //   path: "/return-exchange-policy",
  // },
  // {
  //   type: "shipping_policy_page",
  //   path: "/shipping-policy",
  // },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    fetchOptions: {
      // cache: "no-store",
      next: { tags: ["prismic"], revalidate: 5 },
    },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
