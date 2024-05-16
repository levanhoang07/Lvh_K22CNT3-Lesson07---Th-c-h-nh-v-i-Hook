import React, { useState } from 'react';

export default function LvhUserState() {

    const [count, setCount] = useState(0);

    // mangr
    const [list, setList] = useState([1, 5]); // Sửa ở đây, truyền một mảng ban đầu [1, 5] vào useState()

    // hàm xử lý sự kiện "Thêm ngẫu nhiên"
    const lvhHandleList = () => {
        // sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random() * 100);
        // cập nhật lại state:list
        setList([...list, num]); // Sử dụng spread operator để thêm giá trị mới vào mảng list
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 5)}>
                Click me
            </button>
            <hr/>
            <h3>List: {list.toString()}</h3>
            <button onClick={lvhHandleList}>Thêm ngẫu nhiên</button> {/* Sửa onClick */}
        </div>
    );
}
