import React from 'react'


const styles = {
    dark : {
        background : 'black',
        color : 'white'
    } ,

    yellow : {
        background : "yellow",
        color : 'red'
    }
}

function HOC(WrappedComp) {
  return function (args){
    let temp ={}

    if(args.dark){
        temp = {...styles.dark}
    }

    else if (args.yellow){
        temp = {...styles.yellow}
    }

    let obj = {...args , style : temp}

    return <WrappedComp {...obj}/>

  }
}

export default HOC