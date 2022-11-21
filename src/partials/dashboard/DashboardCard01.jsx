import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';
import Vibration from './vibration';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

let cChartData = {
  labels:[],
  datasets:[],
};

function pollMotorData()
{
  let xData = new Vibration(tailwindConfig().theme.colors.red[500]);
  let yData = new Vibration(tailwindConfig().theme.colors.green[500]);
  let zData = new Vibration(tailwindConfig().theme.colors.blue[500]);
  //TODO: Backend query should be added here for spesific time span
  for(let i = 0; i < 100; i++)
  {
    cChartData.labels.push(i);
    xData.data.push(100);
    yData.data.push(200);
    zData.data.push(400);
  }
  //
  cChartData.datasets.push(xData);
  cChartData.datasets.push(yData);
  cChartData.datasets.push(zData);
}

function DashboardCard01() {
  pollMotorData();
  let chartData = cChartData;
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Motor Id : 000f00001</h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div> */}
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard01;
