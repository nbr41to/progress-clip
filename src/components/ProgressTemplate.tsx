import { VFC } from 'react';
import { Box } from '@fower/react';
import { Button } from './Button';
import { Copy } from 'akar-icons';

type ProgressTemplateProps = {
  title: string;
  content: string;
};

export const ProgressTemplate: VFC<ProgressTemplateProps> = ({
  title,
  content,
}) => {
  const copy = (e) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content);
    }
  };
  return (
    <Box>
      <h3>{title}</h3>
      <Button
        label=''
        icon={<Copy />}
        onClick={copy}
        white
        bgBlue600
        bgBlue600--dark200--active
      />
      <Box>{content}</Box>
    </Box>
  );
};
