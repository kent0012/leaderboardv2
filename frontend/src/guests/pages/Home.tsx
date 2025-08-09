import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

import Card from "../../components/common/Card";
import GuestLayout from "../../layouts/GuesLayout";
import { cardData } from "../variables/data";

export default function Home() {

    const totalSuppliedValue = cardData.reduce((acc, curr) => acc + curr.totalValue, 0);

    return (
        <GuestLayout>
            <div className="flex items-center justify-center px-4" style={{ minHeight: "calc(100vh - 64px)" }}>
                <Card>
                    <div className=" rounded-xl p-4 w-full max-w-md text-center shadow-lg">
                        <div className="flex items-center gap-2 justify-center">
                            <img className="w-8 h-8" src="/assets/img/robux_logo.png" alt="Robux Logo" />
                            <h1 className="text-2xl font-semibold text-white">Total Robux Acquired</h1>
                        </div>

                        <p className="text-3xl font-bold text-yellow-500">
                            {totalSuppliedValue.toLocaleString()}
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-300">
                            <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                            <span>Updated monthly from top suppliers</span>
                        </div>
                </div>
                </Card>
            </div>
        </GuestLayout>
    );
}
