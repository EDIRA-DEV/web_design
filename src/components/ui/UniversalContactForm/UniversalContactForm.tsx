'use client';

import { Form, Input, ConfigProvider, theme, App, Checkbox } from 'antd';
import { useState } from 'react';
import { useLang } from '@/lib/i18n';
import styles from './UniversalContactForm.module.css';

// Dark theme setup for ConfigProvider
const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#a855f7',
    colorBgContainer: '#111', 
    colorBorder: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    fontFamily: 'inherit',
    controlHeight: 48,
  },
  components: {
    Select: {
      colorBgContainer: '#111',
      colorBorder: 'rgba(255, 255, 255, 0.08)',
      selectorBg: '#111',
      optionSelectedBg: 'rgba(168, 85, 247, 0.2)',
      optionActiveBg: 'rgba(255, 255, 255, 0.05)',
      activeBorderColor: 'rgba(255, 255, 255, 0.25)',
      hoverBorderColor: 'rgba(255, 255, 255, 0.25)',
    }
  }
};

interface UniversalContactFormProps {
  onSuccess?: () => void;
}

export function UniversalContactForm({ onSuccess }: UniversalContactFormProps) {
  const { t } = useLang();
  const { notification } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mgorobll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        notification.success({
          message: t('form.success.title'),
          description: t('form.success.desc'),
          placement: 'top',
        });
        form.resetFields();
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      notification.error({
        message: t('form.error.title'),
        description: t('form.error.desc'),
        placement: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfigProvider theme={darkTheme}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className={styles.formContainer}
        requiredMark={false}
      >
        {/* Nombre completo */}
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: t('form.fullName.required') }]}
          className={styles.formItemFull}
        >
          <Input placeholder={`${t('form.fullName')}*`} className={styles.input} />
        </Form.Item>

        {/* Correo electrónico y Teléfono de contacto */}
        <div className={styles.row}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: t('form.email.required') },
              { type: 'email', message: t('form.email.invalid') }
            ]}
            className={styles.formItem}
          >
            <Input placeholder={`${t('form.email')}*`} className={styles.input} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: t('form.phone.required') }]}
            className={styles.formItem}
          >
            <Input placeholder={`${t('form.phone')}*`} className={styles.input} />
          </Form.Item>
        </div>

        {/* Empresa y Cargo / Puesto */}
        <div className={styles.row}>
          <Form.Item
            name="company"
            rules={[{ required: true, message: t('form.company.required') }]}
            className={styles.formItem}
          >
            <Input placeholder={`${t('form.company')}*`} className={styles.input} />
          </Form.Item>
          <Form.Item
            name="position"
            className={styles.formItem}
          >
            <Input placeholder={t('form.position')} className={styles.input} />
          </Form.Item>
        </div>

        {/* Ubicación */}
        <Form.Item
          name="location"
          rules={[{ required: true, message: t('form.location.required') }]}
          className={styles.formItemFull}
        >
          <Input placeholder={`${t('form.location')}*`} className={styles.input} />
        </Form.Item>

        {/* Mensaje */}
        <Form.Item
          name="message"
          className={styles.formItemFull}
        >
          <Input.TextArea placeholder={t('form.message')} rows={4} className={styles.textarea} />
        </Form.Item>

        {/* Casilla de Aceptación Legal */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error(t('form.agreement.error'))),
            },
          ]}
          className={styles.checkboxItem}
        >
          <Checkbox className={styles.checkbox}>
            <span className={styles.checkboxText}>
              {t('form.agreement.part1')}
              <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
                {t('form.agreement.part2')}
              </a>
              {t('form.agreement.part3')}
              <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
                {t('form.agreement.part4')}
              </a>
              {t('form.agreement.part5')}
            </span>
          </Checkbox>
        </Form.Item>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? t('form.sending') : t('form.submit')}
          </button>
        </div>
      </Form>
    </ConfigProvider>
  );
}
