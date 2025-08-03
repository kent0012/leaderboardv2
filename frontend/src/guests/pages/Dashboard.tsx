const gold = "/assets/img/gold-cup.png";
const silver = "/assets/img/silver-cup.png";
const bronze = "/assets/img/bronze-cup.png";

import Card from "../../components/common/Card";
import GuesLayout from "../../layouts/GuesLayout";

const cardData = [
    {
        rank: 2,
        winnerName: "CreativeCrafter",
        description: "Highest total value in items supplied!",
        totalValue: 120000,
        buttonText: "View Supplier Profile",
        monthlyRanking: "Monthly Ranking - July 2025",
        trophyImage: silver,
    },
    {
        rank: 1,
        winnerName: "RareFindsVendor",
        description: "Highest total value in items supplied!",
        totalValue: 120000,
        buttonText: "View Supplier Profile",
        monthlyRanking: "Monthly Ranking - July 2025",
        trophyImage: gold,
    },
    {
        rank: 3,
        winnerName: "ProductivePixel",
        description: "Highest total value in items supplied!",
        totalValue: 120000,
        buttonText: "View Supplier Profile",
        monthlyRanking: "Monthly Ranking - July 2025",
        trophyImage: bronze,
    }
]

export default function Dashboard() {
    return (
        <GuesLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-3">
                {cardData?.map((card, index) => (
                    <Card
                        key={index}
                        rank={card.rank}
                        winnerName={card.winnerName}
                        description={card.description}
                        totalValue={card.totalValue}
                        buttonText={card.buttonText}
                        monthlyRanking={card.monthlyRanking}
                        trophyImage={card.trophyImage}
                    />
                ))}
            </div>
        </GuesLayout>
    )
}
