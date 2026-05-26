'use client';

import { Form, Input, ConfigProvider, theme, App, Checkbox } from 'antd';
import { useState } from 'react';
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
          message: 'Solicitud enviada',
          description: 'Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo a la brevedad.',
          placement: 'top',
        });
        form.resetFields();
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      notification.error({
        message: 'Error de envío',
        description: 'Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.',
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
          rules={[{ required: true, message: 'El nombre completo es obligatorio' }]}
          className={styles.formItemFull}
        >
          <Input placeholder="Nombre completo*" className={styles.input} />
        </Form.Item>

        {/* Correo electrónico y Teléfono de contacto */}
        <div className={styles.row}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'El correo electrónico es obligatorio' },
              { type: 'email', message: 'Ingresa un correo electrónico válido' }
            ]}
            className={styles.formItem}
          >
            <Input placeholder="Correo electrónico*" className={styles.input} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'El teléfono de contacto es obligatorio' }]}
            className={styles.formItem}
          >
            <Input placeholder="Teléfono de contacto*" className={styles.input} />
          </Form.Item>
        </div>

        {/* Empresa y Cargo / Puesto */}
        <div className={styles.row}>
          <Form.Item
            name="company"
            rules={[{ required: true, message: 'El nombre de la empresa es obligatorio' }]}
            className={styles.formItem}
          >
            <Input placeholder="Empresa*" className={styles.input} />
          </Form.Item>
          <Form.Item
            name="position"
            className={styles.formItem}
          >
            <Input placeholder="Cargo / Puesto" className={styles.input} />
          </Form.Item>
        </div>

        {/* Ubicación */}
        <Form.Item
          name="location"
          rules={[{ required: true, message: 'La ubicación es obligatoria' }]}
          className={styles.formItemFull}
        >
          <Input placeholder="Ubicación*" className={styles.input} />
        </Form.Item>

        {/* Mensaje */}
        <Form.Item
          name="message"
          className={styles.formItemFull}
        >
          <Input.TextArea placeholder="Mensaje" rows={4} className={styles.textarea} />
        </Form.Item>

        {/* Casilla de Aceptación Legal */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los Términos y Condiciones y el Aviso de Privacidad para continuar')),
            },
          ]}
          className={styles.checkboxItem}
        >
          <Checkbox className={styles.checkbox}>
            <span className={styles.checkboxText}>
              Acepto los{' '}
              <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
                Términos y Condiciones
              </a>{' '}
              y el tratamiento de mis datos personales por EDIRA para gestionar mi solicitud, de conformidad con el{' '}
              <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
                Aviso de Privacidad Simplificado
              </a>.
            </span>
          </Checkbox>
        </Form.Item>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar solicitud'}
          </button>
        </div>
      </Form>
    </ConfigProvider>
  );
}
