import React from 'react';
// import { useHistory } from 'react-router-dom';
import API from '../../../api';
import useChartFormatter from '../../../hooks/useChartFormatter';
import useCoinFormatter from '../../../hooks/useCoinFormatter';
import useRequest from '../../../hooks/useRequest';
import ChartContainer from '../../../layouts/ChartContainer';
import {
  formatDate,
  formatDateWithTime,
  formatToken,
  formatTokenAmount,
} from '../../../utils';
import { periodOpts } from '../../../utils/constants';
import AreaChart from '../../chart-types/AreaChart';
import SelectPeriod from '../../SelectPeriod';

const yAxisWidth = 60;
const yTickCount = 10;
const areaName = 'Transfer volume';
const defaultPeriod = periodOpts[2];
const isDotClickable = false;

const TxVol = () => {
  const res = useRequest(API.getTxVol, defaultPeriod.value);
  const coin = useCoinFormatter();
  const txVolComp = useChartFormatter(res.resp);
  const chartName = `Transfer volume (${coin})`;
  // TODO: Configure right navigation
  // const history = useHistory();
  // const onDotClick = () => history.push('/network');

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
          data={txVolComp}
          yAxisLabelsFormatter={formatTokenAmount}
          yAxisWidth={yAxisWidth}
          yTickCount={yTickCount}
          yAxisDomain={[
            (dataMin) => Math.round(dataMin),
            (dataMax) => Math.round(dataMax),
          ]}
          xAxisTickFormatter={formatDate}
          tooltipFormatter={formatToken}
          tooltipLabelFormatter={formatDateWithTime}
          isDotClickable={isDotClickable}
        />
      }
    />
  );
};

export default TxVol;
