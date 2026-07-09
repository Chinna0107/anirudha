export const bangaloreAreas = [
  'Aavalahalli', 'Abbigere', 'Adugodi', 'AECS Layout', 'Akshayanagar', 'Amrutha Halli',
  'Anagalapura', 'Anjanapura', 'Annapurneshwari Nagar', 'Whitefield', 'Electronic City',
  'Marathahalli', 'HSR Layout', 'Koramangala', 'Indiranagar', 'Jayanagar', 'JP Nagar',
  'Banashankari', 'BTM Layout', 'Hebbal', 'Yelahanka', 'Sarjapur Road', 'Bellandur',
  'Mahadevapura', 'KR Puram', 'Horamavu', 'Ramamurthy Nagar', 'Kalyan Nagar', 'Hennur',
  'Thanisandra', 'RT Nagar', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi', 'Vijayanagar',
  'Nagarbhavi', 'Kengeri', 'RR Nagar', 'Yeshwanthpur', 'Peenya', 'Magadi Road',
  'Mysore Road', 'Kanakapura Road', 'Bannerghatta Road', 'Devanahalli', 'Domlur', 'Ulsoor',
  'Cox Town', 'Frazer Town', 'Richmond Town', 'Sadashivanagar'
];

export const formatLocationSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
