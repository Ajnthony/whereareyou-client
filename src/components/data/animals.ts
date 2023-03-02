export const animals = [
  {
    id: 1,
    owner: 1,
    name: 'Shoshanna',
    size: 'S',
    last_seen: {datetime: '2022-10-18T07:04:40Z', location: 'OH'},
    gender: 'Female',
    description:
      "This fierce, but common creature is a type of aquatic mammal. It's about the size of a piranha, has two side fins, a long, pointy dorsal fin and a large, muscular tail. They have a thick, strong skin which is usually either dark grey, light grey or brown or a combination of these colors.",
    species: 'dog',
    is_found: false,
    image:
      'https://plus.unsplash.com/premium_photo-1663127315206-73a5939e60d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZyUyMHBob3Rvc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'beagle'}
    ]
  },
  {
    id: 2,
    owner: 2,
    name: 'Hogan',
    size: 'S',
    last_seen: {datetime: '2020-12-14T14:21:02Z', location: 'NY'},
    gender: 'Male',
    description:
      "This clever and seldom seen creature is a type of reptile. It's about the size of a t-rex, has six legs and a short, thick tail. They have a thin, delicate skin covered in small, smooth scales, which is usually either dark bronze, grey, dark silver or dark gold or a combination of these colors.",
    species: 'cat',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1530466452118-d4462fb6f25d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGluc2NoZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'minipin'}
    ]
  },
  {
    id: 3,
    owner: 3,
    name: 'Susann',
    size: 'M',
    last_seen: {datetime: '2020-05-27T03:55:52Z', location: 'NY'},
    gender: 'Female',
    description:
      "They're crepuscular and rely on their sense of smell and sight to get around. They do have tiny, almost hidden ears, but their hearing is relatively poor. They have lack of a visible nose and small, beady eyes. Their heads are large and long in comparison to their bodies.",
    species: 'dog',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1580356985979-161ee2aec2b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZyZW5jaCUyMGJ1bGxkb2d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'junior'},
      {type: 'breed', label: 'french bulldog'}
    ]
  },
  {
    id: 4,
    owner: 4,
    name: 'Merrick',
    size: 'XL',
    last_seen: {datetime: '2021-07-25T15:51:38Z', location: 'NM'},
    gender: 'Male',
    description:
      'They make sounds ranging from extremely high pitched to high pitched and have a wide range of sounds they make to indicate discoveries, dangers and otherwise communicate with each other.',
    species: 'dog',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1606501147522-c1830b14af02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNoaWh1YWh1YXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'senior'},
      {type: 'breed', label: 'chihuahua'}
    ]
  },
  {
    id: 5,
    owner: 5,
    name: 'Marlin',
    size: '3XL',
    last_seen: {datetime: '2020-07-12T17:21:36Z', location: 'CA'},
    gender: 'Male',
    description:
      "These creatures are very peaceful and they travel a lot and thus have no real territory nor urges to defend it. They mate three times a year and they mate with a select few partners for life. Which, with their long lifepans, isn't too surprising.",
    species: 'cat',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1611559429196-193257d1962e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWJ5c3NpbmlhbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'abyssinian'}
    ]
  },
  {
    id: 6,
    owner: 6,
    name: 'Eddy',
    size: 'XS',
    last_seen: {datetime: '2023-01-17T23:41:29Z', location: 'NJ'},
    gender: 'Male',
    description:
      "They live in temperate areas and are fairly rare. They're herbivores and their long, narrow mouths, their teeth and wide tongue are ideal for eating plants.",
    species: 'cat',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1643987295591-0065deb6a39b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFieXNzaW5pYW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'senior'},
      {type: 'breed', label: 'abyssinian'}
    ]
  },
  {
    id: 7,
    owner: 7,
    name: 'Neila',
    size: 'S',
    last_seen: {datetime: '2020-09-10T23:21:49Z', location: 'NY'},
    gender: 'Female',
    description:
      "They're nocturnal and rely on their sight and taste buds to get around. They do have tiny noses, but their sense of smell is not too great. They have small, round eyes and short, pointy ears. Their heads are small and narrow in comparison to their bodies.",
    species: 'dog',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1494205577727-d32e58564756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpaHVhaHVhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'old'},
      {type: 'breed', label: 'chihuahua'}
    ]
  },
  {
    id: 8,
    owner: 7,
    name: 'Cordey',
    size: '3XL',
    last_seen: {datetime: '2020-09-27T02:50:51Z', location: 'CA'},
    gender: 'Female',
    description:
      'They make sounds ranging from fairly low pitched to extremely low pitched and have a extremely large range of sounds they make to indicate discoveries, dangers and otherwise communicate with each other.',
    species: 'cat',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3J0aGFpciUyMGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'shorthair'}
    ]
  },
  {
    id: 9,
    owner: 8,
    name: 'Brewer',
    size: 'L',
    last_seen: {datetime: '2021-03-01T13:43:30Z', location: 'DC'},
    gender: 'Male',
    description:
      "These creatures are very calm, but they'll defend their territory strongly. They mate once a year and they mate with a select few partners for life. Which, with their very long lifespans, isn't too surprising.",
    species: 'cat',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob3J0aGFpciUyMGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'tabby'}
    ]
  },
  {
    id: 10,
    owner: 9,
    name: 'Kariotta',
    size: 'XS',
    last_seen: {datetime: '2022-04-08T23:53:15Z', location: 'WA'},
    gender: 'Female',
    description:
      "This delightful, but common creature is a type of reptile. It's about the size of a boa, has six legs and a long, powerful tail.",
    species: 'others',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1597162216923-ba6d99390c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHR1cnRsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'old'},
      {type: 'breed', label: 'turtle'}
    ]
  },
  {
    id: 11,
    owner: 10,
    name: 'Jory',
    size: 'M',
    last_seen: {datetime: '2022-8-18T07:04:40Z', location: 'TX'},
    gender: 'Male',
    description:
      'They have a soft, but strong skin covered in thin, coarse scales, which is usually either light gold or red or a combination of these colors.',
    species: 'cat',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1547565295-182fb8657b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BoeW54JTIwY2F0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'old'},
      {type: 'breed', label: 'sphynx'}
    ]
  },
  {
    id: 12,
    owner: 9,
    name: 'Mawunyo',
    size: 'S',
    last_seen: {datetime: '2020-2-14T14:21:02Z', location: 'NY'},
    gender: 'Male',
    description:
      "They live in moist areas and are fairly common. They're herbivores and their fairly small mouths, their teeth and rough tongue are ideal for eating berries.",
    species: 'dog',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1649532544237-7cfd822686db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbnNjaGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'junior'},
      {type: 'breed', label: 'minipin'}
    ]
  },
  {
    id: 13,
    owner: 9,
    name: 'Adelbert',
    size: 'M',
    last_seen: {datetime: '2020-05-02T03:55:52Z', location: 'PA'},
    gender: 'Female',
    description: 'Operative even-keeled internet solution v2',
    species: 'others',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1662054431883-ec28eb2ba808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JleSUyMHBhcnJvdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'junior'},
      {type: 'breed', label: 'parrot'}
    ]
  },
  {
    id: 14,
    owner: 8,
    name: 'Raschelle',
    size: 'XL',
    last_seen: {datetime: '2020-05-25T15:51:38Z', location: 'NM'},
    gender: 'Male',
    description:
      "They're nocturnal and rely on their hearing and extra sense to get around. They do have small, elliptic eyes, but their sight is not very reliable.    ",
    species: 'cat',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1591696038577-944232f59007?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFpbmUlMjBjb29ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'junior'},
      {type: 'breed', label: 'maine coon'}
    ]
  },
  {
    id: 15,
    owner: 6,
    name: 'Roshan',
    size: '3XL',
    last_seen: {datetime: '2019-07-12T17:21:36Z', location: 'NJ'},
    gender: 'Male',
    description:
      'They have almost hidden noses and pretty much no visible ears. Their heads are small and long in comparison to their bodies.    ',
    species: 'cat',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1610641570852-b78be08c6f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1haW5lJTIwY29vbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'maine coon'}
    ]
  },
  {
    id: 16,
    owner: 4,
    name: 'Otto',
    size: 'XS',
    last_seen: {datetime: '2022-11-17T23:41:29Z', location: 'NJ'},
    gender: 'Male',
    description:
      'They make sounds ranging from fairly low pitched to fairly high pitched and have a fairly limited range of sounds they make to indicate discoveries, dangers and otherwise communicate with each other.    ',
    species: 'cat',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1549295264-617dec805276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmJ5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'senior'},
      {type: 'breed', label: 'tabby'}
    ]
  },
  {
    id: 17,
    owner: 4,
    name: 'Erkki',
    size: 'S',
    last_seen: {datetime: '2020-03-16T23:21:49Z', location: 'OR'},
    gender: 'Female',
    description:
      'These creatures are fairly violent and they get very territorial. They mate once every two years and they mate with multiple partners throughout life. Which, with their fairly short lifespans, is quite common among other species as well.    ',
    species: 'cat',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'tabby'}
    ]
  },
  {
    id: 18,
    owner: 3,
    name: 'Cael',
    size: '3XL',
    last_seen: {datetime: '2020-01-27T02:50:51Z', location: 'CA'},
    gender: 'Female',
    description:
      "This odd, but fairly common creature is a type of aquatic mammal. It's about the size of a salmon, has four huge side fins, a long, pointy dorsal fin and a huge, muscular tail.    ",
    species: 'cat',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1577401089489-93b743840737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhYmJ5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'tabby'}
    ]
  },
  {
    id: 19,
    owner: 2,
    name: 'Karlheinz',
    size: 'L',
    last_seen: {datetime: '2022-03-09T13:43:30Z', location: 'DC'},
    gender: 'Male',
    description:
      "They're nocturnal and rely on their hearing and sense of smell to get around. They do have thin, narrow eyes, but their sight is underdeveloped.    ",
    species: 'others',
    is_found: true,
    image:
      'https://images.unsplash.com/photo-1641596488354-94dddf79f4c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuYWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'baby'},
      {type: 'breed', label: 'snake'}
    ]
  },
  {
    id: 20,
    owner: 1,
    name: 'Nadezhda',
    size: 'XS',
    last_seen: {datetime: '2022-04-25T23:53:15Z', location: 'NY'},
    gender: 'Female',
    description:
      'They make sounds ranging from fairly low pitched to fairly high pitched and have a fairly small range of sounds they make to indicate discoveries, dangers and otherwise communicate with each other.    ',
    species: 'others',
    is_found: false,
    image:
      'https://images.unsplash.com/photo-1607863002591-e1718c499b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    tags: [
      {type: 'age', label: 'old'},
      {type: 'breed', label: 'lizard'}
    ]
  }
];
