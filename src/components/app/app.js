import React from 'react';
import './app.css';
import {
    Grid, Button, Header, Image, Container,
} from 'semantic-ui-react';
import logo from '../../images/cirill_logo.svg';

const App = function () {
    return (
        <div className="App">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3} />
                    <Grid.Column width={10}>
                        <Image
                            src={logo}
                            size="tiny"
                            as="a"
                            href="https://cirillsokolov.com"
                        />
                    </Grid.Column>
                    <Grid.Column width={3} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3} />
                    <Grid.Column width={10}>
                        {/* <Button basic color="blue" animated="fade">
                        <Button.Content className="bubble-font" visible>C.</Button.Content>
                        <Button.Content className="bubble-font" hidden>Cirill</Button.Content>
                    </Button> */}
                        <Button as="a" color="grey" circular icon="github" href="https://github.com/allovaro" />
                        <Button color="twitter" circular icon="twitter" />
                        <Header as="h1">Hi there, I&apos;m Cirill.<br />BlockChain Developer.</Header>
                    </Grid.Column>
                    <Grid.Column width={3} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3} />
                    <Grid.Column width={10}>
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" fluid />
                    </Grid.Column>
                    <Grid.Column width={3} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3} />
                    <Grid.Column width={5}>
                        <Container>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa strong.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,ultricies nec,
                                pellentesque eu, pretium quis, sem. Nulla consequat massa
                                quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                                venenatis vitae, justo. Nullam dictum felis eu pede link mollis
                                pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                                semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                                porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                                ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                                imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                                ultricies nisi.
                            </p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Container>
                            <p>
                                Nullam dictum felis eu pede link mollis pretium.
                                Integer tincidunt. Cras
                                dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                eleifend tellus. Aenean leo ligula, porttitor eu,
                                consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                                dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                viverra nulla ut metus varius laoreet. Quisque rutrum.
                                Aenean imperdiet.
                                Etiam ultricies nisi vel augue. Curabitur
                                ullamcorper ultricies nisi.
                            </p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={3} />
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default App;
