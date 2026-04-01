import { QUESTION_GENERATE_PROMPT } from "@/app/constant";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

function extractJSONArray(text: string) {
  const match = text.match(/\[\s*{[\s\S]*}\s*\]/);
  return match ? match[0] : null;
}

function safeParseJSON(data: unknown) {
  try {
    if (typeof data === "object") return data;

    if (typeof data !== "string") return [];

    const cleaned = data
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const jsonString = extractJSONArray(cleaned);

    if (!jsonString) {
      console.error("No valid JSON found:", cleaned);
      return [];
    }

    return JSON.parse(jsonString);
  } catch (err) {
    console.error("Parsing failed:", err, data);
    return [];
  }
}

export async function POST(request: NextRequest) {
  const { jobDescription, jobPosition, duration, type } = await request?.json();
  const questionPrompt = QUESTION_GENERATE_PROMPT?.replace(
    "{{jobDescription}}",
    jobDescription,
  )
    ?.replace("{{jobPosition}}", jobPosition)
    ?.replace("{{duration}}", duration)
    ?.replace("{{type}}", type);
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: OPENAI_API_KEY,
    });
    const completion = await openai.chat.completions.create({
      model: "nvidia/nemotron-3-super-120b-a12b:free",
      messages: [
        {
          role: "user",
          content: questionPrompt,
        },
      ],
    });
    const extractedData = completion?.choices[0].message.content;

    const parsedData = safeParseJSON(extractedData);

    return NextResponse.json({ data: parsedData });
  } catch (e) {
    return NextResponse.json(e);
  }
}
