const generatePDF = require('./pdf-generator');

// Define the output path and content for the PDF
const outputPath = 'example.pdf';
const content = 'Hello, this is a PDF generated using the pdf-generator package!';

// Generate the PDF
generatePDF(outputPath, content);
