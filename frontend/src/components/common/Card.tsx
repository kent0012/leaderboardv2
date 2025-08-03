interface CardProps {
    winnerName: string;
    description: string;
    totalValue: number;
    buttonText: string;
    monthlyRanking: string;
    position?: 1 | 2 | 3; // explicitly allow only 1, 2, or 3
}

export default function Card({
    winnerName,
    description,
    totalValue,
    buttonText,
    monthlyRanking,
    position,
}: CardProps) {
    const medals = {
        1: { img: "/assets/img/gold-cup.png", emoji: "🥇", suffix: "st" },
        2: { img: "/assets/img/silver-cup.png", emoji: "🥈", suffix: "nd" },
        3: { img: "/assets/img/bronze-cup.png", emoji: "🥉", suffix: "rd" },
    } as const;

    const medal = position ? medals[position] : null;

    return (
        <div className="relative flex flex-col shadow-sm rounded-lg w-full p-4 text-white backdrop-blur-xs border border-gray-300">
            <div className="flex flex-col items-center justify-center">
                {medal?.img && (
                    <img src={medal.img} alt={`Rank ${position}`} className="w-12 h-12 mb-3" />
                )}
            </div>

            <div className="flex items-center text-[20px] font-bold mb-2">
                <span>
                    {medal?.emoji && `${medal.emoji} `}
                    {position && `${position}${medal?.suffix} Place - `}{winnerName}
                </span>
            </div>

            <p className="text-[#f5f5f5] text-sm mb-4">{description}</p>
            <div className="text-xl font-bold mb-4">
                Total Value: R$ {totalValue.toLocaleString()}
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