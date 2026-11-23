// Introvideoene. site/video/videoer.mjs henter dem og skriver src/data/videoer.json før bygget.
// Mangler filen (lokalt, LKK-profilen, PR fra fork), bygges siden uten video.
import fs from 'node:fs';
import path from 'node:path';

const FILE = path.join(process.cwd(), 'src', 'data', 'videoer.json');
const data = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : {};

export const video = (id) => data[id] ?? null;
