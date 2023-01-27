import React from 'react';
import RecentTimeline from './recent-timeline';

export default {
  title: 'Recent timeline',
  component: RecentTimeline
};

export const Default = (): JSX.Element => <RecentTimeline
  notificationsDate='1 minute ago'
  data={Array.from({length: 5})}
/>;
