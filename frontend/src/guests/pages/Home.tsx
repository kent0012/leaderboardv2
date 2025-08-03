import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

import GuestLayout from "../../layouts/GuesLayout";
import { cardData } from "../variables/data";

export default function Home() {
    const totalSuppliedValue = cardData.reduce((acc, curr) => acc + curr.totalValue, 0);

    return (
        <GuestLayout>
            <div className="flex items-center justify-center px-4" style={{ minHeight: "calc(100vh - 64px)" }}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 w-full max-w-md text-center shadow-lg">
                    <div className="flex justify-center mb-4">
                        {/* <BanknotesIcon className="h-12 w-12 text-yellow-400" /> */}
                        <img className="w-30 h-30" src="/assets/img/robux_logo.png" />
                    </div>
                    <h1 className="text-2xl font-semibold text-white mb-2">Total Robux Acquired</h1>
                    <p className="text-3xl font-bold text-yellow-500">
                        {totalSuppliedValue.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-300">
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                        <span>Updated monthly from top suppliers</span>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
