module.exports = {
  server: {
    baseDir: "./dist",
    "routes": {
      "/signup": "dist/signup.html"
    }
  },
  files: ["./dist/**/*"], // Watch for changes in the dist directory
};


