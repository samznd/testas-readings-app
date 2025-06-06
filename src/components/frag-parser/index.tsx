import ColapsibleCompoent from '@/components/colapsible';
import { JSX } from 'react';

export default function FragsParser({ html }: { html: string }) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const children = Array.from(doc.body.children);

  const elements: JSX.Element[] = [];

  for (let i = 0; i < children.length; i++) {
    const el = children[i];

    // Check if it's a <p> with content
    if (el.tagName === 'P' && el.textContent?.trim()) {
      const title = el.textContent.trim();

      let content: HTMLElement | null = null;
      let j = i + 1;

      // Find next <ul> or <ol> with real <li> content
      while (j < children.length) {
        const next = children[j];
        if (
          (next.tagName === 'UL' || next.tagName === 'OL') &&
          next.querySelector('li')?.textContent?.trim()
        ) {
          content = next as HTMLElement; // ✅ Cast to HTMLElement
          break;
        }
        j++;
      }

      elements.push(
        <ColapsibleCompoent key={i} trigger={title}>
          {content ? (
            <div dangerouslySetInnerHTML={{ __html: content.outerHTML }} />
          ) : (
            <div className="text-gray-500 italic">No list content found</div>
          )}
        </ColapsibleCompoent>
      );

      // Skip over the matched <ul>/<ol>
      if (content) i = j;
    }
  }

  return (
    <div className="space-y-3">
      {elements.length ? elements : <span>No valid fragments found.</span>}
    </div>
  );
}