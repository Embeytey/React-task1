import React from 'react';
import Work from './Work';
import UserName from './UserName';
import Proffession from './Proffession';
import ProffessionField from './ProffessionField';
import University from './University';
import Home from './Home';
import { useState } from 'react';


   

export default function Page() {

    const [step,setStep]=useState(1);

const nextStep=()=>{
    setStep(step + 1);
}
const preStep=()=>{
    setStep(step-1);
}

let component;
switch(step){
    case 1:
        component=(
            <div>
            <Home  nextStep={nextStep}/ >
            </div>
        );
    break;
    case 2:
    component=(
        <div>
            <UserName 
            preStep={preStep}
            nextStep={nextStep}/>
        </div>
    );
    break;
    case 3:
        component=(
            <div>
             <Proffession preStep={preStep}
             nextStep={nextStep}/>       
            </div>
        );
        break;
    case 4:
        component=(
            <div>
                <Work  preStep={preStep}
                nextStep={nextStep}/>
            </div>
        );        
        break;
    case 5:
    component=(
           <div>
           <University preStep={preStep}
           nextStep={nextStep}/> 
           </div> 
    );
    break;
    case 6:
        component=(
            <div>
                <ProffessionField 
                preStep={preStep}
                nextStep={nextStep}
                />
            </div>
        );
        break;

     default:
     component=(
         <div>
             <Home 
             nextStep={nextStep}/>
         </div>
     );   
}
    return component;
    
    
}
