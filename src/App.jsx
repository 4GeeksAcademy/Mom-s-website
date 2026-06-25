import { NavLink, Route, Routes } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/start-a-trucking-company', label: 'Start a Trucking Company' },
  { to: '/us-operations', label: 'U.S. Operations' },
  { to: '/financial-services', label: 'Financial Services' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

const coreServices = [
  'Compliance & Safety',
  'Registrations & Permits',
  'U.S. Operations',
  'Bookkeeping & Tax',
  'Audit Support',
  'Document Management',
]

const homeServiceHighlights = [
  'Bookkeeping & Financial Record Management',
  'Corporate Tax Preparation & Filing',
  'IFTA Reporting and Fuel Tax Compliance',
  'Regulatory Compliance & Monitoring',
  'Fleet Management & Driver Programs',
  'U.S. Operations for Canadian Carriers',
  'Audit Support & Recordkeeping',
]

const whyCarriersWorkWithUs = [
  'We have spent more than 15 years working exclusively with trucking operations.',
  'We understand how permits, compliance, IFTA, bookkeeping, and tax reporting affect one another.',
  'We work directly with owner-operators, small fleets, and growing carriers.',
  'We focus on practical solutions rather than one-size-fits-all approaches.',
  'We remain available after registrations are completed and deadlines are met.',
]

const whoWeWorkWith = [
  'Owner-Operators',
  'New Trucking Companies',
  'Small Fleets',
  'Carriers Expanding into the United States',
  'Fleet Management and Recordkeeping',
]

const immediateChallenges = [
  'Responding to audit findings, roadside inspection concerns, and changing regulatory requirements',
  'Audit support: preparation, response, and representation',
]

const ongoingCompliance = [
  'Keeping IRP, IFTA, carrier profiles, and operating authorities current',
  'Expiration tracking, driver files, vehicle files, and renewal management',
  'ELD and HOS management',
  'Driver training and refresher programs',
]

const operationsReporting = [
  'Quarterly IFTA reporting and fuel tax record management',
  'Bookkeeping services aligned with compliance needs',
  'Corporate tax preparation support for transportation businesses',
]

const footerServiceList = [
  'Bookkeeping Services',
  'Corporate Tax Preparation',
  'IFTA Reporting',
  'NSC, FMCSA & DOT Compliance',
  'Audit Support',
  'Fleet Compliance',
  'Cross-Border Operations',
]

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/start-a-trucking-company" element={<StartingTruckingPage />} />
          <Route path="/us-operations" element={<USOperationsPage />} />
          <Route path="/financial-services" element={<FinancialServicesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="logo-block">
        <p className="logo-title">Compliance, Bookkeeping & Tax Solutions</p>
        <p className="logo-subtitle">For Trucking Companies</p>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/contact" className="btn btn-primary">
        Request Consultation
      </NavLink>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-image-overlay" aria-hidden="true" />
        <div className="hero-content section-width">
          <p className="eyebrow">Compliance, Bookkeeping & Tax Solutions</p>
          <h1>
            For Carriers Operating
            <br />
            in Canada and the United States
          </h1>
          <div className="bullet-grid">
            {homeServiceHighlights.map((item) => (
              <p key={item} className="bullet-item">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-width">
        <h2>Why Carriers Work with Us</h2>
        <ul className="stack-list">
          {whyCarriersWorkWithUs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          More than 15 years of working with commercial carriers has shown us
          that compliance rarely fits into neat categories. Registrations,
          permits, audits, recordkeeping, fleet management, and financial
          reporting are all connected. Over time, the services we provide have
          evolved alongside the needs of the carriers we work with.
        </p>
      </section>

      <section className="section section-width two-column">
        <div>
          <h3>Who We Work With</h3>
          <ul className="stack-list">
            {whoWeWorkWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-grid">
          {coreServices.map((service) => (
            <article key={service} className="service-card">
              <h4>{service}</h4>
              <p>
                Practical support tailored to the day-to-day realities of
                trucking operations.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-width">
        <h2>
          From Immediate Challenges to Long-Term Business Support
        </h2>
        <div className="three-column">
          <article className="info-column">
            <h3>Immediate Challenges</h3>
            <ul className="stack-list">
              {immediateChallenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-column">
            <h3>Ongoing Compliance Management</h3>
            <ul className="stack-list">
              {ongoingCompliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-column">
            <h3>Business Operations & Reporting</h3>
            <ul className="stack-list">
              {operationsReporting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="button-row">
          <NavLink to="/contact" className="btn btn-primary">
            Schedule Consultation
          </NavLink>
          <NavLink to="/services" className="btn btn-secondary">
            Explore Services
          </NavLink>
        </div>
      </section>

      <section className="section section-width">
        <h2>How We Work</h2>
        <div className="process-flow">
          <article className="process-step">
            <h3>Understand Your Operation</h3>
            <p>
              Routes, jurisdictions, equipment, drivers, and reporting
              requirements.
            </p>
          </article>
          <article className="process-step">
            <h3>Put the Right Systems in Place</h3>
            <p>
              Registrations, permits, compliance programs, recordkeeping, and
              reporting.
            </p>
          </article>
          <article className="process-step">
            <h3>Keep Things Current</h3>
            <p>
              Monitoring, renewals, filings, and support when regulations
              change.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-width cta-inner">
          <p>
            Practical guidance, straightforward answers, and dependable support.
          </p>
          <NavLink to="/contact" className="btn btn-primary">
            Request Consultation
          </NavLink>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="section section-width page-content">
      <h1>Built on Experience</h1>
      <p>
        FlowFreight Carrier Compliance Services was founded on more than 15
        years of experience working with commercial carriers and navigating the
        requirements that come with operating in Canada and the United States.
      </p>
      <p>
        Over the years, we have worked with owner-operators taking their first
        steps into the industry, established fleets expanding their operations,
        and carriers managing the day-to-day responsibilities that come with
        staying current in an ever-changing regulatory environment.
      </p>
      <p>
        Our experience comes from working with the realities of trucking, not
        from theory. Registrations, permits, audits, driver files,
        recordkeeping, and ongoing compliance requirements have always been at
        the center of our work.
      </p>
      <p>
        As regulations changed and operations became more complex, the scope of
        our work expanded. What began with registrations and compliance
        gradually grew to include audit support, fleet monitoring, cross-border
        operations, and bookkeeping and tax services. Today, those services
        remain connected by the same objective: helping carriers maintain
        organized and compliant operations.
      </p>
    </section>
  )
}

function ServicesPage() {
  const serviceGroups = [
    {
      title: 'Registrations',
      items: [
        'IRP (Prorate) Registration and Renewals',
        'IFTA Registration and Renewals',
        'Weight Station Bypass Programs',
      ],
    },
    {
      title: 'Permits',
      items: [
        'Temporary Trip Permits',
        'Oversize Permits',
        'Heavy Haul Permits',
        'Fuel Permits',
      ],
    },
    {
      title: 'Compliance & Safety',
      items: [
        'Driver Qualification Files',
        'Vehicle Maintenance and Inspection Records',
        'ELD Mandate',
        'HOS Monitoring',
        'Safety Programs',
        'Regulatory Updates',
      ],
    },
    {
      title: 'Fleet Management',
      items: [
        'Expiration Tracking',
        'Permit Renewals',
        'Compliance Calendar',
        'Driver Files Management',
        'Vehicle Files Management',
      ],
    },
    {
      title: 'Audit Response and Representation',
      items: [
        'NSC New Entrant Audits',
        'DOT Audits',
        'Recordkeeping Assistance',
      ],
    },
  ]

  return (
    <section className="section section-width page-content">
      <h1>Services</h1>
      <div className="card-grid">
        {serviceGroups.map((group) => (
          <article key={group.title} className="service-card">
            <h3>{group.title}</h3>
            <ul className="stack-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function StartingTruckingPage() {
  const startupItems = [
    'Incorporation Assistance',
    'Federal and Provincial Registrations',
    'Carrier Profiles',
    'Insurance Coordination',
    'IRP Setup',
    'IFTA Setup',
    'Driver Compliance Programs',
    'Vehicle Compliance Programs',
    'Safety Management Systems',
    'Electronic Logging Devices',
    'Record-keeping and Documentation System Setup',
    'Management of Renewals and Updates',
    'New Entrant Audit Preparation and Support',
  ]

  return (
    <section className="section section-width page-content">
      <h1>Starting a Trucking Company</h1>
      <p>
        Over the years, many owner-operators approached us while preparing to
        put their first truck on the road. Questions about registrations and
        permits often led to discussions about recordkeeping, safety programs,
        and preparing for future requirements.
      </p>
      <p>
        As a result, assisting new carriers became a natural extension of the
        work we were already doing.
      </p>
      <ul className="stack-list two-col-list">
        {startupItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <NavLink to="/contact" className="btn btn-primary">
        Start Your Trucking Company Today
      </NavLink>
    </section>
  )
}

function USOperationsPage() {
  const registrationItems = [
    'USDOT Number',
    'MC Number',
    'BOC-3 Filing',
    'UCR Registration',
    'Drug and Alcohol Clearinghouse Enrollment',
    'Weight Station Bypass Programs',
    'Trade Certification Assistance: support for CTPAT, PIP, and Fast-Track',
  ]

  const tripPermitItems = [
    'Temporary Permits',
    'Fuel Permits',
    'Kentucky KYU Permit',
    'New Mexico Weight Distance Tax Permit',
    'Oregon Weight-Mile Tax',
    'New York HUT',
  ]

  const complianceItems = [
    'Expiration Tracking',
    'Permit Renewals',
    'Compliance Calendar',
    'Driver Files Management',
    'Vehicle Files Management',
    'Regulatory Updates',
    'ELD Mandate',
    'HOS Monitoring',
    'Management of Cross-Border Documentation',
    'Customs and Border Crossing Requirements and Training',
  ]

  return (
    <section className="section section-width page-content">
      <h1>U.S. Operations for Canadian Carriers</h1>
      <p>
        As more of the carriers we worked with expanded beyond Canada,
        questions about USDOT numbers, permits, fuel taxes, and cross-border
        requirements became increasingly common.
      </p>
      <p>
        Over time, supporting operations in the United States became part of
        the ongoing relationships we had already built with carriers operating
        in Canada.
      </p>

      <div className="card-grid">
        <article className="service-card">
          <h3>Registrations</h3>
          <ul className="stack-list">
            {registrationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="service-card">
          <h3>Trip & Fuel Permits</h3>
          <ul className="stack-list">
            {tripPermitItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="service-card">
          <h3>Compliance Support</h3>
          <ul className="stack-list">
            {complianceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function FinancialServicesPage() {
  const bookkeepingServices = [
    'Monthly bookkeeping',
    'Quarterly bookkeeping',
    'Accounts payable tracking',
    'Accounts receivable tracking',
    'Expense categorization and reconciliation',
    'Financial record organization',
  ]

  const taxServices = ['Corporate tax return preparation', 'GST filing assistance']

  const transportationReporting = [
    'Quarterly IFTA reporting',
    'Fuel tax record management',
    'Audit-ready documentation support',
  ]

  const bookkeepingBenefits = [
    'Accurate financial information',
    'Better visibility into operating costs',
    'Audit-ready records',
    'Easier tax preparation',
    'Improved business planning and decision-making',
  ]

  return (
    <section className="section section-width page-content">
      <h1>Bookkeeping and Tax Services</h1>
      <p>
        Many of the carriers we worked with came to us initially for permits,
        registrations, and compliance support. Over time, those same carriers
        began asking for help with IFTA reporting, bookkeeping, and tax
        preparation because many of the records required for compliance also
        support accurate bookkeeping and tax reporting.
      </p>
      <p>
        Today, we help carriers manage both their compliance obligations and
        financial records through a single point of contact.
      </p>

      <h2>Bookkeeping Designed Around Trucking Operations</h2>
      <p>
        Fuel receipts, IFTA reporting, permit costs, repairs, insurance, and
        operating expenses generate a constant flow of paperwork. Without
        organized records, reporting becomes difficult and important
        information can be missed.
      </p>
      <p>
        Our bookkeeping services are built around the realities of running
        trucks.
      </p>
      <ul className="stack-list">
        {bookkeepingBenefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="card-grid">
        <article className="service-card">
          <h3>Bookkeeping Services</h3>
          <ul className="stack-list">
            {bookkeepingServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="service-card">
          <h3>Tax Services</h3>
          <ul className="stack-list">
            {taxServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="service-card">
          <h3>Transportation Industry Reporting</h3>
          <ul className="stack-list">
            {transportationReporting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <h2>Why Carriers Choose Us</h2>
      <p>
        Most bookkeeping firms understand accounting. Most compliance
        consultants understand regulations. We work where those two areas
        overlap.
      </p>
      <p>
        Because we deal with transportation industry documentation, including
        registrations, permits, IFTA reporting, audits, driver and vehicle
        compliance, inspection records, and cross-border operations, we
        understand where financial records and compliance requirements
        intersect.
      </p>
      <p>
        That allows us to support both sides of the business through a single
        point of contact.
      </p>
      <NavLink to="/contact" className="btn btn-primary">
        Request a Consultation
      </NavLink>
    </section>
  )
}

function ResourcesPage() {
  return (
    <section className="section section-width page-content">
      <h1>Resources</h1>
      <div className="card-grid">
        <article className="service-card">
          <h3>Regulatory Updates</h3>
          <p>NSC, DOT, and FMCSA updates.</p>
        </article>
        <article className="service-card">
          <h3>Compliance Tips</h3>
          <p>Driver files, HOS, and roadside inspection guidance.</p>
        </article>
        <article className="service-card">
          <h3>IFTA & IRP Resources</h3>
          <p>Deadlines and practical reminders.</p>
        </article>
      </div>

      <article className="faq-block">
        <h2>FAQ</h2>
        <p>
          Questions about registrations, permits, compliance, and reporting can
          be reviewed during your consultation.
        </p>
      </article>
    </section>
  )
}

function ContactPage() {
  const concernOptions = [
    'I Have an Audit',
    'I Want to Start a Trucking Company',
    'I Need IFTA & IRP Setup',
    'I Need Help Managing Compliance Requirements',
    'I Am Expanding into the United States',
    'I Need Bookkeeping & Tax Services',
    'I Need Permits or Registrations',
    'I Need Compliance Support',
    'Other',
  ]

  return (
    <section className="section section-width page-content">
      <h1>Tell Us About Your Business</h1>

      <div className="contact-grid">
        <article className="service-card">
          <h3>Contact Information</h3>
          <ul className="stack-list">
            <li>
              Phone: <a className="contact-link" href="tel:+17809371373">780-937-1373</a>
            </li>
            <li>
              Email:{' '}
              <a className="contact-link" href="mailto:contact@flowfreight.ca">
                contact@flowfreight.ca
              </a>
            </li>
            <li>Edmonton, Alberta, Canada</li>
          </ul>
        </article>

        <form className="contact-form service-card" onSubmit={(event) => event.preventDefault()}>
          <h3>Request a Consultation</h3>

          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required />

          <label htmlFor="primaryConcern">Primary Concern</label>
          <select id="primaryConcern" name="primaryConcern" defaultValue="">
            <option value="" disabled>
              Select one option
            </option>
            {concernOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-width footer-grid">
        <div>
          <p className="footer-title">
            Compliance, Bookkeeping & Tax Solutions for Trucking Companies
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="stack-list footer-links">
            {navLinks
              .filter((link) => link.label !== 'Resources')
              .map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3>Core Services</h3>
          <ul className="stack-list">
            {footerServiceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default App
