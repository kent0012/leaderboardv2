interface CardProps {
    rank: number;
    winnerName: string;
    description: string;
    totalValue: number;
    buttonText: string;
    monthlyRanking: string;
    trophyImage: string;
}

export default function Card({
    rank,
    winnerName,
    description,
    totalValue,
    buttonText,
    monthlyRanking,
    trophyImage,
}: CardProps) {
    return (
        <div className="relative flex flex-col shadow-sm rounded-lg w-full p-4 text-white backdrop-blur-xs border border-gray-300">
            <div className="flex flex-col items-center justify-center">
                <img className="h-16 w-16 mb-4" src={trophyImage} alt="Trophy" />
            </div>
            <div className="flex items-center text-[20px] font-bold mb-2">
                <span className="mr-2">
                    {rank === 1 && '🥇'} {rank === 2 && '🥈'} {rank === 3 && '🥉'} {rank}{rank === 1 ? 'st' : rank === 2 ? 'nd' : 'rd'} Place - {winnerName}
                </span>
            </div>
            <div>
                <p className="text-[#f5f5f5] text-sm mb-4">{description}</p>
                <div className="text-xl font-bold mb-4">
                    Total Value: R$ {totalValue.toLocaleString()}
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm font-semibold"
                >
                    {buttonText}
                </a>
                <p className="text-[#f5f5f5] text-xs">{monthlyRanking}</p>
            </div>
        </div>
    );
}