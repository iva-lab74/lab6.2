
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

export const fetchProductReviews = (productId: number): Promise<{ id: number; reviewer: string; rating: number; comment: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, reviewer: "Paul", rating: 5, comment: "Satisfied!" },
                    { id: 2, reviewer: "Molly", rating: 5, comment: "Great Product." },
                ]);
            } else {
                reject(`Failed to fetch reviews for product ID ${productId}".`);
            }
        }, 1500);
    });
};


export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                     totalSales: 60000, unitsSold: 300, averagePrice: 40, 
                });
            } else {
                reject(`Failed to fetch sales report.`);
            }
        }, 1000);
    });

};

