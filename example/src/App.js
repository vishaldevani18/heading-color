import React from 'react'

import  {ColoredHeadingOne ,ColoredHeadingTwo }  from 'heading-color';

class App extends React.Component{

  render(){

    return(

      <div>
        <ColoredHeadingOne
        text = "Color Heading is working"
        color={"red"}
        />

        {/* othor component */}
        <ColoredHeadingOne
        text = "Color Heading 2  is working"
        color={"blue"}
        />

      </div>
    )
  }


}
export default App
