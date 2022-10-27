import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlockDelay from '../../components/network/charts/BlockDelay';
import Blocks from '../../components/network/charts/Blocks';
import FeeVol from '../../components/network/charts/FeeVol';
import Operations from '../../components/network/charts/Operations';
import Validators from '../../components/network/charts/Validators';
import ColMarginStandard from '../../components/styled/ColMarginStabdard';
import { Container, Row } from '../../components/styled/CustomBsGrid';
// import OperationsPerBlock from '../../../components/network/charts/OperationsPerBlock';
import DelegationVol from '../../components/network/charts/DelegationVol';
import UnbondingInitVol from '../../components/network/charts/UnbondingInitVol';
import UnbondingVol from '../../components/network/charts/UnbondingVol';

const Charts = () => (
  <Container>
    <Helmet>
      <title>Cosmos network charts | Cosmoscan</title>
      <meta
        name="description"
        content="Cosmoshub general data aggregated and displayed through charts."
      />
      <meta
        itemProp="description"
        content="Cosmoshub general data aggregated and displayed through charts."
      />
      <meta
        property="og:description"
        content="Cosmoshub general data aggregated and displayed through charts."
      />
      <meta
        name="twitter:description"
        content="Cosmoshub general data aggregated and displayed through charts."
      />
    </Helmet>

    <Row xs={1} xl={2}>
      <ColMarginStandard>
        <Blocks />
      </ColMarginStandard>
      <ColMarginStandard>
        <BlockDelay />
      </ColMarginStandard>
      <ColMarginStandard>
        <FeeVol />
      </ColMarginStandard>
      <ColMarginStandard>
        <Validators />
      </ColMarginStandard>
      <ColMarginStandard>
        <Operations />
      </ColMarginStandard>
      <ColMarginStandard>
        <DelegationVol />
      </ColMarginStandard>
      <ColMarginStandard>
        <UnbondingInitVol />
      </ColMarginStandard>
      <ColMarginStandard>
        <UnbondingVol />
      </ColMarginStandard>
    </Row>
  </Container>
);

export default Charts;
