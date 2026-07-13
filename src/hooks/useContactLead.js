import { useState, useCallback } from 'react';
import { submitLead } from '../services/leadService.js';

export const useContactLead = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const submit = useCallback(async (data) => {
    setStatus('loading');
    setMessage('');

    try {
      await submitLead(data);
      setStatus('success');
      setMessage("Thank you for contacting NexGenByte. We've received your inquiry and will get back to you within one business day.");
    } catch (error) {
      setStatus('error');
      setMessage(error?.message || 'Something went wrong. Please try again later.');
      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setMessage('');
  }, []);

  return { status, message, submit, reset };
};
