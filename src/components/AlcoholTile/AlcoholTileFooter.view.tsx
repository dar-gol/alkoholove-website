import React from 'react';
import {useTheme} from "styled-components";
import {IAlcohol} from '../../@types/alcohol';
import {Row, Col,} from '../../styles/global.styled';
import {getRate} from "../../utils/utils";
import Stars from "../Stars/Stars.view";
import {IComment} from "../../@types/comment";
import CommentView from "../Comment";

interface AlcoholTileFooterProps {
    alcohol: IAlcohol;
    review?: IComment;
}

export const AlcoholTileFooter: React.FC<AlcoholTileFooterProps> = ({alcohol, review}) => {
    const theme = useTheme() as { palette: { [k: string]: string } };
    return (
        <>
            <Row
                flex="0"
                alignItems="center"
                justifyContent="center"
                margin="20px 0 0 0"
            >
                <Stars rate={getRate(alcohol.rate_value, alcohol.rate_count)} />
            </Row>
            {review && (
                <Col>
                    <Col
                        minHeight="2px"
                        maxHeight="2px"
                        margin="20px 0"
                        backgroundColor={theme.palette.Grey10}
                    />
                    <CommentView
                        index={123123123}
                        isYourComment={false}
                        comment={review}
                        manageHelpful={() => {}}
                        setCommentModalActive={() => {}}
                    />
                </Col>
            )}
        </>
    );
}
