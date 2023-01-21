import React from 'react';
import {Card, Image} from 'react-bootstrap';
import {IUser} from '../../utils';

import './styles.scss';

/**
 * @param post
 * @param withAuthor - require author information
 */
interface IProps {
    user: IUser
}

/**
 * staff cards
 * @param user
 * @constructor
 */
const StaffCard = ({user}: IProps): JSX.Element => {
    return (
        <Card className="staff-card">
            <Card.Body className="text-center py-4">
                <Image src={user.avatar} height={72} width={72} fluid roundedCircle className="mb-4"/>
                <Card.Title>Dr {user.firstName} {user.lastName}</Card.Title>
                <Card.Text>{user.role}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default StaffCard;
