import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
  id: 2,
  name: 'Factura electrónica - Oficina',
  date: '2023-11-15',
  total: 295.00,
  methodPayment: 'Efectivo',
  status: 'Pending',

  items: [
    {
      id: 3,
      product: 'C003',
      name: 'Silla ergonómica',
      quantity: 1,
      price: 180.00
    },
    {
      id: 4,
      product: 'D004',
      name: 'Alfombrilla para mouse',
      quantity: 1,
      price: 35.00
    },
    {
      id: 5,
      product: 'E005',
      name: 'Lámpara de escritorio',
      quantity: 1,
      price: 80.00
    }
  ],

  client: {
    name: 'Laura',
    lastname: 'Martínez',
    correo: 'laura.martinez@example.com',
    phone: 3105678901,
    address: {
      street: 'Calle 123',
      city: 'Medellín',
      country: 'Colombia',
      number: '456'
    }
  },

  company: {
    fiscalNumber: 901234567,
    name: 'OfiSupply Ltda.',
    phone: 3157891234,
    email: 'contacto@ofisupply.com'
  }
};

// export const invoice3 = {
//   id: 3,
//   name: 'Factura venta tecnología',
//   date: '2023-12-05',
//   total: 1125.00,
//   methodPayment: 'Transferencia',
//   status: 'Paid',

//   items: [
//     {
//       id: 6,
//       product: 'F006',
//       name: 'Tablet Samsung',
//       quantity: 1,
//       price: 950.00
//     },
//     {
//       id: 7,
//       product: 'G007',
//       name: 'Protector de pantalla',
//       quantity: 1,
//       price: 75.00
//     },
//     {
//       id: 8,
//       product: 'H008',
//       name: 'Funda de cuero',
//       quantity: 1,
//       price: 100.00
//     }
//   ],

//   client: {
//     name: 'Carlos',
//     lastname: 'Rojas',
//     correo: 'carlos.rojas@example.com',
//     phone: 3127894561,
//     address: {
//       street: 'Avenida 45',
//       city: 'Bogotá',
//       country: 'Colombia',
//       number: '789'
//     }
//   },

//   company: {
//     fiscalNumber: 902345678,
//     name: 'TecnoStore S.A.',
//     phone: 3119876543,
//     email: 'ventas@tecnostore.co'
//   }
// };

// export const invoice4 = {
//   id: 4,
//   name: 'Factura mensual - Servicios',
//   date: '2024-01-10',
//   total: 620.00,
//   methodPayment: 'Crédito',
//   status: 'Overdue',

//   items: [
//     {
//       id: 9,
//       product: 'I009',
//       name: 'Mantenimiento servidor',
//       quantity: 1,
//       price: 500.00
//     },
//     {
//       id: 10,
//       product: 'J010',
//       name: 'Soporte técnico remoto',
//       quantity: 2,
//       price: 60.00
//     }
//   ],

//   client: {
//     name: 'Ana',
//     lastname: 'González',
//     correo: 'ana.gonzalez@example.com',
//     phone: 3181237890,
//     address: {
//       street: 'Carrera 50',
//       city: 'Cali',
//       country: 'Colombia',
//       number: '123'
//     }
//   },

//   company: {
//     fiscalNumber: 903456789,
//     name: 'Servicios IT S.A.S',
//     phone: 3004567890,
//     email: 'soporte@serviciosit.com'
//   }
// };