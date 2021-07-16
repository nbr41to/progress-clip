import { VFC, useEffect, Dispatch, SetStateAction } from 'react';
import { Box } from '@fower/react';

type SnackbarProps = {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
};

export const Snackbar: VFC<SnackbarProps> = ({ open, close }) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        close(false);
      }, 2000);
    }
  }, [open]);

  if (open)
    return (
      <Box bgBlue100 w={'100%'} toCenterX>
        <Box bgPink800 rounded={8} px={16} py={12} fixed top={20} fontBold>
          クリップボードにコピーされました！
        </Box>
      </Box>
    );
  return null;
};
