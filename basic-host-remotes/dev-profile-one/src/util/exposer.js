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

module.exports = { exposer };
