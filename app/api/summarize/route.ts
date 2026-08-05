import { NextRequest, NextResponse } from "next/server";
import { getData } from "pdf-parse/worker";
import { PDFParse } from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

PDFParse.setWorker(getData());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: NextRequest) {
  let parser: PDFParse | null = null;

  try {
    const formData = await req.formData();
    const pdf = formData.get("pdf");

    if (!(pdf instanceof File)) {
      return NextResponse.json(
        { error: "No PDF uploaded." },
        { status: 400 }
      );
    }

    // PDF → Text
    const arrayBuffer = await pdf.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    parser = new PDFParse({
      data: buffer,
    });

    const result = await parser.getText();
    const text = result.text.trim();

    if (!text) {
      return NextResponse.json(
        {
          error:
            "No text could be extracted from this PDF. It may be scanned or image-based.",
        },
        { status: 400 }
      );
    }

    // Gemini
   const model = genAI.getGenerativeModel({
  model: "gemini-3.1-flash-lite-preview",
});

    const prompt = `
You are Smart Notes AI, an expert study-notes generator.

Analyze the following PDF content and create clear, structured,
exam-friendly study notes.

IMPORTANT RULES:
- Do not invent information.
- Use only information present in the PDF.
- Keep explanations simple and easy to understand.
- Preserve the logical topic/chapter structure where possible.
- Highlight important concepts, definitions, facts and examples.
- Avoid unnecessary repetition.

Create the output in this structure:

# Smart Study Notes

## 📚 Topics / Chapters
Organize the content logically by topic or chapter.

## 🧠 Main Concepts
Explain the most important concepts clearly.

## 📌 Key Points
List the important facts and points.

## 📖 Important Definitions
Include important definitions from the PDF.

## ❓ Important Questions
Create useful exam-oriented questions based ONLY on the PDF.

## ⚡ Quick Revision
Give a short revision section containing the most important things to remember.

## 🎯 Key Takeaways
Give 3-7 concise takeaways.

PDF CONTENT:

${text}
`;

    const aiResult = await model.generateContent(prompt);
   const notes = aiResult.response.text();

   console.log("========== GEMINI RESPONSE ==========");
console.log(notes);
console.log("======================================");
    return NextResponse.json({
      success: true,
      fileName: pdf.name,
      pages: result.total,
      notes,
    });

  } catch (error) {
    console.error("SMART NOTES ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate Smart Notes.",
      },
      { status: 500 }
    );

  } finally {
    if (parser) {
      await parser.destroy();
    }
  }
}