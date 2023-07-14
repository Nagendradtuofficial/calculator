import react from "react" ;

import './Board.css'; 

export const Board = ({value,Setvalue}) => {
    const calculate = (value) => {
        let number = 0;
        let stack = [];
        let lastOperator = '';
        for(let i=0; i<value.length; i++) {
            if(value[i] === ' ') {
                continue;
            }
            if(!isNaN(value[i])) {
                number = number * 10 + Number(value[i]);
                if(!isNaN(value[i+1]) && value[i+1] !== ' ') {
                    continue;
                }
                switch(lastOperator) {
                     case '+':
                        stack.push(number);
                        break;
                    case '-':
                        stack.push(Number(-number));
                        break;
                    case '*':
                        let top = stack.pop();
                        stack.push(number*top);
                        break;
                    case '/':
                        let top1 = stack.pop();
                        if (top1 < 0) {
                            stack.push(Math.ceil(top1/number));   
                        } else {
                            stack.push(Math.floor(top1/number));
                        }
                        break;
                    default:
                        stack.push(number);
                        break;
                }
            } else {
                lastOperator = value[i];
                number = 0;
            }
        }
        const t = stack.reduce((curr, acc) => curr+acc) ;
        while (value.length !== 0) {
            value.pop() ;
        }

        Setvalue([...value,t])
        return stack.reduce((curr, acc) => curr+acc);
    };

    return (
        <div className="brd">
            <br></br>
            <button className="buttn" onClick={() => { Setvalue([...value,'1']);}}>1</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'2']);}}>2</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'3']);}}>3</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'4']);}}>4</button>
            <br></br>
            <button className="buttn" onClick={() => { Setvalue([...value,'5']);}}>5</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'6']);}}>6</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'7']);}}>7</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'8']);}}>8</button>
            <br></br>
            <button className="buttn" onClick={() => { Setvalue([...value,'9']);}}>9</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'0']);}}>0</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'+']);}}>+</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'-']);}}>-</button>
            <br></br>
            <button className="buttn" onClick={() => { Setvalue([...value,'*']);}}>*</button>
            <button className="buttn" onClick={() => { Setvalue([...value,'/']);}}>/</button>
            <button className="buttn" onClick={() => {calculate(value)}}>=</button>
            <button className="buttn" onClick={() => {while(value.length !== 0){value.pop();} Setvalue([...value,'']) }}>Clear</button>
            <br></br>
            <button className="buttn" onClick={() => {if (value.length >= 1){value.pop();}Setvalue([...value,''])}}>Backspace</button>
        </div>
    )
}