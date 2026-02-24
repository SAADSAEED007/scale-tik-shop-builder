const services = [
    "CREATOR SOURCING",
    "UGC PRODUCTION",
    "AFFILIATE MANAGEMENT",
    "PAID MEDIA ADS",
    "LIVE SELLING STRATEGY",
    "LISTING OPTIMIZATION",
    "PERFORMANCE ANALYTICS",
    "TIKTOK SHOP SETUP",
];

const ServiceTicker = () => {
    // Duplicate the services to create a seamless loop
    const tickerItems = [...services, ...services];

    return (
        <div className="w-full bg-black border-y border-white/10 py-3 md:py-4 overflow-hidden relative pause-hover">
            <div className="flex whitespace-nowrap animate-ticker">
                {tickerItems.map((service, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-[#F5EDE3] font-heading font-bold uppercase tracking-[0.15em] text-[13px] md:text-[15px] px-8">
                            {service}
                        </span>
                        <span className="text-[#F5EDE3] font-bold text-lg md:text-xl">+</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceTicker;
