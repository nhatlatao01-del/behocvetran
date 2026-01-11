
export interface BodyPart {
  id: string;
  vn: string;
  en: string;
  description: string;
  x: number; // Tọa độ nhãn dán (phần trăm)
  y: number;
  tx: number; // Tọa độ đầu mũi tên (phần trăm)
  ty: number;
}

export interface PythonFact {
  title: string;
  content: string;
}

export interface GenerationResult {
  imageUrl: string;
  prompt: string;
}
