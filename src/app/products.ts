export interface Product {
  id: number;
  name: string;
  image?: File,
  description: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Toms of Maine',
    image: 'assets/81IoXrF3wGL._SX679_.jpg',
    description:
      'Toms of Maine Antiperspirant Deodorant for Women, Natural Powder, 2.25 oz. 3-Pack',
    rating: 4.6,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/Toms-Maine-Antiperspirant-Deodorant-Natural/dp/B082VKCQF1/ref=sr_1_1_sspa?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODJKUTNWUUZQWkEmZW5jcnlwdGVkSWQ9QTA3MzgyOTRZQjRSTlpVTzhYVUYmZW5jcnlwdGVkQWRJZD1BMDU1MjA3NDE5Slo0SDVVTTgyOVQmd2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3NlJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  },
  {
    id: 2,
    name: '	Oil',
    image: 'assets/51NGgQ-ATgL._SX679_.jpg',
    description: 'Golden Bundle, Premium Personal Care & Beard Grooming Set with All- Natural Products',
    rating: 5,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/Golden-Premium-Personal-Grooming-Products/dp/B08WZ1FVQ1/ref=sr_1_2_sspa?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODJKUTNWUUZQWkEmZW5jcnlwdGVkSWQ9QTA3MzgyOTRZQjRSTlpVTzhYVUYmZW5jcnlwdGVkQWRJZD1BMDEyOTQ3NFdVV1FGQjYwRTU3VyZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 3,
    name: 'Night Guard Adjustable',
    image: 'assets/51BwPnD1-3L._AC_SL1050_.jpg',
    description: 'KOHEEL Night Guard Adjustable, Dental Guard Stops Bruxism, 2 Count (1 Pack)',
    rating: 3.4,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/KOHEEL-Night-Adjustable-Dental-Bruxism/dp/B09QC12S4R/ref=sr_1_3_sspa?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODJKUTNWUUZQWkEmZW5jcnlwdGVkSWQ9QTA3MzgyOTRZQjRSTlpVTzhYVUYmZW5jcnlwdGVkQWRJZD1BMDExNjk4NTlSRkQ1SFZTMk5CMiZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 4,
    name: 'Makeup Remover',
    image: 'assets/81a10H+CuJL._SX679_.jpg',
    description: 'Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack',
    rating: 4.8,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/Neutrogena-Cleansing-Towelettes-Waterproof-Alcohol-Free/dp/B00U2VQZDS/ref=sr_1_4?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-4"
  },
  {
    id: 5,
    name: 'Hydro Silk Touch-Up',
    image: 'assets/819Zt6VqJYL._SX679_.jpg',
    description: 'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover, 3 Count (Packaging May Vary)',
    rating: 4.6,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/Schick-Multipurpose-Exfoliating-Dermaplaning-Precision/dp/B0787GLBMV/ref=sr_1_5?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-5"
  },
  {
    id: 6,
    name: 'CeraVe Moisturizing Cream',
    image: 'assets/61S7BrCBj7L._SX679_.jpg',
    description: 'CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz',
    rating: 4.8,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC/ref=sr_1_6?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-6"
  },
  {
    id: 7,
    name: 'CeraVe AM Facial Moisturizing Lotion',
    image: 'assets/81VWbVjvJqL._SX679_.jpg',
    description: 'CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce',
    rating:  4.6,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/CeraVe-Facial-Moisturizing-Lotion-AM/dp/B00F97FHAW/ref=sr_1_7?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-7"
  },
  {
    id: 8,
    name: 'TruSkin Vitamin C ',
    image: 'assets/61nD93IEBKL._SX679_.jpg',
    description: 'TruSkin Vitamin C Serum for Face, Anti Aging Serum with Hyaluronic Acid, Vitamin E, Organic Aloe Vera and Jojoba Oil, Hydrating & Brightening Serum for Dark Spots, Fine Lines and Wrinkles, 1 fl oz',
    rating: 4.3,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_8?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-8"
  },
  {
    id: 9,
    name: 'PanOxyl Acne Foaming Wash',
    image: 'assets/61scf7kONPL._AC_SX679_.jpg',
    description: 'PanOxyl Acne Foaming Wash Benzoyl Peroxide 10% Maximum Strength Antimicrobial, 5.5 Oz',
    rating: 4.6,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/PanOxyl-Foaming-Peroxide-Strength-Antimicrobial/dp/B081KL2QYJ/ref=sr_1_9?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-9"
  },
  {
    id: 10,
    name: 'Listerine Total Care',
    image: 'assets/81vNiROdiIL._SX679_.jpg',
    description: 'Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L',
    rating: 4.8,
    url: "https://api.whatsapp.com/send/?phone=+77478867377&text=%D0%AF+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BD+%D0%B2+%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B5+https://www.amazon.com/Listerine-Anticavity-Mouthwash-Fluoride-Packaging/dp/B00495Q5OW/ref=sr_1_10?pd_rd_r=f22906d7-3b8a-41e7-9cef-38efd1695fbd&pd_rd_w=Tye44&pd_rd_wg=4ddtf&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=CSWM026ES9FKXQ0Y7XF3&qid=1647179407&s=beauty-intl-ship&sr=1-10"
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
