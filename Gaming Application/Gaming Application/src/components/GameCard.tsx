type Game = {
    id: number;
    name: string;
    poster: string;
    releaseYear: string;
    developer: string;
    category: string;
};

export default function GameCard({ game }: { game: Game }) {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
            <img src={game.poster} alt={game.name} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="mt-2 text-lg font-bold text-white">{game.name}</h2>
            <p className="text-sm text-gray-300 font-medium">Developer: <span className="text-yellow-300 font-semibold">{game.developer}</span></p>
            <p className="text-sm text-gray-300 font-medium">Released: <span className="text-green-300 font-semibold">{game.releaseYear}</span></p>
        </div>
    );
}
