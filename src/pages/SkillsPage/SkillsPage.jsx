import React from 'react'
import LinesChart from '../../components/LineChart/LineChart.jsx'
import Styles from './SkillsPage.module.css'
import {lineChartData} from '../../constants/lineChartData.js';


export function SkillsPage() {
 
  return (
    <>
    <h1>Welcome to the Skills Section, where we delve into my abilities and proficiencies.</h1>
    <p className={`${Styles.commonP} ${Styles.note}`}>
      Note: It's worth mentioning that you have the option to interact with the points on the chart's legend, allowing you to selectively hide specific individual graphs.
    </p>
    {lineChartData.map(
      (
        data) => (
          <>
          <p className={`${Styles.commonP} ${Styles.paragraph}`}>
            {data.description}
          </p>
          <div className={Styles.box}>
            <div className={Styles.listChart}>
              <LinesChart data={data}/>
            </div>
          </div>
          </>
          ))}



    </>
  )
}
