import GuestNavigationBar from "../components/GuestNavigationBar";

interface GuestLayoutProps {
    children: React.ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-[url('/assets/roblox-bg.png')] bg-no-repeat bg-cover bg-center brightness-30" />
            <div className="relative z-10">
                <GuestNavigationBar />
                <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    {children}
                </main>
            </div>
        </div>

    );
}
