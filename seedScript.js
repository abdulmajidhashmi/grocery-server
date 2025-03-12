import "dotenv/config.js";
import mongoose from "mongoose";
import { Category, Product, Upload } from "./src/models/index.js"; // Import Upload Model
import { categories, products, uploads } from "./seedData.js"; // Ensure you have upload data

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // Clear old data
        await Product.deleteMany({});
        await Category.deleteMany({});
        await Upload.deleteMany({}); // Delete old uploads

        // Insert Categories
        const categoryDocs = await Category.insertMany(categories);
        const categoryMap = categoryDocs.reduce((map, category) => {
            map[category.name] = category._id;
            return map;
        }, {});

        // Assign category IDs to products
        const productWithCategoryIds = products.map((product) => ({
            ...product,
            category: categoryMap[product.category],
        }));

        await Product.insertMany(productWithCategoryIds);

        // Insert Uploads if needed
        if (uploads && uploads.length > 0) {
            await Upload.insertMany(uploads);
        }

        console.log("DATABASE SEEDED SUCCESSFULLY ✅");
    } catch (error) {
        console.error("Error Seeding Database:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
