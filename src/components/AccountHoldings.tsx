import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { Title } from '../styled/GlobalElements';
import Number from './Number';
import { selectCurrentAccountHoldings } from '../selectors/groups';
import { selectCurrencies } from '../selectors';
import ShadowBox from '../styled/ShadowBox';
import { Symbol } from '../styled/Group';

export const HoldingsTable = styled.table`
  width: 100%;
  text-align: center;
  margin: 0 0 20px 0;
  th {
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 15px 12px 5px;
  }
  th:first-of-type {
    border-bottom: none;
  }
  tr th,
  tr td {
    @media (min-width: 900px) {
      width: 12%;
    }
  }
  tr th:first-of-type,
  tr td:first-of-type {
    text-align: left;
    @media (min-width: 900px) {
      width: 52%;
    }
  }
  tr td:first-of-type {
    font-weight: 700;
  }
  tr th:last-of-type,
  tr td:last-of-type {
    text-align: right;
  }
  td {
    padding: 15px 12px;
    &:first-child {
      padding: 15px 0;
    }
  }
  tbody tr:nth-oftype(even) {
    background: #f4f4f4;
  }
  @media (max-width: 900px) {
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 20px;
    }

    tr td {
      display: block;
      text-align: right;
      padding: 15px 0px;
      &:first-child {
        text-align: center;
      }
      span {
        display: block;
      }
    }

    td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`;

const HoldingsBox = styled.div`
  @media (min-width: 900px) {
    margin-top: 20px;
  }
`;

const SymbolNameBox = styled.span`
  @media (min-width: 900px) {
    padding-left: 10px;
  }
  @media (max-width: 900px) {
    margin-top: 12px;
    line-height: 1.4;
    font-weight: 600;
  }
`;

const CurrencyCodeBox = styled.span``;

export const AccountHoldings = () => {
  const account = useSelector(selectCurrentAccountHoldings);
  const currencies = useSelector(selectCurrencies);

  if (!account) {
    return <FontAwesomeIcon icon={faSpinner} spin />;
  }

  const getCurrencyById = (currencyId: string) => {
    return (
      currencies && currencies.find(currency => currencyId === currency.id)
    );
  };

  const renderedPositions =
    account.positions &&
    account.positions.map((position: any) => {
      const currency = getCurrencyById(position.symbol.symbol.currency);
      return (
        <tr key={position.symbol.id}>
          <td>
            <span>
              <Symbol>{position.symbol.symbol.symbol}</Symbol>
            </span>
            <SymbolNameBox>{position.symbol.symbol.name}</SymbolNameBox>
          </td>
          <td data-label="Units">{position.units}</td>
          <td data-label="Price">
            <Number value={position.price} currency />
          </td>
          <td data-label="Value">
            <Number value={position.price * position.units} currency />
          </td>
          <td data-label="Currency">
            <CurrencyCodeBox title={currency ? currency.name : ''}>
              {currency && currency.code}
            </CurrencyCodeBox>
          </td>
        </tr>
      );
    });

  return (
    <ShadowBox>
      <HoldingsBox>
        <HoldingsTable>
          <thead>
            <tr>
              <th></th>
              <th>
                <Title>Units</Title>
              </th>
              <th>
                <Title>Price</Title>
              </th>
              <th>
                <Title>Value</Title>
              </th>
              <th>
                <Title>Currency</Title>
              </th>
            </tr>
          </thead>
          <tbody>{renderedPositions}</tbody>
        </HoldingsTable>
      </HoldingsBox>
    </ShadowBox>
  );
};

export default AccountHoldings;
