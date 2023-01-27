import React, {ReactNode} from 'react';
import {Card} from 'react-bootstrap';
import {faker} from "@faker-js/faker";
import '../../assets/css/timeline.scss';

/**
 * @param post
 * @param withAuthor - require author information
 */
interface IProps {
  notificationsDate: string
  data: ReactNode[]
}

/**
 * recent timeline
 * @constructor
 */
const RecentTimeline = ({notificationsDate, data}: IProps): JSX.Element => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Recent activity</Card.Title>
      </Card.Header>
      <ul className="timeline">
        {data.map(() => (
          <li key={faker.datatype.uuid()}>
            <span className="h6 mb-0">New Web
              Design</span>
            <span className="float-end small">{notificationsDate}</span>
            <p className="small mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
              diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis....</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentTimeline;
