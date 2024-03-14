// image-processing.js

/**
 * Applies a grayscale filter to an image.
 * @param {string} imagePath - The path to the input image.
 * @param {string} outputPath - The path where the processed image will be saved.
 */
function grayscale(imagePath, outputPath) {
    // Your grayscale processing logic here
    console.log(`Processing image ${imagePath}...`);
    console.log(`Applying grayscale filter...`);
    console.log(`Saving processed image to ${outputPath}`);
}

/**
 * Applies a blur filter to an image.
 * @param {string} imagePath - The path to the input image.
 * @param {string} outputPath - The path where the processed image will be saved.
 */
function blur(imagePath, outputPath) {
    // Your blur processing logic here
    console.log(`Processing image ${imagePath}...`);
    console.log(`Applying blur filter...`);
    console.log(`Saving processed image to ${outputPath}`);
}

module.exports = {
    grayscale,
    blur
};
