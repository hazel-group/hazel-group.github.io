import { useEffect, useState } from "preact/hooks";
import Dropdown from "./Dropdown";
import Filter from "./Filter";
import Close from './Close';
import PluginCard from './PluginCard';

const PluginHub = (props) => {

  const { dataSource } = props;
  const data = [
    {
      label: 'Tiers',
      options: [
        { name: '企业版', value: 0 },
        { name: '开源版', value: 1 },
      ]
    },
    {
      label: 'Functionality',
      options: [
        { name: 'AI', value: 0 },
        { name: '认证', value: 1 },
        { name: '转换', value: 2 },
        { name: '流量', value: 3 },
        { name: '安全', value: 4 },
      ]
    },
    {
      label: 'Support by',
      options: [
        { name: 'higress', value: 0 },
        { name: 'Technical partner', value: 1 },
      ]
    },
  ]
  const [allSelectedItems, setAllSelectedItems] = useState({});
  const [cardData, setCardData] = useState([]);
  // 添加状态来追踪当前展开的Dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setCardData(groupByFunctionality(dataSource)); // 初始化时设置原始分组数据
  }, []);

  useEffect(() => {
    setCardData(getFilteredData());
  }, [filterText]);

  useEffect(() => {
    // 根据筛选条件来更新 cardData
    const filteredData = applyFilters(dataSource, allSelectedItems);
    // 更新 PluginCard 的 dataSource
    setCardData(groupByFunctionality(filteredData));
  }, [allSelectedItems]);

  // 过滤器筛选
  const applyFilters = (data, filters) => {
    return data.filter(item => {
      return Object.entries(filters).every(([key, selectedOptions]) => {
        if (selectedOptions.length === 0) {
          return true; // 如果筛选项为空，则表示选择了所有，不需要过滤
        }
        const filterValue = item[key];
        return selectedOptions.find(option => option.name === filterValue);
      });
    });
  };

  // input输入筛选
  const getFilteredData = () => {
    let filteredData = dataSource;

    if (filterText) {
      filteredData = filteredData.filter((item) =>
        item.Title.toLowerCase().includes(filterText.toLowerCase())
      );
    }
    return groupByFunctionality(filteredData);
  };

  const handleDropdownClick = (label) => {
    // 如果点击的是当前已展开的Dropdown，则关闭所有Dropdown
    // 否则，打开点击的Dropdown
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleSelectionChange = (dropdownLabel, selectedItems) => {
    // 映射 selectedItems 为包含名字的对象形式
    const selectedItemNames = selectedItems.map(item => ({ name: item.name }));
    // 更新筛选条件和关闭所有Dropdown
    setOpenDropdown(null);
    setAllSelectedItems(prevItems => ({
      ...prevItems,
      [dropdownLabel]: selectedItemNames
    }));
  };

  // 根据functionality确定PluginCard
  const groupByFunctionality = (data) => {
    const groups = {};
    data.forEach(item => {
      if (!groups[item.Functionality]) {
        groups[item.Functionality] = [];
      }
      groups[item.Functionality].push(item);
    });
    return groups;
  };



  return (
    <div class="flex flex-col justify-center items-center bg-secondary">
      {/* 过滤器 */}
      <div className="page-hub-filters flex   w-[1016px] bg-base-100 h-[80px] mt-[72px] rounded-2xl">
        <div class="filter-name w-[347px] flex items-center px-6">
          <Filter />
          <input
            type='text'
            id='filter-plugins'
            placeholder="Filter plugins"
            class='bg-base-100 ml-2'
            value={filterText}
            onInput={(e) => setFilterText(e.target.value)}
            autoComplete="off"
          />
          <Close onClick={() => setFilterText('')} />
        </div>
        {
          data.map((item, index) =>
            <div key={index} className="filter-functionality border-l border-link w-[217px] pt-7">
              <Dropdown
                dataSource={item}
                isOpen={openDropdown === item.label} // 传递一个标识，判断Dropdown是否应展开
                onDropdownClick={() => handleDropdownClick(item.label)}
                onSelectionChange={(selectedItems) => handleSelectionChange(item.label, selectedItems)}
              />
            </div>
          )
        }
      </div>
      <div class='mb-20'>
        {Object.entries(cardData).map(([functionality, plugins]) => (
          <PluginCard key={functionality} dataSource={{ Functionality: functionality, plugins }} />
        ))}
      </div>
    </div>
  );
};

export default PluginHub;