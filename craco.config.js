const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@testHelpers": path.resolve(__dirname, "src/utils/testHelpers"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "@assets/(.*)": ["<rootDir>/src/assets/$1"],
        "@atoms/(.*)": ["<rootDir>/src/components/atoms/$1"],
        "@molecules/(.*)": ["<rootDir>/src/components/molecules/$1"],
        "@organisms/(.*)": ["<rootDir>/src/components/organisms/$1"],
        "@pages/(.*)": ["<rootDir>/src/pages/$1"],
        "@templates/(.*)": ["<rootDir>/src/templates/$1"],
        "@testHelpers": ["<rootDir>/src/utils/testHelpers"],
        "@utils/(.*)": ["<rootDir>/src/utils/$1"],
      },
      testEnvironment: "jsdom",
    },
  },
};
