import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, } from "../modules/apiSimulator.js";

const displayProductData = (): Promise<void> => {
    return fetchProductCatalog()
        // Getting products, then fetching reviews
        .then((products) => {
            console.log("Products:");
            products.forEach((product) => {
                console.log(`-${product.name}: $${product.price}`);
            });

            const reviewPromises = products.map((product) =>
                fetchProductReviews(product.id).then((reviews) => ({ product, reviews }) => {
            ));
            return Promise.all(reviewPromises);
        })

        //fetch sales report
        .then((productReviews) => {
            productReviews.forEach(({ product, reviews }) => {
                console.log(`Reviews for this ${product.name}:`);
                reviews.forEach((review) => {
                    console.log(`${review.reviewer} (${review.rating}/5): ${review.comment}`);
                });
            });
            return fetchSalesReport();
        })

        //display sales report 
        .then((report) => {
      console.log("Sales Report:");
      console.log(`  Total sales: $${report.totalSales}`);
      console.log(`  Units sold: ${report.unitsSold}`);
      console.log(`  Average price: $${report.averagePrice}`);
        })

        //error handling
        .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("All API calls have been attempted.");
    });
};


