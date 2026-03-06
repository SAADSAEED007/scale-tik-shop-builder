const stats = [
    "$800 → $23K/MO",
    "6.8X ROAS",
    "312 AFFILIATES IN 6 WEEKS",
    "$47K/MO IN 6 WEEKS",
    "$14K LIVE IN 2 HOURS",
    "+340% GMV AVERAGE",
];

const CaseStudiesTicker = () => {
    // Duplicate the stats to create a seamless loop
    const tickerItems = [...stats, ...stats];

    return (
        <div className="w-full py-3 md:py-[12px] overflow-hidden relative pause-hover select-none bg-black border-y border-white/10">
            <div className="flex whitespace-nowrap animate-ticker">
                {tickerItems.map((stat, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-[#F5EDE3] font-syne font-[700] uppercase tracking-[2.5px] text-[13px] md:text-[15px] px-8">
                            {stat}
                        </span>
                        <span className="text-[#F5EDE3] font-bold text-lg md:text-xl">+</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudiesTicker;
