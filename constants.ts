
import { BodyPart } from './types';

export const BODY_PARTS_INITIAL: BodyPart[] = [
  { id: 'head', vn: 'Đầu', en: 'Head', description: '', x: 25, y: 30, tx: 35, ty: 40 },
  { id: 'eye', vn: 'Mắt', en: 'Eye', description: '', x: 12, y: 25, tx: 28, ty: 35 },
  { id: 'teeth', vn: 'Răng', en: 'Teeth', description: '', x: 10, y: 50, tx: 32, ty: 48 },
  { id: 'body', vn: 'Thân', en: 'Body', description: '', x: 50, y: 15, tx: 50, ty: 50 },
  { id: 'scales', vn: 'Vảy', en: 'Scales', description: '', x: 75, y: 35, tx: 65, ty: 55 },
  { id: 'tail', vn: 'Đuôi', en: 'Tail', description: '', x: 80, y: 75, tx: 70, ty: 80 },
];

export const CLEAN_PYTHON_PROMPT = "A friendly 3D cartoon python with an extra long, winding body that curves gracefully in a S-shape. The python is smiling widely showing small cute teeth. CRITICAL: The entire snake, including the very tip of its tail and its head, must be fully visible and centered in the frame with significant empty space (padding) around all sides. Vibrant green and golden skin patterns, high-quality Pixar animation style. Soft studio lighting, clean light cream-colored pastel background. High detail, 8k. NO TEXT, NO LABELS, NO LINES.";
