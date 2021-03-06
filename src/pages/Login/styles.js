import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '~/styles/themes';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.secondary};
  padding: 24px 20px 20px;
  border-radius: 4px;
  border: 1px solid ${colors.tertiary};
`;

export const Title = styled.h1`
  letter-spacing: 0.5px;
  font-size: 1.6rem;
`;

export const Form = styled.form`
  border-top: 0.5px solid ${colors.lighter};
  border-bottom: 0.5px solid ${colors.lighter};
  display: flex;
  flex-direction: column;
  padding: 24px 28px 30px;
  margin: 8px 0 14px 0;

  .error {
    border-color: red;
  }
`;

export const Text = styled(Link)`
  color: ${colors.light};
  font-size: 0.8rem;
  font-weight: 900;
`;

export const SInput = styled(Input)`
  width: 14rem;
  height: 2.8rem;
  border: 0.5px solid;
  border-radius: 4px;
  padding: 10px;
  font-size: 0.8rem;
  margin-bottom: ${props => (props.marginError ? 0 : '22px')};

  &::placeholder {
    color: ${colors.lighter};
    font-weight: 500;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 13px;
  margin-top: ${props => (props.marginError ? '4px' : 0)};
  margin-bottom: ${props => (props.marginError ? '10px' : 0)};
`;

export const BButton = styled(Button)`
  height: 2.8rem;
  background-color: ${colors.tertiary};
  border: 0.5px;
  border-radius: 4px;
`;
