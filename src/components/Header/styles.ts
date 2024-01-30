import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1rem 12rem;

    button {
        background: var(--blue-light);
        border: 0;
        color: var(--shape);
        font-size: 1rem;
        padding: 0 auto;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
    
`