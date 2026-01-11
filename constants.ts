
import { BodyPart } from './types';

export const BODY_PARTS_INITIAL: BodyPart[] = [
  { id: 'head', vn: 'Đầu', en: 'Head', description: '', x: 30, y: 35, tx: 40, ty: 42 },
  { id: 'eye', vn: 'Mắt', en: 'Eye', description: '', x: 15, y: 28, tx: 32, ty: 38 },
  { id: 'teeth', vn: 'Răng', en: 'Teeth', description: '', x: 12, y: 55, tx: 35, ty: 50 },
  { id: 'body', vn: 'Thân', en: 'Body', description: '', x: 60, y: 15, tx: 55, ty: 55 },
  { id: 'scales', vn: 'Vảy', en: 'Scales', description: '', x: 80, y: 35, tx: 70, ty: 58 },
  { id: 'tail', vn: 'Đuôi', en: 'Tail', description: '', x: 85, y: 80, tx: 75, ty: 85 },
];

export const CLEAN_PYTHON_PROMPT = "Full body shot of a friendly 3D cartoon python, extra long winding body coiled in a beautiful S-shape. The python is smiling happily and showing its small cute white teeth. CRITICAL: The entire snake from its head to the very tip of its tail must be fully contained within the frame, with plenty of empty space around the edges so nothing is cut off. Vibrant green and golden skin textures, Pixar-style animation. Soft cinematic lighting, clean light cream pastel background. 8k resolution, high detail. NO TEXT, NO LABELS, NO LINES.";
