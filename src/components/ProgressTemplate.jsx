import { VFC, useState } from 'react';
import { Box } from '@fower/react';
import { Button } from './Button';
import { Copy } from 'akar-icons';
import { Snackbar } from './Snackbar';

// type ProgressTemplateProps = Omit<AtomicProps, 'color'> & {
//   title: string;
//   content: string;
// };

export const ProgressTemplate = ({ title, content, ...props }) => {
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const copy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(content);
      setVisibleSnackbar(true);
    }
  };
  return (
    <Box {...props}>
      <Snackbar open={visibleSnackbar} close={setVisibleSnackbar} />
      <Box flex mb={16} toBetween toCenterY>
        <Box as='h3' mr={12}>
          #.{title}
        </Box>
        <Button
          label=''
          icon={<Copy />}
          white
          bgBlue600
          scale--active={95}
          bgBlue600--D20--active
          onClick={copy}
        />
      </Box>
      <Box
        borderBlue400
        border={2}
        rounded={8}
        p={12}
        style={{ whiteSpace: 'pre' }}
      >
        {content}
      </Box>
    </Box>
  );
};
