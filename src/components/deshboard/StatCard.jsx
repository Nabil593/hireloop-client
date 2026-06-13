import React from 'react';

const StatCard = ({ title, value, icon: Icon }) => {
    return (
        <div className="bg-[#161616] border border-neutral-900/90 rounded-xl p-6 flex flex-col justify-between h-[155px] w-full transition-all duration-200 hover:border-neutral-800/80">
            {/* Icon Wrapper */}
            <div className="p-2.5 bg-[#222222]/40 border border-neutral-800/30 rounded-lg w-fit text-neutral-400">
                {Icon && <Icon size={18} strokeWidth={1.75} />}
            </div>

            {/* Content Area */}
            <div className="space-y-1.5">
                <p className="text-[11px] font-medium text-neutral-500 tracking-wide">
                    {title}
                </p>
                <p className="text-2xl font-bold tracking-tight text-neutral-200">
                    {value}
                </p>
            </div>
        </div>
    );
};

export default StatCard;