class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.references :magic, null: false, foreign_key: true
      t.string :ccNum
      t.string :exp

      t.timestamps
    end
  end
end
