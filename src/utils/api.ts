/** @format */
export default (() => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  async function getProducts() {
    try {
      const url = `${BASE_URL}/products`;
      const response = await fetch(url);

      return response.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  return {
    getProducts,
  };
})();
