import React, { useState } from 'react'

export default function LvhUserEffect() {
    // state: count
    const[count, setCount]= useState(0);

    // hàm xử lý sự kiện click me
    const lvhHandleClick = ()=>{
        setCount(prev => +1);
    }

    //sử dụng hàm useEffect để cập nhật lại title ; có một tham số
    useEffect(()=>{
        document.title='Lê Văn Hoàng: You Clicked ${count} times';
        console.log('You clicked $ {count} times');
    });
    //useEffect : tham số thứ 2 là mảng rỗng 
    useEffect(()=>{
        console.log("Chạy lần đầu tiên - một lần ");
    },[])
    // [deps]
    useEffect(()=>{
        console.log('useEffect count click: ',{count})

    })
    return (
    <div>
        <h2>Demo - UserEffect: You clicked {count}times</h2>
        <button onClick={lvhHandleClick}>
        Click Here</button>
    </div>
  )
}
