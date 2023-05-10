import { Layout } from '@/components';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';
import { useStoreActions, useStoreState } from '@/hooks/useStore';
import Image from 'next/image';
import { BsBellFill } from 'react-icons/bs';

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
      <span className="h-72 flex items-center">
        <Image
          width="40"
          height="40"
          src="https://i.pravatar.cc/300"
          alt="avatar"
          className="rounded-full cursor-pointer flex"
        />
        <span className="hover:bg-slate-400 hover:text-white text-slate-400 w-10 h-10 p-2 flex items-center justify-center rounded-full cursor-pointer transition-all">
          <BsBellFill size="26px" />
        </span>
      </span>
    </Layout>
  );
};

// One.getLayout

export default One;
