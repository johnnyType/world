import React from 'react';
import styled from 'styled-components';

import FlagName from './FlagName';
import Form from './Form';
import Tab from './Tab';

const PanelWrapper = styled.div`
    width: 450px;
    margin-left: 30px;
`;

const RightPanel = () => {
    return (
        <PanelWrapper>
            <Tab {...{"当前国家":FlagName,"添加事件": Form}}/>
        </PanelWrapper>
    );
}

export default RightPanel;