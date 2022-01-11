import React, { useState, useContext } from 'react';

import {SFContext} from '../providers/SandwichFeastProvider';

const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [state] = useContext(SFContext);
    
    let total = arrSum(state.tables); 

    const toggle = () => setIsOpen(!isOpen);

    return (
          <div color="light" light expand="md" className="p-1">
            <div href="/"><del>Pivo</del><ins>Chlebíčko</ins>braní</div>
            <div onClick={toggle} />
            <div isOpen={isOpen} navbar>
                <nav className="px-2">
                    <p>Počet: {total}</p>
                </nav>
            </div>
          </div>
    );
}

export default Navigation;