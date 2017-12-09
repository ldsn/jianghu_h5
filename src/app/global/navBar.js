import React from 'react'
import { SegmentedControl } from 'antd-mobile'
import style from './navBar.less'

export default function ({ value1, value2, value1Func, value2Func, leftContent, rightContent }) {
  function onChange (e) {
    const index = e.nativeEvent.selectedSegmentIndex
    if (index === 0) value1Func()
    if (index === 1) value2Func()
  }
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        {leftContent}
      </div>
      <div className={style.middle}>
        <SegmentedControl onChange={onChange} values={[`${value1}`, value2]} style={{ width: '100%' }} />
      </div>
      <div className={style.right}>
        {rightContent}
      </div>
    </div>
  )
}
