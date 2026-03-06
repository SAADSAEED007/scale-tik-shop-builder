const services = [
    "COMPLIANCE",
    "SHOP OPERATIONS",
    "LAUNCH STRATEGY",
    "CREATOR SEEDING",
    "SPARK ADS",
    "CREATOR SOURCING",
    "UGC PRODUCTION",
    "AFFILIATE MANAGEMENT",
    "PAID MEDIA ADS",
    "LIVE SELLING STRATEGY",
    "LISTING OPTIMIZATION",
    "PERFORMANCE ANALYTICS",
    "TIKTOK SHOP SETUP",
];

const ServiceTicker = ({ items, variant = 'black' }: { items?: string[], variant?: 'black' | 'gold' }) => {
    // Use provided items or default to standard services
    const displayItems = items || services;

    // Duplicate the items to create a seamless loop
    const tickerItems = [...displayItems, ...displayItems];

    const isGold = variant === 'gold';

    return (
        <div className={`w-full py-3 md:py-[12px] overflow-hidden relative pause-hover select-none ${isGold ? "bg-[#F5EDE3]" : "bg-black border-y border-white/10"
            }`}>
            <div className="flex whitespace-nowrap animate-ticker">
                {tickerItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className={`font-syne font-[700] uppercase tracking-[2.5px] text-[13px] md:text-[15px] px-8 ${isGold ? "text-black" : "text-[#F5EDE3]"
                            }`}>
                            {item}
                        </span>
                        <span className={`font-bold text-lg md:text-xl ${isGold ? "text-black/40" : "text-[#F5EDE3]"
                            }`}>+</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceTicker;
