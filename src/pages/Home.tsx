import React, {useCallback, useEffect, useState} from 'react';
import {Breadcrumb, Button, Card, Col, Form, Image, ProgressBar, Row, Table} from 'react-bootstrap';
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
import {Helmet} from 'react-helmet';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  PersonBoundingBox,
  PersonHeart,
  PersonHearts,
  PersonPlusFill
} from "react-bootstrap-icons";
import CountUp from "react-countup";
import Autoplay from 'embla-carousel-autoplay';
import {LinkContainer} from "react-router-bootstrap";
import {StaffCard} from "../components/staff-card";
import {DotButton} from "../components/embla-carousel-controls";
import {RecentTimeline} from "../components/recent-timeline";

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

export const BookingsData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({min: 10, max: 100})),
      borderColor: 'rgb(235,53,232)',
      backgroundColor: 'rgba(235,53,193,0.5)',
    },
  ],
};

const PATIENTROWS = Array.from({length: 10}).map(() => createRandomUser());
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
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Wrapper>
        <section className="section d-flex justify-content-between">
          <p className="h5">Dashboard</p>
          <Breadcrumb>
            <LinkContainer to="/">
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="section">
          <Row md={2} lg={4} className="g-3 g-md-4">
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex align-items-center gap-3 gap-md-4">
                  <PersonHeart size={64} className="text-danger"/>
                  <div>
                    <p className="h3"><CountUp end={usersCount}/></p>
                    <Card.Text>total doctors</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex align-items-center gap-3 gap-md-4">
                  <PersonHearts size={64} className="text-warning"/>
                  <div>
                    <p className="h3"><CountUp end={usersCount * 2}/></p>
                    <Card.Text>total nurses</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex align-items-center gap-3 gap-md-4">
                  <PersonPlusFill size={64} className="text-success"/>
                  <div>
                    <p className="h3"><CountUp end={usersCount * 3}/></p>
                    <Card.Text>total pharmacists</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex align-items-center gap-3 gap-md-4">
                  <PersonBoundingBox size={64} className="text-info"/>
                  <div>
                    <p className="h3"><CountUp end={usersCount * 5}/></p>
                    <Card.Text>total patients</Card.Text>
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
                <Col xs={6} md={6} lg={3} className="text-center text-capitalize">
                  <p className="h4">$<CountUp end={incomeCount}/></p>
                  <p>today&apos;s income</p>
                </Col>
                <Col xs={6} md={6} lg={3} className="text-center text-capitalize">
                  <p className="h4">$<CountUp end={incomeCount * 3}/></p>
                  <p>this week&apos;s income</p>
                </Col>
                <Col xs={6} md={6} lg={3} className="text-center text-capitalize">
                  <p className="h4">$<CountUp end={incomeCount * 7}/></p>
                  <p>this month&apos;s income</p>
                </Col>
                <Col xs={6} md={6} lg={3} className="text-center text-capitalize">
                  <p className="h4">$<CountUp end={incomeCount * 9}/></p>
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
            <Col>
              <Card>
                <Card.Header>
                  <p className="h5">total bookings</p>
                </Card.Header>
                <Card.Body>
                  <Line options={RecoverOptions} data={BookingsData}/>
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
            </Col>
            <Col className="mt-4 mt-md-0">
              <Card>
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
            <Card.Header className="d-flex align-items-center justify-content-between">
              <Card.Title>Patients</Card.Title>
              <Form.Group>
                <Form.Label className="visually-hidden">Search</Form.Label>
                <Form.Control type="text" placeholder="search patients..."/>
              </Form.Group>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover striped className="align-middle">
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
            </Card.Body>
          </Card>
        </section>
        <section className="section">
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <Card.Title>Staff</Card.Title>
              <div className="d-flex gap-3">
                <Button onClick={scrollPrev} disabled={!prevBtnEnabled} variant="light">
                  <ArrowLeftCircle className="me-2"/>
                  <span>Previous</span>
                </Button>
                <Button onClick={scrollNext} disabled={!nextBtnEnabled} variant="light">
                  <span>Next</span>
                  <ArrowRightCircle className="ms-2"/>
                </Button>
              </div>
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
            <Col xs={12} md={6}>
              <RecentTimeline notificationsDate={notificationsDate} data={Array.from({length: 5})}/>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Card>
                <Card.Header>
                  <Card.Title>Usage</Card.Title>
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
