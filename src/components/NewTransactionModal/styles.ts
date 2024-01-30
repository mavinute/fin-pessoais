import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        font-size: 2rem;
        color: var(--text-title);
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: var(--background);

        font-size: 1rem;
        font-weight: 400;

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
            background: var(--green);
            color: var(--shape);
            font-size: 1rem;
            font-weight: 400;
            border: 0;
            border-radius: 0.25rem;
            width: 100%;
            margin-top: 1.5rem;
            padding: 0 1.5rem;
            height: 3rem;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
`

export const TransctionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    
`

    /*
        1-Criação de interface(com propriedade ja definida no index)
        2-Tipagem do component
        3-Configuração do codigo js na propriedade escolhida(pegando props em uma arrow func)
        4-Definir cor com a propriedade definida no index, depos tipar e acinar na propriedade
        5-utilizar da lib polished -> transparentize
    */
interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor]) 
        : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    strong{
        display: inline-block;
        font-size: 1rem;
        color: var(--text-title);
            
    }
`