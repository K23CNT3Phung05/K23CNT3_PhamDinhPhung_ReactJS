import React from "react";
export default function PdpJsxExpression() {
    //bien
    const name="Pham Dinh phung"
    // bien doi tuong
    const user = {
    firstNam:"Phung",
    lastnamee:"Pham"
}
    //ham
    const fullName=(user)=>{
        return user.firstName +' '+ user.lastnamee ;
    }
    // element 
    const element=(
        <div>
            {/* bieu thuc jsx*/}
            <h2>{fullName(user)} </h2>
            <hr/>
            <h3> welcome to,{name}</h3>
        </div>
    );
    //ham
    const saywelcome =(name)=>{
        if(name){
            return <h3>
                welcome to {name}
            </h3>

        }else{
            return<h3>
                welcome to Fit-NTU -K23CNT3
            </h3>
        }
    }

    return(
        <div>
        <h1> Pdp - JSX Expression</h1>
        {/* su dung bien element*/}
        {element}
        <hr/>
        {saywelcome()}
        <hr/>
        {saywelcome(name)}
        </div>
    )
}
