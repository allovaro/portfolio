import React from 'react';
import {
    Grid, Button, Image, Container, Card,
} from 'semantic-ui-react';
import SkillList from '../skillList/SkillList';
import ProjectCard from '../projectCard/projectCard';
import logo from '../../images/cirill_logo.svg';
import skills from '../resources/mySkillsDb';

function Home() {
    return (
        <Grid doubling padded>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    <Image
                        src={logo}
                        size="tiny"
                        as="a"
                        href="https://cirillsokolov.com"
                    />
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    {/* <Button basic color="blue" animated="fade">
                            <Button.Content className="bubble-font" visible>C.</Button.Content>
                            <Button.Content className="bubble-font" hidden>Cirill</Button.Content>
                        </Button> */}
                    <Button as="a" size="large" color="grey" circular icon="github" href="https://github.com/allovaro" />
                    <Button as="a" size="large" color="twitter" circular icon="twitter" href="https://twitter.com/cirillsokokov" />
                    <h1 className="main-header">Hi there, I&apos;m Cirill.<br />BlockChain Developer.</h1>
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    <Image src="https://en.cryptonomist.ch/wp-content/uploads/2020/03/crypto-hacker-3.jpg" fluid />
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={6} only="computer">
                    <Container>
                        <p className="main-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa strong.
                            Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis,ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo. Nullam dictum felis eu pede link mollis
                            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                            semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                            ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                            tellus. Phasellus viverra nulla ut metus varius laoreet.
                            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                            vel augue. Curabitur ullamcorper ultricies nisi.
                        </p>
                    </Container>
                </Grid.Column>
                <Grid.Column computer={6} only="computer">
                    <Container>
                        <p className="main-text">
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
                <Grid.Column mobile={16} only="mobile">
                    <Container>
                        <p className="main-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa strong.
                            Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis,ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo. Nullam dictum felis eu pede link mollis
                            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                            semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                            ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                            tellus. Phasellus viverra nulla ut metus varius laoreet.
                            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                            vel augue. Curabitur ullamcorper ultricies nisi.<br /><br />
                        </p>
                    </Container>
                    <Container>
                        <p className="main-text">
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
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    <h1 className="header-text">My Skills</h1>
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    <p className="main-text">Through my studies, I&apos;ve gained a solid understanding of
                        <br /> computer science and web development concepts, and have
                        dedicated a lot
                        of my free time to apply these concepts to real-world scenarios
                        and applications.
                    </p>
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={3} only="computer">
                    <SkillList arr={skills.column1} />
                </Grid.Column>
                <Grid.Column computer={3} only="computer">
                    <SkillList arr={skills.column2} />
                </Grid.Column>
                <Grid.Column computer={3} only="computer">
                    <SkillList arr={skills.column3} />
                </Grid.Column>
                <Grid.Column computer={3} only="computer">
                    <SkillList arr={skills.column4} />
                </Grid.Column>

                <Grid.Column mobile={16} only="mobile">
                    <SkillList arr={skills.column1} />
                    <SkillList arr={skills.column2} />
                    <SkillList arr={skills.column3} />
                    <SkillList arr={skills.column4} />
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row />
            <Grid.Row />
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    <h1 className="header-text">What I&apos;ve been working on </h1>
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16} textAlign="left">
                    <p className="main-text">I like to stay busy and always have a project in the works.
                        Take a look at some of the applications, articles, and companies
                        I&apos;ve dedicated my time to.
                    </p>
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16} textAlign="left">
                    <Card.Group centered>
                        <ProjectCard
                            img="https://cdn.dribbble.com/users/7834604/screenshots/16159789/media/542e5f79406606ae18ff6b7cbd26d457.jpg?compress=1&resize=800x600"
                            header="NiftySwap"
                            link="/dex"
                            content=""
                            desc="Inovative real time cryptocurrency exchange.
                                Trade wherever you want with assets what you want"
                        />
                        <ProjectCard
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMfrw6hmh-H4Oz0kvXJH_7RezLdGdxVnycQ&usqp=CAU"
                            header="NFT Marketplace"
                            link="/marketplace"
                            content=""
                            desc="Sell and Buy different digital assets from famous artist all over the world."
                        />
                        <ProjectCard
                            img="https://thequantuminsider.com/wp-content/uploads/2020/11/quantum-1.jpg"
                            header="Quantum Invaiders"
                            link="/nftgame"
                            content=""
                            desc="Inovative real time cryptocurrency exchange.
                                Trade wherever you want with assets what you want"
                        />
                        <ProjectCard
                            img="https://physicsworld.com/wp-content/uploads/2021/10/Quantum-matrix.jpg"
                            header="Quantum coin"
                            link="/ico"
                            content=""
                            desc="Inovative real time cryptocurrency exchange.
                                Trade wherever you want with assets what you want"
                        />
                        <ProjectCard
                            img="https://raw.githubusercontent.com/fabiospampinato/vscode-todo-plus/master/resources/logo/logo.png"
                            header="ToDo DApp"
                            link="/todo"
                            content=""
                            desc="Inovative real time cryptocurrency exchange.
                                Trade wherever you want with assets what you want"
                        />
                    </Card.Group>
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2} only="computer" />
                <Grid.Column computer={12} mobile={16}>
                    <h1 className="header-text">Let&apos;s Build Something Great Together.</h1>
                    <p className="main-text">Feel free to reach out to me if you&apos;re looking for a <br />
                        developer, have a question, or just want to connect.
                    </p><br />
                    <Button
                        basic
                        color="black"
                        as="a"
                        href="mailto:CirillSokolov@protonmail.com?subject=Hello Cirill!"
                        content="CirillSokolov@protonmail.com"
                    />
                </Grid.Column>
                <Grid.Column width={2} only="computer" />
            </Grid.Row>
        </Grid>
    );
}

export default Home;
