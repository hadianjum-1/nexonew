import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useContactLead } from '../hooks/useContactLead.js';
import { useGsapSuccess } from '../hooks/useGsapSuccess.js';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const allowedFileTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().min(1, { message: 'Please enter your company name.' }),
  website: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().min(2, { message: 'Please enter your country.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  budget: z.string().min(1, { message: 'Please select a budget range.' }),
  timeline: z.string().min(1, { message: 'Please enter your timeline.' }),
  businessGoals: z.string().min(10, { message: 'Please describe your business goals.' }),
  projectDetails: z.string().min(20, { message: 'Please provide more details about your project.' }),
  uploadProjectBrief: z.any().optional(),
});

const readFileAsBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('Unable to read file.'));
        return;
      }
      const split = reader.result.split(',');
      resolve(split[1] || '');
    };
    reader.onerror = () => reject(new Error('Unable to read file.'));
    reader.readAsDataURL(file);
  });

export default function ContactPage() {
  const [fileError, setFileError] = useState('');
  const { status, message, submit } = useContactLead();
  const statusRef = useGsapSuccess(status === 'success');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      website: '',
      phone: '',
      country: '',
      service: '',
      budget: '',
      timeline: '',
      businessGoals: '',
      projectDetails: '',
      uploadProjectBrief: null,
    },
  });

  useEffect(() => {
    if (status === 'success') {
      reset();
    }
  }, [status, reset]);

  const onSubmit = async (data) => {
    setFileError('');

    if (data.uploadProjectBrief?.length > 0) {
      const file = data.uploadProjectBrief[0];
      if (!allowedFileTypes.includes(file.type)) {
        setFileError('Please upload a PDF, DOC, or DOCX file.');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError('Project brief must be 10MB or smaller.');
        return;
      }
    }

    try {
      const attachment = data.uploadProjectBrief?.length > 0 ? data.uploadProjectBrief[0] : null;
      const attachmentBase64 = attachment ? await readFileAsBase64(attachment) : null;
      await submit({
        name: data.name,
        email: data.email,
        company: data.company,
        website: data.website,
        phone: data.phone,
        country: data.country,
        service: data.service,
        budget: data.budget,
        timeline: data.timeline,
        businessGoals: data.businessGoals,
        projectDetails: data.projectDetails,
        attachment: attachment
          ? {
              filename: attachment.name,
              type: attachment.type,
              content: attachmentBase64,
            }
          : null,
      });
    } catch (error) {
      // error state is handled inside the hook
    }
  };

  return (
    <main id="main-content" style={{ paddingTop: 'calc(var(--nav-height) + 64px)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', paddingBlock: '48px' }}>
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="text-h1" style={{ marginBottom: '24px' }}>Let&apos;s build.</h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '48px' }}>
              We respond to all qualified inquiries within one business day. Fill out the form or schedule a session directly on our strategy call booking page.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email</p>
                  <a href="mailto:hadi@nexgnbyte.com" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>hadi@nexgnbyte.com</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Phone</p>
                  <a href="tel:+923159711237" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>+92 (315) 971-1237</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Locations</p>
                  <p style={{ fontWeight: 600 }}>Worldwide(Remote), <br />Pakistan, Peshawar</p>
                </div>
              </li>
            </ul>

            <div style={{ height: '180px', width: '100%', background: 'var(--color-surface)', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem' }}>Map visualization placeholder</p>
            </div>
          </div>

          <div style={{ padding: '48px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '32px' }}>Project Inquiry</h2>

            {status === 'success' && (
              <div ref={statusRef} style={{ padding: '20px', borderRadius: '18px', border: '1px solid rgba(30,142,90,0.18)', background: 'rgba(30,142,90,0.08)', color: 'var(--color-success)', marginBottom: '24px' }}>
                {message}
              </div>
            )}

            {status === 'error' && (
              <div style={{ padding: '20px', borderRadius: '18px', border: '1px solid rgba(192,46,60,0.18)', background: 'rgba(192,46,60,0.08)', color: 'var(--color-error)', marginBottom: '24px' }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} aria-label="Project inquiry form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input id="contact-name" type="text" className="form-input" placeholder="Jane Doe" {...register('name')} />
                  {errors.name && <span className="form-error" role="alert">{errors.name.message}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email" className="form-label">Email Address</label>
                  <input id="contact-email" type="email" className="form-input" placeholder="jane@company.com" {...register('email')} />
                  {errors.email && <span className="form-error" role="alert">{errors.email.message}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label htmlFor="contact-company" className="form-label">Company Name</label>
                  <input id="contact-company" type="text" className="form-input" placeholder="Acme Corp" {...register('company')} />
                  {errors.company && <span className="form-error" role="alert">{errors.company.message}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="contact-website" className="form-label">Website</label>
                  <input id="contact-website" type="url" className="form-input" placeholder="https://company.com" {...register('website')} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label htmlFor="contact-phone" className="form-label">Phone</label>
                  <input id="contact-phone" type="tel" className="form-input" placeholder="+92 315 971 1237" {...register('phone')} />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-country" className="form-label">Country</label>
                  <input id="contact-country" type="text" className="form-input" placeholder="Pakistan" {...register('country')} />
                  {errors.country && <span className="form-error" role="alert">{errors.country.message}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label htmlFor="contact-service" className="form-label">Selected Service</label>
                  <select id="contact-service" className="form-input" {...register('service')}>
                    <option value="">Select a service...</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Web Application">Web Application</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Branding">Branding</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <span className="form-error" role="alert">{errors.service.message}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="contact-budget" className="form-label">Estimated Budget</label>
                  <select id="contact-budget" className="form-input" {...register('budget')}>
                    <option value="">Select range...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-30k">$15,000 – $30,000</option>
                    <option value="30k-plus">$30,000+</option>
                  </select>
                  {errors.budget && <span className="form-error" role="alert">{errors.budget.message}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label htmlFor="contact-timeline" className="form-label">Timeline</label>
                  <input id="contact-timeline" type="text" className="form-input" placeholder="3–6 months, flexible" {...register('timeline')} />
                  {errors.timeline && <span className="form-error" role="alert">{errors.timeline.message}</span>}
                </div>
                <div className="form-field" style={{ marginTop: '8px' }}>
                  <label htmlFor="uploadProjectBrief" className="form-label">Upload Project Brief <span style={{ color: 'var(--color-muted)', fontSize: '0.875rem', fontWeight: 400 }}>(optional)</span></label>
                  <input id="uploadProjectBrief" type="file" accept=".pdf,.doc,.docx" className="form-input" {...register('uploadProjectBrief')} />
                  {fileError && <span className="form-error" role="alert">{fileError}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-business-goals" className="form-label">Business Goals</label>
                <textarea id="contact-business-goals" className="form-input" rows={4} placeholder="Share the goals you're aiming to achieve with this project..." {...register('businessGoals')} style={{ resize: 'vertical' }} />
                {errors.businessGoals && <span className="form-error" role="alert">{errors.businessGoals.message}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-project-details" className="form-label">Project Details</label>
                <textarea id="contact-project-details" className="form-input" rows={5} placeholder="Outline your current challenge, audience, and what success looks like..." {...register('projectDetails')} style={{ resize: 'vertical' }} />
                {errors.projectDetails && <span className="form-error" role="alert">{errors.projectDetails.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          main > .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </main>
  );
}
