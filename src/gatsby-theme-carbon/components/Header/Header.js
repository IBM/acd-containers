import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

require('../languages/prism-powershell')


const CustomHeader = props => (

  <Header {...props}>
    IBM Watson Annotator for Clinical Data Container Edition
  </Header>

);

export default CustomHeader;
