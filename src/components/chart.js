import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function high(data){
  return _.round(Math.max(...data));
}

function low(data){
  return _.round(Math.min(...data));
}

const style = {
  chart: {
    display: 'flex',
    flexDirection: 'row'
  }, 
  column:{
    display:'flex', 
    flexDirection:'column',
    justifyContent: 'space-between',
    padding:'1em'
  }

}

//this is just a functional component - we don't need to change state
export default (props) => {
  return(
    <div>
      <div style={style.chart}>
        <Sparklines height={120} width={180} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div style={style.column}>
          <div>{high(props.data)}{props.units}</div>
          <div>{average(props.data)}{props.units}</div>
          <div>{low(props.data)}{props.units}</div>
        </div>
      </div>
    </div>
  )
}
