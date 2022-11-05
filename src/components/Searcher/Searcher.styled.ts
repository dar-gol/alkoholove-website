import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styled from 'styled-components';
import {
  Body,
  Heading3Large,
  Heading4Large,
} from '../../styles/typography.styled';
import {BlockType, Col, Icon, Row, Text} from '../../styles/global.styled';

export const LightBox = styled.div<{show: boolean}>`
  transition: left 0.05s;
  z-index: 10;
  position: fixed;
  top: 0;
  left: ${({show}) => (show ? 0 : '100%')};
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.palette.BackgroundTransparency50};
`;

export const SearchView = styled.div<{show: boolean}>`
  --search-block-width: 70%;
  /* min-width: 800px; */
  transition: right 0.2s;
  position: fixed;
  top: 0;
  right: ${({show}) => (show ? 0 : '-100%')};
  width: var(--search-block-width);
  height: 100%;
  z-index: 11;
  padding: 20px;
  padding-right: 0;
  @media (max-width: 768px) {
    --search-block-width: 100%;
    padding: 0px;
  }
`;

export const SearchContainer = styled(Col)`
  flex: 1;
  background-color: ${({theme}) => theme.palette.White};
  box-shadow: 0px 0px 100px 0px
    ${({theme}) => theme.palette.BackgroundTransparency30};
  height: 100%;
  width: 100%;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
  padding: 40px;
  gap: 20px;
  @media (max-width: 768px) {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    padding: 20px;
  }
`;

export const FilterWrapper = styled(Row)`
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const Title = styled(Text)`
  cursor: pointer;
  ${Heading4Large('medium')}
  color: ${({theme}) => theme.palette.Grey80};
  display: flex;

  gap: 10px;
  & span::before {
    color: ${({theme}) => theme.palette.Grey80};
  }
`;

export const CategoryTitle = styled(Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({theme}) => theme.palette.White};
  z-index: 2;
`;

export const CircleIcon = styled(Icon)`
  background-color: ${({theme}) => theme.palette.Primary80};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  &:before {
    font-size: 14px;
    color: ${({theme}) => theme.palette.White};
  }
`;

export const CollapseIcon = styled(Icon)`
  transform: rotate(180deg);
  &:before {
    font-size: 10px;
    color: ${({theme}) => theme.palette.Primary80};
  }
`;

export const StyledAccordion = styled(Accordion)`
  flex: 1;
`;
export const StyledAccordionItem = styled(AccordionItem)``;
export const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  display: flex;
  align-items: center;
  height: 48px;
`;
export const StyledAccordionTextHeading = styled(Text)`
  flex: 1;
  ${Body('medium')};
  color: ${({theme}) => theme.palette.Grey70};
`;
export const StyledAccordionItemButton = styled(AccordionItemButton)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  cursor: pointer;
  &[aria-expanded='true'] ${CollapseIcon} {
    transform: rotate(0deg);
  }
`;
export const StyledAccordionItemPanel = styled(AccordionItemPanel)``;
export const StyledAccordionItemHidden = styled.div<{selected?: boolean}>`
  height: 48px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  color: ${({theme, selected}) =>
    selected ? theme.palette.Primary80 : theme.palette.Grey30};
  ${Body('regular', 'medium')}
  border-bottom: 1px solid ${({theme}) => theme.palette.Grey10};
  cursor: pointer;
  position: relative;
  &:before {
    content: '';
    display: ${({selected}) => (selected ? 'block' : 'none')};
    height: 8px;
    width: 8px;
    background-color: ${({theme}) => theme.palette.Primary100};
    border-radius: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -20px;
  }
  &:last-child {
    border-bottom: 0px solid;
  }
`;

export const Token = styled.div`
  background-color: ${({theme}) => theme.palette.Grey10};
  padding: 5px 10px;
  display: flex;
  gap: 5px;
  border-radius: 10px;
  cursor: pointer;
  & span:before {
    font-size: 10px;
  }
`;
