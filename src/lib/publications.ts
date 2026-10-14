import type { Publication } from './types';

export const publications: Publication[] = [
    {
        id: 'jaic-yolov8-hand-fracture',
        date: 'OCT 2026',
        badge: 'SINTA 3',
        title: 'Methodologically Sound Class-Imbalance Handling in YOLOv8 Hand Fracture Detection via Training-Only Oversampling',
        journal: 'Journal of Applied Informatics and Computing (JAIC), Vol. 10, No. 5',
        authors: 'Alfaturachman Maulana Pahlevi, Rohimatun Nisfah, Meysilla Cindy Silsiana, Cinantya Paramita',
        doi: '10.30871/jaic.v10i5.13637',
        url: 'https://jurnal.polibatam.ac.id/index.php/JAIC/article/view/13637',
        desc: '• Developed a leakage-aware evaluation protocol ensuring oversampling is confined exclusively to the training split, preserving pristine validation and test sets.\n• Evaluated lightweight and medium architectures on 1,538 hand-fracture X-ray images (FracAtlas); YOLOv8m achieved a 0.812 Recall (+73.2%) and 0.832 mAP@50 (+66.6%).\n• Demonstrated high clinical screening reliability (Specificity > 0.96, ROC-AUC > 0.967, FNR 0.061) with Grad-CAM activation verifying focus on anatomical bone fracture sites.',
    },
    {
        id: 'jti-clarke-angle-foot-arch',
        date: 'APR 2026',
        badge: 'SINTA 2',
        title: "Automatic Detection of Foot Arch Using Clarke's Angle Calculation Through A Web-Integrated System for Children",
        journal: 'Jurnal Teknik Informatika (JTI), Vol. 19, No. 1',
        authors: 'Shobiha Awwaliyah, Qalbi Rivantona, Alfaturachman Maulana Pahlevi, Dedi Nurcipto, Menik Dwi Kurniatie',
        doi: '10.15408/jti.v19i1.47091',
        url: 'https://doi.org/10.15408/jti.v19i1.47091',
        desc: "• Developed an automated, web-integrated digital image processing system calculating Clarke's Angle for non-invasive pediatric foot arch classification (flatfoot / pes planus).\n• Field-tested and validated on 180 children aged 2–7 years across Kindergarten & Daycare Habibie Ainun and Posyandu Kemuning in Semarang.\n• Achieved 98.89% diagnostic accuracy against conventional wet footprint tests, enabling accessible real-time screening for community health posts.",
    },
];
