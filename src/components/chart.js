import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

//this is just a functional component - we don't need to change state
export default (props) => {
  return(
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}
