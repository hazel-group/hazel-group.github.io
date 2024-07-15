import { twMerge } from "tailwind-merge";
const PluginCardList = (props) => {
    const { dataSource } = props;

    console.log("=======",dataSource)

    return (
        <div class='w-[80%] mt-12 mb-8 mx-auto'>
             <p class="block text-[36px] leading-9 font-medium mb-12">{dataSource.Functionality}</p>
             <div class=" grid gap-8 gap-x-12 sm:gap-y-8 not-content lg:grid-cols-3 sm:grid-cols-2">
                {dataSource.plugins.map((item, index) => (
                        <a
                            class="hover-transform-box-shadow bg-error nounderline relative flex flex-col hover:shadow-xl transition ease-in-out hover:scale-[102%] cursor-pointer rounded-lg backdrop-blur border border-[#ffffff29]"
                            href={item.link}
                        >
                             <div class="p-6 rounded-2xl ">
                            <img class="logo w-12 h-12 rounded-lg" src="https://img.alicdn.com/imgextra/i3/O1CN01dMHdeW24VsfWvPRA9_!!6000000007397-2-tps-192-192.png" />
                            <p class="mt-4 text-[18px] leading-[18px] font-medium text-neutral">{item.Title}</p>
                            <div class='w-full h-[18px] mt-5 text-[12px] leading-3 font-medium'>
                            { item.Tiers === '企业版' ?
                                <p class="inline rounded-sm w-[49px] h-[18px] bg-[#E2DEF9]  text-[#735EE6] px-1.5 py-[3px]">{item.Tiers}</p>
                                : <p class="inlinerounded-sm w-[49px] h-[18px] bg-[#DEE7F9]  text-[#5E8CE6] px-1.5 py-[3px]">{item.Tiers}</p>
                            }
                            <p class="inline ml-2 rounded-sm w-[49px] h-[18px] bg-muted text-primary px-1.5 py-[3px]">Higress</p>
                            </div>
                            <p class="mt-[25px] text-[10px] leading-[18px] font-medium text-success">{item.Des}</p>

                            </div>

                        </a>
                    )
                )}
            </div>
            </div>
    )
}

export default PluginCardList;
