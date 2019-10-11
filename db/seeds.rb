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
    brands = ["Nike", "Addidas", "Jordan", "Yeezy", "Gucci", "Balenciaga"]
    sources = [
        "https://image.goat.com/crop/1500/attachments/product_template_additional_pictures/images/026/409/545/original/503581_01.jpg.jpeg?1569438515",
        "https://image.goat.com/crop/1500/attachments/product_template_pictures/images/025/850/349/original/510815_601.png.png",
        "https://image.goat.com/crop/1500/attachments/product_template_pictures/images/010/883/179/original/506363_W05G0_1000.png.png",
        "https://image.goat.com/crop/1500/attachments/product_template_additional_pictures/images/016/779/417/original/468484_01.jpg.jpeg?1544212894"
        ]
        
    names = [
        "Addidas Yeezy Boost 350",
        "Jordan 1 Retro High First Class",
        "Nike VaporMax Gliese White",
        "Li-Ning Way of Wade",
        "Air Max 97 Cocoa Snake"
        ]
    
    500.times.each do
        item = InventoryItem.create(
            item_name: names[rand(0..4)],
            item_brand: brands[rand(0..5)],
            item_description: Faker::Lorem.paragraph(sentence_count: 18),
            item_condition: rand(0..2),
            market_value: ["100", "149.99", "199.99", "239.99", "399.99"][rand(0..5)],
            in_stock: [true, false][0..1],
            item_owner_id: [6, 5, 3][rand(0..2)]
            )
        
        rand_img1 = sources[rand(0..3)]
        rand_img2 = sources[rand(0..3)]
        image = Image.find_by(inventory_item_id: item.id)
        image.update!(first_source: rand_img1, sources: [rand_img1, rand_img2])
    end
    
end