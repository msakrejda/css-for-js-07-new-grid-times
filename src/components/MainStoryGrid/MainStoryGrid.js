import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 3fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: -24px;
    width: 1px;
    height: 100%;
    background-color: var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: -24px;
      width: 1px;
      height: 100%;
      background-color: var(--color-gray-300);
    }
  }
`;


const StoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  a:not(:last-child)::after {
    content: '';
    display: block;
    height: 1px;
    background-color: var(--color-gray-300);
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
    a:not(:last-child)::after {
      display: none;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    ::before {
      content: '';
      position: absolute;
      top: -24px;
      left: 0px;
      width: 100%;
      height: 1px;
      background-color: var(--color-gray-300);
    }
  }
`;

export default MainStoryGrid;
