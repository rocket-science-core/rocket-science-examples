// fedBuilder should retrieve exported modules along with
// their paths from a federated components directory

/**
 * Example exposes objest for modfed plugin
 * 
 exposes: {
  "./Profile": "./src/components/federated/Profile",
 },
 * 
**/

// key: ./DefaultExportedModule
// Value: ./src/components/federated/DefaultExportedModule

const { readdirSync } = require("fs");

function exposer() {
  const basePath = "src/components/federated";
  const files = readdirSync(basePath);
  const exposes = {};
  files.forEach((file) => {
    const fileName = file.split(".")[0];
    const filePath = `${basePath}/${fileName}`;
    exposes[`./${fileName}`] = `./${filePath}`;
  });
  console.log("exports: ", exposes);
  return exposes;
}

exposer();

module.exports = { exposer };
