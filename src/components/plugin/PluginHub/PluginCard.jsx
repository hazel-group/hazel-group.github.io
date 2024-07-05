import { useEffect, useState } from "preact/hooks";

const PluginCard = (props) => {
  const { dataSource } = props;

  return (
    <div class='w-[1016px] mt-12'>
      <p class="text-[36px] leading-9 font-medium mb-12">{dataSource.Functionality}</p>
      <div class="grid grid-cols-3 gap-4">
        {dataSource.plugins.map((item, index) => <a href={item.Link} class='no-underline'>
          <div class="w-[328px] h-[240px] rounded-2xl bg-error p-6">
            <img class="logo w-12 h-12 rounded-lg" src={item.Img} />
            <p class="mt-4 text-[18px] leading-[18px] font-medium text-neutral">{item.Title}</p>
            {item.Tiers === '企业版' ? <p class="mt-5 rounded-sm w-[49px] h-[18px] bg-[#E2DEF9] text-[12px] leading-3 text-[#735EE6] font-medium px-1.5 py-[3px] ">{item.Tiers}</p>
              : <p class="mt-5 rounded-sm w-[49px] h-[18px] bg-[#DEE7F9] text-[12px] leading-3 text-[#5E8CE6] font-medium px-1.5 py-[3px] ">{item.Tiers}</p>}
            <p class="mt-[25px] text-[10px] leading-[18px] font-medium text-success">{item.Des}</p>
          </div>
        </a>)}
      </div>
    </div>
  );
};

export default PluginCard;