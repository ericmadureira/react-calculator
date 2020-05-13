import React from 'react';
import styled from 'styled-components';

const Credits = styled.p`
  font-size: 1.5em;
`;

const Container = () => (
  <Credits>
    Made by <a
      href='https://ericmadureira.github.io/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Eric Madureira
    </a>
  </Credits>
);

export default Container;
