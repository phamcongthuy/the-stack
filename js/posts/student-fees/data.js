const bruinBillFees = [
  {
    name: 'Ackerman/Kerckhoff Seismic Fee',
    category: 'construction',
    dateFirstAssessed: 'Fall 1996',
    originalPrice: 113.0,
    currentPrice: 113.0,
    reassessable: false,
  },
  {
    name: 'Ackerman Student Union Fee',
    category: '',
    // originalPrice: ,
    currentPrice: 63.0,
    reassessable: true,
  },
  {
    name: 'Arts Restoring Community Fee',
    category: 'student government',
    dateFirstAssessed: 'Fall 2014',
    originalPrice: 1.55,
    currentPrice: 4.85,
    reassessable: true,
    breakdown: [
      { percentage: 0.25, destination: 'Financial Aid' },
      { percentage: 0.75, destination: 'USAC' },
    ],
  },
  {
    name: 'Bruin Bash Fee',
    category: 'student government',
    date: 'Fall 2013',
    price: '',
    reassessable: true,
  },
  {
    name: 'Green Initiative Fee',
    category: 'student government',
    date: 'Fall 2013',
    price: '',
    reassessable: true,
  },
  {
    name: 'PLEDGE Fee',
    category: 'student government',
    date: 'Fall 2009',
    price: '',
    reassessable: true,
  },
  {
    name: 'SPARC Fee',
    category: 'construction',
    date: 'Fall 2009',
    price: '',
    reassessable: true,
  },
  {
    name: 'Undergraduate Student Association Fee',
    category: 'student government',
    date: '',
    price: '',
  },
  {
    name: 'Wooden Center Fee',
    category: 'student government',
    date: '',
    price: '',
  },
];
