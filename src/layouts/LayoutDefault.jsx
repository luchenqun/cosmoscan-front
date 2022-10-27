import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import AppFooter from '../components/App/AppFooter';
import AppHeader from '../components/App/AppHeader';
import AppSearchField from '../components/App/AppSearchField';
import AppTopStats from '../components/App/AppTopStats';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppContent = styled.div`
  flex: 1 0 auto;
  background-color: ${({ theme }) => theme.whiteGrey};
  padding: ${({ theme }) => theme.marginSectionsStandard} 0;
`;

const LayoutDefault = ({ children }) => (
  <AppWrapper>
    <AppHeader />
    <AppTopStats />
    <AppSearchField />
    {/* <Banner /> */}

    <AppContent>{children}</AppContent>

    <AppFooter />
  </AppWrapper>
);

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutDefault;
