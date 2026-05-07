// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Единый клиент для всех моделей через routerai.ru
const client = new OpenAI({
  apiKey: process.env.ROUTERAI_API_KEY || '',
  baseURL: 'https://routerai.ru/api/v1',
});

export async function POST(request: NextRequest) {
  try {
    const {
      messages,
      model = 'deepseek/deepseek-v4-pro',   // модель по умолчанию
      temperature = 0.7,
      max_tokens = 1000,
      systemPrompt,
    } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Неверный формат сообщений' },
        { status: 400 },
      );
    }

    // Добавляем системное сообщение, если задан стиль
    const messagesWithSystem = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    const completion = await client.chat.completions.create({
      model,
      messages: messagesWithSystem,
      temperature,
      max_tokens,
    });

    return NextResponse.json({
      content: completion.choices[0].message.content,
      role: 'assistant',
    });
  } catch (error) {
    console.error('Ошибка API:', error);
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: `Ошибка API: ${error.message}` },
        { status: error.status || 500 },
      );
    }
    return NextResponse.json(
      { error: 'Не удалось обработать запрос' },
      { status: 500 },
    );
  }
}