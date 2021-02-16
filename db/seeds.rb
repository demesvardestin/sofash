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
end
    
brands = ["Versace", "Addidas", "Jordan", "Tory Burch", "Gucci", "YSL"]
sources = [
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/20268/medium_IMG_1725.png",
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/17639/medium_IMG_4548.png",
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/19845/medium_IMG_0613.png",
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/20187/medium_IMG_1227__1_.png",
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/20395/medium_IMG_2098_2.png",
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/20384/medium_IMG_2104_2.png",
    "https://wearwardrobe.s3.amazonaws.com/uploads/photo/image/20403/medium_IMG_2128_2.png",
    "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/049/816/420/original/641291_01.jpg.jpeg?1612407700",
    "https://image.goat.com/crop/750/attachments/product_template_pictures/images/048/887/419/original/DD1398_300.png.png",
    "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/032/752/522/original/584289_01.jpg.jpeg?1581616857",
    "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/032/490/110/original/584288_01.jpg.jpeg?1581110700",
    "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/040/415/096/original/515635_01.jpg.jpeg?1596560548",
    "https://image.goat.com/crop/750/attachments/product_template_pictures/images/029/778/638/original/CD3460_405.png.png",
    "https://image.goat.com/crop/750/attachments/product_template_pictures/images/043/862/199/original/BQ7043_004.png.png",
    "https://image.goat.com/crop/750/attachments/product_template_pictures/images/000/014/765/original/RBJ02565.png.png",
    "https://image.goat.com/crop/750/attachments/product_template_pictures/images/006/715/418/original/V55131.png",
    "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/021/997/023/original/31342_01.jpg.jpeg?1559242858"
    ]
    
names = [
    "Addidas Yeezy Boost 350",
    "Jordan 1 Retro High First Class",
    "Nike VaporMax Gliese White",
    "Li-Ning Way of Wade",
    "Air Max 97 Cocoa Snake",
    "Golf Le Fleur x Chuck 70 'Flame'",
    "SpongeBob SquarePants x Kyrie 5 'Pineapple House'",
    "OFF-WHITE x Air Force 1 Low '07 'MCA'",
    "Yeezy Boost 350 V2 'Clay'",
    "Air Force 1 Low '07 'What The NYC'",
    "Uninterrupted x Air Force 1 Low QS 'More Than'",
    "Blackburn SPZL 'Collegiate Green'",
    "Cortez 'Day of the Dead'",
    "Wmns Air Jordan 1 Retro High OG 'Fearless'",
    "Tetris x RS 9.8 '35th Anniversary'",
    "Novaturbo 'Branch'",
    "Response Hoverturf Zip 'Maroon'"
    ]

500.times.each do
    item = InventoryItem.create(
        item_name: names[rand(0..16)],
        item_brand: brands[rand(0..5)],
        item_description: Faker::Lorem.paragraph(sentence_count: 18),
        item_condition: rand(0..2),
        market_value: ["100", "149.99", "199.99", "239.99", "399.99"][rand(0..5)],
        in_stock: [true, false][0..1],
        item_owner_id: rand(4..15),
        size: ["S", "M", "L", "XL"][rand(0..3)]
        )
    
    rand_img1 = sources[rand(0..16)]
    rand_img2 = sources[rand(0..16)]
    rand_img3 = sources[rand(0..16)]
    rand_img4 = sources[rand(0..16)]
    image = Image.create(inventory_item_id: item.id)
    image.update!(first_source: rand_img1, {sources: [rand_img1, rand_img2, rand_img3, rand_img4]})
end