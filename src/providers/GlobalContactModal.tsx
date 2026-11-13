'use client';

import { useEffect } from 'react';
import { Modal, ConfigProvider, theme } from 'antd';
import { useContactModal } from './ContactModalContext';
import {
  UniversalContactForm,
  captureTrackingParams,
} from '../components/ui/UniversalContactForm/UniversalContactForm';
import { useLang } from '@/lib/i18n';

// Dark theme setup for Modal to match UniversalContactForm
const modalTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgElevated: '#111',
    colorText: '#fff',
    colorPrimary: '#a855f7',
    fontFamily: 'inherit',
  },
};

export function GlobalContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const { t } = useLang();

  useEffect(() => {
    captureTrackingParams();
  }, []);

  return (
    <ConfigProvider theme={modalTheme}>
      <Modal
        title={<span style={{ fontSize: '1.5rem', fontWeight: 600 }}>{t('modal.title')}</span>}
        open={isOpen}
        onCancel={closeModal}
        footer={null}
        width={700}
        destroyOnHidden
        centered
        style={{ padding: '24px 0' }}
        wrapClassName="glass-modal"
      >
        <div style={{ marginTop: '24px' }}>
          <UniversalContactForm onSuccess={closeModal} formLocation="contact_modal" />
        </div>
      </Modal>
    </ConfigProvider>
  );
}
