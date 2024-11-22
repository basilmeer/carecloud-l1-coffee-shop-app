# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_11_21_193201) do
  create_table "deal_items", force: :cascade do |t|
    t.integer "deal_id", null: false
    t.integer "item_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deal_id"], name: "index_deal_items_on_deal_id"
    t.index ["item_id"], name: "index_deal_items_on_item_id"
  end

  create_table "deals", force: :cascade do |t|
    t.string "name"
    t.float "discount_rate", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "item_taxes", force: :cascade do |t|
    t.integer "item_id", null: false
    t.integer "tax_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_item_taxes_on_item_id"
    t.index ["tax_id"], name: "index_item_taxes_on_tax_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name", null: false
    t.float "price_in_cents", default: 0.0, null: false
    t.float "discount_rate", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "quantity", default: 0, null: false
  end

  create_table "order_items", force: :cascade do |t|
    t.integer "order_id", null: false
    t.string "orderable_type", null: false
    t.integer "orderable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "quantity", default: 0, null: false
    t.index ["order_id"], name: "index_order_items_on_order_id"
    t.index ["orderable_type", "orderable_id"], name: "index_order_items_on_orderable"
  end

  create_table "orders", force: :cascade do |t|
    t.string "customer_name"
    t.string "uuid", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "taxes", force: :cascade do |t|
    t.string "name"
    t.float "rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "deal_items", "deals"
  add_foreign_key "deal_items", "items"
  add_foreign_key "item_taxes", "items"
  add_foreign_key "item_taxes", "taxes"
  add_foreign_key "order_items", "orders"
end
