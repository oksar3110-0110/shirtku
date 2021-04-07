const topLevelTabs = [
  {
    id: 'apparel',
    name: 'Change Apparel',
  },
  {
    id: 'element',
    name: 'Add Elements',
  },
  {
    id: 'detail',
    name: 'Product and Order Details',
  },
];

const lowLevelTabs = {
  apparel: [
    {
      name: 'Sweaters and Sleeves',
      id: 'sweater',
    }, {
      id: 'shirt',
      name: 'Tees and Tanks',
    }, {
      name: 'Pants and Shorts',
      id: 'bottom',
    }, {
      name: 'Accessories and Hats',
      id: 'accessory',
    },
  ],
  element: [
    {
      name: 'All',
      id: 'all',
    }, {
      name: 'Emoji',
      id: 'emoji',
    }, {
      name: 'Artwork',
      id: 'art',
    },
  ],
};

const apparelTypes = {
  sweater: [
    {
      image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.png',
      name: 'Gilden sweater techno defender sample',
      defaultVariant: 'grey',
      price: 23.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
      variants: [
        {
          name: 'navy',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/techno_defender/navy1.jpg',
        },
        {
          name: 'grey',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/techno_defender/grey1.jpg',
        }
      ],
    }, {
      image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.png',
      name: 'Gilden quarter zip fleece sweater',
      defaultVariant: 'black',
      price: 30.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      variants: [
        {
          name: 'red',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/quarter_zip/18800-red_A1_large.jpg',
        }, {
          name: 'black',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/quarter_zip/navy2.jpg',
        },
      ],
    }, {
      image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_white.jpg',
      name: 'Gilden t-shirt 2001',
      defaultVariant: 'white',
      price: 13.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      variants: [
        {
          name: 'white',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_white.jpg',
        }, {
          name: 'red',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_red.jpg',
        }, {
          name: '#BCE7EE',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_aqua.jpg',
        }, {
          name: '#5E2432',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_truffle.jpg',
        },
      ],
    },
  ],
  shirt: [
    {
      image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_white.jpg',
      name: 'Gilden t-shirt 2001',
      defaultVariant: 'white',
      price: 13.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      variants: [
        {
          name: 'white',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_white.jpg',
        }, {
          name: 'red',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_red.jpg',
        }, {
          name: '#BCE7EE',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_aqua.jpg',
        }, {
          name: '#5E2432',
          image: 'https://cetakaos.s3-ap-southeast-1.amazonaws.com/mockups/putih/depan.pnggilden/2001/2001_truffle.jpg',
        },
      ],
    },
  ],
};

export {
  topLevelTabs,
  lowLevelTabs,
  apparelTypes,
};
