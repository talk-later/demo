import React, { useEffect, useState } from 'react'
import './index.scss'

export default function Index(props) {
  const [ initDataSource, setInitDataSource ] = useState()
  const [searchkey, setSearchKey] = useState("")
  const [loading, setLoading] = useState(false)
  const [displayedFieldsList, setDisplayedFieldsList] = useState([]) // 已选数据
  const [rankList, setRankList] = useState([])
  useEffect(() => {
    setLoading(true)
    // 获取类别职级数据源
    setInitDataSource()
    setLoading(false)
  }, [])

  const handleSearch = (value) => {
    const val = value.trim(); // 去空格
    setSearchKey(val)
    debounceSearch(val)
  }

  // 搜索
  const debounceSearch = debounce((val) => {

  }, 600)

  const filterData = (val) => {
    val = val.toLowerCase(); // 将关键词转换为小写
    const filterResult = []
    dataSource.forEach(item => {
        if (item.Category.Text.toLowerCase().includes(val)) { // 如果类别包含关键词，级别全部展示
            filterResult.push(item)
        } else {
            filteredLevels = item.Levels.filter(level => level.Value.toLowerCase().includes(keyword));
            if (filteredLevels.length > 0) {
                filterResult.push({
                  Category: item.Category,
                  Levels: filteredLevels
                });
            }
        }
    })
    return filterResult;
  };

  return (
    <div>
      <Search
        value={searchkey}
        onChange={handleSearch}
      />
      <div>
        <RankList
          initDataSource
          onChange
        />
        <SelectedRankList 
        />
      </div>
    </div>
  )
}

const RankList = (props) => {
    const { dataSource, onCategoryChange, onLevelChange } = props

    const handleCategoryChange = () => {
        onCategoryChange()
    }

    const handleLevelChange = () => {
        onLevelChange()
    }

    const highLight = (value, key) => {
        if (key === '' || value === '') return [value];
        const list = value.split(key);
        let newList = [];
        const newEle = <span className='high-light'>{key}</span>;
        list.forEach((item, index) => {
        if (index < list.length - 1) {
            newList.push(item);
            newList.push(newEle);
        } else {
            newList.push(item);
        }
        });
        console.log(newList);
        return newList;
    }


    const renderRankItems = (items) => {
        return (
            <div>
                <div>
                    <Checkbox
                        checked={items.Levels.length > 0}
                        onChange={handleCategoryChange(items.category)}
                    />
                    <span>{...highLight(items.category.Text, searchText)}</span>
                </div>
                <ul>
                    {items.Levels.map(level => {
                        return (
                            <li>
                                <Checkbox
                                    checked={level.checked}
                                    onChange={handleLevelChange(level)}
                                />
                                <span>{...highLight(level.Text, searchText)}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }


    return (
        <div>
            {dataSource.map(items => {
                return renderRankItems(items)
            })}
        </div>
    )
}

const SelectedRankList = () => {
    const {displayedFieldsList, onClearAll, onItemClear} = props

    const handleClearAll = () => {
        onClearAll()
    }

    const handleItemClear = () => {
        onItemClear()
    }

    const renderSelectItems = (items) => {
        return (
            <div>
                <span>{items.category}</span> 
                <ul>
                    {items.Levels.map(item => {
                        return (
                            <li>
                                <span>{item.text}</span>
                                <icon onClick={handleItemClear}></icon> 
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <div>
                <span>已选</span>
                <div onClick={handleClearAll}>清空已选</div>
            </div>
            <div>
                { displayedFieldsList.map(items => {
                    return renderSelectItems(items)
                })}
            </div>
        </div>
    )
}
