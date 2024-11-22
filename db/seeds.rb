DEAL_NAMES = ['Summer Special', 'Combo 05', 'BIG Meal', 'Winter Crave', 'Autumn Deal']

p "Creating some generic taxes"
taxes = Tax.create([
  {
    name: 'State Sales Tax',
    rate: Faker::Number.rand_in_range(1.0, 10.0)
  },
  {
    name: 'County Sales Tax',
    rate: Faker::Number.rand_in_range(1.0, 10.0)
  },
  {
    name: 'Prepared Food Tax',
    rate: Faker::Number.rand_in_range(1.0, 10.0)
  }
])

p "Creating some dummy deals"
5.times do |index|
  Deal.create(
    name: DEAL_NAMES[index],
    discount_rate: Faker::Number.rand_in_range(1.0, 30.0)
  )
end

p "Creating some dummy coffees (and assigning taxes and adding to deals)"
20.times do
  item = Item.create(
    name: Faker::Coffee.blend_name,
    price_in_cents: Faker::Number.rand_in_range(100, 3000), # From 1 dollar to 30 dollars
    quantity: Faker::Number.rand_in_range(0, 15),
    discount_rate: Faker::Number.rand_in_range(1.0, 30.0)
  )

  ## Add taxes to the items
  item.item_taxes.insert_all taxes.map { |t| { tax_id: t.id } }

  ## Randomly decide whether to add this item to a random deal or not
  if [true, false].sample
    item.deal_items.create(deal_id: Deal.order('RANDOM()').take.id)
  end
end

