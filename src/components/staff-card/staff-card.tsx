import React from 'react';
import {Card, Image} from 'react-bootstrap';
import {IUser} from '../../utils';

/**
 * @param post
 * @param withAuthor - require author information
 */
interface IProps  {
  user: IUser
}

/**
 * staff cards
 * @param user
 * @constructor
 */
const StaffCard = ({user}: IProps): JSX.Element => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Image src={user.avatar} height={64} width={64} fluid roundedCircle className="mb-3"/>
        <Card.Title>Dr {user.firstName} {user.lastName}</Card.Title>
        <Card.Text>{user.role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StaffCard;
