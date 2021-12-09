import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function ProjectCard(props) {
    const {
        header, desc, content, img, link,
    } = props;
    return (
        <Card raised href={link}>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Description>
                    {desc}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {content}
            </Card.Content>
        </Card>
    );
}

export default ProjectCard;
