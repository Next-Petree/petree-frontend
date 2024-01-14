import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";

import * as S from "./styles";
import { useEffect, useState } from "react";

type Props = {
    placeHolder: string;
    width: string;
    height: string;
};

const SelectUl = styled.ul<{ customwidth: string }>`
    /* width: ${(props) => props.customwidth}; */
    width: 110%;
    position: absolute;
    top: 50px;

    /* background: #ffffff; */
    background: red;
    border: 1px solid #eeeeee;
    border-radius: 12px;
    box-shadow: 0px 14px 20px 0px #3a3a3a14;
    list-style-type: none;

    margin: 0;
    padding: 0;
    z-index: 999;

    cursor: pointer;
`;

const SelectLi = styled.li`
    /* width: 100%; */
    height: 58px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border-radius: 16px;
    border-bottom: 1px solid #eeeeee;

    padding: 0px 20px;
    gap: 10px;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #000000;

    &:hover {
        background: #4ec1bf;
    }
`;

const DateInput = ({ placeHolder, width, height }: Props) => {
    useEffect(() => {}, []);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <S.Wrapper width={width} height={height}>
            <S.Input placeholder={placeHolder} disabled />
            <S.IconContainer
                isclicked={isOpen}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <BiSolidDownArrow />
            </S.IconContainer>
            {isOpen && (
                <SelectUl customwidth={width}>
                    <SelectLi>1</SelectLi>
                    <SelectLi>1</SelectLi>
                    <SelectLi>1</SelectLi>
                    <SelectLi>1</SelectLi>
                    <SelectLi>1</SelectLi>
                </SelectUl>
            )}
        </S.Wrapper>
    );
};

export default DateInput;
