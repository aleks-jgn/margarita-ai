'use client';

export default function Error({ error, reset, }: { error: Error & { digest?: string }; reset: () => void; }) {
  return (
    <div className="flex h-screen items-center justify-center"> <div className="text-center"> <h2 className="text-xl font-bold text-gray-800 mb-4">Ой, что-то пошло не так!</h2> <p className="text-gray-600 mb-4">{error.message}</p> <button onClick={reset} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" > Попробовать снова </button> </div> </div>
  );
}
