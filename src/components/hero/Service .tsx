import serviceIMG from "../../assets/Images/services.jpg"

export const Services = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-fit p-4 md:p-8">
            <div className="w-full md:w-1/2 flex items-center mb-6 md:mb-0">
                <img src={serviceIMG} alt="our services" />
            </div>

            {/* /content */}

            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-600"> Our Services</h2>
                <p className="mb-4 text-gray-700 text-base md:text-lg">Discover the range of services TodoPro offers to help your team stay organized and productive. From task management to real-time collaboration, we have you covered!</p>
                <div>
                    {/* daisyui */}
                    <div className="overflow-x-auto">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
