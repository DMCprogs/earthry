import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
    width: string;
    label: string;
    group: string;
}
const StyledButton = styled.div<{ width: string;}>`
    width: ${props => props.width};
    
    input[type='radio'] {
      display: none;

      &:checked + label {
        background-color: #195946; 
        color: #fff;// Меняйте этот цвет на тот, который вы хотите
      }
    }

    label {
      display: block;
      color: #201E1C;
      background-color: #fff; // Меняйте этот цвет на тот, который вы хотите
      cursor: pointer;
      padding: 23px;
      border-radius: 20px;
      border: 3px solid #195946;
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 120% */
      letter-spacing: 0.2px;
      text-align: center;
      height: 74px;
      @media(max-width: 880px) {
        height: 62px;
        padding: 16px;
      }
    }
  label:hover{
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.60);
  }
  `;
const RadioButton: React.FC<RadioButtonProps> = ({width, label, group }) => {
    return (
        <StyledButton width={width}>
            <input type="radio" id={label} name={group} />
            <label htmlFor={label}>{label}</label>
        </StyledButton>
    )
}

export default RadioButton;