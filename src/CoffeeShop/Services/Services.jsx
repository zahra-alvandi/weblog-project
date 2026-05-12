export default function Services({img, imgDark, titleText, spanText}) {
    return(
        <div className="flex items-center flex-col w-1/2 lg:w-auto gap-y-5 sm:flex-row gap-x-4 text-center lg:text-right">
            <div className="flex items-center flex-col lg:w-auto gap-y-5 sm:flex-row gap-x-4 text-center lg:text-right">
                <img src={img} className="inline-block dark:hidden" alt="" />
                <img src={imgDark} className="hidden dark:inline-block" alt="" />
                <div>
                    <h5 className="font-DanaDemiBold text-sm md:text-lg/6 mb-1 md:mb-3.5">{titleText}</h5>
                    <span className="text-xs md:text-sm/6">{spanText}</span>
                </div>
            </div>
        </div>
    )
}