import { useEffect, useState } from 'preact/hooks';
import Down from './Down';
import Check from './Check';

const Dropdown = (props) => {
  const { dataSource, onSelectionChange, isOpen, onDropdownClick } = props;
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (item === null) { // 选择 "All"
      setSelectedItems([]);
      onSelectionChange([]); // 立即通知父组件 "全部" 被选择
    } else {
      setSelectedItems((prevSelectedItems) => {
        let newSelectedItems;
        if (prevSelectedItems.find(selectedItem => selectedItem.value === item.value)) {
          newSelectedItems = prevSelectedItems.filter(selectedItem => selectedItem.value !== item.value);
        } else {
          newSelectedItems = [...prevSelectedItems, item];
        }
        onSelectionChange(newSelectedItems); // 使用更新后的 selectedItems 通知父组件
        return newSelectedItems;
      });
    }
  };

  const isItemSelected = (item) => selectedItems.find(selectedItem => selectedItem.value === item.value);

  
  return (
    <div class={`dropdown w-full ${isOpen ? "open" : ""}`}>
      <button class='w-full flex justify-between items-center bg-base-100 px-7' onClick={onDropdownClick} >
        <span>
          <span>{dataSource.label}</span>
          {selectedItems.length > 0 && <span class='bg-neutral text-base-100 rounded-lg px-2 py-1.5 ml-2'>{selectedItems.length}</span>}
        </span>
        <Down />
      </button>
      {isOpen && (
        <ul class="dropdown-menu  bg-base-100 rounded-box z-[1] w-52 p-4 shadow list-none">
          <li class="dropdown-item flex justify-between items-center" onClick={() => handleItemClick(null)}>
            <span>All</span>
            {selectedItems.length === 0 && <Check />}
          </li>
          {dataSource.options.map((item, index) => (
            <li key={index} class="dropdown-item flex justify-between items-center" onClick={() => handleItemClick(item)}>
              <span>{item.name}</span>
              {isItemSelected(item) && <Check />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
