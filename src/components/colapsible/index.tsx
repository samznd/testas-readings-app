import { VARIANTS } from '@/shared/constants/variants';
import Collapsible, { CollapsibleProps } from 'react-collapsible';
const ColapsibleCompoent = ({ trigger, children }: CollapsibleProps) => {
  return (
    <Collapsible
      trigger={trigger}
      contentInnerClassName='bg-white pt-3'
      contentOuterClassName='bg-white'
      openedClassName={`${VARIANTS.secondary}`}
      className={`w-full cursor-pointer ${`${VARIANTS.secondary}`}`}
      triggerClassName='block p-2'
      triggerOpenedClassName='block p-2'
    >
      {children}
    </Collapsible>
  );
};

export default ColapsibleCompoent;
