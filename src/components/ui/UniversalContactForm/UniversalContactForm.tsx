'use client';

import { Form, Input, ConfigProvider, theme, App, Select } from 'antd';
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
  const { lang, t } = useLang();
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
          message: 'Success',
          description: 'Your message has been sent successfully.',
          placement: 'top',
        });
        form.resetFields();
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'There was an error sending your message. Please try again.',
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
        <div className={styles.row}>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'First name is required' }]}
            className={styles.formItem}
          >
            <Input placeholder="First Name*" className={styles.input} />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Last name is required' }]}
            className={styles.formItem}
          >
            <Input placeholder="Last Name*" className={styles.input} />
          </Form.Item>
        </div>

        <div className={styles.row}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email is required' },
              { type: 'email', message: 'Enter a valid email' }
            ]}
            className={styles.formItem}
          >
            <Input placeholder="E-mail*" className={styles.input} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Phone number is required' }]}
            className={styles.formItem}
          >
            <Input placeholder="Phone*" className={styles.input} />
          </Form.Item>
        </div>

        <div className={styles.row}>
          <Form.Item
            name="company"
            rules={[{ required: true, message: 'Company is required' }]}
            className={styles.formItem}
          >
            <Input placeholder="Company*" className={styles.input} />
          </Form.Item>
          <Form.Item
            name="position"
            className={styles.formItem}
          >
            <Input placeholder="Position" className={styles.input} />
          </Form.Item>
        </div>

        <div className={styles.row}>
          <Form.Item
            name="location"
            rules={[{ required: true, message: 'Location is required' }]}
            className={styles.formItem}
          >
            <Input placeholder="Location*" className={styles.input} />
          </Form.Item>
          <Form.Item
            name="city"
            className={styles.formItem}
          >
            <Input placeholder="City" className={styles.input} />
          </Form.Item>
        </div>

        <Form.Item
          name="category"
          rules={[{ required: true, message: lang === 'es' ? 'Selecciona una categoría obligatoria' : 'Category is required' }]}
          className={styles.formItemFull}
          label={<span style={{ color: 'var(--color-text-secondary)', fontSize: '15px', fontWeight: 500, paddingBottom: '4px' }}>{lang === 'es' ? 'Soy un...' : 'I am a...'}</span>}
        >
          <Select
            placeholder={lang === 'es' ? 'Selecciona una categoría' : 'Select a category'}
            styles={{ popup: { root: { backgroundColor: '#111', border: '1px solid rgba(255, 255, 255, 0.08)' } } }}
            virtual={false} /* Better blur/rendering on transparent modals */
            options={[
              { value: 'Provider', label: lang === 'es' ? 'Proveedor' : 'Provider' },
              { value: 'Partner', label: lang === 'es' ? 'Socio' : 'Partner' },
              { value: 'Collaborator', label: lang === 'es' ? 'Colaborador' : 'Collaborator' },
              { value: 'Client', label: lang === 'es' ? 'Cliente' : 'Client' },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="message"
          className={styles.formItemFull}
        >
          <Input.TextArea placeholder={lang === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help?'} rows={4} className={styles.textarea} />
        </Form.Item>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Sending...' : 'Get started'}
          </button>
        </div>
      </Form>
    </ConfigProvider>
  );
}
