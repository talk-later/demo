import React, { useState } from 'react'
import UnmodeledLayer from '@beisen-phoenix/unmodeled-layer';
import './index.scss'

export default function Index(props) {
  const { children, handleVisibleChange } = props
  const renderContent = () => {
    return <BatchRankPicker></BatchRankPicker> // 弹层具体内容
  }
  
  const renderFooter = () => { // 弹层footer
    return (
      <div>
        <Button onClick={handleCancle}>取消</Button>
        <Button onClick={handleConfirm}>确定</Button>
      </div>
    )
  }

  const handleConfirm = () => {
    // 处理职级合并，存在text，value存正常数据
    onConfirm && onConfirm(data)
    setVisible(false)
  }

  const handleCancle = () => {
    setVisible(false)
  }

  return (
    <UnmodeledLayer
      visible={visible}
      onVisibleChange={handleVisibleChange}
      content={renderContent()}
      trigger={['click']}
      footer={renderFooter()}
      size="auto"
      blockContainer={true}
    >
      {children}
    </UnmodeledLayer>
  )
}
