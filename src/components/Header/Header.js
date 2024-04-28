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
      <MobileHeader>
        <SuperHeader>
          <Row>
            <SearchAndMenuIcons />
            <ActionGroup>
              <UserPreferencesButton>
                <User size={24} />
              </UserPreferencesButton>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <LaptopAndUpHeader>
        <MainHeader>
          <SearchAndMenuIcons />
          <Logo />
          <SubscribeBlurb>
            <Button>Subscribe</Button>
            <span>Already a subscriber?</span>
          </SubscribeBlurb>
        </MainHeader>
      </LaptopAndUpHeader>
    </Wrapper>
  );
};

const MobileHeader = styled.div`
  display: contents;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const LaptopAndUpHeader = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: contents;
  }
`;

const SearchAndMenuIcons = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  )
}

const Wrapper = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UserPreferencesButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SubscribeBlurb = styled.div`
  display: none;
  span {
    text-decoration: underline;
    font-style: italic;
  }
  text-align: center;
  align-self: flex-end;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 100%;

    grid-template-columns: min-content max-content min-content;
    justify-content: space-between;
  }
`;

export default Header;
