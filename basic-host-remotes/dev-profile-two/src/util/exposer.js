const { readdirSync } = require("fs");

function exposer(basePath) {
  const path = basePath ? basePath : "src/features";
  const files = readdirSync(path);
  const exposes = {};
  files.forEach((file) => {
    const fileName = file.split(".")[0];
    const filePath = `${path}/${fileName}`;
    exposes[`./${fileName}`] = `./${filePath}`;
  });
  console.log("exports: ", exposes);
  return exposes;
}

module.exports = { exposer };
