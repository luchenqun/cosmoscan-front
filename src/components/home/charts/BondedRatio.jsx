import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import API from '../../../api';
import useChartFormatter from '../../../hooks/useChartFormatter';
import useRequest from '../../../hooks/useRequest';
import ChartContainer from '../../../layouts/ChartContainer';
import {
  formatDate,
  formatDateWithTime,
  formatPercentValue,
} from '../../../utils';
import { periodOpts } from '../../../utils/constants';
import AreaChart from '../../chart-types/AreaChart';
import SelectPeriod from '../../SelectPeriod';

const chartName = 'Bonded ratio';
const yAxisWidth = 60;
const yTickCount = 10;
const areaName = chartName;
const defaultPeriod = periodOpts[2];

const BondedRatio = () => {
  const theme = useContext(ThemeContext);
  const color = theme.navyBlue;
  const res = useRequest(API.getBondedRatio, defaultPeriod.value);
  const bondedRatio = useChartFormatter(res.resp);

  return (
    <ChartContainer
      title={chartName}
      select={
        <SelectPeriod
          defaultPeriod={defaultPeriod}
          isDisabled={res.isLoading}
          onChange={res.request}
        />
      }
      chart={
        <AreaChart
          areaName={areaName}
          isLoading={res.isLoading}
          data={bondedRatio}
          yAxisLabelsFormatter={formatPercentValue}
          yAxisWidth={yAxisWidth}
          yTickCount={yTickCount}
          yAxisDomain={['dataMin', 'dataMax']}
          xAxisTickFormatter={formatDate}
          tooltipFormatter={formatPercentValue}
          tooltipLabelFormatter={formatDateWithTime}
          color={color}
        />
      }
    />
  );
};

export default BondedRatio;
