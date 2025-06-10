// components/Accordion.tsx
import React, { useState, useRef, useEffect } from 'react';

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className='space-y-2'>
      {items.map((item) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isOpen={item.id === openId}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

const AccordionPanel: React.FC<{
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  // For smooth transition with auto height fallback
  const transitionStyle = {
    height: isOpen ? height : 0,
    overflow: 'hidden',
    transition: 'height 300ms ease',
  };

  return (
    <div className='border rounded w-full'>
      <button
        onClick={onToggle}
        className={`w-full text-left px-4 py-1 font-semibold bg-gray-100 hover:bg-gray-200 !max-h-[auto] ${
          !isOpen ? 'line-clamp-1' : ''
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: item.title }} />
      </button>
      <div style={transitionStyle}>
        <div ref={contentRef} className='px-4 py-2'>
          {item.content}
        </div>
      </div>
    </div>
  );
};
