import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router';

interface ILink extends LinkProps {
  children: ReactNode;
}

const LinkComponent = (props: ILink) => {
  return (
    <Link
      {...props}
      className='bg-[#F97A00] py-2 px-5 rounded-lg text-white cursor-pointer leading-[1]'
    >
      {props.children}
    </Link>
  );
};

export default LinkComponent;
