// src/lib/modelConfig.ts

export interface ModelInfo {
  id: string;
  name: string;
  description: string;
  provider: 'routerai'; // теперь все модели через одного провайдера
}

// Доступные модели – только две
export const AVAILABLE_MODELS: ModelInfo[] = [
  {
    id: 'deepseek/deepseek-v4-pro',
    name: 'DeepSeek V4 Pro',
    description: 'Лучшая модель для кода и сложного анализа',
    provider: 'routerai',
  },
  {
    id: 'qwen/qwen3.6-flash',
    name: 'Qwen3.6 Flash',
    description: 'Быстрые и точные ответы, отличный баланс',
    provider: 'routerai',
  },
];

export interface StyleInfo {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
}

// Предустановленные стили общения (без изменений)
export const CHAT_STYLES: StyleInfo[] = [
  {
    id: 'standard',
    name: 'Стандартный',
    description: 'Универсальный помощник',
    systemPrompt: 'Ты полезный и вежливый AI-ассистент.',
  },
  {
    id: 'creative',
    name: 'Творческий',
    description: 'Нестандартные и креативные ответы',
    systemPrompt:
      'Ты творческий помощник. Отвечай нешаблонно, используй метафоры, генерируй оригинальные идеи.',
  },
  {
    id: 'business',
    name: 'Деловой',
    description: 'Формальный и лаконичный стиль',
    systemPrompt:
      'Ты деловой консультант. Отвечай строго по делу, используй профессиональную лексику, будь лаконичен.',
  },
  {
    id: 'expert',
    name: 'Технический эксперт',
    description: 'Глубокие технические объяснения',
    systemPrompt:
      'Ты технический эксперт. Давай подробные, точные и развернутые ответы с примерами кода, если требуется.',
  },
  {
    id: 'friendly',
    name: 'Дружелюбный',
    description: 'Неформальное и тёплое общение',
    systemPrompt:
      'Ты дружелюбный собеседник. Общайся легко, с юмором, поддерживай непринуждённую беседу.',
  },
  {
    id: 'mentor',
    name: 'Наставник',
    description: 'Объясняет понятно и терпеливо',
    systemPrompt:
      'Ты наставник. Объясняй сложные вещи простым языком, будь терпелив, задавай наводящие вопросы.',
  },
];