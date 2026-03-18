const pptxgen = require('pptxgenjs');
const path = require('path');
const html2pptx = require(path.join(
  'C:/Users/Usuario UTP/.claude/plugins/cache/anthropic-agent-skills/example-skills/69c0b1a06741/skills/pptx/scripts/html2pptx.js'
));

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Administración de Operaciones 2';
  pptx.title = 'PL en Acción - Semana 5 Clase 2';

  const slidesDir = path.join(__dirname, 'slides');

  for (let i = 1; i <= 24; i++) {
    const num = String(i).padStart(2, '0');
    const htmlFile = path.join(slidesDir, `slide${num}.html`);
    console.log(`Processing slide ${num}...`);
    try {
      await html2pptx(htmlFile, pptx);
    } catch (e) {
      console.error(`Error on slide ${num}:`, e.message);
      throw e;
    }
  }

  const outFile = path.join(__dirname, 'PL_en_Accion_Semana5_v3.pptx');
  await pptx.writeFile({ fileName: outFile });
  console.log(`Presentation saved: ${outFile}`);
}

createPresentation().catch(e => { console.error(e); process.exit(1); });
