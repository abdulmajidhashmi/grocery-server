# grocery-service
Hi Dear, 
Thank you for claiming this project!

Here are the steps to setup:

1️⃣ Server Setup

Step 1: Configure Environment Variables

Navigate to the server folder.
Rename env.local to .env.
Update the following values with your credentials:
MONGO_URI=your_mongo_uri
USERNAME=your_username
PASSWORD=your_password

Step 2: Install Dependencies & Seed Data

Run the following command to install dependencies:
npm i --force
Seed the database by running:
node seedScript
Once the data is seeded successfully, start the server:
npm start

Step 3: Update Configuration

Open src/config/config.js.
Uncomment the commented section and comment the existing one.

Step 4: Admin Login & Setup

Open the admin panel in your browser:
http://localhost:3000/admin

Login with the following credentials:

Email: ritik@gmail.com  
Password: 12345678  

Manually add an Admin user.
Revert the configuration changes to use your own database admin.

Step 5: Create Branch & Assign Delivery Partner

In the Admin Panel, create a Branch and a Delivery Partner with nearby location (latitude, longitude, and address).
Link and assign both accordingly.

🎉 Server setup complete!