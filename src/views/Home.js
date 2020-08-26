import React, { useState } from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';


// class Home extends React.Component {


//     render(){
//         return (
//             <div>
//                 <Button type='primary' loading size="large" style={{width:"80%",margin:'0 auto'}} >Increment</Button>
//             </div>
//         )
//     }

// }

function Home(){
    const [counter,setCounter] = useState(0)

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <div>
            <Button onClick={increment}>Increment</Button>
            value: {counter}
        </div>
    )
} 


export default Home;