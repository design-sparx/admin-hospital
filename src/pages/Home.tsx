import React, {useCallback, useEffect, useState} from 'react';
import {Card, Col, Form, Image, ListGroup, ProgressBar, Row, Table} from 'react-bootstrap';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import Wrapper from '../layout';
import {createRandomUser} from "../utils";
import {format, formatDistance, subDays} from 'date-fns';
import useEmblaCarousel, {EmblaOptionsType} from 'embla-carousel-react';
import {PersonBoundingBox, PersonHeart, PersonHearts, PersonPlusFill} from "react-bootstrap-icons";
import CountUp from "react-countup";
import Autoplay from 'embla-carousel-autoplay'
import {StaffCard} from "../components/staff-card";
import {DotButton, NextButton, PrevButton} from "../components/embla-carousel-controls";

import "../assets/css/embla.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);

export const IncomeOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const RecoverOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const IncomeData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export const RecoverData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const PATIENTROWS = Array.from({length: 12}).map(() => createRandomUser());
const STAFFROWS = Array.from({length: 12}).map(() => createRandomUser());

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps',
  loop: true,
  skipSnaps: false
}

/**
 * Below are used to set faker minimum time in seconds
 */
/**
 * get today time
 */
const TODAY = new Date();
/**
 * get now time in seconds
 */
const SECONDS = Math.floor(TODAY.getTime());
const Y_SECONDS = Math.floor(subDays(new Date(), 1).getTime());

