import React, {ReactElement} from 'react';

import {
  Content,
  ImageContainer,
  Name,
  Type,
  Wrapper,
} from './Tile.styled';

interface TileViewProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  headerBackgroundColor?: string;
  headerTop?: string;
  renderImage: () => ReactElement;
  renderBody: () => ReactElement;
  renderFooter?: () => ReactElement;
}

export const TileView: React.FC<TileViewProps> = ({
  title,
  subtitle,
  onClick,
  headerBackgroundColor,
  headerTop,
  renderImage,
  renderBody,
  renderFooter,
}) => (
      <Wrapper
          margin="80px 0 0 0"
          onClick={onClick}>
        <ImageContainer top={headerTop} backgroundColor={headerBackgroundColor} zIndex={1}>
          {renderImage()}
        </ImageContainer>
        <Content minWidth="300px" height="300px" padding="">
          <Name>{title}</Name>
          <Type>
            {subtitle}
          </Type>
          {renderBody()}
          {renderFooter && renderFooter()}
        </Content>
      </Wrapper>
  );
