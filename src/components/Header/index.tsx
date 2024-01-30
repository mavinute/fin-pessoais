import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface isOpen{
    onOpenNewTransaction: () => void
}

export function Header({onOpenNewTransaction}: isOpen){
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money" />
                <button type="button" onClick={onOpenNewTransaction}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}