'use client';

import { Form, Input, ConfigProvider, theme, App } from 'antd';
import { useState } from 'react';
import styles from './UniversalContactForm.module.css';

// Dark theme setup for ConfigProvider
const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#a855f7',
    colorBgContainer: '#1c1c1c', 
    colorBorder: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    fontFamily: 'inherit',
  },
};

interface UniversalContactFormProps {
  onSuccess?: () => void;
}

export function UniversalContactForm({ onSuccess }: UniversalContactFormProps) {
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
          name="message"
          className={styles.formItemFull}
        >
          <Input.TextArea placeholder="How can we help?" rows={4} className={styles.textarea} />
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
