const PAYMENT_LIST = [
  {name: 'BITCOIN', code: 'bt'},
  {name: 'CASHSEND', code: 'ch'},
  {name: 'EFT', code: 'eft'}
]
const WEIGHT_LIST = [
  {name: 'less than 2.5', code: 'kg'},
  {name: 'less than 5.0', code: 'kg'},
  {name: 'less than 10.0', code: 'kg'}
]
const ITEMS_LIST = [
  {name: 'Clothing & accessories', code: 'cl'},
  {name: 'Mobile & cellphone & electronics', code: 'gb'},
  {name: 'Food & Fruits', code: 'fd'}
]

const DATA_STEP_1 = {
  pickUpAddress: {type: 'text', validations: {}, errors: {}, placeholder: 'Enter pick up location'},
  pickUpDate: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Pick up time & date'
  },
  dropOfAddress: {type: 'text', validations: {}, errors: {}, placeholder: 'Enter drop of location'},
  DropOffDate: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Drop of time & date'
  }
}
const DATA_STEP_2 = {
  itemCategory: {
    type: 'select',
    options: ITEMS_LIST,
    validations: {},
    errors: {},
    placeholder: 'Item Category'
  },
  totalWeight: {
    type: 'select',
    options: WEIGHT_LIST,
    validations: {},
    errors: {},
    placeholder: 'Total weight'
  }
}
const DATA_STEP_3 = {
  specialInstruction: {type: 'text', validations: {}, errors: {}, placeholder: 'Special instruction'},
  paymentType: {
    type: 'select',
    options: PAYMENT_LIST,
    validations: {},
    errors: {},
    placeholder: 'Please select'
  }
};

const STEP_ITEMS = [
  {label: 'SHIPPING', data: DATA_STEP_1},
  {label: 'WILL COST FROM', data: DATA_STEP_2},
  {label: 'PAYMENT', data: DATA_STEP_3},
  {label: 'REVIEW', data: {}}
];

export {STEP_ITEMS}
