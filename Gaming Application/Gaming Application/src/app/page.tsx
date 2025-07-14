'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import GameCard from '../components/GameCard';

type Game = {
  id: number;
  name: string;
  poster: string;
  releaseYear: string;
  developer: string;
  category: string;
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const categories = ['Action', 'Drama', 'History', 'Horror', 'Fantasy'];

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('/api/games')
      .then((res) => setGames(res.data))
      .catch(() => setError('Failed to load games.'))
      .finally(() => setLoading(false));
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase()) ||
    game.developer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">🎮 Explore Games by Category</h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search games or developers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
          </div>
        )}
        {error && (
          <div className="text-center text-red-400 mb-4">{error}</div>
        )}
        {!loading && !error && categories.map((cat) => {
          const catGames = filteredGames.filter((g) => g.category === cat);
          if (catGames.length === 0) return null;
          return (
            <div key={cat} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">{cat}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {catGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          );
        })}
        {!loading && !error && filteredGames.length === 0 && (
          <div className="text-center text-gray-400">No games found.</div>
        )}
      </div>
    </main>
  );
}
