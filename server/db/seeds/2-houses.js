exports.seed = function (knex) {
  // Inserts seed entries
  return knex('houses').insert([
    { id: 1, region_id: 1, name: 'Kōwhai', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 22/06/21' },
    { id: 2, region_id: 1, name: 'Kauri', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 3, region_id: 1, name: 'Āporo', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 4, region_id: 1, name: 'Keke', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 5, region_id: 2, name: 'Tōhi', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 6, region_id: 2, name: 'Pohutukawa', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 7, region_id: 2, name: 'Totara', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 8, region_id: 2, name: 'Harakeke', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 9, region_id: 2, name: 'Rimu', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 10, region_id: 2, name: 'Kawakawa', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 11, region_id: 2, name: 'Manuka', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 12, region_id: 3, name: 'Kahikatea', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 13, region_id: 3, name: 'Tītoki', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 14, region_id: 3, name: 'Puriri', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 15, region_id: 3, name: 'Pepe', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 16, region_id: 4, name: 'Nikau', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 17, region_id: 4, name: 'Miro', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 18, region_id: 4, name: 'Karaka', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 19, region_id: 5, name: 'Mā', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 20, region_id: 5, name: 'Whero', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 21, region_id: 6, name: 'Kākāriki', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 22, region_id: 6, name: 'Pango', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 23, region_id: 6, name: 'Kikorangi', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 24, region_id: 6, name: 'Poroporo', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 25, region_id: 7, name: 'Ngeru', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 26, region_id: 7, name: 'Kurī', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 27, region_id: 8, name: 'Kaihe', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 28, region_id: 9, name: 'Kau', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 29, region_id: 9, name: 'Arewhana', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 30, region_id: 10, name: 'Pēkana', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 31, region_id: 10, name: 'Paukana', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 32, region_id: 10, name: 'Pata', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 33, region_id: 11, name: 'Rīwai', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 34, region_id: 11, name: 'Tōtiti', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 35, region_id: 11, name: 'Tīhi', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 36, region_id: 11, name: 'Hēki', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 37, region_id: 12, name: 'Pihikete', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 38, region_id: 12, name: 'Tiakarete', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 39, region_id: 12, name: 'Waina', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 40, region_id: 12, name: 'Heihei', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 41, region_id: 12, name: 'Harore', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 42, region_id: 12, name: 'Parāoa', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 43, region_id: 13, name: 'Rōpere', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 44, region_id: 13, name: 'Huka', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 45, region_id: 13, name: 'Tote', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 46, region_id: 13, name: 'Panana', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 47, region_id: 14, name: 'Tiamu', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 48, region_id: 14, name: 'Wai Ārani', phone_1: '1234567890', phone_2: '1234567890', notes: 'Room 1 will be vacant on 12/07/21' },
    { id: 49, region_id: 14, name: 'Miraka', phone_1: '1234567890', phone_2: '1234567890', notes: '' },
    { id: 50, region_id: 15, name: 'Miraka Tepe', phone_1: '1234567890', phone_2: '1234567890', notes: '' }

  ])
}
