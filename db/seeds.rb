# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if InventoryItem.all.present?
    
    InventoryItem.all.each do |i|
        i.destroy
    end
    
else
    
    500.times.each do
        InventoryItem.create(
            item_name: Faker::Lorem.sentence(word_count: 5),
            item_brand: Faker::Lorem.word,
            item_description: Faker::Lorem.paragraph(sentence_count: 15),
            item_condition: ["Excellent", "Good", "Fair"][rand(0..2)],
            item_value: ["100", "149.99", "199.99", "239.99", "399.99"][rand(0..5)],
            in_stock: true,
            item_owner_id: [6, 5, 3][rand(0..2)]
            )
    end
    
end