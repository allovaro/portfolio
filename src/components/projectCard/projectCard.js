import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const {
        header, desc, img, link,
    } = props;
    return (
        <Card raised href={link} as={Link} to={link}>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Description>
                    {desc}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default ProjectCard;
