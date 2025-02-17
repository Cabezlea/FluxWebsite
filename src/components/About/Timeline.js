const Timeline = () => {
    const milestones = [
        { year: '2021', title: 'Founded in Austin, TX', detail: 'Launched with 3 clients' },
        { year: '2022', title: 'Series A Funding', detail: '$10M raised' },
        { year: '2023', title: 'National Expansion', detail: '5 regional hubs' },
        { year: '2024', title: 'AI Integration', detail: 'Predictive logistics' },
    ];

    return (
        <div className="relative py-12">
            <div className="absolute left-1/2 w-1 bg-gray-800 h-full -translate-x-1/2" />

            {milestones.map((milestone, i) => (
                <div key={i} className="relative mb-16">
                    <div className={`flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                        <div className="md:w-1/2 p-8">
                            <div className="glass-morphism p-6 rounded-xl">
                                <div className="text-blue-500 text-2xl mb-2">{milestone.year}</div>
                                <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                                <p className="text-gray-400">{milestone.detail}</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-black" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
