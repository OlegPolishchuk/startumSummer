import { Element, HTMLReactParserOptions } from 'html-react-parser';
import { DotIcon } from 'ui';

import cls from 'pages/CurrentVacancyPage/CurrentVacancy.module.css';

export const HtmlParserOptions: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.name === 'p') {
      const children = domNode.children[0];

      if (children && children.type === 'tag') {
        if (children.tagName === 'b') {
          const nestedChildren = children.children[0];

          if (nestedChildren.type === 'text') {
            return <h3 className={cls.title}>{nestedChildren.data}</h3>;
          }
        }

        if (children.tagName === 'br') {
          return <></>;
        }
      }
    }

    if (domNode instanceof Element && domNode.tagName === 'b') {
      const children = domNode.children[0];

      if (children.type === 'text') {
        return <h3 className={cls.title}>{children.data}</h3>;
      }
    }

    if (domNode instanceof Element && domNode.name === 'li') {
      const text = domNode.children[0];

      return (
        <li className={cls.listItem}>
          <div>
            <DotIcon className={cls.dotIcon} />
          </div>

          <p className={cls.listItem_text}>{text.type === 'text' && text.data}</p>
        </li>
      );
    }

    return domNode;
  },
};
