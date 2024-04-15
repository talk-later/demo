import React, { useState } from 'react'
import './index.scss'

export default function AdditionalConditions (props) {
    const [blockList, setBlockList] = useState()

    const handleAddConfirm = (value) => {
        setBlockList([...blockList, {rankPicker: value}])
    }

    return (
        <div>
            <div>头部</div>
            {blockList.map(item => {
                return <ConditionsBlock {...item}></ConditionsBlock>
            })}
            <BatchRankPickerLayer onConfirm={handleAddConfirm}><button>添加附加条件</button></BatchRankPickerLayer>
        </div>
    )
}

const ConditionsBlock = () => {
    return (
        <div>
            <div>
                <span>申请任职类别/任职级别为</span>
                <BatchRankPickerInput />
                <span>时，需满足以下条件</span>
            </div>
            <>通用条件组件</>
        </div>
    )
}