import { EyeIcon } from "@heroicons/react/24/solid";
import Card from "../../components/common/Card";
import GuesLayout from "../../layouts/GuesLayout";
import SearchableTable from "../components/SearchableTable";
import type { CardData } from "../types/types";
import { cardData as rawData } from "../variables/data";

const handleAction = (item: CardData) => {
    console.log('Action button clicked for:', item.vendorName);
};

const cardTableHeaders = [
    {
        key: 'rank',
        label: '#',
        render: (item: CardData) => {

             let rankColorClass = 'text-gray-200';
      
            if (item.id === 1) {
                rankColorClass = 'text-yellow-400';
            } else if (item.id === 2) {
                rankColorClass = 'text-gray-400';
            } else if (item.id === 3) {
                rankColorClass = 'text-yellow-600';
            }

            return (
                <span className={`font-bold ${rankColorClass}`}>
                    {item.id}
                </span>
            );
        },
    } as const,
    { key: 'vendorName', label: 'Vendor Name' } as const,
    { key: 'description', label: 'Description' } as const,
    {
        key: 'totalValue',
        label: 'Total Value',
        render: (item: CardData) => (
            <span>R$ {item.totalValue.toLocaleString('en-US')}</span>
        ),
    } as const,
    {
        key: 'actions',
        label: 'Actions',
        render: (item: CardData) => (
            <button
                onClick={() => handleAction(item)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded text-xs cursor-pointer"
            >
                <EyeIcon className="w-[16px] h-[16px]" />
            </button>
        ),
    } as const,
];

const cardSearchKeys: (keyof CardData)[] = ['vendorName', 'description', 'totalValue'];

const rankedCardData = rawData.map((card, index) => ({
    ...card,
    rank: index + 1
}));

const medals = {
  1: { img: "/assets/img/gold-cup.png", emoji: "🥇", suffix: "st" },
  2: { img: "/assets/img/silver-cup.png", emoji: "🥈", suffix: "nd" },
  3: { img: "/assets/img/bronze-cup.png", emoji: "🥉", suffix: "rd" },
} as const;

export default function Leaderboard() {
  const topThree = rankedCardData.slice(0, 3);
  const [first, second, third] = topThree;
    return (
        <GuesLayout>
            <div className="text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                   {/* Static rendering of the top three cards */}
                        {first && (
                            <Card>
                            <div className="flex flex-col items-center justify-center">
                                <img src={medals[1].img} alt="Rank 1" className="w-12 h-12 mb-3" />
                            </div>
                            <div className="flex items-start text-[20px] font-bold mb-2">
                                <span>
                                {medals[1].emoji} 1{medals[1].suffix} Place - {first.vendorName}
                                </span>
                            </div>
                            <p className="text-[#f5f5f5] text-sm mb-2">{first.description}</p>
                            <div className="text-xl font-bold mb-4">
                                Total Value: R$ {first.totalValue.toLocaleString()}
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <a href="#" className="text-blue-500 hover:underline text-sm font-semibold">
                                {first.buttonText}
                                </a>
                                <p className="text-[#898989] text-xs">{first.monthlyRanking}</p>
                            </div>
                            </Card>
                        )}

                        {second && (
                            <Card>
                            <div className="flex flex-col items-center justify-center">
                                <img src={medals[2].img} alt="Rank 2" className="w-12 h-12 mb-3" />
                            </div>
                            <div className="flex items-start text-[20px] font-bold mb-2">
                                <span>
                                {medals[2].emoji} 2{medals[2].suffix} Place - {second.vendorName}
                                </span>
                            </div>
                            <p className="text-[#f5f5f5] text-sm mb-2">{second.description}</p>
                            <div className="text-xl font-bold mb-4">
                                Total Value: R$ {second.totalValue.toLocaleString()}
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <a href="#" className="text-blue-500 hover:underline text-sm font-semibold">
                                {second.buttonText}
                                </a>
                                <p className="text-[#898989] text-xs">{second.monthlyRanking}</p>
                            </div>
                            </Card>
                        )}

                        {third && (
                            <Card>
                            <div className="flex flex-col items-center justify-center">
                                <img src={medals[3].img} alt="Rank 3" className="w-12 h-12 mb-3" />
                            </div>
                            <div className="flex items-start text-[20px] font-bold mb-2">
                                <span>
                                {medals[3].emoji} 3{medals[3].suffix} Place - {third.vendorName}
                                </span>
                            </div>
                            <p className="text-[#f5f5f5] text-sm mb-2">{third.description}</p>
                            <div className="text-xl font-bold mb-4">
                                Total Value: R$ {third.totalValue.toLocaleString()}
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <a href="#" className="text-blue-500 hover:underline text-sm font-semibold">
                                {third.buttonText}
                                </a>
                                <p className="text-[#898989] text-xs">{third.monthlyRanking}</p>
                            </div>
                            </Card>
                        )}
                </div>
                <SearchableTable
                    itemsPerPage={6}
                    data={rankedCardData}
                    headers={cardTableHeaders}
                    searchKeys={cardSearchKeys}
                />
            </div>
        </GuesLayout>
    );
}