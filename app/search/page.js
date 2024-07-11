import ProductListingSection from "@/components/product/ProductListingSection";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

const SearchPage = async ({ searchParams }) => {
  if (!searchParams || !searchParams.q) {
    return (
      <>
        <h1>No search query provided</h1>
      </>
    );
  }

  try {
    const searchKey = searchParams.q;
    const client = createClient();
    const doc = await client.getAllByType("product_page", {
      filters: [prismic.filter.fulltext("my.product_page.title", searchKey)],
    });

    const data = doc;

    return (
      <>
        <ProductListingSection data={data} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <>
        <h1>Error fetching data</h1>
      </>
    );
  }
};

export default SearchPage;
