# Image Processing Package

This package provides simple image processing functionalities in JavaScript.

## Installation

To install the package, run the following command:

```bash
npm install image-processing
```

## Usage

```javascript
const { grayscale, blur } = require('image-processing');

// Apply grayscale filter to an image
grayscale('input.jpg', 'output-grayscale.jpg');

// Apply blur filter to an image
blur('input.jpg', 'output-blur.jpg');
```

## Functions

### grayscale(imagePath, outputPath)

Applies a grayscale filter to an image.

- `imagePath`: Path to the input image.
- `outputPath`: Path where the processed image will be saved.

### blur(imagePath, outputPath)

Applies a blur filter to an image.

- `imagePath`: Path to the input image.
- `outputPath`: Path where the processed image will be saved.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
