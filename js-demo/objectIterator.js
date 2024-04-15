function filterData(data, keyword) {
    // 过滤Category
    const filteredCategory = data.filter(item => item.Category.Value.includes(keyword));
  
    // 过滤Levels
    const filteredLevels = data.reduce((result, item) => {
      const filteredLevels = item.Levels.filter(level => level.Value.includes(keyword));
      
      if (filteredLevels.length > 0) {
        result.push({
          Category: {
            Value: item.Category.Value,
            Text: item.Category.Text,
            Sort: item.Category.Sort
          },
          Levels: filteredLevels
        });
      }
  
      return result;
    }, []);
  
    return [...filteredCategory, ...filteredLevels];
  }
  
  // 示例数据
  const data = [{
    "Category": {
      "Value": "C1",
      "Text": "类别1",
      "Sort": 0
    },
    "Levels": [{
      "Value": "L1",
      "Text": "职级1",
      "Sort": 1
    }]
  }, {
    "Category": {
      "Value": "C2",
      "Text": "类别2",
      "Sort": 1
    },
    "Levels": [{
      "Value": "L2",
      "Text": "职级2",
      "Sort": 2
    }, {
      "Value": "L3",
      "Text": "职级3",
      "Sort": 3
    }]
  }];
  
  // 示例调用
  const keyword = "2";
  const filteredData = filterData(data, keyword);
  console.log(filteredData);