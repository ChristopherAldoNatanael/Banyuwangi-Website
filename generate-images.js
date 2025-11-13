const https = require("https");
const fs = require("fs");
const path = require("path");

// AI-generated images for Banyuwangi culture - using Pollinations.ai (free AI image generation)
const imagePrompts = {
  // Pekerjaan page (missing images)
  "pengusaha-entrepreneur-banyuwangi.jpg": "A successful Indonesian entrepreneur from Banyuwangi, wearing traditional attire, managing a modern workshop with advanced tools, smiling confidently, high quality, photorealistic",
  "tukang-skilled-worker-banyuwangi.jpg": "A skilled local craftsman from Banyuwangi, working on traditional woodworking, wearing casual work clothes, surrounded by beautiful handcrafted furniture, professional photography",
  "pedagang-trader-banyuwangi.jpg": "A local trader at Banyuwangi traditional market, selling fresh local products, smiling happily, diverse market stalls in background, vibrant Indonesian culture",

  // Adat Tradisi page (missing images)
  "upacara-kematian-funeral-ceremony.jpg": "Traditional Indonesian funeral ceremony in Banyuwangi, respectful atmosphere with family members, traditional rituals, beautiful scenery, peaceful and respectful",
  "gotong-royong-community-work.jpg": "Community gotong royong event in Banyuwangi village, people working together building community hall, traditional cooperation, smiles and unity, vibrant colors",
  "perayaan-festival-celebration.jpg": "Colorful Indonesian festival celebration in Banyuwangi, traditional dances, gamelan music, happy crowds, festive atmosphere, vibrant cultural performance",
  "makan-bersama-communal-meal.jpg": "Beautiful communal meal scene in Banyuwangi, traditional Indonesian food laid out, family and friends eating together, warm atmosphere, traditional setting",
};

// Function to download image from free AI service
function downloadImage(filename, prompt) {
  return new Promise((resolve, reject) => {
    // Using Pollinations.ai - free AI image generation
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=600&model=flux&seed=42`;

    console.log(`Generating: ${filename}...`);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: HTTP ${response.statusCode}`));
        return;
      }

      const filepath = path.join("public", filename);
      const file = fs.createWriteStream(filepath);

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✅ Generated: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(new Error(`Error downloading ${filename}: ${err.message}`));
    });
  });
}

// Create public directory if it doesn't exist
if (!fs.existsSync("public")) {
  fs.mkdirSync("public");
}

// Generate all missing images sequentially
async function generateImages() {
  const filenames = Object.keys(imagePrompts);

  console.log("🚀 Starting AI image generation for Banyuwangi cultural elements...\n");

  for (const filename of filenames) {
    try {
      await downloadImage(filename, imagePrompts[filename]);
      // Add small delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Failed to generate ${filename}:`, error.message);
    }
  }

  console.log("\n🎉 Image generation completed!");
  console.log(`Generated ${filenames.length} cool and attractive AI images for Banyuwangi culture.`);
  console.log("These images showcase the beauty of Indonesian traditions and local culture.");
}

generateImages();
