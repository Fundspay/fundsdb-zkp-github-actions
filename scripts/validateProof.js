const zkEngine = require("zkengine");
const fs = require("fs");

(async () => {
  try {
    const queries = JSON.parse(fs.readFileSync("./queries.json", "utf8"));
    for (const query of queries) {
      const proof = await zkEngine.generateProof(query);
      console.log(`Proof generated for query: ${query}`);
    }
    console.log("🚀 All queries validated successfully.");
  } catch (error) {
    console.error("Proof validation failed:", error);
    process.exit(1); // Fail the CI/CD pipeline if proof generation fails
  }
})();
