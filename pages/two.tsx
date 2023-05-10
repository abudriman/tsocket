import { Layout } from '@/components';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';
import { useStoreActions, useStoreState } from '@/hooks/useStore';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';

interface TwoProps {
  anjay: any;
  todos: any[];
}

export const getServerSideProps: GetServerSideProps<
  TwoProps
> = async context => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos').then(
    response => response.json(),
  );
  // console.log(result);
  return {
    props: {
      anjay: 'sekali',
      todos: result,
    }, // will be passed to the page component as props
  };
};

const Two: NextPageWithLayout<TwoProps> = props => {
  const count = useStoreState(state => state.count);
  const decrement = useStoreActions(action => action.decrement);
  return (
    <Layout>
      <div>This is page two</div>
      <div>count: {count}</div>
      <div>{props.anjay}</div>
      {props.todos.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
      <button onClick={() => decrement()}>decrement</button>
      <Link href="/one">go to one</Link>
    </Layout>
  );
};

// Two.getLayout

export default Two;
