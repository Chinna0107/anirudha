export type ServiceItem = {
  slug: string;
  title: string;
  category: 'bird-safety' | 'invisible-grill' | 'sports-industrial';
  categoryLabel: string;
  tagline: string;
  description: string;
  materialSpec: string;
  priceIndicator: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  // 1. Balcony Safety Nets
  {
    slug: 'balcony-safety-nets',
    title: 'Balcony Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'High-durability HDPE netting to protect your family and keep birds away.',
    description: 'Our premium Balcony Safety Nets provide a high-tensile protective barrier for high-rise residential apartments. Crafted using imported UV-stabilized copolymer nylon and high-density polyethylene (HDPE), these nets protect toddlers and pets from accidental falls while keeping pigeons and pest birds out, without obstructing your outdoor view or refreshing breeze.',
    materialSpec: '100% Virgin HDPE, UV Resistant, 0.8mm to 2.5mm thickness, 30+ kg breaking strength.',
    priceIndicator: 'Starting from ₹12 / sq.ft.',
    features: ['5 Years Performance Warranty', 'UV-Stabilized Copolymer (Weatherproof)', 'High Breaking Resistance (Child Safe)', 'Translucent & Minimal Visual Impact'],
    faqs: [
      { question: 'Will this block my balcony view or ventilation?', answer: 'No. Our high-tensile translucent nets are designed to have minimal visual presence. You get 100% natural light and airflow while staying fully protected.' },
      { question: 'What is the lifespan of these safety nets?', answer: 'Our HDPE and nylon copolymer nets are UV-stabilized and built to endure harsh sunlight and rains, easily lasting between 5 to 8 years.' }
    ],
    image: '/balcony.jpeg'
  },
  // 2. Kids Safety Nets for Balcony
  {
    slug: 'kids-net-for-balcony',
    title: 'Kids Safety Nets for Balcony',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Heavy-duty childproofing nets to safeguard your toddlers on high floors.',
    description: 'Ensure absolute peace of mind with our dedicated Kids Balcony Safety Nets. Tailored specifically with double-knotted high-strength polyethylene, these safety systems eliminate any possibility of children slipping through balcony railings, giving them a secure space to play.',
    materialSpec: 'Double-knotted premium nylon, 15mm-30mm mesh size, 45 kg load capacity per node.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['High Load Carrying Capacity', 'No Sharp Edges (Baby Safe)', 'Rustproof SS 316 Anchoring Accessories', 'Free Professional Tensioning Adjustment'],
    faqs: [
      { question: 'Can these nets bear the weight of an active child?', answer: 'Yes, our child-safety nets are anchored using heavy-duty stainless steel fasteners and double-knotted cords that easily support weights up to 50+ kg.' },
      { question: 'Do you provide free installation?', answer: 'Yes, we provide free site inspection and professional installation by certified high-rise technicians.' }
    ],
    image: 'https://imgs.search.brave.com/6vA07kVV5MY7WJJT9tG8K5-8XxYsOhysOPECZ1TGYwo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF5UE5PSm9GOUwu/anBn'
  },
  // 3. Pets Safety Nets
  {
    slug: 'pets-safety-nets',
    title: 'Pets Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Keep your cats, dogs, and birds safe from falling off open windows and balconies.',
    description: 'Protect your curious furry companions with cat-proof and dog-friendly netting solutions. Engineered with reinforced bite-resistant threads, our Pets Safety Nets prevent animals from chewing through or jumping off high balconies, keeping them safe.',
    materialSpec: 'Bite-resistant reinforced nylon filament with stainless steel wire core option.',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['Bite & Claw Scratch Resistant', 'Optimal Mesh Sizing (Prevent paws getting stuck)', 'Durable Steel Core Reinforced Options', 'Weather-Resistant Coating'],
    faqs: [
      { question: 'Is the material safe if my cat tries to chew it?', answer: 'Yes, our materials are non-toxic, lead-free, and reinforced with core filaments to prevent tearing or chemical ingestion.' },
      { question: 'Can it be installed on windows and sliding doors?', answer: 'Absolutely. We custom fit the frames and nets over window grills, open balconies, and service shafts.' }
    ],
    image: 'https://imgs.search.brave.com/AyJuqCxRHov7TiofnnQPrEKSMetPPNafE2ssTqInO8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnNjaHV0em5ldHpl/MjQuZGUvaW1hZ2Vz/L3Jldmlld3MvaW5m/by8xMTE0ODJfMTIw/XzE1NTQ4NzQyNjcu/anBn'
  },
  // 4. Pigeon Safety Nets
  {
    slug: 'pigeon-safety-nets',
    title: 'Pigeon Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Permanent pigeon control solutions without hurting the birds.',
    description: 'Pigeons can cause massive hygienic issues and structural damage. Our Pigeon Safety Nets provide a highly effective, non-lethal physical barrier that prevents pigeons from nesting in your balconies, window sills, and air conditioner ducts.',
    materialSpec: 'Heavy-duty 1mm HDPE nylon netting, 40mm mesh size to target pigeons specifically.',
    priceIndicator: 'Starting from ₹11 / sq.ft.',
    features: ['100% Bird-Friendly Physical Exclusion', 'Zero Maintenance & Easy Washable', 'Acid-Proof & Rust-Proof Anchors', 'Flawless Aesthetic Integration'],
    faqs: [
      { question: 'Does this harm the birds?', answer: 'No. Our nets act as a simple physical barrier. Pigeons simply cannot land or enter, directing them to search for other nesting zones without getting hurt.' },
      { question: 'Will dust or bird droppings stick to the net?', answer: 'Our nets feature a smooth dust-repellent coating. Rainwater washes away minimal dust, keeping them self-cleaning.' }
    ],
    image: 'https://imgs.search.brave.com/5n15-KC8uuY2Pb2oIxfiYVysEoqRWv5eu8Bem1mTmX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFTR00wMmtQQ0wu/anBn'
  },
  // 5. Anti-Roosting Bird Spikes
  {
    slug: 'bird-spikes',
    title: 'Anti-Roosting Bird Spikes',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Premium polycarbonate and stainless steel spikes for ledges and beams.',
    description: 'Prevent birds from perching on narrow ledges, pipes, air conditioners, and parapet walls. Our professional Anti-Roosting Bird Spikes are long-lasting, humane, and practically invisible from a distance.',
    materialSpec: 'SS-316 Grade Spikes mounted on high-grade UV Polycarbonate base strips.',
    priceIndicator: 'Starting from ₹80 / linear foot.',
    features: ['SS 304 High-Tensile Rustproof Spikes', 'UV Resistant Polycarbonate Base (No yellowing)', 'Easy Adhesive or Screw Mounting', 'Zero Maintenance Long-Term Solution'],
    faqs: [
      { question: 'Do spikes hurt the birds?', answer: 'No. The spikes simply make it physically impossible for birds to land. They see the spikes and fly away safely without any injury.' }
    ],
    image: 'https://imgs.search.brave.com/1_1MbYvrcg5irW_OBzfk8floRqOnb1p6P0XQ2ctKr54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5tYWRlLWluLWNo/aW5hLmNvbS8yMDJm/MGowMHVtQWtyaUdS/bk9vei9CaXJkLURl/dGVycmVudC1BbnRp/LVBpZ2Vvbi1BbnRp/LVJvb3N0aW5nLVBl/c3QtQ29udHJvbC1T/dGFpbmxlc3MtU3Rl/ZWwtUGlnZW9uLVNw/aWtlcy1mb3ItRmVu/Y2Uud2VicA'
  },
  // 6. Staircase Safety Nets
  {
    slug: 'staircase-safety-nets',
    title: 'Staircase Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Protect kids and elderly from dangerous falls in stairwells and banisters.',
    description: 'Stairwells in schools, residential complexes, and villas pose high risks for kids and senior citizens. Our Staircase Safety Nets cover open banisters and central spiral voids, creating a soft but extremely sturdy fall-safety barrier.',
    materialSpec: 'Highly elastic soft-nylon copolymer, tight 20mm mesh.',
    priceIndicator: 'Starting from ₹14 / sq.ft.',
    features: ['Impact Cushioning Fiber Mesh', 'Soft Textured Threading (No friction burns)', 'Custom Fit for Spiral and Straight Stairwells', 'Clean and Minimal Visual Footprint'],
    faqs: [
      { question: 'Will it spoil the beauty of my wooden banisters?', answer: 'We use ultra-fine translucent or matching color cords and non-invasive wood-friendly anchoring sleeves to maintain your interior aesthetics.' }
    ],
    image: 'https://imgs.search.brave.com/Gqb-qqLHbbMLnIhGF5kMPD4LCrjIx8Ra_FQVTB00JF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMS8wMDQv/ODc4L2ZhbmN5LXN0/YWlyY2FzZS1zYWZl/dHktbmV0cy0zMzku/anBn'
  },
  // 7. Duct Area Safety Nets
  {
    slug: 'duct-area-safety-nets',
    title: 'Duct Area Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Secure the open duct shafts of residential buildings from unhygienic pigeons.',
    description: 'Residential duct areas and plumbing shafts are primary breeding grounds for pigeons, creating toxic odors and respiratory risks. Our Duct Area Safety Nets cover the entire vertical height of open building shafts, blocking bird access permanently.',
    materialSpec: 'High tenacity UV nylon net, 1.5mm to 2mm gauge, 40mm mesh.',
    priceIndicator: 'Starting from ₹13 / sq.ft.',
    features: ['Vertical Shaft High-Tension Anchoring', 'Highly Aerodynamic (No noise in high winds)', 'Corrosion-Free Heavy Fasteners', 'Prevents trash accumulation in shafts'],
    faqs: [
      { question: 'How do you clean duct area nets?', answer: 'They require no manual cleaning. Their dust-repellent nature and high-tension fitment ensure rain and wind naturally clean them.' }
    ],
    image: 'https://imgs.search.brave.com/p5Be2WmQbwUyjWY6VN2IuFWHNEsJk9JBnz49OpGaxSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95cGxz/YWZldHluZXRzLmNv/bS9hc3NldHMvaW1h/Z2VzL1NhZmV0eSUy/ME5ldHMvRHVjdCUy/MEFyZWElMjBTYWZl/dHklMjBOZXRzLndl/YnA'
  },
  // 8. Mosquito Nets & Mesh Screens
  {
    slug: 'mosquito-nets',
    title: 'Mosquito Nets & Mesh Screens',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Keep out mosquitoes and tiny insects while enjoying fresh breeze.',
    description: 'Protect your family from vector-borne diseases like dengue and malaria. Our premium Mosquito Nets and Mesh Screens are fabricated with fine-mesh fiberglass or stainless steel meshes, mounted on sleek magnetic or rolling aluminum profiles. Fits perfectly onto any window, balcony door, or sliding portal without restricting natural airflow.',
    materialSpec: 'High-durability fiberglass or SS-304 micro-mesh, sleek anodized aluminum profiles.',
    priceIndicator: 'Starting from ₹45 / sq.ft.',
    features: ['Micro-mesh stops all flying insects', 'High-transparency fiberglass fibers', 'Sleek frames (Magnetic, sliding, or roll-up)', 'Tear-resistant and easy to clean'],
    faqs: [
      { question: 'Can cats chew through the mosquito mesh?', answer: 'For homes with pets, we recommend our specialized high-tensile SS-304 steel wire mosquito mesh, which is completely cat-claw and chew-proof.' },
      { question: 'Is the mesh easily washable?', answer: 'Yes, our fiberglass and steel screens are dust-repellent and can be easily wiped down with a damp cloth or vacuumed.' }
    ],
    image: '/mosquito.jpeg'
  },
  // 9. Monkey Safety Nets
  {
    slug: 'monkey-net-for-balconies',
    title: 'Monkey Safety Nets for Balcony',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Heavy-gauge steel-reinforced nets to keep destructive monkeys away.',
    description: 'Monkeys can easily tear through standard bird nets and cause damage. Our specialized Monkey Nets are built with thick high-density polyethylene and integrated stainless steel cores, creating an impenetrable barrier against monkeys.',
    materialSpec: '3.0mm thick reinforced HDPE with internal steel wire braiding.',
    priceIndicator: 'Starting from ₹16 / sq.ft.',
    features: ['Chew-proof & Cut-proof Steel Core', 'Heavy-Duty SS Drill Fastening', 'Toughened Border Cable Alignment', 'Resists aggressive monkey attacks'],
    faqs: [
      { question: 'Can monkeys tear through this net?', answer: 'No, the steel-wire core prevents chewing or tearing. When installed with high-tension SS anchors, monkeys cannot pull it apart.' }
    ],
    image: 'https://imgs.search.brave.com/GAnmTBvo8PZkuNLEZejDDeO8E8-HPLpwn2qlDQlVkEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE1ZTVleHM5Skwu/anBn'
  },
  // 10. Coconut Tree Safety Nets
  {
    slug: 'coconut-tree-safety-nets',
    title: 'Coconut Tree Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Prevent dangerous coconut falls on people, vehicles, and pathways.',
    description: 'Protect your family, guests, and parked vehicles from falling coconuts. Our high-tensile, heavy-duty Coconut Tree Safety Nets are rigged securely around the top crown of coconut trees, intercepting falling coconuts and heavy fronds safely before they can cause severe injury or property damage.',
    materialSpec: 'High Density UV-stabilized Polyethylene, 2.5mm thick gauge monofilament, 50mm knotted square mesh.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['High Impact Energy Absorption', 'UV Copolymer (Direct Sun Shielded)', 'Sleek Non-Obtrusive Rigging', 'Durable and heavy load-tested border ropes'],
    faqs: [
      { question: 'Will this affect the tree\'s growth or yield?', answer: 'Not at all. The netting is anchored securely below the primary fronds and fruit-bearing clusters, allowing natural growth, watering, and coconut harvesting while catching loose falling fruit.' },
      { question: 'How much weight can these nets support?', answer: 'Our heavy-gauge knotted networks easily support cumulative impacts exceeding 80+ kg, safely holding several fallen coconuts at a time.' }
    ],
    image: 'https://imgs.search.brave.com/ubv9JB3IECxoZXQVR0g7fIllpffB9yrEQLRySPjoU7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcGlt/Zy50aXN0YXRpYy5j/b20vMTIzMDY2MjAv/Yi80L0NvY29udXQt/VHJlZS1TYWZldHkt/TmV0cy4ud2VicA'
  },
  // 11. Swimming Pool Safety Nets
  {
    slug: 'swimming-pool-safety-nets',
    title: 'Swimming Pool Safety Nets',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Keep children and pets safe from accidental pool drowning.',
    description: 'Accidental drowning is a major hazard for properties with swimming pools. Our high-tension Swimming Pool Safety Nets fit tightly over open pools, supporting weights up to 100+ kg to completely protect children and pets from entering the water unsupervised.',
    materialSpec: '4mm heavy-gauge blue polyethylene cord, UV and chlorine treated.',
    priceIndicator: 'Starting from ₹25 / sq.ft.',
    features: ['Supports 100+ kg impact weight', 'Chlorine and Salt Water Proof Cordage', 'Quick Tensioning Hook System (Easy on/off in 5 min)', 'Lightweight and compact storage'],
    faqs: [
      { question: 'Is it easy for me to remove and reinstall the net daily?', answer: 'Yes, the pool net features a quick-release tensioning wheel and lightweight plastic/brass deck hooks. You can remove or secure it in under 5 minutes.' }
    ],
    image: 'https://imgs.search.brave.com/JMBnJGoT5ae8SYKlLzFwuw43S_upYziA4ZLnvKMtHqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9vbC1jb3Zlci5j/by56YS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wMS9BcXVh/LW5ldC1zd2ltbWlu/Zy1wb29sLXNhZmV0/eS1uZXQtcG9vbC1z/YWZldHktY292ZXJz/LTItMzIweDIwMi5q/cGc'
  },
  // 12. Ceiling Cloth Hangers
  {
    slug: 'cloth-hanger',
    title: 'Premium Ceiling Cloth Hangers',
    category: 'bird-safety',
    categoryLabel: 'Bird & Child Safety Nets',
    tagline: 'Saves balcony floor space with high-durability pulley-operated drying systems.',
    description: 'Maximize your utility area and balcony footprint. Our premium Ceiling Cloth Hanger systems feature individually adjustable stainless steel or anodized aluminum rods operated by high-strength nylon pulleys and brass gears. Hang your laundry easily at ceiling levels, keeping your balcony neat and allowing maximum sunlight and fresh breeze.',
    materialSpec: 'Grade 304 Stainless Steel rods / Premium structural aluminum, high-strength nylon pulley ropes, brass geared handles.',
    priceIndicator: 'Starting from ₹1,800 per unit (including fitment)',
    features: ['Rust-proof Grade 304 SS Rods', 'Individually adjustable pullying lines', 'Holds up to 25+ kg wet clothes', 'Saves 100% balcony floor footprint'],
    faqs: [
      { question: 'What lengths do the drying rods come in?', answer: 'We customize and fit drying rods in standard sizes from 4 feet up to 8 feet, depending on your balcony ceiling dimensions.' },
      { question: 'Does it rust when exposed to open balconies?', answer: 'Our premium rods are made from Grade 304 Stainless Steel and aluminum, ensuring 100% rustproof performance under heavy moisture and humid winds.' }
    ],
    image: 'https://imgs.search.brave.com/057s6rp1GoxNIA-5Qtd8zzXKJWam_mcB6lu5BU8zxZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYW5n/ZXJzd2FsYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvY2xvdGhlcy1k/cnlpLWhhbmdlcnMu/anBn'
  },
  // 13. Vertical Invisible Grill Systems
  {
    slug: 'vertical-invisible-grills',
    title: 'Vertical Invisible Grill Systems',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill Systems',
    tagline: 'Sleek vertical cables providing complete high-rise balcony safety.',
    description: 'Secure your balconies and high-elevation utility yards with our premium Vertical Invisible Grills. Spun from marine-grade 316 stainless steel wires running vertically at 2 to 4-inch increments, these high-tensile rigging networks ensure complete protection for children, toddlers, and pets while giving you 100% skyline views.',
    materialSpec: '316 Marine Grade Stainless Steel Wire Core (2.5mm - 3.2mm diameter) wrapped in Dupont Teflon coating, anodized track anchors.',
    priceIndicator: 'Starting from ₹110 / sq.ft. (Including installation)',
    features: ['SS 316 Marine Grade High-Tensile Core', 'High aesthetic value with zero view blockage', 'Saves children and pets from balcony elevations', 'Anti-abrasive and salt-water proof Teflon wrap'],
    faqs: [
      { question: 'What is the recommended gap spacing for balcony invisible grills?', answer: 'We recommend a standard safety spacing of 2 inches (50mm) for homes with toddlers or small pets, and 3 to 4 inches (75-100mm) for general balcony protection.' }
    ],
    image: '/s1.jpeg'
  },
  // 13.5. Horizontal Invisible Grill Systems
  {
    slug: 'horizontal-invisible-grills',
    title: 'Horizontal Invisible Grill Systems',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill Systems',
    tagline: 'Modern horizontal steel wire layouts custom-fabricated for apartment windows.',
    description: 'Perfect for wide horizontal windows, bedrooms, and structural ventilation duct openings. Our Horizontal Invisible Grills replace ugly, heavy iron bars with marine-grade steel cables mounted horizontally on high-strength anodized aluminum track systems, maintaining clean window operations and unhindered natural sunlight.',
    materialSpec: '316 Marine Grade Stainless Steel Core wrapped in highly transparent DuPont Nylon/Teflon, expander anchors.',
    priceIndicator: 'Starting from ₹115 / sq.ft. (Including installation)',
    features: ['Grade 316 SS core resists up to 400+ kg loads', 'Perfect horizontal lines matching modern apartment window frames', 'Compatible with smart burglar alarms', 'Zero sanding or paint maintenance required'],
    faqs: [
      { question: 'Are horizontal invisible grills compatible with sliding window panes?', answer: 'Yes! They are installed on separate tracking borders on the inside or outside of your window frame, allowing sliding panels or casement windows to operate fully without any block.' }
    ],
    image: '/s2.jpeg'
  },
  // 14. Industrial & Construction Safety Nets
  {
    slug: 'industrial-safety-nets',
    title: 'Industrial & Construction Safety Nets',
    category: 'sports-industrial',
    categoryLabel: 'Sports & Industrial Rigging',
    tagline: 'Heavy-duty fall protection nets for factories, warehouses, and construction sites.',
    description: 'Maintain strict workplace safety protocols. Our heavy-duty Industrial & Construction Safety Nets prevent tool fallouts, protect workers at high elevations, and exclude birds from huge factory hangars and logistics warehouses. Highly shock-absorbent and certified for fall protection compliance.',
    materialSpec: 'Indian Standard IS-5175 compliant knotted polypropylene, 12mm border rope, 4mm mesh rope, breaking strength up to 350 kg.',
    priceIndicator: 'Starting from ₹18 / sq.ft.',
    features: ['IS-5175 Safety Standard Compliant', 'Impact Energy Absorption Core', 'Fire Retardant Grade Copolymer', 'Debris Containment Mesh Liners'],
    faqs: [
      { question: 'Are these certified for construction sites?', answer: 'Yes, all our industrial safety nets undergo rigorous batch testing and meet Indian Standard IS-5175 specifications.' },
      { question: 'Can these catch falling concrete debris?', answer: 'Yes, when coupled with our micro-mesh liner sheets, they intercept both small nails/mortar dust and heavy falling concrete chunks.' }
    ],
    image: 'https://imgs.search.brave.com/7ERp8LAOdT1oJl1TbeIvdKUajwiltwZsxMZgyJDbqyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcGlt/Zy50aXN0YXRpYy5j/b20vMDg4ODE0OTQv/Yi83L0NvbnN0cnVj/dGlvbi1TYWZldHkt/TmV0cy5qcGVn'
  },
  // 15. Cricket & Sports Nets
  {
    slug: 'cricket-practice-nets',
    title: 'Cricket & Sports Nets',
    category: 'sports-industrial',
    categoryLabel: 'Sports & Industrial Rigging',
    tagline: 'High-impact sports enclosures and practice nets for residential and commercial arenas.',
    description: 'Refine your batting and bowling techniques or contain ball sports safely. Our premium Cricket & Sports Nets are engineered to absorb heavy leather cricket ball and high-velocity soccer ball impacts, preventing safety issues and keeping sports practice highly efficient.',
    materialSpec: 'Heavy-gauge 2.5mm to 3.5mm HDPE, knotted, tight 1.75-inch mesh with GI/MS steel support systems.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['Heavy Leather Impact Resistant', 'Overhead Rooftop Containment Rigs', 'Sturdy MS/GI steel framework setups', 'UV Stabilized against extreme heat'],
    faqs: [
      { question: 'Do you set up the metal pole structures?', answer: 'Yes, we supply and install heavy-gauge galvanized iron (GI) support frames, custom-built to support heavy impacts and wind pressure.' }
    ],
    image: 'https://imgs.search.brave.com/HtPeGQPrrVIEfsbHhr8jrFfAxqB_bF99l7CA6PxH6Ak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcmlj/a2V0bmV0cy5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/MC9ib3gtY3JpY2tl/dC1uZXRzLmpwZw'
  },
  // 16. Premium Shade Nets
  {
    slug: 'shade-nets',
    title: 'Premium Shade Nets',
    category: 'sports-industrial',
    categoryLabel: 'Sports & Industrial Rigging',
    tagline: 'High-durability agro and patio shade netting to shield from scorching heat.',
    description: 'Control direct solar heat, UV glare, and wind. Our premium Shade Nets are perfect for high-end residential patios, open balconies, nurseries, and car parks. Spun from top-grade monofilament polymer with UV-blocking agents, they reduce temperature, block dust, and allow partial light transmittance, keeping spaces cool and comfortable.',
    materialSpec: 'High-density UV-stabilized virgin polymer monofilament, 50% to 90% shade factor options.',
    priceIndicator: 'Starting from ₹15 / sq.ft.',
    features: ['Up to 90% UV Heat Blocking', 'Tear-proof lockstitch knitting', 'Breathable design allows rain and wind to pass', 'Reinforced borders with grommets for easy hookup'],
    faqs: [
      { question: 'What shade factors do you offer?', answer: 'We offer customizable shade factor variants of 50%, 75%, and 90%, depending on whether you are shading delicate nursery plants, balconies, or cars.' },
      { question: 'Will the color fade or tear in strong summer winds?', answer: 'No, our nets are UV-stabilized and feature lockstitch knitting that prevents fraying and structural tears under direct hot summer sunlight.' }
    ],
    image: '/shade.png'
  }
];