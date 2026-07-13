/**
 * leadService.js
 * Submits the contact form to the NexGenByte Express backend.
 *
 * The backend accepts JSON with an optional base64-encoded attachment.
 * File reading and validation happen in ContactPage.jsx (before this call).
 */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * @param {object} data  — validated form data from ContactPage
 * @param {string}  data.name
 * @param {string}  data.email
 * @param {string}  data.company
 * @param {string}  [data.website]
 * @param {string}  [data.phone]
 * @param {string}  data.country
 * @param {string}  data.service
 * @param {string}  data.budget
 * @param {string}  data.timeline
 * @param {string}  data.projectDetails
 * @param {string}  data.businessGoals
 * @param {{ filename: string, type: string, content: string }|null} [data.attachment]
 */
export const submitLead = async (data) => {
  const {
    name,
    email,
    company,
    website,
    phone,
    country,
    service,
    budget,
    timeline,
    projectDetails,
    businessGoals,
    attachment,
  } = data;

  // Basic client-side guard (server validates again)
  if (!name || !email || !company || !country || !service || !budget || !timeline || !projectDetails || !businessGoals) {
    throw new Error('Please complete all required fields.');
  }

  const payload = {
    name,
    email,
    company,
    website:       website       || '',
    phone:         phone         || '',
    country,
    service,
    budget,
    timeline,
    projectDetails,
    businessGoals,
    attachment:    attachment    || null,
  };

  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  });

  const json = await response.json();

  if (!response.ok || !json.success) {
    throw new Error(json.message || 'Unable to submit your inquiry. Please try again later.');
  }

  return json;
};