const Home = (): JSX.Element => {
  const [viewportRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay({delay: 30000})]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [incomeCount, setIncomeCount] = useState(0);
  const [notificationsDate, setNotificationsDate] = useState('');

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: any) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    setUsersCount(faker.datatype.number({min: 30}));
    setIncomeCount(faker.datatype.number({min: 100}));
    setNotificationsDate(formatDistance(faker.datatype.datetime({
      min: Y_SECONDS,
      max: SECONDS
    }), new Date()))
  }, [faker]);

  return (
    <div>
      <Wrapper>
        <section className="section">
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card>
                <Card.Body className="d-flex align-items-center gap-4">
                  <PersonHeart size={64}/>
                  <div>
                    <p className="h2"><CountUp end={usersCount}/></p>
                    <Card.Text>doctors</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="d-flex align-items-center gap-4">
                  <PersonHearts size={64}/>
                  <div>
                    <p className="h2"><CountUp end={usersCount * 2}/></p>
                    <Card.Text>nurses</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="d-flex align-items-center gap-4">
                  <PersonPlusFill size={64}/>
                  <div>
                    <p className="h2"><CountUp end={usersCount * 3}/></p>
                    <Card.Text>pharmacists</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="d-flex align-items-center gap-4">
                  <PersonBoundingBox size={64}/>
                  <div>
                    <p className="h2"><CountUp end={usersCount * 5}/></p>
                    <Card.Text>patients</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="section">
          <Card>
            <Card.Header>
              <Card.Title>hospital income</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col className="text-center text-capitalize">
                  <p className="h3">$<CountUp end={incomeCount}/></p>
                  <p>today&apos;s income</p>
                </Col>
                <Col className="text-center text-capitalize">
                  <p className="h3">$<CountUp end={incomeCount * 3}/></p>
                  <p>this week&apos;s income</p>
                </Col>
                <Col className="text-center text-capitalize">
                  <p className="h3">$<CountUp end={incomeCount * 7}/></p>
                  <p>this month&apos;s income</p>
                </Col>
                <Col className="text-center text-capitalize">
                  <p className="h3">$<CountUp end={incomeCount * 9}/></p>
                  <p>this year&apos;s income</p>
                </Col>
              </Row>
              <div>
                <Bar options={IncomeOptions} data={IncomeData}/>
              </div>
            </Card.Body>
          </Card>
        </section>
        <section className="section">
          <Row>
            <Col lg={8}>
              <Card>
                <Card.Header className="d-flex align-items-center justify-content-between">
                  <Card.Title>Patients</Card.Title>
                  <Form.Group>
                    <Form.Label className="visually-hidden">Search</Form.Label>
                    <Form.Control type="text" placeholder="search patients..."/>
                  </Form.Group>
                </Card.Header>
                <Table hover>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sex</th>
                    <th>Appointment Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {PATIENTROWS.map((_, i) => (
                    <tr key={`p-${i}`}>
                      <td className="d-flex align-items-center gap-3">
                        <Image src={_.avatar} height={32} width={32} fluid roundedCircle/>
                        {_.firstName}&nbsp;{_.lastName}</td>
                      <td><a href={`mailto:${_.email}`} className="text-lowercase">{_.email}</a></td>
                      <td className="text-capitalize">{_.sex}</td>
                      <td>{format(_.appointmentDate, 'MM/dd/yyyy')}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Header>
                  <p className="h5">total bookings</p>
                </Card.Header>
                <Card.Body>
                  <Line options={RecoverOptions} data={RecoverData}/>
                  <Row>
                    <Col className="text-center">
                      <p className="mb-1">Last month</p>
                      <Card.Title><CountUp end={incomeCount * 4}/></Card.Title>
                    </Col>
                    <Col className="text-center">
                      <p className="mb-1">This month</p>
                      <Card.Title><CountUp end={incomeCount * 3}/></Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Header>
                  <p className="h5">total patients</p>
                </Card.Header>
                <Card.Body>
                  <Line options={RecoverOptions} data={RecoverData}/>
                  <Row>
                    <Col className="text-center">
                      <p className="mb-1">Last month</p>
                      <Card.Title><CountUp end={incomeCount * 6}/></Card.Title>
                    </Col>
                    <Col className="text-center">
                      <p className="mb-1">This month</p>
                      <Card.Title><CountUp end={incomeCount * 8}/></Card.Title>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="section">
          <Card>
            <Card.Header>
              <Card.Title>Staff</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="embla">
                <div className="embla__viewport" ref={viewportRef}>
                  <div className="embla__container">
                    {STAFFROWS.map((_, i) => (
                      <div className="embla__slide my-2" key={_._id}>
                        <StaffCard user={_}/>
                      </div>
                    ))}
                  </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled}/>
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled}/>
              </div>
              <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        </section>
        <section className="section">
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title>Recent activity</Card.Title>
                </Card.Header>
                <ListGroup variant="flush">
                  {Array.from({length: 5}).map(() => (
                    <ListGroup.Item key={faker.datatype.uuid()} action>
                      <div className="d-flex w-100 justify-content-between">
                        <p className="h6 mb-1">Lorem ipsum dolor sit amet</p>
                        <p className="small mb-1">{notificationsDate}</p>
                      </div>
                      <p className="mb-1 small">Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Duis
                        aute irure dolor in reprehenderit.</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title>Traffic</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-grid gap-3">
                    <div>
                      <p className="mb-1">United States</p>
                      <ProgressBar variant="success" now={91} label='91%'/>
                    </div>
                    <div>
                      <p className="mb-1">United Kingdom</p>
                      <ProgressBar variant="info" now={75} label='75%'/>
                    </div>
                    <div>
                      <p className="mb-1">Canada</p>
                      <ProgressBar variant="warning" now={59} label='59%'/>
                    </div>
                    <div>
                      <p className="mb-1">China</p>
                      <ProgressBar variant="danger" now={34} label='34%'/>
                    </div>
                    <div>
                      <p className="mb-1">Brazil</p>
                      <ProgressBar variant="secondary" now={23} label='23%'/>
                    </div>
                    <div>
                      <p className="mb-1">Others</p>
                      <ProgressBar variant="dark" now={4} label='4%'/>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Wrapper>
    </div>
  );
};

export default Home;
