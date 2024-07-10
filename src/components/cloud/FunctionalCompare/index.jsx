import { useEffect, useState, useRef } from "preact/hooks";
import Tableplugin from "./Tableplugin.jsx";
import MobileTable from "./MobileTable.jsx";
import UpDown from "./UpDown.jsx";
import {
  versionDataSource
} from "../../../constant.ts";
import "./style.css";


const FunctionalCompare = (props) => {
  const dataVersion = ['社区版', '专业版', 'Serverless 版']

  const versionContain = {
    '社区版': 'free',
    '专业版': 'speciality',
    'Serverless 版': 'serverless',
  }
  const [version, setVersion] = useState('社区版');
  const [isSticky, setIsSticky] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const functionalCompareWrapperRef = useRef(null);

  const handleScroll = () => {
    const wrapper = functionalCompareWrapperRef.current;
    if (wrapper) {
      const distanceFromTop = wrapper.getBoundingClientRect().top;
      setIsSticky(distanceFromTop < 0); // 当距离顶部大于0时展示元素
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 移除事件监听器
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <functional-compare
      ref={functionalCompareWrapperRef}
      class="functional-compare-wrapper top-[100px] flex flex-col justify-center items-center mt-10 mb-10"
    >
      <div id='collapse-fold' class="collapse bg-error collapse-arrow">
      <input type="checkbox" checked={isCollapsed} onChange={() => setIsCollapsed(!isCollapsed)} />
        <div class="collapse-title text-2xl font-normal">不同版本功能对比</div>
        <div class="collapse-content">
          {versionDataSource.map((item, index) => {
            return (
              <Tableplugin dataSource={item.data} title={item.title} isHead={index == 0} />
            )
          })}
        </div>
      </div>
      {/* <!-- 吸底 --> */}
      {isSticky && isCollapsed && <div id='sticky-table-bottom' class='table table-fixed bg-error mt-6 px-4'>
        <table class='w-full'>
          <tr>
            <th class="col1 border-0" />
            <th class="col2 border-0" />
            <th class="col3 overflow-hidden">
              <p class="mb-6 text-2xl font-normal"> 社区版</p>
              <div class='text-warning text-xs h-28 leading-8'>免费</div>
            </th>
            <th class="col4">
              <p class="mb-6 text-2xl font-normal"> 专业版</p>
              <div class='h-28 text-warning text-xs text-left pl-4'>
                <p class='mb-1'>后付费：0.84元/节点/小时起</p>
                <p class='mb-1'>资源包：422元/月起（相当于1个节点连续运行7200小时）</p>
                <p class='mb-1'>1. 首次购买资源包享受4折优惠，比后付费节省436元/月</p>
                <p class='mb-1'>2. 资源包续费，比后付费节省183元/月</p>
              </div>

            </th>
            <th class="col5">
              <p class="mb-6 text-2xl font-normal"> Serverless 版</p>
              <div class='h-28 text-warning text-xs text-left pl-4'>
                <p class='mb-1'>后付费：0.135元/万次请求（采用阶梯计费，用得越多，单位请求计费越便宜）</p>
                <p class='mb-1'>资源包：92元起</p>
                <p class='mb-1'>1. 承诺购买时长3个月，享95折</p>
                <p class='mb-1'>2. 承诺购买时长1年，享9折</p>
              </div>
            </th>
          </tr>
        </table>
      </div>
      }

      {/* <!-- 移动端 --> */}
      <div class="mobile-content">
        <div>
          <label htmlFor="my_modal_6" className="text-center mb-4 inline-block w-full"  >
            <span class="text-xl">{version}</span>
            <UpDown class="w-8 h-4" />
          </label>

          <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={isShow} onChange={(e) => setIsShow(e.target.checked)} />
          {
            isShow && <div className="modal" role="dialog">
              <div className="modal-box">
                <div className="mb-6" >
                  <span class="text-lg font-bold">选择版本</span>
                  <span
                    class="absolute right-8  "
                    onclick={() => { setIsShow(false) }}
                  >✕</span>
                </div>
                <div class="flex flex-col">
                  {dataVersion.map((it, index) => {
                    return (
                      <button
                        class="btn-select h-12 mb-4 bg-gray-02"
                        onClick={() => { setVersion(it); setIsShow(false) }}
                      >{it}</button>
                    )
                  })}
                </div>
              </div>
            </div>}
        </div>
        <div>
          {
            versionDataSource.map((item, index) => {
              return (
                <MobileTable
                  dataSource={item.data}
                  title={item.title}
                  version={versionContain[version]}
                />
              );
            })
          }
        </div>
      </div>
    </functional-compare>
  );
};

export default FunctionalCompare;