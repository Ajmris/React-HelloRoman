import React from "react";
import {createRoot} from 'react-dom/client';
import {data} from './data';

const UsersList=()=>{
    return (
        <div>
            {data.map(({name, age})=>(
                <p>{name}, {age}</p>
            ))}
        </div>
    )
}
const root=createRoot(document.getElementById('app'));
root.render(<UsersList/>);