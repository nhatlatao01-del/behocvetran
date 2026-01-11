
import { GoogleGenAI, Type } from "@google/genai";
import { PythonFact } from "../types";

const API_KEY = process.env.API_KEY || "";

export const generatePythonImage = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image data found in response");
};

export const getPythonFacts = async (): Promise<PythonFact[]> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: "Hãy liệt kê 3 sự thật thú vị về loài trăn dành cho trẻ em mầm non. Trả lời bằng tiếng Việt dưới định dạng JSON array với các thuộc tính 'title' và 'content'.",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ["title", "content"]
        }
      }
    }
  });

  return JSON.parse(response.text || "[]");
};
