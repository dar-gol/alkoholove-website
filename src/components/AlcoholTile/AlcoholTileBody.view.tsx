import React from 'react';
import {useTheme} from "styled-components";
import {IAlcohol} from '../../@types/alcohol';
import {Text} from '../../styles/global.styled';
import {getDate} from "../../utils/utils";
import {Description, DescTitle} from "../Tile/Tile.styled";

interface AlcoholTileBodyProps {
  alcohol: IAlcohol;
}

export const AlcoholTileBody: React.FC<AlcoholTileBodyProps> = ({alcohol}) => {
  const theme = useTheme() as { palette: { [k: string]: string } };
  return (
      <>
        <DescTitle>Opis:</DescTitle>
        <Description>{alcohol.description}</Description>
        {alcohol.searchDate && (
            <>
              <DescTitle>Data wyszukiwania:</DescTitle>
              <Text
                  type="body"
                  size="small"
                  weight="regular"
                  color={theme.palette.Grey40}>
                {getDate(alcohol.searchDate)}
              </Text>
            </>
        )}
      </>
  );
}
