import { PDFDocument } from 'pdf-lib';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { courseName, userName } = req.body;

  try {
    const pdfBytes = await generateCertificate(courseName, userName);
    res.setHeader('Content-Type', 'application/pdf');
    res.status(200).send(pdfBytes);
  } catch (error) {
    console.error('Error generating certificate:', error);
    res.status(500).end();
  }
}

async function generateCertificate(courseName, userName) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();

  // Ajoutez les informations du certificat à la page PDF
  const fontSize = 20;
  const textX = 50;
  const textY = height - 50;

  page.drawText(`Certificat de réussite`, { x: textX, y: textY, size: fontSize });
  page.drawText(`Cours: ${courseName}`, { x: textX, y: textY - 50, size: fontSize });
  page.drawText(`Utilisateur: ${userName}`, { x: textX, y: textY - 100, size: fontSize });

  // Retourne les données du PDF généré
  return await pdfDoc.save();
}
