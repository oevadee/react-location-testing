import React from 'react';
import CenterContainer from '../components/UI/CenterContainer';
import { useQuery } from 'react-query';
import { getAll } from '../api/users';
import DataDisplay from '../components/DataDisplay';

const Todo = () => {
  const { data, isLoading } = useQuery('users', getAll);
  console.log(data);

  return (
    <CenterContainer>
      <DataDisplay />
    </CenterContainer>
  );
};

export default Todo;
