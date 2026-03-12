const tickerItems = [
    "TIKTOK SHOP SETUP",
    "$54.2M+ GMV MANAGED",
    "BRANDS SERVED 182+",
    "+340% GMV AVERAGE",
    "LAUNCH STRATEGY",
    "$800 → $23K/MO",
    "LISTING OPTIMIZATION",
    "6.8X ROAS",
    "CREATOR SOURCING & SEEDING",
    "182 AFFILIATES IN 6 WEEKS",
    "UGC PRODUCTION",
    "$47K/MO IN 6 WEEKS",
    "LIVE SELLING STRATEGY",
    "$14K LIVE IN 2H",
    "SHOP OPERATIONS",
    "AFFILIATE MANAGEMENT",
    "PERFORMANCE ANALYTICS",
    "SPARK ADS",
];

const ServiceTicker = ({ items, variant = 'black' }: { items?: string[], variant?: 'black' | 'gold' }) => {
    // Use provided items or default to standard services
    const displayItems = items || tickerItems;

    // Duplicate the items to create a seamless loop
    const doubledItems = [...displayItems, ...displayItems];

    const isGold = variant === 'gold';

    return (
        <div className={`w-full py-3 md:py-[12px] overflow-hidden relative pause-hover select-none ${isGold ? "bg-[#F5EDE3]" : "bg-black border-y border-white/10"
            }`}>
            <div className="flex whitespace-nowrap animate-ticker">
                {doubledItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className={`font-heading font-black uppercase tracking-[25%] text-[13px] md:text-[15px] px-8 ${isGold ? "text-black" : "text-[#F5EDE3]"
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
