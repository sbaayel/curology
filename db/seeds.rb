# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Magic.delete_all
Address.delete_all
Payment.delete_all


Magic.create(firstName: 'Seb', lastName: 'Bee', email: 'baaa@me.com', phone: '119191999191', 
quantity: '10', total: '50')



Address.create(street1: '255 w 131st', street2: 'Apt.C', city: 'New York City', state: 'NY', zip: '110011', magic_id: 1)

Payment.create(ccNum: 111994948855, exp: 'date', magic_id: 1)