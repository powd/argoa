import * as React from 'react';
import { UserFindResultDto } from './user-find-result.dto';
import type { GetServerSideProps, NextPage } from 'next';

type Props = {
  users: UserFindResultDto[];
};

export const UsersPage: NextPage<Props> = ({ users }) => (
  <div>
    <h1>Current users</h1>
    <hr />
    <p>Length:{users.length}</p>
    {users.map((user) => (
      <div key={user.publicId} style={{ border: '1px solid black' }}>
        User of email "<b>{user.email}</b>" and ID "<b>{user.publicId}</b>"
      </div>
    ))}
  </div>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const fetchRes = await fetch('http://localhost:3001/users');
  let users: UserFindResultDto[] = await fetchRes.json();

  return {
    props: {
      users,
    },
  };
};
