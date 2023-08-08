import { useMemo } from 'react';

import { useTranslation } from 'next-i18next';

const useErrorService = () => {
  const { t } = useTranslation('chat');

  return {
    getModelsError: useMemo(
      () => (error: any) => {
        if (!error) {
          return null;
        }
        // Silent Fail: Do not return any error, hence no error message will be shown.
        return null; 
      },
      [t],
    ),
  };
};

export default useErrorService;
