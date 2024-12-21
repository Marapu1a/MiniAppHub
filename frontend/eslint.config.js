import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Файлы, которые проверяются
    languageOptions: {
      parser: tsParser, // Используем парсер TypeScript
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Поддержка JSX
        ecmaVersion: 'latest', // Версия ECMAScript
        sourceType: 'module', // Модули ES
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Плагин TypeScript
      react: reactPlugin, // Плагин React
      'react-hooks': reactHooksPlugin, // Правила для React hooks
      prettier: prettierPlugin, // Интеграция Prettier
    },
    rules: {
      ...prettierConfig.rules, // Используем правила из Prettier
      'prettier/prettier': 'error', // Ошибка, если код не форматирован Prettier
      'react/react-in-jsx-scope': 'off', // Не нужен React import в новых версиях
      'react/jsx-uses-react': 'off', // Тоже не нужен
      'react-hooks/rules-of-hooks': 'error', // Проверка использования хуков
      'react-hooks/exhaustive-deps': 'warn', // Предупреждение о зависимостях в хуках
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }, // Игнорируем переменные с префиксом "_"
      ],
      'no-console': 'warn', // Предупреждение при console.log
      'no-debugger': 'warn', // Предупреждение при использовании debugger
    },
  },
];
