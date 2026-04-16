'use client';

import { Modal, ConfigProvider, theme } from 'antd';
import { useContactModal } from './ContactModalContext';
import { UniversalContactForm } from '../components/ui/UniversalContactForm/UniversalContactForm';
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

  return (
    <ConfigProvider theme={modalTheme}>
      <Modal
        title={<span style={{ fontSize: '1.5rem', fontWeight: 600 }}>Get In Touch</span>}
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
          <UniversalContactForm onSuccess={closeModal} />
        </div>
      </Modal>
    </ConfigProvider>
  );
}
