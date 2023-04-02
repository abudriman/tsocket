import { Layout } from '@/components';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';
import { useStoreActions, useStoreState } from '@/hooks/useStore';

const One: NextPageWithLayout = () => {
  const count = useStoreState(state => state.count);
  const increment = useStoreActions(action => action.increment);
  return (
    <Layout>
      <div>This is page one</div>
      <div>count: {count}</div>
      <button className="bg-red-500 text-lg p-5" onClick={() => increment()}>
        increment
      </button>
      <Link href="/two">go to two</Link>
    </Layout>
  );
};

// One.getLayout

export default One;
