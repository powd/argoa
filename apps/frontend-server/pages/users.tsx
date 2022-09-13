import { users } from '@/modules/users/next';

export const { getServerSideProps } = users;

const { UsersPage } = users;
export default UsersPage;
