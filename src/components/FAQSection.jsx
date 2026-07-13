import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ } from '../data/site-data';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function AccordionItem({ item, index, isOpen, onToggle }) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <h3>
        <button
          className="accordion-trigger"
          id={id}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
        >
          <span>{item.question}</span>
          <Plus className="accordion-icon" size={20} aria-hidden="true" />
        </button>
      </h3>
      <div
        className="accordion-content"
        id={panelId}
        role="region"
        aria-labelledby={id}
      >
        <p className="accordion-body">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection({ items = FAQ, showTitle = true }) {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useScrollReveal();

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section className="section" id="faq" ref={ref}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {showTitle && (
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</p>
            <h2 className="text-h2">Answers before the call.</h2>
          </div>
        )}

        <div>
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center', padding: '32px', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-muted)', marginBottom: '16px' }}>Still have questions? We answer every inquiry within one business day.</p>
          <Link to="/book-a-call" className="btn btn-primary">
            Book a Strategy Call <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
