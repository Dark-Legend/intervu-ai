import { FEEDBACK_PROMPT } from "@/app/constant";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { conversation } = await req?.json();
  const feedback = FEEDBACK_PROMPT?.replace(
    "{{conversation}}",
    JSON.stringify(conversation)
  );
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: OPENAI_API_KEY,
    });
    const completion = await openai.chat.completions.create({
      model: "google/gemma-3-27b-it:free",
      messages: [
        {
          role: "user",
          content: feedback,
        },
      ],
    });
    const extractedData = completion?.choices[0].message;
    return NextResponse.json({ data: extractedData });
  } catch (err) {
    return NextResponse.json(err);
  }
}
