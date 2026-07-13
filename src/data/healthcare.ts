import { Role } from '@/data/experience';
import { Skill } from '@/data/about';

export const hero = {
  subtitle: 'Healthcare Operations Professional',
  pitch:
    'Two years and three roles across Sanford Health\'s Bemidji Medical Center: ER Ward Secretary, Triage Technician, and Physical Therapy Aide. Epic experienced, HIPAA disciplined, and calm in high volume clinical settings. Open to patient access, intake, scheduling, and clinical support roles.',
};

export const roles: Role[] = [
  {
    title: 'ER Ward Secretary',
    org: 'Sanford Bemidji Medical Center',
    dates: '2022 to 2024',
    summary:
      'Registered and admitted patients, obtaining and verifying demographic and insurance information and entering it accurately into the registration system. Processed physician orders, coordinated admissions, transfers, and discharges, and scheduled appointments, referrals, and diagnostic procedures.',
    highlights: [
      'Answered and routed high volumes of multi line phone calls',
      'Maintained patient charts and records in Epic',
      'Handled confidential information under HIPAA'
    ]
  },
  {
    title: 'Triage Technician',
    org: 'Sanford Bemidji Medical Center',
    dates: '2022 to 2024',
    summary:
      'Took incoming patients\' vital signs, roomed patients, and documented medications and allergies in the electronic medical record. Performed EKGs and assisted providers with in office testing and clinical procedures.',
    highlights: [
      'Supported patient flow and clinical staff in a fast paced environment',
      'Kept exam areas clean and stocked'
    ]
  },
  {
    title: 'Physical Therapy Aide',
    org: 'Sanford Bemidji Medical Center',
    dates: '2022 to 2024',
    summary:
      'Prepared physical therapy patients and set up treatment areas and equipment for sessions. Supported therapists during treatment and maintained accurate patient records and schedules.',
    highlights: []
  },
  {
    title: 'Cardiac Rehabilitation Intern',
    org: 'Sanford Bemidji',
    dates: 'Fall 2024',
    summary:
      'Monitored vital signs and supported cardiac rehabilitation patients through individualized exercise programs.',
    highlights: []
  },
  {
    title: 'Cofounder',
    org: 'Admin Ambassadors',
    dates: '2026 to Present',
    summary:
      'Cofounded a consulting firm serving business clients. Coordinate requests, resolve issues, maintain accurate data across systems, and communicate with stakeholders.',
    highlights: []
  }
];

export const skills: Skill[] = [
  {
    category: 'Healthcare Systems',
    items: [
      'Epic (EHR)',
      'Electronic Health Records',
      'Patient & Insurance Information',
      'High Volume Accuracy',
      'HIPAA Compliance',
      'Quick to Learn New Systems'
    ]
  },
  {
    category: 'Intake & Coordination',
    items: [
      'Triage',
      'Appointment Scheduling',
      'Referral Routing',
      'Patient Registration',
      'Case Documentation',
      'Admissions & Discharges'
    ]
  },
  {
    category: 'Clinical & Patient Care',
    items: [
      'Vital Signs',
      'EKG',
      'Patient Rooming',
      'CPR / BLS Certified',
      'Exercise Program Design',
      'Compassionate Patient Service'
    ]
  },
  {
    category: 'Administrative & Computer',
    items: [
      'Microsoft Word, Excel, Outlook',
      'Accurate Data Entry',
      'Multi Line Phones',
      'Working Across Multiple Systems',
      'Professional Phone Presence',
      'Clear Written Communication'
    ]
  }
];

export const certifications = [
  { name: 'ACSM Certified Personal Trainer', issuer: 'American College of Sports Medicine', year: '2023' },
  { name: 'BLS/AED Certified', issuer: 'American Heart Association', year: '2022' },
  { name: 'Salesforce Administrator', issuer: 'Salesforce', year: 'In progress' }
];

export const education = {
  degree: 'Bachelor of Science, Exercise Science (Medical Fitness Emphasis)',
  school: 'Bemidji State University',
  year: '2024',
  honors: [
    'NCAA Division II Football',
    'NSIC Defensive Player of the Year',
    'AP All American Selection'
  ]
};

export const story = {
  finalTitle: 'From the Field to Patient Care',
  finalText:
    'The discipline that built an All American career is the same discipline I brought to two years of patient facing work at Sanford Health: showing up every day, staying calm under pressure, and treating every patient and coworker with respect. I learn new systems fast, I take accuracy seriously, and I bring a teammate\'s mentality to every shift.'
};
