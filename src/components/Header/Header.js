import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeBlurb>
        <Button>Subscribe</Button>
        <span>Already a subscriber?</span>
      </SubscribeBlurb>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    grid-template-columns: min-content max-content min-content;
    align-items: center;
    justify-content: space-between;
  }
`;

const SubscribeBlurb = styled.div`
  display: none;
  span {
    text-decoration: underline;
    font-style: italic;
  }
  text-align: center;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  &:last-child {
    @media ${QUERIES.laptopAndUp} {
      display: none;
    }
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 64px;
    justify-content: space-between;
  }
`;

export default Header;
