const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "@utils/(.*)": ["<rootDir>/src/utils/$1"],
      },
      testEnvironment: "jsdom",
    },
  },
};
