import React, { useEffect, useState } from 'react'
import './index.scss'

export default function TemplatePreview (props) {
  const [activeItem, setActiveItem] = useState(0)
  useEffect(() => {
    // 请求模版资源

    // 监听滚动事件
    window.document.addEventListener('scroll', handleScroll)
    return () => {
        window.document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const viewHeight = window.innerHeight;
    const newAnchor = Array.from(window.document.querySelectorAll(''))
    activeIndex = newAnchor.current.findIndex(item => {
        return item.getBoundingClientRect().top + 60 > viewHeight
     })
    setActiveItem(activeIndex === -1 ? newAnchor.current.length - 1 : activeIndex)
  }


  const handleClick = (e, currentIndex) => {
    // 获取当前项offsetTop
    const currenTop = document.getElementsByClassName(items[currentIndex]?.code)[0]?.offsetTop || 0;
    const containerDom = document.getElementsByClassName('template-preview-content')[0];
    if (currenTop && containerDom) {
        containerDom.scrollTop = currenTop; // 点击锚点时定位，将scrollTop设为当前项offsetTop
    }
  }
  
  return (
    <div>
        <div className='template-preview-content'>
            <ModelTab></ModelTab>
            <ModelTab></ModelTab>
        </div>
        <div>
            <AnchorPoint activeIndex={activeItem}  onClick={handleClick}></AnchorPoint> // @project-hrm/anchor-point
        </div>
    </div>
  )
}

const ModelTab = (terminals) => {
    const [activeKey, setActiveKey] = useState(); // 选择的模版类型
    const [activeLangKey, setActiveLangKey] = useState(); // 选择的语言

    const langMap = {
        '简体中文': 1,
        '繁体中文': 2,
        'English': 3
    }

    const renderTerminal = (key , currentTem) => {
        switch (key) {
            case 1:
                return <></> // 网页端
            case 2:
                return <></> // 移动端
            case 3:
                return <></> // 邮件
            case 4:
                return <></> // 短信
            default:
                return <></> // 三方
        }
    }

    return (
        <Tab
            tabType={'base'}
            activeKey={activeKey}
            onChange={(key) => {
                setActiveKey(key);
            }}
        >
            {terminals.map(terminalItem => {  // 不同的模版
                return (
                    <TabPane key={terminalItem.templateType}>
                        <Tab
                            tabType={'button'}
                            activeKey={activeLangKey}
                            onChange={(key) => {
                                setActiveLangKey(key);
                            }}
                        >
                            {
                                Object.keys(langMap).map(langItem => { // 不同的语言
                                    const lang = langMap[langItem];
                                    const currentTem = terminalItem?.languages.find(item => item.i18NLang === lang);
                                    <TabPane tab={item} key={'' + lang}>
                                        {currentTem && currentTem.enabled ?
                                            renderTerminal(terminalItem.templateType, currentTem) // 不同的模版渲染不同的组件,启用才渲染
                                            :
                                            <div className='empty'>
                                                <Empty />
                                            </div>
                                        }
                                    </TabPane>
                                })
                            }
                        </Tab>
                    </TabPane>
                )
            })
            }
        </Tab>
    )
}

<div className="preview-content">
    <img src={img} className="phone-header" alt="" width="100%" />
    <div className="sms-list">
        <div className="sms-item" key={i}>
            <span className="sms-arrow" style={{ backgroundImage: `url(${arrow})` }} />
            <div className="sms-content">{keyToValue(templateData)}</div>
        </div>
    </div>
</div>