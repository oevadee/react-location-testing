import React from 'react';
import CenterContainer from '../components/UI/CenterContainer';
import { useQuery } from 'react-query';
import { getAll } from '../api/users';

const Todo = () => {
  const { data, isLoading } = useQuery('users', getAll);
  console.log(data);

  return (
    <CenterContainer>
      <div>Todo</div>
    </CenterContainer>
  );
};

export default Todo;
