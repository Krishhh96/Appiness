import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appiness';
  doctorObj = [
    {
      title: 'Pediatric BMT',
      name: 'Dr. Vijay Agarwal',
      designation:
        'MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology',
      desc: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.',
    },
    {
      title: 'Pediatric BMT',
      name: 'Dr. Vijay Agarwal',
      designation:
        'MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology',
      desc: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.',
    },
    {
      title: 'Pediatric BMT',
      name: 'Dr. Vijay Agarwal',
      designation:
        'MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology',
      desc: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.',
    },
    {
      title: 'Pediatric BMT',
      name: 'Dr. Vijay Agarwal',
      designation:
        'MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology',
      desc: 'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.',
    },
  ];
  transplantArr = [
    'Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.',
    'Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.',
    'Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.',
    'Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.',
    'Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.',
  ];
  immuneObj = [
    {
      imgPath: '../assets/images/Group 2.png',
      text: 'Failure to thrive – not gaining weight and height as per the age norms',
    },
    {
      imgPath: '../assets/images/Group (5).png',
      text: 'Infections warranting multiple hospitalizations',
    },
    {
      imgPath: '../assets/images/Group.png',
      text: 'Requirement of intravenous antibiotics to clear infections',
    },
    {
      imgPath: '../assets/images/Group (1).png',
      text: '2 or more episodes of pneumonia',
    },
    {
      imgPath: '../assets/images/Group (2).png',
      text: 'Family history of death of children at young age due to immune deficiency',
    },
    {
      imgPath: '../assets/images/Group (3).png',
      text: 'Repeated episodes of diarrhea',
    },
    {
      imgPath: '../assets/images/Group 2 (1).png',
      text: '2 or more episodes of sinus infections within a year',
    },

    {
      imgPath: '../assets/images/Group 2 (2).png',
      text: '2 or more episodes of ear discharge',
    },
    {
      imgPath: '../assets/images/Group 2 (3).png',
      text: 'Repeated skin infections',
    },
    {
      imgPath: '../assets/images/Group (4).png',
      text: 'Repeated abscess formation (liver abscess, brain abscess)',
    },
  ];

  accordianobj = [
    {
      key: 'key1',
      keyHash: '#key1',
      title: 'What are the conditions that requireBone Marrow Transplant?',
      detail:
        'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders. It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas',
    },
    {
      key: 'key2',
      keyHash: '#key2',
      title:
        'Which are the hematological diseases that may benefit from bone marrow transplants?',
    },
    {
      key: 'key3',
      keyHash: '#key3',
      title:
        'Which are the Cancers that may benefit from bone marrow transplants?',
    },
    {
      key: 'key4',
      keyHash: '#key4',
      title: 'Do bone marrow failure syndromes require BMT?',
    },
    {
      key: 'key5',
      keyHash: '#key5',
      title: 'What are Primary Immune Deficiency diseases ?',
    },
    {
      key: 'key6',
      keyHash: '#key6',
      title: 'Which are the immune deficiencies that warrant BMT?',
    },
    {
      key: 'key7',
      keyHash: '#key7',
      title: 'What makes transplants at Aster CMI unique?',
    },
  ];
}
