import { BsChatLeft, BsClipboardData } from 'react-icons/bs';

export const pages: Record<string, any> = {
  nochild: {
    path: '/',
    name: 'Home',
  },
  'multi-level': {
    path: '/',
    name: 'Multilevel',
  },
  one: {
    path: '/one',
    name: 'One',
    icon: <BsChatLeft />,
  },
  two: {
    path: '/two',
    name: 'Two',
    icon: <BsClipboardData />,
  },
};
export const menus = [
  {
    title: 'Pages',
  },
  {
    key: 'multi-level',
    children: ['one', 'two'],
  },
  {
    key: 'two',
  },
  {
    title: 'Components',
  },
  {
    key: 'two',
  },
];
