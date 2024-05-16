import React, { useCallback, useContext } from 'react'
import { ThemeContext } from './LvhUserContext'

export default function LvhUserContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + 'm-3'}>
        <h2>LvhUserContext2</h2>
        <p>
            <b>2210900024</b>
            <b>Lê Văn Hoàng</b>
            <i>K22CNT3</i>
        </p>
    </div>
  )
}
