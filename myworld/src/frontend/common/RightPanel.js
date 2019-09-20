import React from 'react';
import styled from 'styled-components';

import FlagName from './FlagName';

const PanelWrapper = styled.div`
    width: 450px;
    margin-left: 30px;
`;

const RightPanel = () => {
    return (
        <PanelWrapper>
            <FlagName/>
        </PanelWrapper>
    );
}

export default RightPanel;