import { Container, Content, FormGroup, Header, ImageContainer, Logo, Main, Nav } from "./styles"
import banner from "../../assets/banner.jpg"
import logo from "../../assets/logo.png"

export function Home() {
    return (
        <>
            <Header>
                <Container>
                    <Logo>
                        <img src={logo} alt="Logo" />
                    </Logo>
                    <h2>Hora De Codar</h2>
                </Container>

                <Nav>
                    <a href="#">Home</a>
                    <a href="#">Serviços</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <a href="#">FAQ</a>
                </Nav>
            </Header>

            <Main>
                <Content>
                    <h1>Inscreva-se Agora</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium ratione in obcaecati expedita voluptatum explicabo saepe alias suscipit qui eveniet excepturi, soluta ipsum placeat ducimus ullam odio quos aspernatur.</p>
                    <form>
                        <FormGroup>
                            <input type="text" placeholder="nome" required />
                        </FormGroup>
                        <FormGroup>
                            <input type="email" placeholder="Email" required />
                        </FormGroup>
                        <FormGroup>
                            <button type="submit">Enviar</button>
                        </FormGroup>
                    </form>
                </Content>

                <ImageContainer>
                    <div className="ellipse">
                        <img src={banner} alt="banner" />
                    </div>
                </ImageContainer>
            </Main>

        </>
    )
}

export default Home