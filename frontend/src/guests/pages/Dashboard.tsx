import Card from "../../components/common/Card";
import GuesLayout from "../../layouts/GuesLayout";
import SearchableTable from "../components/SearchableTable";
import type { CardData } from "../types/types";
import { cardData as rawData } from "../variables/data";

const cardTableHeaders = [
    { key: 'winnerName', label: 'Winner Name' },
    { key: 'description', label: 'Description' },
    { key: 'totalValue', label: 'Total Value' },
];

const cardSearchKeys: (keyof CardData)[] = ['winnerName', 'description', 'totalValue'];

// Sort by totalValue only
const sortedCardData = [...rawData].sort((a, b) => b.totalValue - a.totalValue);

// Add rank to each item in the sorted data
const rankedCardData = sortedCardData.map((card, index) => ({
    ...card,
    rank: index + 1
}));

export default function Dashboard() {
    // Slice the top three from the ranked data
    const topThree = rankedCardData.slice(0, 3);

    return (
        <GuesLayout>
            <div className="text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    {topThree.map((card) => (
                        <Card
                            key={card.winnerName}
                            {...card}
                            position={card.rank as 1 | 2 | 3}
                        />
                    ))}
                </div>

                <SearchableTable
                    itemsPerPage={7}
                    data={rankedCardData}
                    headers={cardTableHeaders}
                    searchKeys={cardSearchKeys}
                />
            </div>
        </GuesLayout>
    );
}