import React from 'react';
import StaffCard from './staff-card';
import {createRandomUser} from "../../utils";

export default {
  title: 'Staff card',
  component: StaffCard
};

export const Default = (): JSX.Element => <StaffCard user={createRandomUser()}/>;
