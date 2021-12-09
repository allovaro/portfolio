import React from 'react';
import { List, Image } from 'semantic-ui-react';

function SkillList(props) {
    const items = props.arr.map(item => (
        <List.Item key={item.index}>
            <Image avatar src={item.image} />
            <List.Content>
                <List.Header>{item.text}</List.Header>
            </List.Content>
        </List.Item>
    ));

    return (
        <List animated verticalAlign="middle" size="big">
            {items}
        </List>
    );
}

export default SkillList;
