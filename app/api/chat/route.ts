// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Единый клиент для всех моделей через routerai.ru
const client = new OpenAI({
  apiKey: process.env.ROUTERAI_API_KEY || '',
  baseURL: 'https://routerai.ru/api/v1',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Валидация сообщений
    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: 'Неверный формат сообщений' },
        { status: 400 },
      );
    }

    // 2. Безопасные параметры с приведением типов
    const model = body.model || 'deepseek/deepseek-v4-pro';

    // Температура: ограничиваем 0–1
    let temperature = parseFloat(body.temperature);
    if (isNaN(temperature)) temperature = 0.7;
    temperature = Math.min(Math.max(temperature, 0), 1);

    // Максимальное количество токенов: ограничиваем 100–4096
    let max_tokens = parseInt(body.max_tokens, 10);
    if (isNaN(max_tokens)) max_tokens = 1000;
    max_tokens = Math.min(Math.max(max_tokens, 100), 4096);

    // Системный промпт (может отсутствовать)
    const systemPrompt = body.systemPrompt || undefined;

    // 3. Формируем сообщения
    const messagesWithSystem = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...body.messages]
      : body.messages;

    // 4. Запрос к LLM
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