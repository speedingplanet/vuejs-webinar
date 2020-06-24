import DemosManager from './DemosManager';
import ContactForm from '../ContactForm';

export const demosRoutes = [
  {
    path: '/demos',
    component: DemosManager,
    children: [
      {
        path: 'contact-form',
        component: ContactForm,
        name: 'ContactForm',
      },
    ],
  },
];
