const imagemin = require('imagemin');
const imageminFormat = require('imagemin-[FORMAT]');

async function convertImage(inputPath, outputFormat) {
  const formatPlugin = require(`imagemin-${outputFormat}`);

  const files = await imagemin([inputPath], {
    destination: 'output',
    plugins: [
      formatPlugin()
    ]
  });

  console.log('[!] Image converted successfully!');
}
