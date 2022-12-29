import React from 'react';



function App() {

    const curDate = new Date().getHours();
    let greeting = '';
    let cssStyle = { };

    if (curDate>=1 && curDate<12) {
        greeting = 'Good Morning';
        cssStyle.color = 'Green';
    }else if (curDate>=12 && curDate<19){
        greeting = 'Good Afternoon';
        cssStyle.color = 'Orange';
    }else {
        greeting = 'Good Night';
        cssStyle.color = "Blue";
    }   

    return(
        <>
            <div>
                <h1>Hello, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default App;