import React, { FC, useState } from 'react';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/shared/config';
import { Button } from 'src/shared/ui/button';
import { useTranslation } from 'react-i18next';

interface ILoggedOut {
  visible: boolean;
}

export const LoggedOut: FC<ILoggedOut> = ({ visible }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible] = useState<boolean>(visible);

  const onClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <ModalFormWrapper isVisible={isVisible} onClose={onClick}>
      <h3>{t('screens.logout.content')}</h3>
      <Button type="button" onClick={onClick}>
        OK
      </Button>
    </ModalFormWrapper>
  );
};
