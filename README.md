# PDF Generator

A simple JavaScript package for generating PDF documents.

## Installation

To install the package, use npm:

```
npm install pdf-generator
```

## Usage

```javascript
const generatePDF = require('pdf-generator');

// Define the output path and content for the PDF
const outputPath = 'example.pdf';
const content = 'Hello, this is a PDF generated using the pdf-generator package!';

// Generate the PDF
generatePDF(outputPath, content);
```

## API

### `generatePDF(outputPath, content)`

Generates a PDF document with the specified content and saves it to the given output path.

- `outputPath` (string): The path where the generated PDF file will be saved.
- `content` (string): The content to be included in the PDF document.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
