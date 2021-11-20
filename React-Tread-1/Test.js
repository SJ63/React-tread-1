import React,{ useState} from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import daily from "./daily.json" ;
import 'antd/dist/antd.css';
import './Test.css'
import { Line } from "react-chartjs-2";


let TT_1 = []
let TT_2 = []

let PP = []

let LL = []


const { SubMenu } = Menu;


let a = "จังหวัด"


// for (let i = 0; i < daily[0].data.station.length; i++) {
  
//   results_2.push(daily[0].data.station[i].province)
  
  
// }


// const handleMenuClick = (e) => {


  // for (let i = 0; i < daily.length; i++) {

  //   results_2.push(daily[i].data.date);
    
  // }


  // for (let i = 0; i < daily.length; i++) {
  

  //   for(let j = 0 ; j < daily[i].data.station.length ; j++)
  //   {
  //     if(daily[i].data.station[j].id === e.key)

  //     results.push(daily[i].data.station[j].temp)
  //   }

  // }


//   console.log(e.key);
//   console.log(results);

// }




//function TT
function TT(){

  let KK = []


  // console.log(daily[0].data.station.length);
  // for (let j = 0; j < daily.length; j++) {
    for (let i = 0; i < daily[0].data.station.length; i++) {
  
    // TT_2.push(<Menu.Item key={daily[0].data.station[i].province}>
    // {daily[0].data.station[i].province}
    // </Menu.Item>)
    if(PP.includes(daily[0].data.station[i].province))
    {
      KK.push(<Menu.Item key = {daily[0].data.station[i].id}>{daily[0].data.station[i].id}</Menu.Item>)
    }
    else
    {
      //********************************************************************************************************** */
      KK = []

      PP.push(daily[0].data.station[i].province)


      // for(let k = 0 ; k < daily[0].data.station.length ; k++)
      // {
      // if(daily[0].data.station[0].province === daily[0].data.station[k].province)
      //   {
      //   KK.push(daily[0].data.station[k].id)

      //   LL.push(<Menu.Item key = {daily[0].data.station[k].id}>{daily[0].data.station[k].id}</Menu.Item>)
      
      //   }
      // }
      KK.push(<Menu.Item key = {daily[0].data.station[i].id}>{daily[0].data.station[i].id}</Menu.Item>)


      TT_2.push(<SubMenu title = {daily[0].data.station[i].province} key={daily[0].data.station[i].province}>
        {KK}
        </SubMenu>)
      
    }
  // }
    // if(PP.includes(daily[0].data.station[i].province))
    // {
    //   console.log(daily[0].data.station[i].province);
    // }
    
  }


  // for(let k = 0 ; k < daily[0].data.station.length ; k++)
  // {
  //   if(daily[0].data.station[0].province === daily[0].data.station[k].province)
  //   {
  //     KK.push(daily[0].data.station[k].id)

  //     LL.push(<Menu.Item key = {daily[0].data.station[k].id}>{daily[0].data.station[k].id}</Menu.Item>)
      
  //   }
  // }

  

  // PP.includes("พัทลุง")
  // console.log(TT_2);

}


//function Test
function Test() {

  let P1 = []
  let P2 = []

  const [results ,setResults] = useState([]);
  const [results_2 ,setResults_2] = useState([]);

  
  const handleMenuClick = (e) => {


    for (let i = 0; i < daily.length; i++) {
  
      P1.push(daily[i].data.date);
      
    }

    setResults_2(P1)
  
  
    for (let i = 0; i < daily.length; i++) {
  
      for(let j = 0 ; j < daily[i].data.station.length ; j++)
      {
        if(daily[i].data.station[j].id === e.key)
        {
          P2.push(daily[i].data.station[j].temp)
        }

      }

    }

    setResults(P2)
  
  
    console.log(e.key);
  
  }


  const menu = (
    <Menu onClick={handleMenuClick}>
      {/* {TT_1} */}
      {TT_2}
  
    </Menu>
  );

  
  
  const data = {
    labels: results_2,
    datasets: [
      {
        label: "temp",
        data: results,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };
  
  
  let options = {
    plugins : {
        legend:{
            display : false
        }
    },
  maintainAspectRatio : false,
  }


    return(
        
    <div className="All">
      <div className="Sub1">
      <Dropdown overlay={menu} >
        <Button >{a}</Button>
      </Dropdown>
      </div>

      <div className="Sub2">
        <div style = {{height: "300px", width:"1000px"}}>
            <Line data ={data} 
            height = {400}
            width = {600}
            options ={options}
            />
        </div>
      </div>
    </div>
  
    ) 
}

TT()
export default Test;